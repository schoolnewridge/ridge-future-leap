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
          { title: 'Campus', value: 'Campus' },
          { title: 'Classrooms', value: 'Classrooms' },
          { title: 'Festivals', value: 'Festivals' },
          { title: 'Cultural Activities', value: 'Cultural Activities' },
          { title: 'Karate', value: 'Karate' },
          { title: 'Pre-Primary', value: 'Pre-Primary' },
          { title: 'Annual Day', value: 'Annual Day' },
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
