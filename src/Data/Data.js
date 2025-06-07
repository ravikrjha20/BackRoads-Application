import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";
import tour5 from "../images/tour-5.jpeg";
import tour6 from "../images/tour-6.jpeg";

const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];
const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];
const serviceList = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
    title: "endless Hiking",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
  },
];
const tourData = [
  {
    date: "2025-06-01",
    image: tour1,
    icon: "fas fa-map",
    title: "Explore Mountains",
    text: "Discover the untouched beauty of high-altitude adventures and pristine nature.",
    country: "Nepal",
    days: 7,
    amount: "$899",
  },
  {
    date: "2025-06-03",
    image: tour2,
    icon: "fas fa-umbrella-beach",
    title: "Beach Getaway",
    text: "Soak in the sun, sand, and waves on the most relaxing coastal escape.",
    country: "Thailand",
    days: 5,
    amount: "$699",
  },
  {
    date: "2025-06-05",
    image: tour3,
    icon: "fas fa-city",
    title: "Urban Discovery",
    text: "Experience the hustle, culture, and cuisine of the world’s great cities.",
    country: "Japan",
    days: 6,
    amount: "$1099",
  },
  {
    date: "2025-06-07",
    image: tour4,
    icon: "fas fa-tree",
    title: "Forest Retreat",
    text: "Reconnect with nature and find peace among towering trees and serene trails.",
    country: "Canada",
    days: 4,
    amount: "$799",
  },
  {
    date: "2025-06-09",
    image: tour5,
    icon: "fas fa-ship",
    title: "Cruise Adventure",
    text: "Set sail on an unforgettable journey across oceans and exotic destinations.",
    country: "Greece",
    days: 8,
    amount: "$1299",
  },
  {
    date: "2025-06-11",
    image: tour6,
    icon: "fas fa-hiking",
    title: "Hiking Trails",
    text: "Challenge yourself on scenic hiking paths through breathtaking landscapes.",
    country: "New Zealand",
    days: 6,
    amount: "$999",
  },
];

const sectionData = [
  { id: 1, type: "Home" },
  { id: 2, type: "About" },
  { id: 3, type: "Services" },
  { id: 4, type: "Featured" },
];

const data = {
  sectionData,
  tourData,
  pageLinks,
  socialLinks,
  serviceList,
};

export default data;
