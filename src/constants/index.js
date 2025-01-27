import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    reactjs,
    cpp,
    nodejs,
    mongodb,
    dailyScribble,
    backIt,
    proxy,
    swoc,
    dwh,
    criss
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
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
      title: "MERN Developer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "Problem Solver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  ];
  
  const experiences = [
    {
      title: "Open Source Contributor",
      company_name: "Social Winter of Code",
      icon: swoc,
      iconBg: "#383E56",
      date: "Jan 2025 - Present",
      points: [
        "Developed and integrated Text2ReadMe, an open-source tool automating README creation, into the SWOC repository via an initial GitHub pull request."
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company_name: "Criss Cross Solutions LLP",
      icon: criss,
      iconBg: "#383E56",
      date: "Oct 2023 - Dec 2023",
      points: [
        "Developed a network performance monitoring tool using React, Node.js, Express, and MongoDB, delivering a responsive UI and seamless REST API integration for real-time diagnostics."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Delhi Web Hosting",
      icon: dwh,
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Sep 2023",
      points: [
        "Improved user experience and increased page load speed by 30% by enhancing the company’s website using HTML, CSS, JavaScript, jQuery, and Bootstrap, optimizing code structure, and implementing responsive design."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Multi-Threaded Server",
      description:
        "Built a multi-threaded proxy server with LRU caching, improving performance by 40% and cutting cached response times by 90%.",
      tags: [
        {
          name: "C",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "POSIX",
          color: "pink-text-gradient",
        },
        {
          name: "Multi-Threading",
          color: "yellow-text-gradient",
        },
      ],
      image: proxy,
      source_code_link: "https://github.com/R0hanNayan/Multithreaded-Proxy-Web-Server",
    },
    {
      name: "BackIt",
      description:
        "A decentralized crowdfunding platform facilitating MetaMask wallet integration for ETH donations and campaign creation.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
        {
          name: "Solidity",
          color: "yellow-text-gradient",
        },
        {
          name: "ThirdWeb",
          color: "green-text-gradient",
        }
      ],
      image: backIt,
      source_code_link: "https://github.com/R0hanNayan/BackIt",
    },
    {
      name: "Daily Scribble",
      description:
        "Web-based platform that allows users to read, write and share their daily musings, thoughts, and ideas with others.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodeJs",
          color: "pink-text-gradient",
        },
        {
          name: "expressJs",
          color: "yellow-text-gradient",
        },
      ],
      image: dailyScribble,
      source_code_link: "https://github.com/R0hanNayan/Daily-Scribble-2.0",
    },
    // {
    //   name: "Keeper",
    //   description:
    //     "A Google Keep clone that helps user to keep track of their tasks.",
    //   tags: [
    //     {
    //       name: "react",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: keeper,
    //   source_code_link: "https://github.com/R0hanNayan/Keeper",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };