import { getCliClient } from 'sanity/cli'
const client = getCliClient()

const categoryMap = {
  "Campus": "category-campus",
  "Classrooms": "category-classrooms",
  "Festivals": "category-festivals",
  "Cultural Activities": "category-cultural-activities",
  "Karate": "category-karate",
  "Pre-Primary": "category-pre-primary",
  "Annual Day": "category-annual-day",
}

async function fix() {
  const existingImages = await client.fetch(`*[_type == "gallery"]`)
  for (const img of existingImages) {
    if (typeof img.category === 'string') {
      const catId = categoryMap[img.category]
      if (catId) {
        await client.patch(img._id).set({ category: { _type: 'reference', _ref: catId } }).commit()
        console.log(`Fixed category for: ${img.title || img._id}`)
      }
    }
  }
}
fix().catch(console.error)
