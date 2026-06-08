export const SITE = {
  name: "New Ridge School",
  fullName: "New Ridge School Khammam",
  tagline: "The Right Path to Success",
  description:
    "New Ridge School is a CBSE and State integrated school in Khammam for Nursery to Class X.",
  branding: ["CBSE & State Integrated Curriculum", "Nursery to Class X"],
  curriculum: "CBSE & State Integrated Curriculum",
  classes: "Nursery to Class X",
  recognition: "Recognized by Govt. of Telangana",
  address: {
    line1: "2 333, 8, Khammam - Yellandu Rd, Khanapuram Industrial Area",
    city: "Khammam",
    state: "Telangana",
    country: "India",
    postal: "507002",
  },
  phones: ["7729969763", "7729969764", "7075430445"],
  whatsapp: "917729969763",
  email: "newridgeschool@gmail.com",
  socials: {
    facebook: "#",
  },
  mapsEmbed:
    "https://www.google.com/maps?q=17.2596926,80.1655954&z=17&output=embed",
  mapsUrl: "https://maps.app.goo.gl/bcbPhvVRwaoZgJgHA",
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "?brochure=true", label: "Brochure" },
  { to: "/stem-robotics", label: "STEM & Robotics" },
  { to: "/gallery", label: "Gallery" },
  { to: "/admissions", label: "Admissions" },
  { to: "/contact", label: "Contact" },
] as const;
