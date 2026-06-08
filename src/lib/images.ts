import logoNewRidge from "../../Logo_newridge.jpeg";
import campusBuilding from "../../Buiding_newRidge.jpeg";
import stemRoboticsHero from "../../nr_robo.png";
import campusActivity1 from "../../PHOTO-2026-04-16-10-25-12.jpg";
import campusActivity2 from "../../PHOTO-2026-04-16-08-08-38.jpg";
import classroomNewRidge from "../../ChatGPT Image May 30, 2026, 12_39_23 AM.png";
import directorPortrait from "../../director_newridge.jpeg";
import principalPortrait from "../../WhatsApp Image 2026-05-25 at 18.17.07.jpeg";
import academicActivity from "../../WhatsApp Image 2026-05-27 at 17.06.53.jpeg";
import culturalDance1 from "../../WhatsApp Image 2026-05-27 at 17.10.05.jpeg";
import festival1 from "../../WhatsApp Image 2026-05-27 at 17.11.41.jpeg";
import achievementsGroup from "../../WhatsApp Image 2026-05-27 at 17.15.52.jpeg";
import festival2 from "../../WhatsApp Image 2026-05-27 at 18.21.29.jpeg";
import karate1 from "../../WhatsApp Image 2026-05-27 at 18.25.30.jpeg";
import karate2 from "../../WhatsApp Image 2026-05-27 at 18.27.07.jpeg";
import karate3 from "../../WhatsApp Image 2026-05-27 at 18.29.00.jpeg";
import prePrimary1 from "../../WhatsApp Image 2026-05-27 at 18.30.12.jpeg";
import prePrimary2 from "../../WhatsApp Image 2026-05-27 at 18.31.53.jpeg";
import prePrimary3 from "../../WhatsApp Image 2026-05-28 at 16.26.10.jpeg";
import culturalCelebration from "../../WhatsApp Image 2026-05-27 at 17.15.52.jpeg";
import festival3 from "../../WhatsApp Image 2026-05-27 at 18.34.18.jpeg";
import culturalDance2 from "../../WhatsApp Image 2026-05-27 at 18.35.41.jpeg";
import culturalDance3 from "../../WhatsApp Image 2026-05-27 at 18.38.42.jpeg";

export const BRANDING_IMAGE = logoNewRidge;

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

export const LEADERSHIP_IMAGES = {
  director: directorPortrait,
  principal: principalPortrait,
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
      { src: campusActivity1, alt: "Students in a classroom lesson at New Ridge School", caption: "Campus classrooms" },
      { src: campusActivity2, alt: "A student doing science work in a classroom setting", caption: "Campus learning" },
    ],
  },
  {
    name: "Classrooms",
    description: "Learning spaces where daily instruction happens.",
    items: [
      { src: classroomNewRidge, alt: "Classroom at New Ridge School", caption: "Classroom learning" },
      { src: academicActivity, alt: "Students engaged in a classroom activity", caption: "Academic engagement" },
      { src: campusActivity1, alt: "Students and staff gathered in a classroom or indoor activity space", caption: "Classroom celebration" },
    ],
  },
  {
    name: "Leadership",
    description: "Leadership portraits from the school community.",
    items: [
      { src: directorPortrait, alt: "Director of New Ridge School", caption: "Director" },
      { src: principalPortrait, alt: "Principal of New Ridge School", caption: "Principal" },
    ],
  },
  {
    name: "Academics",
    description: "Classroom learning and academic participation.",
    items: [
      { src: classroomNewRidge, alt: "New Ridge classroom learning", caption: "Classroom focus" },
      { src: academicActivity, alt: "Students taking part in an academic activity", caption: "Student engagement" },
      { src: campusActivity2, alt: "A student using a microscope in class", caption: "Science learning" },
    ],
  },
  {
    name: "Festivals",
    description: "Traditional celebrations and cultural observances.",
    items: [
      { src: festival1, alt: "Festive celebration at New Ridge School", caption: "Traditional celebration" },
      { src: festival2, alt: "Students participating in a festival program", caption: "Festival activity", focalPoint: "center 18%" },
      { src: festival3, alt: "Students taking part in a cultural festival celebration", caption: "Festival moment" },
    ],
  },
  {
    name: "Cultural Activities",
    description: "Dance, stage programs, and student participation.",
    items: [
      { src: culturalCelebration, alt: "Students and teachers taking part in a cultural celebration", caption: "Cultural celebration", focalPoint: "center 16%" },
      { src: culturalDance1, alt: "Students performing in a cultural activity", caption: "Cultural program", focalPoint: "center 18%" },
      { src: culturalDance2, alt: "Students on stage during a cultural event", caption: "Stage performance" },
      { src: culturalDance3, alt: "Cultural performance at New Ridge School", caption: "Cultural showcase" },
    ],
  },
  {
    name: "Karate",
    description: "Martial arts training and discipline-building activities.",
    items: [
      { src: karate1, alt: "Karate training at New Ridge School", caption: "Karate training" },
      { src: karate2, alt: "Students practicing karate drills", caption: "Self-defence practice" },
    ],
  },
  {
    name: "Pre-Primary",
    description: "Nursery, LKG, and UKG early learning moments.",
    items: [
      { src: prePrimary3, alt: "Pre-primary classroom environment", caption: "Early learning" },
      { src: prePrimary1, alt: "Pre-primary students during an activity", caption: "Pre-primary activity" },
      { src: prePrimary2, alt: "Young learners participating in class", caption: "Little learners" },
    ],
  },
  {
    name: "Annual Day",
    description: "Stage showcases and school celebration highlights.",
    items: [
      { src: festival2, alt: "Annual day celebration at New Ridge School", caption: "Annual day", focalPoint: "center 18%" },
      { src: prePrimary1, alt: "Pre-primary annual day participation", caption: "Performance moment", focalPoint: "center 20%" },
      { src: prePrimary2, alt: "Students on stage for annual celebrations", caption: "Stage moment", focalPoint: "center 18%" },
      { src: culturalDance2, alt: "Annual day cultural performance", caption: "Showcase", focalPoint: "center 20%" },
      { src: culturalDance3, alt: "Annual celebration at New Ridge School", caption: "Celebration", focalPoint: "center 20%" },
    ],
  },
];
