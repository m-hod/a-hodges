import { AlignRight, ChevronDown, ChevronUp } from "react-feather";
import React, { useEffect, useMemo, useState } from "react";
import { Series, World } from "../utils/types";

import Link from "next/link";
import { headerHeight } from "../utils/constants";
import { slugify } from "../utils";
import useObserver from "../hooks/useObserver";
import { useRouter } from "next/router";
import useWindowSize from "../hooks/useWindowSize";

export type HeaderProps = {
  series: Series[];
  worlds: World[];
};

function Header({ series, worlds }: HeaderProps) {
  const id = "header";
  const { isContentVisible } = useObserver(id);
  const windowSize = useWindowSize();
  const router = useRouter();
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const mode = useMemo(() => {
    if (
      router.pathname.includes("series") ||
      router.pathname.includes("newsletter") ||
      router.pathname === "/"
    )
      return "absolute";
    return "";
  }, [router]);
  const theme = useMemo(() => {
    if (dropdownVisibility) return "default";
    if (mode === "absolute") return "white";
    return "default";
  }, [mode, dropdownVisibility]);

  /** Close dropdown on window size change */
  useEffect(() => {
    if (dropdownVisibility) {
      setDropdownVisibility(false);
    }
  }, [windowSize, router]);

  const seriesLinks = useMemo(
    () =>
      series.map((_series) => ({
        url: `/series/${slugify(_series.title)}`,
        label: _series.title,
        links: _series.books.map((_book) => ({
          url: `/series/${slugify(_series.title)}?book=${slugify(_book.title)}`,
          label: _book.title,
        })),
      })),
    [series]
  );

  const worldsLinks = useMemo(
    () =>
      worlds.map((_world) => ({
        url: `/worlds/${slugify(_world.title)}`,
        label: _world.title,
      })),
    [worlds]
  );

  return (
    <>
      <nav
        id={id}
        className={`h-header w-full flex items-center justify-between md:justify-center ${
          mode || "relative"
        } z-50 ${theme === "white" ? "bg-transparent" : "bg-white"}`}
        style={{
          zIndex: 999,
        }}
      >
        <div className="relative flex items-center">
          <div
            className="absolute hidden right-full md:flex"
            style={{
              top: "calc(50% - 12px)",
            }}
          >
            <NavLink label="About" url="/about" theme={theme} />
          </div>
          <Link href="/">
            <img
              src="/logo.svg"
              alt="Aaron Hodges"
              className="object-contain transition-all header-logo duration-250"
            />
          </Link>
          <div
            className="absolute hidden left-full md:flex"
            style={{
              top: "calc(50% - 12px)",
            }}
          >
            <NavDropdown label="Books" theme={theme} links={seriesLinks} />
            <NavDropdown label="Worlds" theme={theme} links={worldsLinks} />
          </div>
        </div>
        <div className="flex items-center justify-center mr-8 md:hidden">
          <button
            onClick={() => {
              setDropdownVisibility(!dropdownVisibility);
            }}
          >
            <AlignRight
              size={42}
              color={theme === "white" ? "#FFF" : undefined}
            />
          </button>
        </div>
      </nav>
      <nav
        className={`fixed top-0 w-full p-2 bg-white ${
          !dropdownVisibility && "shadow-md"
        }`}
        style={{
          height: 50,
          transform: isContentVisible ? "translateY(-100%)" : "translateY(0%)",
          transition: "transform 0.3s linear",
          zIndex: 999,
        }}
      >
        <div className="flex justify-between h-full md:justify-center align-center">
          <div className="relative flex items-center">
            <div
              className="absolute hidden right-full md:flex"
              style={{
                top: "calc(50% - 12px)",
              }}
            >
              <NavLink label="About" url="/about" />
            </div>
            <div className="mx-4 font-medium tracking-wider underline cursor-pointer hover:text-gray-500">
              <Link href="/">AARON HODGES</Link>
            </div>
            <div
              className="absolute hidden left-full md:flex"
              style={{
                top: "calc(50% - 12px)",
              }}
            >
              <NavDropdown label="Books" links={seriesLinks} />
              <NavDropdown label="Worlds" links={worldsLinks} />
            </div>
          </div>
          <div className="flex items-center justify-center mr-4 md:hidden">
            <button
              onClick={() => {
                setDropdownVisibility(!dropdownVisibility);
              }}
            >
              <AlignRight size={30} />
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed p-4 w-full flex flex-col items-center shadow-md ${"bg-white"}`}
        style={{
          top: 0,
          transform: !dropdownVisibility
            ? "translateY(-200%)"
            : `translateY(0%)`,
          transition: "transform 0.3s linear",
          zIndex: 998,
          paddingTop: !isContentVisible ? "50px" : `${headerHeight}px`,
        }}
      >
        <div className="my-2">
          <NavLink label="About" url="/about" />
        </div>
        <div className="my-2">
          <SubNavDropdownItem label="Books" links={seriesLinks} />
        </div>
        <div className="my-2">
          <SubNavDropdownItem label="Worlds" links={worldsLinks} />
        </div>
      </div>
    </>
  );
}

export default Header;

type LinkType = {
  url: string;
  label: string;
  theme?: "white" | "default";
};

function NavLink({ label, url, theme = "default" }: LinkType) {
  return (
    <div
      className={`font-medium mx-4 cursor-pointer w-16 tracking-wider ${
        theme === "white"
          ? "text-white hover:text-gray-200"
          : "hover:text-gray-500"
      }`}
    >
      <Link href={url}>{label.toUpperCase()}</Link>
    </div>
  );
}

type CascadeLinkType = LinkType & {
  links?: LinkType[];
};

function NavDropdown({
  label,
  theme,
  links,
}: {
  label: string;
  theme?: "white" | "default";
  links: CascadeLinkType[];
}) {
  return (
    <div
      className={`hover-trigger relative flex justify-center font-medium mx-4 cursor-pointer w-16 tracking-wider ${
        theme === "white"
          ? "text-white hover:text-gray-200"
          : "hover:text-gray-500"
      }`}
    >
      {label.toUpperCase()}
      <div className="absolute hidden p-4 hover-target top-6">
        <ul
          className={`arrow justify-center flex-col shadow-lg z-50 pt-2 pb-2 bg-white`}
          style={{
            width: 175,
          }}
        >
          {links.map((_link, i) =>
            _link.links?.length ? (
              <NavDropdownItem key={i} link={_link} />
            ) : (
              <li
                key={i}
                className="w-full p-2 text-sm text-center text-black list-none hover:bg-gray-200"
              >
                <Link
                  href={_link.url}
                  className="col-span-3 hover:text-gray-500"
                >
                  {_link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

function NavDropdownItem({ link }: { link: CascadeLinkType }) {
  const router = useRouter();
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    if (isExpanded) {
      setExpanded(false);
    }
  }, [router, router.pathname]);

  return !!link.links?.length ? (
    <li className="w-full p-2 text-sm text-left text-black list-none hover:bg-gray-200">
      <div className="grid grid-cols-4 gap-2">
        <Link href={link.url} className="col-span-3 hover:text-gray-500">
          {link.label}
        </Link>
        {isExpanded ? (
          <button
            className="flex items-center justify-end hover:text-gray-500"
            onClick={() => {
              setExpanded(false);
            }}
          >
            <ChevronUp />
          </button>
        ) : (
          <button
            className="flex items-center justify-end hover:text-gray-500"
            onClick={() => {
              setExpanded(true);
            }}
          >
            <ChevronDown />
          </button>
        )}
      </div>
      <div className={`overflow-hidden ${isExpanded ? "h-full" : "h-0"}`}>
        {link.links?.map((_link, i) => (
          <div key={i} className="m-4">
            <Link href={_link.url} className="text-black hover:text-gray-500">
              {_link.label}
            </Link>
          </div>
        ))}
      </div>
    </li>
  ) : (
    <li className="w-full p-2 text-sm text-center text-black list-none hover:bg-gray-200">
      <Link href={link.url} className="col-span-3 hover:text-gray-500">
        {link.label}
      </Link>
    </li>
  );
}

function SubNavDropdownItem({
  label,
  links,
}: {
  label: string;
  links: CascadeLinkType[];
}) {
  const router = useRouter();
  const [isExpanded, setExpanded] = useState(false);

  /** Close dropdown on navigate */
  useEffect(() => {
    if (isExpanded) {
      setExpanded(false);
    }
  }, [router]);

  return (
    <>
      <div className="flex justify-center">
        <button className="hover:text-gray-500">{label.toUpperCase()}</button>
        {!!links.length && isExpanded ? (
          <button
            className="flex items-center justify-end ml-2 hover:text-gray-500"
            onClick={() => {
              setExpanded(false);
            }}
          >
            <ChevronUp />
          </button>
        ) : (
          <button
            className="flex items-center justify-end ml-2 hover:text-gray-500"
            onClick={() => {
              setExpanded(true);
            }}
          >
            <ChevronDown />
          </button>
        )}
      </div>
      <div className={`overflow-hidden ${isExpanded ? "h-full" : "h-0"}`}>
        {links?.map((_link, i) => (
          <div key={i} className="m-2">
            <NavDropdownItem
              link={{
                url: _link.url,
                label: _link.label,
                links: _link.links,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
