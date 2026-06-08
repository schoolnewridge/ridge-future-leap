import logoNewRidge from "../../Logo_newridge.jpeg";
import campusBuilding from "../../Buiding_newRidge.jpeg";
import stemRoboticsHero from "../../nr_robo.png";
import classroomActivity1 from "../../PHOTO-2026-04-16-08-06-31.jpg";
import campusActivity2 from "../../PHOTO-2026-04-16-08-08-38.jpg";
import campusEnvironment from "../../nr_2.png";
import classroomNewRidge from "../assets/classroom.jpeg";
import scienceLab from "../../PHOTO-2026-04-16-08-27-36.jpg";

import academicActivity from "../../WhatsApp Image 2026-05-27 at 17.06.53.jpeg";
import culturalDance1 from "../../WhatsApp Image 2026-05-27 at 17.10.05.jpeg";
import festival1 from "../../WhatsApp Image 2026-05-27 at 17.11.41.jpeg";
import achievementsGroup from "../../WhatsApp Image 2026-05-27 at 17.15.52.jpeg";
import festival2 from "../../WhatsApp Image 2026-05-27 at 18.21.29.jpeg";
import karate1 from "../../WhatsApp Image 2026-05-27 at 18.23.46.jpeg";
import karate2 from "../../WhatsApp Image 2026-05-27 at 18.25.30.jpeg";
import prePrimary1 from "../../WhatsApp Image 2026-05-27 at 18.30.12.jpeg";
import prePrimary2 from "../../WhatsApp Image 2026-05-27 at 18.31.53.jpeg";
import prePrimaryPlay from "../../PHOTO-2026-04-16-10-47-56.jpg";
import prePrimary3 from "../../WhatsApp Image 2026-05-28 at 16.26.10.jpeg";
import culturalCelebration from "../../WhatsApp Image 2026-05-27 at 17.15.52.jpeg";
import festival3 from "../../WhatsApp Image 2026-05-27 at 18.34.18.jpeg";
import culturalDance2 from "../../nr_4.png";
import culturalDance3 from "../../WhatsApp Image 2026-05-27 at 18.38.42.jpeg";

export const BRANDING_IMAGE = logoNewRidge;
export const META_IMAGE = campusBuilding;

export const HERO_SLIDES = [
  {
    src: campusBuilding,
    alt: "New Ridge School campus exterior",
    eyebrow: "New Ridge School",
    title: "CBSE & State Integrated Curriculum",
    cardTitle: "CBSE & State Integrated Curriculum",
    cardTag: "New Ridge School",
    desc: "Nursery to Class X learning with a strong academic base.",
    ctaText: "Apply for Admission",
    ctaLink: "/#admissions",
  },
  {
    src: prePrimary3,
    alt: "New Ridge School students engaged in interactive classroom learning",
    eyebrow: "Academic Excellence",
    title: "Empowering Young Minds for a Bright Future",
    cardTitle: "Interactive Classroom Learning",
    cardTag: "Academic Excellence",
    desc: "At New Ridge School Khammam, students learn through innovative teaching methods, interactive classrooms, and a nurturing environment that inspires curiosity, creativity, and academic excellence.",
    ctaText: "Apply for Admission",
    ctaLink: "/#admissions",
  },
  {
    src: stemRoboticsHero,
    alt: "STEM and Robotics Education at New Ridge School",
    eyebrow: "Future-Ready Learning",
    title: "STEM & Robotics Education",
    cardTitle: "STEM & Robotics Education",
    cardTag: "Innovation Lab",
    desc: "Building innovators, problem solvers, and future technology leaders through hands-on robotics, coding, artificial intelligence, STEM experiments, and innovation-based learning.",
    ctaText: "Explore STEM Programs",
    ctaLink: "/stem-robotics",
  },
] as const;

export const ABOUT_IMAGES = {
  campus: campusBuilding,
  classroom: classroomNewRidge,
  community: achievementsGroup,
} as const;



export const CONTACT_IMAGE = {
  campus: campusBuilding,
} as const;

export const ADMISSIONS_IMAGES = {
  classroom: classroomNewRidge,
  activity: academicActivity,
  formation: achievementsGroup,
} as const;

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  focalPoint?: string;
};

export type GalleryCategory = {
  name: string;
  description: string;
  items: GalleryItem[];
};

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    name: "Campus",
    description: "School buildings and the learning environment.",
    items: [
      { src: campusBuilding, alt: "New Ridge School campus exterior", caption: "Campus exterior" },
      { src: campusActivity2, alt: "A student doing science work in a classroom setting", caption: "Campus learning" },
      { src: campusEnvironment, alt: "New Ridge School campus environment and facilities", caption: "Campus Environment" },
    ],
  },
  {
    name: "Classrooms",
    description: "Learning spaces where daily instruction happens.",
    items: [
      { src: classroomNewRidge, alt: "Classroom at New Ridge School", caption: "Classroom Learning", focalPoint: "center center" },
      { src: academicActivity, alt: "Students engaged in a classroom activity", caption: "Academic engagement" },
      { src: classroomActivity1, alt: "Students engaged in interactive learning", caption: "Interactive Learning" },
      { src: scienceLab, alt: "Students performing science experiments in a laboratory environment", caption: "Science Laboratory" },
    ],
  },


  {
    name: "Festivals",
    description: "Traditional celebrations and cultural observances.",
    items: [
      { src: festival1, alt: "Students commemorating Ramanujan Day at New Ridge School", caption: "Ramanujan Day Celebration" },
      { src: festival2, alt: "Students participating in a festival program", caption: "Festival activity", focalPoint: "center 5%" },
      { src: festival3, alt: "Students taking part in a cultural festival celebration", caption: "Festival moment" },
    ],
  },
  {
    name: "Cultural Activities",
    description: "Dance, stage programs, and student participation.",
    items: [
      { src: culturalCelebration, alt: "Students and teachers taking part in a cultural celebration", caption: "Cultural celebration", focalPoint: "center 16%" },
      { src: culturalDance1, alt: "Students performing in a cultural activity", caption: "Cultural program", focalPoint: "center 18%" },
      { src: culturalDance2, alt: "Students on stage during a cultural event", caption: "School Event" },
      { src: culturalDance3, alt: "Cultural performance at New Ridge School", caption: "Cultural showcase" },
    ],
  },
  {
    name: "Karate",
    description: "Building discipline, confidence, focus, and physical fitness through structured karate training.",
    items: [
      { src: karate1, alt: "Karate training at New Ridge School", caption: "Karate Training" },
      { src: karate2, alt: "Students demonstrating martial arts excellence", caption: "Karate Demonstration", focalPoint: "center top" },
    ],
  },
  {
    name: "Pre-Primary",
    description: "Nursery, LKG, and UKG early learning moments.",
    items: [
      { src: prePrimary3, alt: "Pre-primary classroom environment", caption: "Early learning" },
      { src: prePrimary1, alt: "Pre-primary students during an activity", caption: "Pre-primary activity", focalPoint: "center top" },
      { src: prePrimary2, alt: "Young learners participating in class", caption: "Little learners" },
      { src: prePrimaryPlay, alt: "Pre-primary students enjoying outdoor play-based learning", caption: "Play-Based Learning" },
    ],
  },
  {
    name: "Annual Day",
    description: "Stage showcases and school celebration highlights.",
    items: [
      { src: festival2, alt: "Annual day celebration at New Ridge School", caption: "Annual day", focalPoint: "center 5%" },
      { src: prePrimary1, alt: "Pre-primary annual day participation", caption: "Performance moment", focalPoint: "center 20%" },
      { src: prePrimary2, alt: "Students on stage for annual celebrations", caption: "Stage moment", focalPoint: "center 18%" },
      { src: culturalDance2, alt: "Annual day cultural performance", caption: "Showcase", focalPoint: "center 20%" },
      { src: culturalDance3, alt: "Annual celebration at New Ridge School", caption: "Celebration", focalPoint: "center 20%" },
    ],
  },
];
