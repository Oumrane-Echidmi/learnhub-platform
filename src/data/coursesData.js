import cardim1 from '../assets/images/wd.png';
import cardim2 from '../assets/images/dis.jpg';
import cardim3 from '../assets/images/py.jpg';
import cardim4 from '../assets/images/dm.jpg';
import cardim5 from '../assets/images/smw.jpg'; 
import cardim6 from '../assets/images/dk.jpg';
import cardim7 from '../assets/images/MBA.jpg';

import instSarah from '../assets/images/instructors/sarah.png';
import instMike from '../assets/images/instructors/mike.png';
import instEmma from '../assets/images/instructors/emma.png';
import instAngela from '../assets/images/instructors/angela.png';

import stuMichael from '../assets/images/students/michael.png';
import stuJessica from '../assets/images/students/jessica.png';
import stuDavid from '../assets/images/students/david.png';

const commonReviews = [
  {
    id: 1,
    name: "Michael P.",
    avatar: stuMichael,
    rating: 5,
    comment: "This course is amazing! The instructor explains everything so clearly. I went from knowing nothing to building my own projects in weeks."
  },
  {
    id: 2,
    name: "Jessica T.",
    avatar: stuJessica,
    rating: 5,
    comment: "Best investment I've made for my career. The projects are real-world relevant and the support is great."
  },
  {
    id: 3,
    name: "David L.",
    avatar: stuDavid,
    rating: 4.5,
    comment: "Excellent content and pacing. I particularly liked the practical exercises."
  }
];

const coursesData = [
  {
    id: 1,
    title: "Full Stack Web Development Bootcamp",
    author: "Sarah Johnson",
    rating: 4.8,
    price: "$89.99",
    image: cardim1,
    badge: "Development",
    badgeClass: "badge-blue",
    desc: "Master HTML, CSS, JavaScript, React and Node.js. Build real-world projects and become a full-stack web developer.",
    category: "Web Development",
    instructorImage: instSarah,
    reviews: commonReviews
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    author: "Mike Smith",
    rating: 4.9,
    price: "$59.99",
    image: cardim2,
    badge: "Design",
    badgeClass: "badge-purple",
    desc: "Learn Figma, user research, and design thinking. Create beautiful and functional user interfaces.",
    category: "Design",
    instructorImage: instMike,
    reviews: commonReviews
  },
  {
    id: 3,
    title: "Social Media Marketing Strategy",
    author: "Emma Davis",
    rating: 4.6,
    price: "$39.99",
    image: cardim5,
    badge: "Marketing",
    badgeClass: "badge-orange",
    desc: "Master social media marketing strategies to grow your business and reach more customers.",
    category: "Marketing",
    instructorImage: instEmma,
    reviews: commonReviews
  },
  {
    id: 4,
    title: "Python for Data Science",
    author: "Dr. Angela Yu",
    rating: 4.9,
    price: "$94.99",
    image: cardim3,
    badge: "Data Science",
    badgeClass: "badge-green",
    desc: "Learn Python, pandas, and machine learning fundamentals. Analyze data and build predictive models.",
    category: "Data Science",
    instructorImage: instAngela,
    reviews: commonReviews
  },
  {
    id: 5,
    title: "The Complete MBA Course",
    author: "Chris Haroun",
    rating: 4.5,
    price: "$29.99",
    image: cardim7,
    badge: "Business",
    badgeClass: "badge-blue",
    desc: "Learn everything you need to know about business, from strategy to finance to marketing.",
    category: "Business",
    instructorImage: instMike, // Reusing Mike for Chris
    reviews: commonReviews
  },
  {
    id: 6,
    title: "Docker and Kubernetes Guide",
    author: "Stephen Grider",
    rating: 4.8,
    price: "$69.99",
    image: cardim6,
    badge: "DevOps",
    badgeClass: "badge-purple",
    desc: "Master Docker and Kubernetes. Build, deploy, and scale containerized applications.",
    category: "DevOps",
    instructorImage: instMike, // Reusing Mike for Stephen
    reviews: commonReviews
  },
  {
    id: 7,
    title: "Digital Marketing Essentials",
    author: "Emma Davis",
    rating: 4.9,
    price: "$49.99",
    image: cardim4,
    badge: "Marketing",
    badgeClass: "badge-orange",
    desc: "SEO, social media, content marketing essentials.",
    category: "Marketing",
    instructorImage: instEmma,
    reviews: commonReviews
  }
];

export default coursesData;
