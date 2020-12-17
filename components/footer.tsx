import Link from "next/link";
import React from "react";
import { Facebook, Twitter, Instagram, ChevronUp } from "react-feather";
import Button from "./Elements/button";
import Iconbutton from "./Elements/iconbutton";
import Input from "./Elements/input";

function Footer() {
  return (
    <div className="footer h-auto md:h-footer bg-gray-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 pr-24 font-roboto text-white relative">
      <div className="h-full w-full flex flex-col justify-between">
        <p className="text-base">
          <strong>Aaron Hodges</strong>
        </p>
        <div>
          <small>Author</small>
        </div>
        <div>
          <small>©2020 Aaron Hodges</small>
        </div>
        <div>
          <Link href="m-hodges.com">
            <a target="_blank" rel="noreferrer" className="hover:text-gray-300">
              <small>Created by Michael Hodges</small>
            </a>
          </Link>
        </div>
      </div>
      <div className="h-full w-full flex flex-col justify-between">
        <div>
          <Link href="">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex align-center hover:text-gray-300"
            >
              <Facebook className="mr-2" /> Facebook
            </a>
          </Link>
        </div>
        <div>
          <Link href="">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex align-center hover:text-gray-300"
            >
              <Twitter className="mr-2" /> Twitter
            </a>
          </Link>
        </div>
        <div>
          <Link href="">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex align-center hover:text-gray-300"
            >
              <Instagram className="mr-2" /> Instagram
            </a>
          </Link>
        </div>
      </div>
      <div className="h-full w-full flex">
        <div className="w-full max-w-sm flex flex-col justify-center">
          <small className="mb-2">Sign up to the newsletter</small>
          <Input
            variant="reverse"
            size="slim"
            className="w-full mb-2"
            placeholder="Email Address"
          />
          <Button variant="reverse" size="slim" className="w-full">
            SIGN UP
          </Button>
        </div>
      </div>
      <div className="absolute right-0 m-4">
        <Iconbutton
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          title="Back to top"
        >
          <ChevronUp size={32} />
        </Iconbutton>
      </div>
    </div>
  );
}

export default Footer;

// input / button should wrap depending on width
// neat button animation
