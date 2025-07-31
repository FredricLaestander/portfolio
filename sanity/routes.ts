import { client } from "./lib/client";
import { About } from "./types";

export const getHeroText = async (): Promise<Pick<About, "heroText">> => {
  return await client.fetch('*[ _type == "about" ]{ heroText }[0]');
};

export const getAboutImages = async (): Promise<Pick<About, "images">> => {
  return await client.fetch('*[_type == "about"]{images}[0]');
};
