import gallery1 from "../assets/gallery1.png";
import gallery2 from "../assets/blog-3.jpeg";
import gallery3 from "../assets/about-1.jpeg";
import gallery4 from "../assets/about-2.jpeg";
import gallery5 from "../assets/aboutcard-1.jpg";
import gallery6 from "../assets/aboutcard-2.jpg";
import hero1 from "../assets/hero3.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero1.jpg";
import historyImg from "../assets/aboutcard-1.jpg";
import tourismImg from "../assets/aboutcard-2.jpg";
import servicesImg from "../assets/aboutcard-3.jpeg";
import Blog1 from "../assets/blog-1.jpg";
import Blog2 from "../assets/blog-2.jpg";
import Blog3 from "../assets/blog-3.jpeg";
import partner from "../assets/logo.png";

export const footerGalleryData = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

export const slideData = [
  {
    image: hero1,
    title: "Empowering Cities, Enhancing Lives",
    subTitle: "2 Million Visitors Every Year",
    buttonText: "Discover More",
  },
  {
    image: hero2,
    title: "Innovating the Future of Urban Services",
    subTitle: "Smart Solutions for Smart Cities",
    buttonText: "Learn More",
  },
  {
    image: hero3,
    title: "Building Sustainable Communities",
    subTitle: "Connecting People and Places",
    buttonText: "Get Started",
  },
];

export const services = [
  {
    icon: "bi-bank",
    title: "Public Services",
  },
  {
    icon: "bi-briefcase",
    title: "Jobs & Employment",
  },
  {
    icon: "bi-building",
    title: "Business & Permits",
  },
  {
    icon: "bi-bus-front",
    title: "Transport & Mobility",
  },
  {
    icon: "bi-flower3",
    title: "Culture & Community",
  },
];

export const departments = [
  { title: "Public Works Department", icon: "bi-gear" },
  { title: "Health & Sanitation", icon: "bi-heart-pulse" },
  { title: "Education & Youth Affairs", icon: "bi-book" },
  { title: "Finance & Revenue", icon: "bi-cash-coin" },
  { title: "Urban Development", icon: "bi-building" },
  { title: "Environmental Management", icon: "bi-tree" },
];


export const aboutCards = [
  {
    img: historyImg,
    icon: "bi-journal-richtext",
    title: "History &",
    subtitle: "establishment",
    description:
      "Learn about the city's origins, growth, and the institutions built to serve citizens.",
  },
  {
    img: tourismImg,
    icon: "bi-map",
    title: "Tourism &",
    subtitle: "visitor guides",
    description:
      "Discover attractions, heritage sites, and helpful guides for visitors and locals.",
  },
  {
    img: servicesImg,
    icon: "bi-bank",
    title: "Service &",
    subtitle: "departments",
    description:
      "Find government departments and services with step-by-step assistance.",
  },
];

export const posts = [
  {
    img: Blog1,
    date: "30",
    month: "JAN",
    title: "Small business relief & recovery programs launched",
    comments: 2,
    author: "UrbanGov Admin",
  },
  {
    img: Blog2,
    date: "30",
    month: "JAN",
    title: "City announces new public photography & tourism initiative",
    comments: 2,
    author: "UrbanGov Admin",
  },
  {
    img: Blog3,
    date: "30",
    month: "JAN",
    title: "New citizen services dashboard rolled out for transparency",
    comments: 2,
    author: "UrbanGov Admin",
  },
];

export const logos = [
  { src: partner, alt: "Envato" },
  { src: partner, alt: "Envato" },
  { src: partner, alt: "Envato" },
  { src: partner, alt: "Envato" },
  { src: partner, alt: "Envato" },
];