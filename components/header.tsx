import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import useObserver from "../hooks/useObserver";
import { useRouter } from "next/router";
import { AlignRight, ChevronDown, ChevronUp } from "react-feather";
import useWindowSize from "../hooks/useWindowSize";
import { headerHeight } from "../utils/constants";

const placeholderLink = {
  label: "hi",
  url: "",
};

function Header() {
  const id = "header";
  const { isContentVisible } = useObserver(id);
  const windowSize = useWindowSize();
  const router = useRouter();
  const [dropdownVisibility, setDropdownVisibility] = useState(false);
  const mode = useMemo(() => {
    if ([...Object.keys(router.query)].includes("series")) return "absolute";
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
            className="absolute right-full hidden md:flex"
            style={{
              top: "calc(50% - 12px)",
            }}
          >
            <NavLink label="About" url="/about" theme={theme} />
          </div>
          <Link href="/">
            <a>
              <img
                src="/logo.svg"
                alt="Aaron Hodges"
                className="header-logo transition-all duration-250 object-contain"
              />
            </a>
          </Link>
          <div
            className="absolute left-full hidden md:flex"
            style={{
              top: "calc(50% - 12px)",
            }}
          >
            <NavDropdown
              label="Books"
              theme={theme}
              links={[
                {
                  url: "/series/alana",
                  label: "The Knights of Alanaaa",
                  links: [placeholderLink],
                },
                {
                  url: "/worlds/alana",
                  label: "The Knights of Alanaaa",
                  links: [placeholderLink],
                },
                {
                  url: "/worlds/alana",
                  label: "The Knights of Alanaaa",
                  links: [placeholderLink],
                },
              ]}
            />
            <NavDropdown
              label="Worlds"
              theme={theme}
              links={[
                {
                  url: "/worlds/alana",
                  label: "The Knights of Alanaaa",
                },
                {
                  url: "/worlds/alana",
                  label: "The Knights of Alanaaa",
                },
                {
                  url: "/worlds/alana",
                  label: "The Knights of Alanaaa",
                },
              ]}
            />
          </div>
        </div>
        <div className="flex justify-center items-center md:hidden mr-8">
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
        <div className="h-full flex justify-between md:justify-center align-center">
          <div className="relative flex items-center">
            <div
              className="absolute right-full hidden md:flex"
              style={{
                top: "calc(50% - 12px)",
              }}
            >
              <NavLink label="About" url="/about" />
            </div>
            <div className="font-medium mx-4 cursor-pointer tracking-wider hover:text-gray-500 underline">
              <Link href="/">
                <a>AARON HODGES</a>
              </Link>
            </div>
            <div
              className="absolute left-full hidden md:flex"
              style={{
                top: "calc(50% - 12px)",
              }}
            >
              <NavDropdown
                label="Books"
                links={[
                  {
                    url: "/series/alana",
                    label: "The Knights of Alanaaa",
                    links: [placeholderLink],
                  },
                  {
                    url: "/series/alana",
                    label: "The Knights of Alanaaa",
                    links: [placeholderLink],
                  },
                  {
                    url: "/series/alana",
                    label: "The Knights of Alanaaa",
                    links: [placeholderLink],
                  },
                ]}
              />
              <NavDropdown
                label="Worlds"
                links={[
                  {
                    url: "/worlds/alana",
                    label: "The Knights of Alanaaa",
                  },
                  {
                    url: "/worlds/alana",
                    label: "The Knights of Alanaaa",
                  },
                  {
                    url: "/worlds/alana",
                    label: "The Knights of Alanaaa",
                  },
                ]}
              />
            </div>
          </div>
          <div className="flex justify-center items-center md:hidden mr-4">
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
          <SubNavDropdownItem
            label="Books"
            links={[
              {
                url: "/series/alana",
                label: "The Knights of Alanaaa",
                links: [placeholderLink],
              },
              {
                url: "/series/alana",
                label: "The Knights of Alanaaa",
                links: [placeholderLink],
              },
              {
                url: "/series/alana",
                label: "The Knights of Alanaaa",
                links: [placeholderLink],
              },
            ]}
          />
        </div>
        <div className="my-2">
          <SubNavDropdownItem
            label="Worlds"
            links={[
              {
                url: "/worlds/alana",
                label: "The Knights of Alanaaa",
              },
              {
                url: "/worlds/alana",
                label: "The Knights of Alanaaa",
              },
              {
                url: "/worlds/alana",
                label: "The Knights of Alanaaa",
              },
            ]}
          />
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
      <Link href={url}>
        <a>{label.toUpperCase()}</a>
      </Link>
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
      <div className="hover-target hidden absolute p-4 top-6">
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
                className="w-full hover:bg-gray-200 text-black p-2 text-sm text-center"
              >
                <Link href={_link.url}>
                  <a className="col-span-3 hover:text-gray-500">
                    {_link.label}
                  </a>
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

  /** Close dropdown on window size change */
  useEffect(() => {
    if (isExpanded) {
      setExpanded(false);
    }
  }, [router]);

  return (
    <li className="w-full hover:bg-gray-200 text-black p-2 text-sm text-left">
      <div className="grid grid-cols-4 gap-2">
        <Link href={link.url}>
          <a className="col-span-3 hover:text-gray-500">{link.label}</a>
        </Link>

        {isExpanded ? (
          <button
            className="flex justify-end items-center hover:text-gray-500"
            onClick={() => {
              setExpanded(false);
            }}
          >
            <ChevronUp />
          </button>
        ) : (
          <button
            className="flex justify-end items-center hover:text-gray-500"
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
          <div key={i} className="m-2">
            <Link href={_link.url}>
              <a className="text-black hover:text-gray-500">{_link.label}</a>
            </Link>
          </div>
        ))}
      </div>
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

        {isExpanded ? (
          <button
            className="ml-2 flex justify-end items-center hover:text-gray-500"
            onClick={() => {
              setExpanded(false);
            }}
          >
            <ChevronUp />
          </button>
        ) : (
          <button
            className="ml-2 flex justify-end items-center hover:text-gray-500"
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
