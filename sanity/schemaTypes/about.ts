import { defineField, defineType } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'heroText',
      title: 'Hero text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'introduction',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      type: 'array',
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              description: 'Important for SEO and accessibility',
              type: 'string',
            },
          ],
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'socials',
      type: 'array',
      validation: (rule) => rule.required(),
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              description: 'Pick an icon at simpleicons.org',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'color',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'skills',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'icon',
              description: 'Pick an icon at simpleicons.org',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'color',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'ogText',
      title: 'OpenGraph hero text',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ],
})
