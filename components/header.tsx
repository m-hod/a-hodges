import React from "react";
import Link from "next/link";

const placeholderLink = {
  label: "hi",
  url: "",
};

function Header() {
  return (
    <header>
      <nav className="flex items-center justify-center">
        <NavLink title="About" url="/about" />
        <NavLink title="Blog" url="/blog" />
        <Link href="/">
          <a>
            <img src="/logo.svg" alt="Aaron Hodges" height={128} width={128} />
          </a>
        </Link>
        <NavDropdown title="Books" links={[placeholderLink]} />
        <NavDropdown title="Worlds" links={[placeholderLink]} />
      </nav>
    </header>
  );
}

export default Header;

type Link = {
  url: string;
  label: string;
};

const navlinkStyles =
  "font-medium mx-4 hover:text-gray-500 cursor-pointer w-16";

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
        className={`hover-target hidden absolute justify-center shadow-md z-50 pt-2 pb-2 w-40 top-6`}
      >
        {links.map((_link, i) => (
          <li key={i} className="w-full flex justify-center">
            <Link href={_link.url}>
              <a>{_link.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
