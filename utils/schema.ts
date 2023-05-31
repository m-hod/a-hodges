import { About, Book, Newsletter, Page, Series, Social, World } from "./types";

import { apiUrl } from "./constants";
import axios from "axios";

export type Schema = {
  about: About;
  pages: Page[];
  socials: Social[];
  series: Series[];
  home: Book[];
  worlds: World[];
  newsletter: Newsletter;
};

export default async () => {
  const response = await axios.get(apiUrl);
  const data = response.data.data;
  return data as Schema;
};
