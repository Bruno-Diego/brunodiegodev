import {
    ecommerce,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    aws,
    www,
    copacabana,
    bdcrypto,
    snakegame,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "E-Commerce Developer",
      icon: ecommerce,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Junior Full stack Developer",
      company_name: "Free lancing",
      icon: www,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using Javascript, Python and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Center Operations Tecnician",
      company_name: "AWS",
      icon: aws,
      iconBg: "#383E56",
      date: "Jul 2020 - Jan 2023",
      points: [
        "Work on fast-paced environment with a high volume of customers seeking to meet Service Level Agreement (SLA) related to the aspects of hardware and software systems.",
        "Proficiency in the troubleshooting and resolution of all queries in a team environment.",
        "Determining the nature of faults and the steps required to rectify it with use of tickets.",
        "Take Ownership on situations to bring the company long-term value.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
      name: "Aloy Horizon",
      designation: "CFO",
      company: "HZD",
      image: "https://static1.personality-database.com/profile_images/5301e5ed5236490e9b404301b91353a5.png",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like this guy does.",
      name: "Joel da Leste Ofãs",
      designation: "COO",
      company: "TLOU",
      image: "https://avatar-cdn.tracker.gg/api/avatar/2/VerixVerck.png",
    },
    {
      testimonial:
        "After this man optimized our website, our traffic increased by 50%. We can't thank him enough!",
      name: "Silvio",
      designation: "CTO",
      company: "Spin the Wheel Show",
      image: "https://cdn1.mundodastribos.com/713183-Silvio-Santos-se-nega-a-criar-programa-para-mulheres-01.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Copacabana Jewellery",
      description:
        "Web-based E-Commerce platform that allows users to buy jewellery.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: copacabana,
      source_code_link: "https://github.com/Bruno-Diego/copacabana-pp5/",
    },
    {
      name: "BDCrypto Portfolios",
      description:
        "Cryptocurrency portfolio tracker Website Project that allow user to add crypto assets and manage them.",
      tags: [
        {
          name: "Python and Javascrypt",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Django",
          color: "pink-text-gradient",
        },
      ],
      image: bdcrypto,
      source_code_link: "https://github.com/Bruno-Diego/bdcrypto-portfolio4/",
    },
    {
      name: "Snake Game",
      description:
        "A Javascript based version of the classic snake game.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: snakegame,
      source_code_link: "https://github.com/Bruno-Diego/ci-portfolio2/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };