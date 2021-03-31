import { Facebook, Instagram, Twitter } from 'react-feather';
import { baseUrl } from './constants';
import { Socials, SocialsUnion } from './types';

const validSocials: SocialsUnion[] = ["facebook", "instagram", "twitter"]; 

export function getSocials(socials: Socials) {
    const {id, ...links} = socials;
    return [...Object.keys(links)]
        .filter(_key => validSocials.includes(_key as SocialsUnion))
        .map((_key) => {
            switch (_key) {
                case "facebook":
                    return {
                        Icon: Facebook,
                        label: "Facebook",
                        link: links[_key]
                    };
                case "twitter":
                    return {
                        Icon: Twitter,
                        label: "Twitter",
                        link: links[_key]
                    };
                case "instagram":
                    return {
                        Icon: Instagram,
                        label: "Instagram",
                        link: links[_key]
                    };      
            }
    })
};

export function slugify(text: string) {
    return text.toLowerCase().replace(/ /gi, "-");
}

export function generateCMSLink(url: string) {
    return `${baseUrl}${url}`
}