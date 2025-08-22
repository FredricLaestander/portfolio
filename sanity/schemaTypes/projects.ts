import { defineField, defineType } from 'sanity'

export const projects = defineType({
  name: 'projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'background_color',
      title: 'Background color',
      description: 'Requires valid CSS color',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'light_text',
      title: 'Light text',
      description: 'Toggle to enable light text',
      type: 'boolean',
      initialValue: false,
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
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'links',
      type: 'object',
      fields: [
        defineField({
          name: 'live_deployment',
          title: 'Live deployment',
          type: 'url',
        }),
        defineField({
          name: 'repository',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'tech_stack',
      title: 'Tech stack',
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
              name: 'url',
              type: 'url',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
  ],
})
