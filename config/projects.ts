import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "ccsync",
    companyName: "CCSync",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A PHP-based student and semestral management system for digitized record keeping and record efficiency.",
    websiteLink: "https://ccsync-v1.vercel.app",
    githubLink: "https://github.com/radleigh123/ccsync-v1",
    techStack: [
      "MySQL",
      "Laravel",
      "PHP",
      "Javascript",
      "Bootstrap",
      "Vercel",
    ],
    startDate: new Date("2025-08-04"),
    endDate: new Date("2025-12-10"),
    companyLogoImg: "/projects/ccsync/logo.png",
    pagesInfoArr: [
      {
        title: "Landing & Sections",
        description:
          "A clean, minimal landing page with sections for member, event, requirement, and officer managements.",
        imgArr: ["/projects/ccsync/dashboard.jpeg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "CCSync is a PHP-based student and semestral management platform designed to streamline and digitize organizational processes, starting with the College of Computer Studies.",
        "It manages student records, requirements, events, and officer information, ensuring smooth and paperless transactions. The system aims to replace manual forms and logs for semestral requirements (such as membership fees and event attendance) with a centralized, consistent, and accessible platform.",
      ],
      bullets: [
        "Architected a robust MVC-based system using **Laravel and PHP** to digitize manual record-keeping for the College of Computer Studies.",
        "Designed a **normalized MySQL database schema** to efficiently handle complex relationships between student profiles, event attendance, and financial records.",
        "Implemented secure **CRUD operations** to streamline semestral requirements, ensuring data consistency and reducing administrative overhead.",
      ],
    },
  },
  {
    id: "smart-dustbin",
    companyName: "Smart Dustbin",
    type: "Personal",
    category: ["Mobile Dev", "Full Stack", "IoT Dev", "Cloud"],
    shortDescription:
      "A simple IoT-based smart trash bin that utilizes a sensors to measure data and integrate with real-time services for online updates. Designed as a beginner-friendly project to explore the intersection of hardware, mobile cloud integration, and Internet of Things (IoT).",
    githubLink: "https://github.com/radleigh123/smart-dustbin",
    techStack: ["Native Android", "Firebase"],
    startDate: new Date("2025-09-14"),
    endDate: new Date("2025-12-13"),
    companyLogoImg: "/projects/smart-dustbin/logo.jpg",
    pagesInfoArr: [
      {
        title: "Device Diagram",
        description:
          "Data transmission between the ESP32 microntroller, client, and cloud (Firebase).",
        imgArr: ["/projects/smart-dustbin/diagram.png"],
      },
      {
        title: "Firebase Database",
        description:
          "Real-time database structure for efficient data management",
        imgArr: ["/projects/smart-dustbin/firebase.jpeg"],
      },
      {
        title: "Notifications",
        description:
          "Timeline stamped notifications for fast bin tracking",
        imgArr: ["/projects/smart-dustbin/bin-notif-portrait.png"],
      },
      {
        title: "Bin Detail",
        description: "Comprehensive bin dashboard for informative management",
        imgArr: ["/projects/smart-dustbin/bin-details-portrait.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "The SmartDustbin successfully establishes a proof-of-concept for reliable, low-cost institutional waste management. By prioritizing operational continuity through an AC-powered design, the system overcomes the energy constraints of previous battery-operated models.",
        "To enhance usability, the application implements event-driven automation using Firebase Cloud Messaging (FCM). The system monitors data thresholds and triggers immediate push notifications when capacity limits are breached, effectively closing the loop between data acquisition, processing, and user action.",
      ],
      bullets: [
        "Engineered a **real-time IoT-to-Cloud pipeline** by integrating ESP32 sensors with **Firebase Realtime Database** to stream waste levels instantaneously.",
        "Implemented event-driven logic using **Firebase Cloud Messaging (FCM)** to trigger automated push notifications when storage capacity thresholds are breached.",
        "Developed a native Android application (Java/Kotlin) that establishes **two-way data synchronization**, allowing for remote hardware monitoring and control.",
      ],
    },
  },
  {
    id: "trabahunt",
    companyName: "TrabaHunt",
    type: "Personal",
    category: ["Full Stack", "Software"],
    shortDescription:
      "The Job Portal System is designed to facilitate the interaction between employers, employees, and experts. It provides a platform for job postings, applications, and expert advice on job-related topics.",
    githubLink: "https://github.com/radleigh123/EldnetFinals-fork1",
    techStack: ["C#", "ASP.NET", "SQL Server"],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2024-09-13"),
    companyLogoImg: "/projects/trabahunt/logo.png",
    pagesInfoArr: [
      {
        title: "System ERD",
        description:
          "",
        imgArr: ["/projects/trabahunt/flowchart.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "TrabaHunt is a comprehensive Job Portal System engineered to bridge the gap between employers, job seekers, and industry experts. The platform architecture supports four distinct user roles, each with specialized workflows—ranging from high-volume job listing management for employers to content distribution for career experts.",
      ],
      bullets: [
        "Architected a multi-tenant role-based system (RBAC) to manage distinct permissions and workflows for Employers, Employees, Experts, and Administrators.",
        "Developed a centralized Application Tracking System (ATS) that streamlines the hiring pipeline from initial job posting to candidate communication.",
        "Implemented a secure user authentication and document management system to protect sensitive candidate data and private employment records.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
