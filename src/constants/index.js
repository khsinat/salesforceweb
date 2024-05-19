import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  integrate,
  notification2,
  notification3,
  notification4,
  notion,
  outsource,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  training,
  twitter,
  webdev,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Om is a 12x Salesforce Certified Application Architect",
  "Om's expertise in Salesforce includes a wide range of areas",
  "He takes a consultative approach to every project, working closely with clients",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Web development",
    text: "Make web applications that scale and cater to the needs of the client",
    date: "May 2023",
    status: "done",
    imageUrl: webdev,
    colorful: true,
  },
  {
    id: "1",
    title: "Outsourcing",
    text: "We can connect you with the people who are expert in their domains to help you with the problem",
    date: "May 2023",
    status: "progress",
    imageUrl: outsource,
  },
  {
    id: "2",
    title: "Corporate Training",
    text: "We train the people so as to help them excel in their careers and make them work towards a better future",
    date: "May 2023",
    status: "done",
    imageUrl: training,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: integrate,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Appy Taas",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "Salesforce Technical Architect: 1",
      "Salesforce Consultant: 1",
      "Salesforce Developer: 2",
    ],
  },
  {
    id: "1",
    title: "Appy Taas",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "Salesforce Developer: 2",
      "Salesforce Admin: 1",
      "Salesforce QA: 1",
    ],
  },
  {
    id: "2",
    title: "Appy Taas",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "Salesforce Consultant: 1",
      "Salesforce Developer: 2",
      "Salesforce Admin: 1",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Salesforce Consulting",
    text: "We are a team of highly expertise and experience in Salesforce which has enabled us to implement and support various business use cases in the Sales, Service, Experience, and Marketing Clouds.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Salesforce AppExchange App Development",
    text: "Do you have an amazing idea that can fill the gap for specific business needs? We have a strong understanding of managing the complete application lifecycles on AppExchange.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Corporate Training",
    text: "Enable your team with new learning, skills, and adoption of on-demand technology. Let’s connect with our experts and certified Trainers.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Outsourcing",
    text: "Let’s add diversity to your team by collaborating with our skilled professionals to enhance productivity.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Web Development",
    text: "We have structured our web designing packages to fit your needs, not just your budget. The most exceptional web design & development services that we offer, described below, is a breakdown of our service packages.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "On-demand Interviewer for your hiring",
    text: "Accelerate your hiring process by collaborating with our industry-proven interview experts.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
