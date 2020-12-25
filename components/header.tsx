import React from "react";
import Link from "next/link";

const placeholderLink = {
  label: "hi",
  url: "",
};

function Header() {
  return (
    <nav className="h-header flex items-center justify-center">
      <NavLink title="About" url="/about" />
      <NavLink title="Blog" url="/blog" />
      <Link href="/">
        <a>
          <img
            src="/logo.svg"
            alt="Aaron Hodges"
            className="image transition-all duration-250 object-contain"
          />
        </a>
      </Link>
      <NavDropdown
        title="Books"
        links={[
          {
            url: "/series/alana",
            label: "The Knights of Alanaaa",
          },
          placeholderLink,
          placeholderLink,
        ]}
      />
      <NavDropdown title="Worlds" links={[placeholderLink]} />
    </nav>
  );
}

export default Header;

type Link = {
  url: string;
  label: string;
};

const navlinkStyles =
  "font-medium mx-4 hover:text-gray-500 cursor-pointer w-16 tracking-wider";

function NavLink({ title, url }: { title: string; url: string }) {
  return (
    <div className={`${navlinkStyles}`}>
      <Link href={url}>
        <a>{title.toUpperCase()}</a>
      </Link>
    </div>
  );
}

function NavDropdown({ title, links }: { title: string; links: Link[] }) {
  return (
    <div
      className={`hover-trigger relative flex justify-center ${navlinkStyles}`}
    >
      {title.toUpperCase()}
      <ul
        className={`hover-target hidden absolute justify-center flex-col shadow-md z-50 pt-2 pb-2 w-40 top-6 bg-white`}
      >
        {links.map((_link, i) => (
          <li
            key={i}
            className="w-full flex justify-center items-center hover:bg-gray-200 text-black hover:text-gray-500 text-center p-2 text-sm"
          >
            <Link href={_link.url}>
              <a>{_link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
