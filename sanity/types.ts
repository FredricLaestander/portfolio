import { PortableTextBlock, SanityDocument } from "next-sanity";
import { Image } from "sanity";

export type About = SanityDocument & {
  heroText: string;
  introduction: PortableTextBlock;
  description: PortableTextBlock;
  images: Image[];
  socials: { label: string; icon: string; url: string; color: string }[];
  skills: { label: string; icon: string; url: string; color: string }[];
};
