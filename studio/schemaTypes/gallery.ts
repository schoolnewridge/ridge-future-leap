import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Campus Images', value: 'Campus Images' },
          { title: 'Pre-Primary', value: 'Pre-Primary' },
          { title: 'Cultural Activities', value: 'Cultural Activities' },
          { title: 'STEM & Robotics', value: 'STEM & Robotics' },
          { title: 'Sports', value: 'Sports' },
          { title: 'Events', value: 'Events' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
  ],
})
