import { FaFacebook, FaGoodreads, FaInstagram } from "react-icons/fa";
import { Social, SocialsUnion } from "./types";

import { BsBook } from "react-icons/bs";

const validSocials: SocialsUnion[] = [
  "facebook",
  "instagram",
  "bookbub",
  "goodreads",
];

const getSocialIcon = (social: Social) => {
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

export const getValidSocials = (socials: Social[]) => {
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

export function slugify(text: string) {
  return text.toLowerCase().replace(/ /gi, "-");
}
