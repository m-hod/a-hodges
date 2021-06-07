import { Facebook, Instagram, Twitter } from "react-feather";
import { Socials, SocialsUnion } from "./types";

import { baseUrl } from "./constants";

const validSocials: SocialsUnion[] = ["facebook", "instagram"];

export function getSocials(socials: Socials) {
  const { id, ...links } = socials;
  return [...Object.keys(links)]
    .filter((_key) => validSocials.includes(_key as SocialsUnion))
    .map((_key) => {
      switch (_key) {
        case "facebook":
          return {
            Icon: Facebook,
            label: "Facebook",
            link: links[_key],
          };
        case "instagram":
          return {
            Icon: Instagram,
            label: "Instagram",
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
