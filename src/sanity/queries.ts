import groq from 'groq';

export const galleryDataQuery = groq`*[_type == "galleryCategory"] | order(order asc) {
  _id,
  title,
  description,
  "items": *[_type == "gallery" && references(^._id)] | order(order asc, _createdAt desc) {
    _id,
    title,
    "imageUrl": image.asset->url
  }
}`;
