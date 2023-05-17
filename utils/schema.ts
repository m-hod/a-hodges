import { About, Series, World } from "./types";

import axios from "axios";
import directus from "../lib/directus";

type Social = {
  id: number;
  url: string;
  title: string;
};

type Page = {
  id: number;
  slug: string;
  title: string;
  description: string;
  keywords: string;
};

type APIResponseType = {
  id: number;
  series: Series[];
  worlds: World[];
  socials: Social[];
  pages: Page[];
  about: About[];
};

export default async () => {
  const response = await axios.get(
    "https://admin.m-hodges.com/items/ahodges?fields=*.*.*.*"
  );

  const data = response.data.data;

  return {
    ...data,
    // about: data.about[0],
  };
};
