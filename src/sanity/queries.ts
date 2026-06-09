import groq from 'groq';

export const galleryQuery = groq`*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  category,
  "imageUrl": image.asset->url
}`;
