import { getCliClient } from 'sanity/cli'
import { readFileSync } from 'fs'
import { basename, resolve, join } from 'path'

const client = getCliClient()

const categories = [
  {
    name: "Campus",
    slug: "campus",
    order: 1,
    items: [
      { path: "../Buiding_newRidge.jpeg", caption: "Campus Exterior" },
      { path: "../PHOTO-2026-04-16-08-08-38.jpg", caption: "Digital Classrooms" },
      { path: "../nr_2.png", caption: "Campus Environment" },
      { path: "../enhanced-ground-2.png", caption: "Green Campus Initiative" },
    ]
  },
  {
    name: "Classrooms",
    slug: "classrooms",
    order: 2,
    items: [
      { path: "../src/assets/classroom.jpeg", caption: "Classroom Learning" },
      { path: "../WhatsApp Image 2026-05-27 at 17.06.53.jpeg", caption: "Academic engagement" },
      { path: "../PHOTO-2026-04-16-08-06-31.jpg", caption: "Interactive Learning" },
      { path: "../PHOTO-2026-04-16-08-27-36.jpg", caption: "Science Laboratory" },
    ]
  },
  {
    name: "Festivals",
    slug: "festivals",
    order: 3,
    items: [
      { path: "../WhatsApp Image 2026-05-27 at 17.11.41.jpeg", caption: "Ramanujan Day Celebration" },
      { path: "../WhatsApp Image 2026-05-27 at 18.21.29.jpeg", caption: "Festival activity" },
      { path: "../WhatsApp Image 2026-05-27 at 18.34.18.jpeg", caption: "Festival moment" },
    ]
  },
  {
    name: "Cultural Activities",
    slug: "cultural-activities",
    order: 4,
    items: [
      { path: "../WhatsApp Image 2026-05-27 at 17.10.05.jpeg", caption: "Cultural program" },
      { path: "../nr_4.png", caption: "School Event" },
      { path: "../WhatsApp Image 2026-05-27 at 18.38.42.jpeg", caption: "Cultural showcase" },
    ]
  },
  {
    name: "Karate",
    slug: "karate",
    order: 5,
    items: [
      { path: "../WhatsApp Image 2026-05-27 at 18.23.46.jpeg", caption: "Karate Training" },
      { path: "../WhatsApp Image 2026-05-27 at 18.25.30.jpeg", caption: "Karate Demonstration" },
    ]
  },
  {
    name: "Pre-Primary",
    slug: "pre-primary",
    order: 6,
    items: [
      { path: "../WhatsApp Image 2026-05-28 at 16.26.10.jpeg", caption: "Early learning" },
      { path: "../WhatsApp Image 2026-05-27 at 18.30.12.jpeg", caption: "Pre-primary activity" },
      { path: "../WhatsApp Image 2026-05-27 at 18.31.53.jpeg", caption: "Little learners" },
      { path: "../ChatGPT Image Jun 8, 2026, 05_17_39 PM.png", caption: "Play-Based Learning" },
    ]
  },
  {
    name: "Annual Day",
    slug: "annual-day",
    order: 7,
    items: [
      { path: "../enhancedd_an-1.png", caption: "Annual Day Celebrations" },
      { path: "../enhance-an-2.png", caption: "Colorful Dance Performance" },
      { path: "../enhanced-an-3.png", caption: "Creative Stage Presentation" },
      { path: "../enhanced-an-4.png", caption: "Patriotic Performance" },
    ]
  }
]

async function run() {
  console.log('Starting migration...')
  
  const categoryMap = {}
  
  for (const cat of categories) {
    console.log(`Creating category: ${cat.name}`)
    const doc = await client.createOrReplace({
      _id: `category-${cat.slug}`,
      _type: 'galleryCategory',
      title: cat.name,
      slug: { _type: 'slug', current: cat.slug },
      order: cat.order
    })
    categoryMap[cat.name] = doc._id
  }
  
  let imageOrder = 1;
  for (const cat of categories) {
    for (const item of cat.items) {
      const filePath = resolve(process.cwd(), item.path)
      try {
        const buffer = readFileSync(filePath)
        const asset = await client.assets.upload('image', buffer, { filename: basename(item.path) })
        await client.create({
          _type: 'gallery',
          title: item.caption,
          category: { _type: 'reference', _ref: categoryMap[cat.name] },
          image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
          order: imageOrder++
        })
        console.log(`Uploaded ${item.caption}`)
      } catch(e) {
        console.log(`Could not upload ${item.path}:`, e.message)
      }
    }
  }

  const existingImages = await client.fetch(`*[_type == "gallery"]`)
  for (const img of existingImages) {
    if (typeof img.category === 'string') {
      const catId = categoryMap[img.category]
      if (catId) {
        await client.patch(img._id).set({ category: { _type: 'reference', _ref: catId } }).commit()
        console.log(`Migrated category for existing image: ${img.title || img._id}`)
      } else {
        console.log(`No category found for existing image: ${img.title || img._id} (had ${img.category})`)
      }
    }
  }

  console.log('Migration complete.')
}

run().catch(console.error)
