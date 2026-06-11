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
import prePrimaryPlay from "../../ChatGPT Image Jun 8, 2026, 05_17_39 PM.png";
import prePrimary3 from "../../WhatsApp Image 2026-05-28 at 16.26.10.jpeg";
import festival3 from "../../WhatsApp Image 2026-05-27 at 18.34.18.jpeg";
import culturalDance2 from "../../nr_4.png";
import culturalDance3 from "../../WhatsApp Image 2026-05-27 at 18.38.42.jpeg";

import annualEnhanced1 from "../../enhancedd_an-1.png";
import annualEnhanced2 from "../../enhance-an-2.png";
import annualEnhanced3 from "../../enhanced-an-3.png";
import annualEnhanced4 from "../../enhanced-an-4.png";
import greenCampus from "../../enhanced-ground-2.png";
import directorImage from "../../director_newridge.jpeg";
import principalImage from "../../WhatsApp Image 2026-05-25 at 18.17.07.jpeg";

export const LEADERSHIP_IMAGES = {
  director: directorImage,
  principal: principalImage,
} as const;


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
    alt: "New Ridge School students engaged in creative learning and art-based exploration",
    eyebrow: "Creative Excellence",
    title: "Nurturing Creativity and Curiosity",
    cardTitle: "Creative Learning & Development",
    cardTag: "Creative Excellence",
    desc: "At New Ridge School Khammam, children learn through creative activities, hands-on experiences, artistic expression, and interactive learning that encourage imagination, confidence, and lifelong curiosity.",
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
    objectPosition: "center top",
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


