import groq from 'groq';

export const galleryQuery = groq`*[_type == "gallery"] | order(_createdAt desc) {
  _id,
  title,
  category,
  "imageUrl": image.asset->url
}`;

export const leadershipQuery = groq`*[_type == "leadership"] | order(order asc) {
  _id,
  name,
  designation,
  message,
  "imageUrl": photo.asset->url
}`;

export const contactQuery = groq`*[_type == "contact"][0] {
  phone1,
  phone2,
  email,
  address
}`;

export const announcementsQuery = groq`*[_type == "announcements"] | order(date desc) {
  _id,
  title,
  description,
  date
}`;
