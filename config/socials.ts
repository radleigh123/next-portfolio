import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@radleigh123",
    icon: Icons.gitHub,
    link: "https://github.com/radleigh123",
  },
  {
    name: "LinkedIn",
    username: "Keane Radleigh C. Inting",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/keane-radleigh-inting-4722901a3",
  },
  {
    name: "Twitter",
    username: "@keaneradleigh",
    icon: Icons.twitter,
    link: "https://x.com/keaneradleigh",
  },
  {
    name: "Gmail",
    username: "keaneradleigh123",
    icon: Icons.gmail,
    link: "mailto:keaneradleigh123@gmail.com",
  },
];
