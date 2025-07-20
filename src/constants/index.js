import project3 from "../assets/projects/Dashboard.png";
import project2 from "../assets/projects/RepoRadar.png";
import project1 from "../assets/projects/CarbonTrace2.png"

export const HERO_CONTENT = `I'm a full-stack developer with a focus on building scalable and responsive web apps using React, Next.js, TypeScript, and Node.js. I enjoy working across the stack—from crafting clean UIs to deploying apps with Docker, AWS, and CI/CD pipelines.

I've built projects like RepoRadar, PayZap, and CarbonTrace (a CodeUtsava 8.0 finalist), combining functionality with performance. I'm also exploring DevOps, blockchain, and AI to push my skills further.`;

export const ABOUT_TEXT = `I'm Avirup Ghosal, a passionate full-stack developer and computer science undergrad at UEM, Kolkata. I'm passionate about building real-world applications that solve meaningful problems—from intelligent repo search tools to secure payment simulations. My tech stack includes
 React, Next.js, TypeScript, Node.js, MongoDB, Docker, Ansible and AWS with a keen interest in DevOps and AI integrations. I thrive on challenges and love learning new technologies to enhance my skills.`;

export const EXPERIENCES = [
  
];

export const PROJECTS = [
  {
    title: "CarbonTrace- Real-time Coal Transport Monitoring Dashboard",
    image: project1,
    description:
      "Developed the frontend for CarbonTrace, a train tracking and coal transport security platform built for a hackathon. Designed and implemented dynamic components, including data visualization pages for train weight analysis, anomaly detection, and coal moisture tracking, enabling real-time monitoring of inconsistencies and potential theft. Ensured a seamless React-based UI with interactive graphs for effective data interpretation.",
    technologies: ["HTML", "Tailwind CSS", "React", "Node.js", "MongoDB"],
  },
  {
  title: "RepoRadar- AI-Powered GitHub Repository Explorer",
  image: project2,
  description:
    "Built RepoRadar, an AI-powered GitHub repository explorer that leverages the Gemini API to analyze and summarize project repositories. Developed a clean and responsive Next.js frontend with server-side rendering, allowing developers to gain insights into codebases quickly. Integrated intelligent summaries, repo insights, and search features to streamline open-source exploration.",
  technologies: ["Next.js", "Tailwind CSS", "Node.js", "Gemini API", "Docker","AWS EC2","Github Actions"],
},
{
  title: "PayZap- Three Tier Payment Simulator",
  image: project3,
  description:
    "Created PayZap, a three-tier peer-to-peer payment simulator showcasing secure wallet transactions and authentication. Implemented a robust backend with Node.js and Express, integrated JWT-based authentication, and designed a responsive React frontend. Simulated real-time user interactions, transaction history tracking, and digital wallet balance updates, demonstrating secure digital finance workflows. Utilized MongoDB for efficient data persistence of users, wallets, and transactions. Containerized the full-stack application using Docker, and deployed it on AWS EC2 with Docker Compose and NGINX reverse proxy, ensuring scalable deployment and production-level availability.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "JWT","Docker","AWS EC2","NGINX"],
},
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+91 8274071344",
  email: "avirupghosal2023@gmail.com",
};
