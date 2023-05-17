import { FaFacebook, FaGoodreads, FaInstagram } from "react-icons/fa";
import { Facebook, Instagram } from "react-feather";
import { NewSocial, Socials, SocialsUnion } from "./types";

import { BsBook } from "react-icons/bs";
import { baseUrl } from "./constants";

const validSocials: SocialsUnion[] = [
  "facebook",
  "instagram",
  "bookbub",
  "goodreads",
];

const getSocialIcon = (social: NewSocial) => {
  switch (social.title.toLowerCase()) {
    case "facebook":
      return FaFacebook;
    case "instagram":
      return FaInstagram;
    case "bookbub":
      return BsBook;
    case "goodreads":
      return FaGoodreads;
  }
};

export const getValidSocials = (socials: NewSocial[]) => {
  return socials
    .filter((social) =>
      validSocials.some(
        (validSocial) => social.title.toLowerCase() === validSocial
      )
    )
    .map((social) => ({
      Icon: getSocialIcon(social),
      label: social.title,
      link: social.url,
    }));
};

export function getSocials(socials: Socials) {
  const { id, ...links } = socials;
  return [...Object.keys(links)]
    .filter((_key) => validSocials.includes(_key as SocialsUnion))
    .map((_key) => {
      switch (_key) {
        case "facebook":
          return {
            Icon: FaFacebook,
            label: "Facebook",
            link: links[_key],
          };
        case "instagram":
          return {
            Icon: FaInstagram,
            label: "Instagram",
            link: links[_key],
          };
        case "goodreads":
          return {
            Icon: FaGoodreads,
            label: "Goodreads",
            link: links[_key],
          };
        case "bookbub":
          return {
            Icon: BsBook,
            label: "Bookbub",
            link: links[_key],
          };
      }
    });
}

export function slugify(text: string) {
  return text.toLowerCase().replace(/ /gi, "-");
}

export function generateCMSLink(url: string) {
  return `${baseUrl}${url}`;
}
