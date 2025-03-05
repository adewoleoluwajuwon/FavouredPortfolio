import {
  facebook,
  instagram,
  shieldTick,
  online,
  support,
  home,
  twitter,
} from "/assets/icons";
import {
  bigfavour1,
  bigfavour2,
  bigfavour3,
  customer1,
  customer2,
  activity1,
  activity2,
  activity3,
  activity4,


  // new on portfolio
  thumbnailFavour1,
  thumbnailFavour2,
  thumbnailFavour3,
} from "/assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Me" },
  { href: "#products", label: "Teaching Approach" },
  { href: "#contact-us", label: "Contact" },
];

export const favourImages = [
  {
    thumbnail: thumbnailFavour1,
    favour: bigfavour1,
  },
  {
    thumbnail: thumbnailFavour2,
    favour: bigfavour2,
  },
  {
    thumbnail: thumbnailFavour3,
    favour: bigfavour3,
  },
];

export const statistics = [
  { value: "10+", label: "years of inspiring young minds!" },
  { value: "95%", label: " of students achieve top grades!" },
  { value: "Rated 4.9⭐", label: " by students & parents!" },
];

export const services = [
  {
    imgURL: home,
    label: "Home Lessons",
    subtext: "Personalized one-on-one teaching sessions tailored to your child's learning needs in the comfort of your home.",
  },
  {
    imgURL: shieldTick,
    label: "Classroom Lessons",
    subtext:"Engaging group learning experiences designed to foster social skills, teamwork, and knowledge growth.",

  },
  {
    imgURL: support,
    label: "Curriculum Building",
    subtext: "Expertly designed lesson plans and structured learning materials to enhance early childhood education.",
  },
  {
    imgURL: online,
    label: "Online Lessons",
    subtext: "Interactive and engaging virtual lessons tailored for young learners, fostering creativity and foundational skills from the comfort of home.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Mrs. Racheal Ade",
    category: "Parent",
    rating: 5,
    feedback:
      "The home lessons have been a game-changer for my child! Mrs. Favour is patient and engaging, making learning so much fun!",
  },
  {
    imgURL: customer2,
    customerName: "Prince Segun Logan",
    category: "School Administrator",
    rating: 4.8,
    feedback:
      "The structured curriculum support has improved our teaching methods significantly. Students are now more enthusiastic about learning!",
  },
  // {
  //   imgURL: customer3,
  //   customerName: "Rebecca Philips",
  //   category: "Student",
  //   rating: 5,
  //   feedback:
  //     "I love learning with Mrs. Favour! The fun activities and interactive lessons make every class exciting. I feel so confident now!",
  // },
];


export const footerLinks = [
  {
    title: "Learning Resources",
    links: [
      { name: "Interactive Storybooks", link: "/" },
      { name: "Educational Games", link: "/" },
      { name: "Phonics & Reading Tools", link: "/" },
      { name: "Creative Worksheets", link: "/" },
      { name: "Fun Learning Videos", link: "/" },
      { name: "Hands-on Activities", link: "/" },
    ],
  },
  
  {
    title: "Help",
    links: [
      { name: "About Me", link: "#about-us" },
      { name: "FAQs", link: "/" },
      { name: "Teaching Approach", link: "/" },
      { name: "Privacy Policy", link: "/" },
      { name: "Terms & Conditions", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "favorjadebayo1996@gmail.com", link: "mailto:favorjadebayo1996@gmail.com" },
      { name: "09018878650", link: "tel:+2349018878650" },
      { name: "WhatsApp", link: "https://wa.link/fmpsd3" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo", link: "https://www.facebook.com/favorj.adebayo" },
  { src: twitter, alt: "twitter logo", link: "" },
  { src: instagram, alt: "instagram logo", link: "http://instagram.com/favorjadebayo/" },
];


export const Activities = [
  {
    imgURL: activity1,
    name: "Storytelling & Reading  📖",
    price: "$80",
  },
  {
    imgURL: activity2,
    name: "Hands-on Math Activities 🧮",
    price: "$100",
  },
  {
    imgURL: activity3,
    name: "Science & Nature Activities 🌱",
    price: "$220.20",
  },
  {
    imgURL: activity4,
    name: "Puzzle & Problem-Solving Games 🧩",
    price: "$230.20",
  },
];
