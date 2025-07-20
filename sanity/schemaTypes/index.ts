import { type SchemaTypeDefinition } from "sanity";
import { projects } from "./projects";
import { about } from "./about";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projects, about],
};
