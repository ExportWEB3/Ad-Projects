// In src/utilities/data.ts

import { registerationDataAttributes } from "./typedec";

export const reviews = [
  {
    date: "Apr 24, 2025",
    stars: 5,
    text: "Tildette makes my life 10x easier!”",
    desc: "I work with a series of gyms and franchises and I love that Tildette allows me to post on all of my individual platforms but also allows me to cross promote when I need to! The option to customize my captions for each platform is a game changer.",
    user: "Courtney W.",
    role: "Social Media Manager",
    img: "/src/Images/courtney.webp"
  },
  {
    date: "Mar 15, 2025",
    stars: 4,
    text: "“A must-have for social teams!”",
    desc: "Tildette helps our team stay organized and on top of our content calendar. Scheduling and analytics are super easy to use and save us hours every week.",
    user: "Alex P.",
    role: "Content Strategist",
    img: "/src/Images/alex.webp"
  },
  {
    date: "Feb 2, 2025",
    stars: 5,
    text: "“Best tool for managing multiple brands”",
    desc: "Managing several brands is a breeze with Tildette. The dashboard is intuitive and the reporting features are top notch.",
    user: "Jamie L.",
    role: "Brand Manager",
    img: "/src/Images/jamie.jpg"
  },
  {
    date: "Jan 10, 2025",
    stars: 5,
    text: "“Excellent customer support”",
    desc: "Whenever we have a question, the Tildette support team is quick to help. The platform is reliable and always improving.",
    user: "Morgan S.",
    role: "Digital Marketer",
    img: "/src/Images/morgan.webp"
  },
  {
    date: "Dec 22, 2024",
    stars: 4,
    text: "“Great for analytics and reporting”",
    desc: "The analytics dashboard gives us all the insights we need to improve our campaigns. Highly recommend for any business serious about social media.",
    user: "Taylor R.",
    role: "Marketing Analyst",
    img: "/src/Images/taylor.webp"
  }
];


export const RegisterData: registerationDataAttributes[] = [
  {
    field: 'Email',
    name: "email",
  },
  {
    field: 'Password',
    name: "password",
  },
  {
    field: 'Confirm Password',
    name: "confirmPassword",
  }
];