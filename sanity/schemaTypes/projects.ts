import { defineField, defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      type: "array",
      of: [{ type: "image" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "links",
      type: "object",
      fields: [
        defineField({
          name: "live_deployment",
          title: "Live deployment",
          type: "url",
        }),
        defineField({
          name: "repository",
          type: "url",
        }),
      ],
    }),
    defineField({
      name: "tech_stack",
      title: "Tech stack",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "label",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              type: "url",
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      validation: (rule) => rule.required(),
    }),
  ],
});
