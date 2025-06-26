import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHead',
      title: 'Hero Heading',
      type: 'string',
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
