import { createClient } from '@sanity/client';

export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || "6vvcz1yp";
export const dataset = import.meta.env.VITE_SANITY_DATASET || "production";
export const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || "2026-06-10";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Disabled CDN to ensure deleted documents are instantly removed
});
