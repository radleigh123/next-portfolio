import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "windsgate",
    position: "Software Monitoring Engineer",
    company: "Wind's Gate Philippines Inc.",
    location: "Cebu, Philippines",
    startDate: new Date("2024-08-01"),
    endDate: "Present",
    description: [
      "Worked closely with software engineers to report website and system logs.",
      "Identified and reported any pauses, freezes, or delays in live cryptocurrency rate feeds to the software engineering team.",
      "Maintained constant focus to identify and report shifts in system behavior.",
    ],
    achievements: [
      "Documented recurring system anomalies and 'freeze' patterns, contributing to a knowledge base that improved long-term system stability.",
      "Maintained 99.9% vigilance over high-frequency data streams, ensuring data integrity for real-time financial rate updates."
    ],
    skills: ["Nihongo", "Laravel", "React", "Java"],
    companyUrl: "https://windsgate.com/",
    logo: "/experience/windsgate-logo.png",
  },
];
