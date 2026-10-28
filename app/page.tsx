"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

/** Simple diagonal arrow matching the hero button reference. */
function ArrowBadge() {
  return (
    <span
      aria-hidden="true"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flex: "0 0 20px",
        width: 20,
        height: 20,
        marginLeft: 2,
        verticalAlign: "middle",
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <path
          d="M6 18 18 6M8 6h10v10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/** Brand starburst drawn as vector paths so iOS, Android and desktop render identically. */
function StarburstIcon({ size = "1em" }: { size?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        verticalAlign: "middle",
      }}
    >
      <path
        d="M24 2.5V45.5M2.5 24H45.5M8.8 8.8L39.2 39.2M39.2 8.8L8.8 39.2"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

/** Vector arrow for decorative arrows and links; avoids platform-dependent glyphs. */
function ArrowUpRightIcon({ size = "1em" }: { size?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        verticalAlign: "middle",
      }}
    >
      <path
        d="M5 19 19 5M7 5h12v12"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

/** Fixed-vector symbols for skill cards; never relies on OS emoji fonts. */
function CommandKeyIcon({ size = "1em" }: { size?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        verticalAlign: "middle",
      }}
    >
      <path
        d="M8 8V5.5a2.5 2.5 0 1 0-2.5 2.5H8Zm0 0h8m0 0V5.5a2.5 2.5 0 1 1 2.5 2.5H16Zm0 0v8m0 0h2.5a2.5 2.5 0 1 1-2.5 2.5V16Zm0 0H8m0 0v2.5A2.5 2.5 0 1 1 5.5 16H8Zm0 0V8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EnterKeyIcon({ size = "1em" }: { size?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        verticalAlign: "middle",
      }}
    >
      <path
        d="M20 5v6a3 3 0 0 1-3 3H5m0 0 4-4m-4 4 4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowDownIcon({ size = "1em" }: { size?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        verticalAlign: "middle",
      }}
    >
      <path
        d="M12 4v16M5 13l7 7 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon({ size = "1em" }: { size?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        verticalAlign: "middle",
      }}
    >
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon({ size = "1em" }: { size?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        verticalAlign: "middle",
      }}
    >
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SunIcon({ size = "1em" }: { size?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        verticalAlign: "middle",
      }}
    >
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ size = "1em" }: { size?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      style={{
        display: "inline-block",
        flex: "0 0 auto",
        verticalAlign: "middle",
      }}
    >
      <path
        d="M20.5 15.5A8.7 8.7 0 0 1 8.5 3.5a8.9 8.9 0 1 0 12 12Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SkillSymbolIcon({
  symbol,
  size = "1em",
}: {
  symbol: string;
  size?: string;
}) {
  const shared = {
    "aria-hidden": true as const,
    viewBox: "0 0 48 48",
    width: size,
    height: size,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    focusable: false as const,
    style: {
      display: "block" as const,
      flex: "0 0 auto" as const,
      overflow: "visible" as const,
    },
  };

  switch (symbol) {
    case "design":
      return (
        <svg {...shared}>
          <rect
            x="7"
            y="7"
            width="15"
            height="15"
            rx="4"
            stroke="currentColor"
            strokeWidth="3"
          />
          <rect
            x="26"
            y="7"
            width="15"
            height="15"
            rx="4"
            stroke="currentColor"
            strokeWidth="3"
          />
          <rect
            x="7"
            y="26"
            width="15"
            height="15"
            rx="4"
            stroke="currentColor"
            strokeWidth="3"
          />
          <rect
            x="26"
            y="26"
            width="15"
            height="15"
            rx="4"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      );
    case "wireframe":
      return (
        <svg {...shared}>
          <rect
            x="6"
            y="7"
            width="36"
            height="34"
            rx="3"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M6 18h36M6 29h36M18 7v34M30 7v34"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>
      );
    case "research":
      return (
        <svg {...shared}>
          <circle
            cx="21"
            cy="20"
            r="12"
            stroke="currentColor"
            strokeWidth="3.5"
          />
          <path
            d="m30 29 10 10"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "prototype":
      return (
        <svg {...shared}>
          <rect
            x="5"
            y="6"
            width="29"
            height="25"
            rx="3"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path d="M5 13h29" stroke="currentColor" strokeWidth="3" />
          <circle cx="10" cy="9.5" r="1" fill="currentColor" />
          <circle cx="14" cy="9.5" r="1" fill="currentColor" />
          <path
            d="m25 25 14 15-1-8 7-1-20-6Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "testing":
      return (
        <svg {...shared}>
          <rect
            x="9"
            y="5"
            width="30"
            height="38"
            rx="3"
            stroke="currentColor"
            strokeWidth="3"
          />
          <path
            d="M15 15h18M15 22h18M15 29h18M15 36h12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "systems":
      return (
        <svg {...shared}>
          <path
            d="M8 39 39 8M17 8h22v22"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
        </svg>
      );
    case "visual":
      return (
        <svg {...shared}>
          <path
            d="m10 34 2-8L31 7l10 10-19 19-8 2Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          <path
            d="m27 11 10 10M12 26l10 10"
            stroke="currentColor"
            strokeWidth="2.5"
          />
        </svg>
      );
    case "strategy":
      return (
        <svg {...shared}>
          <circle
            cx="24"
            cy="24"
            r="18"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle
            cx="24"
            cy="24"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="24" cy="24" r="3.5" fill="currentColor" />
        </svg>
      );
    default:
      return <StarburstIcon size={size} />;
  }
}

function AchievementSymbolIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 48 48",
    width: "24px",
    height: "24px",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true as const,
    focusable: false as const,
    style: {
      display: "block" as const,
      flex: "0 0 auto" as const,
      maxWidth: "none" as const,
    },
  };

  switch (name) {
    case "tourism":
      return (
        <svg {...common} fill="none">
          <path
            d="M14 8h20v10a10 10 0 0 1-20 0V8Z"
            fill="#F6C445"
            stroke="#B88016"
            strokeWidth="2.5"
          />
          <path
            d="M14 12H8v5a8 8 0 0 0 8 8M34 12h6v5a8 8 0 0 1-8 8"
            stroke="#B88016"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M24 28v7m-7 5h14m-11-5h8"
            stroke="#B88016"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "integrity":
      return (
        <svg {...common} fill="none">
          <path
            d="M24 4 40 10v12c0 10-7 17-16 22C15 39 8 32 8 22V10L24 4Z"
            fill="#E56B65"
            stroke="#A94342"
            strokeWidth="2.5"
          />
          <path
            d="m18 24 4 4 9-10"
            stroke="#FFF7F1"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "technology":
      return (
        <svg {...common} fill="none">
          <rect
            x="7"
            y="7"
            width="34"
            height="25"
            rx="3"
            fill="#263746"
            stroke="#172635"
            strokeWidth="2"
          />
          <rect x="11" y="11" width="26" height="17" rx="1" fill="#B8DDF4" />
          <path
            d="M3 37h42l-4 5H7l-4-5Z"
            fill="#718696"
            stroke="#263746"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "ux-competition":
      return (
        <svg {...common} fill="none">
          <path d="M14 5h8v18l-4 4-4-4V5Z" fill="#D94B53" />
          <path d="M26 5h8v18l-4 4-4-4V5Z" fill="#3978BE" />
          <circle
            cx="24"
            cy="28"
            r="13"
            fill="#F6C445"
            stroke="#B88016"
            strokeWidth="2.5"
          />
          <path
            d="m24 19 2.6 5.4 6 .9-4.3 4.2 1 6-5.3-2.8-5.3 2.8 1-6-4.3-4.2 6-.9L24 19Z"
            fill="#FFF8D9"
          />
        </svg>
      );
    case "design-competition":
      return (
        <svg {...common} fill="none">
          <path
            d="M24 5C13 5 5 13 5 23c0 9 7 16 16 16h3a4 4 0 0 0 3-7c-2-3 0-6 4-6 5 0 9-3 9-8C40 11 33 5 24 5Z"
            fill="#F6D3A5"
            stroke="#A96C3B"
            strokeWidth="2.5"
          />
          <circle cx="16" cy="17" r="3" fill="#E65B5B" />
          <circle cx="25" cy="13" r="3" fill="#4D9CE8" />
          <circle cx="32" cy="19" r="3" fill="#59B77A" />
          <circle cx="17" cy="27" r="3" fill="#E2B83E" />
        </svg>
      );
    case "poland":
      return (
        <svg {...common}>
          <rect
            x="5"
            y="9"
            width="38"
            height="30"
            rx="3"
            fill="#FFFFFF"
            stroke="#CED6DF"
            strokeWidth="1.5"
          />
          <path
            d="M6 24h36v12a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V24Z"
            fill="#DC3545"
          />
        </svg>
      );
    case "malaysia":
      return (
        <svg {...common}>
          <rect
            x="4"
            y="8"
            width="40"
            height="32"
            rx="3"
            fill="#FFFFFF"
            stroke="#D4DCE5"
            strokeWidth="1"
          />
          <path
            d="M5 11h38v4H5Zm0 8h38v4H5Zm0 8h38v4H5Zm0 8h38v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
            fill="#D92F3A"
          />
          <path d="M5 11a3 3 0 0 1 3-3h14v16H5Z" fill="#2459A6" />
          <path d="M14 11a5 5 0 1 0 5 8 6 6 0 1 1-5-8Z" fill="#FFD24A" />
          <path
            d="m19 11 .9 2 2.1.2-1.6 1.4.5 2-1.9-1-1.9 1 .5-2-1.6-1.4 2.1-.2Z"
            fill="#FFD24A"
          />
        </svg>
      );
    default:
      return <StarburstIcon size="24px" />;
  }
}

const projects = [
  {
    number: "01",
    name: "Afeksi Indonesia",
    type: "UI/UX Design · Website",
    description:
      "Designed a clearer, more approachable web experience, focusing on intuitive navigation and a user-first interface.",
    link: "https://www.figma.com/design/kK1RyKe1aKd74FInwNh8FJ/AFEKSI-WEB-FIX?node-id=4669-7448&p=f&t=yKEfBdmdABZLyR5x-0",
    label: "View design",
    tone: "mint",
    symbol: "star",
    artLabel: "DESIGN · CLARITY · CARE",
  },
  {
    number: "02",
    name: "PT Agro Biomass Nusantara",
    type: "Website Design · Biomass Energy",
    description:
      "Created a digital brand experience for an Indonesian biomass business, presenting its sustainable energy products and company information clearly.",
    link: "https://agrobiomassnusantara.com/",
    label: "View website",
    tone: "green",
    symbol: "arrow",
    artLabel: "BIOMASS · ENERGY · FUTURE",
  },
  {
    number: "03",
    name: "Bedenbender Mobile Automotive LLC",
    type: "Website Design · Automotive Services",
    description:
      "Designed a responsive website experience to introduce mobile automotive services and help customers understand the offering.",
    link: "https://bedenbender.queryflow.id/",
    label: "View website",
    tone: "blue",
    symbol: "star",
    artLabel: "MOBILE · SERVICE · TRUST",
  },
  {
    number: "04",
    name: "BECATUR",
    type: "Mobile App · UX Research",
    description:
      "A pedicab booking experience that brings passengers and local drivers together, making rides easier to arrange while supporting tourism in the community.",
    result: "Customer SUS 70.66 → 82.50 · Driver SUS 67.75 → 81.25",
    link: "https://www.figma.com/design/l2s3R0tbTiw2BtYgCHoJVp/Becatur?node-id=1-8&t=CTuBuqnSMWLpUJWW-1",
    label: "View case study",
    tone: "cyan",
    symbol: "arrow",
    artLabel: "BOOK · CONNECT · RIDE",
  },
  {
    number: "05",
    name: "Startoops",
    type: "Product Design · Freelance Platform",
    description:
      "Contributed to a freelance marketplace by simplifying key user journeys and making the platform more intuitive to use.",
    link: "https://bit.ly/PortofolioHeruu",
    label: "View portfolio",
    tone: "startoops",
    symbol: "star",
    artLabel: "DESIGN · BUILD · GROW",
  },
  {
    number: "06",
    name: "Tourism Map Wonomulyo",
    type: "Digital Product · Tourism",
    description:
      "An interactive tourism map concept that helps visitors discover local destinations and explore places of interest with ease.",
    link: "https://bit.ly/PortofolioHeruu",
    label: "View portfolio",
    tone: "blue",
    symbol: "star",
    artLabel: "EXPLORE · DISCOVER · VISIT",
  },
];

const experiences = [
  {
    date: "NOV 2025 — JAN 2026",
    company: "Purple Box · Spain",
    role: "Frontend Developer · Website UI Design",
    description:
      "Conducted user research and designed website interfaces using Figma and WordPress, collaborating with developers.",
  },
  {
    date: "MAR 2025 — JUL 2025",
    company: "PT Bantu Indonesia",
    role: "Software QA Intern · Team Lead",
    description:
      "Created test plans and test cases, tested software applications and websites, documented results, and coordinated with the development team to improve product quality.",
  },
  {
    date: "MAY 2023 — AUG 2023",
    company: "Startoops",
    role: "Product Designer Intern",
    description:
      "Designed and refined product concepts, including Bonding Card, Start Journal, and Class Mentoring.",
  },
  {
    date: "FEB 2023 — MAY 2023",
    company: "Afeksi Indonesia",
    role: "UI/UX Designer Intern · Head of Department",
    description:
      "Led UI/UX design work and redesigned the company's website to improve its visual experience.",
  },
  {
    date: "FEB 2023 — MAY 2023",
    company: "Perempuan Masa Depan ID",
    role: "Website Designer Intern",
    description:
      "Created website profile prototypes and defined typography, colors, and content structure.",
  },
  {
    date: "JAN 2023 — MAY 2023",
    company: "ITS Website Team",
    role: "UI/UX Designer Intern",
    description:
      "Designed website interfaces, selected visual styles, managed content, and contributed to periodic redesigns.",
  },
  {
    date: "NOV 2022 — APR 2023",
    company: "INDOCOR ITS",
    role: "Web Development Staff · UI/UX Designer",
    description:
      "Improved the visual design of the organization’s profile website and designed a competition website interface.",
  },
  {
    date: "AUG 2022 — APR 2023",
    company: "Society of Renewable Energy ITS (SRE ITS SC)",
    role: "IT Development Staff · UI/UX Designer",
    description:
      "Designed and refined the organization’s website, including visual styling, color choices, and content presentation.",
  },
];

const skills = [
  "Figma",
  "Wireframing",
  "User Research",
  "Prototyping",
  "Usability Testing",
  "Design Systems",
  "Visual Design",
  "Product Thinking",
];

const process = [
  [
    "01",
    "Discover",
    "Explore users’ needs, environments, motivations, and pain points.",
  ],
  ["02", "Define", "Turn research insights into a clear problem statement."],
  ["03", "Ideate", "Develop solution ideas and map possible user journeys."],
  [
    "04",
    "Design",
    "Translate ideas into wireframes, polished interfaces, and prototypes.",
  ],
  [
    "05",
    "Test",
    "Evaluate concepts with users and collect feedback to guide decisions.",
  ],
  [
    "06",
    "Refine",
    "Improve the experience through testing and ongoing iteration.",
  ],
];

const achievements = [
  [
    "tourism",
    "Favorite Tourism Ambassador",
    "Magetan Regency · 2025",
    "Tourism",
    "blue",
  ],
  [
    "integrity",
    "Patriot Integritas Muda",
    "East Java · 2025",
    "Leadership & Impact",
    "green",
  ],
  [
    "technology",
    "Hackfest Finalist",
    "Universitas Ciputra · 2024",
    "Technology",
    "purple",
  ],
  [
    "ux-competition",
    "1st Runner-Up — User Experience Design",
    "Information Systems Competition · 2022",
    "UX Competition",
    "orange",
  ],
  [
    "design-competition",
    "UI/UX Design Competition Finalist",
    "Universitas PGRI Madiun · 2023",
    "UI/UX Design",
    "pink",
  ],
  [
    "poland",
    "Student Exchange",
    "University of Łódź, Poland · 2025",
    "International Experience",
    "sky",
  ],
  [
    "malaysia",
    "Study Exchange",
    "Universiti Malaya, Malaysia · 2025",
    "International Experience",
    "mint",
  ],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const [projectViews, setProjectViews] = useState<Record<string, number>>({});
  const [projectLikes, setProjectLikes] = useState<Record<string, number>>({});
  const [likedProjects, setLikedProjects] = useState<Record<string, boolean>>(
    {},
  );
  const [statsRun, setStatsRun] = useState(0);
  const [statsNumbers, setStatsNumbers] = useState({
    years: 0,
    projects: 0,
    gpa: 0,
  });

  // Restore the visitor's preferred color theme after hydration.
  useEffect(() => {
    try {
      setDarkMode(localStorage.getItem("heru-portfolio-theme") === "dark");
    } catch {
      // Keep light mode if browser storage is unavailable.
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode((current) => {
      const next = !current;
      try {
        localStorage.setItem("heru-portfolio-theme", next ? "dark" : "light");
      } catch {
        // Theme still changes for the current visit if storage is unavailable.
      }
      return next;
    });
  };

  // Load per-browser project engagement data after hydration.
  useEffect(() => {
    try {
      setProjectViews(
        JSON.parse(localStorage.getItem("heru-home-project-views") || "{}"),
      );
      setProjectLikes(
        JSON.parse(localStorage.getItem("heru-home-project-likes") || "{}"),
      );
      setLikedProjects(
        JSON.parse(localStorage.getItem("heru-home-project-liked") || "{}"),
      );
    } catch {
      // Keep the default zero values if local storage is unavailable.
    }
  }, []);

  const registerProjectView = (projectName: string) => {
    try {
      const key = `heru-home-project-viewed-${projectName}`;
      if (sessionStorage.getItem(key)) return;
      sessionStorage.setItem(key, "1");
      setProjectViews((current) => {
        const next = {
          ...current,
          [projectName]: (current[projectName] || 0) + 1,
        };
        localStorage.setItem("heru-home-project-views", JSON.stringify(next));
        return next;
      });
    } catch {
      // The cards still work if browser storage is disabled.
    }
  };

  const toggleProjectLike = (projectName: string) => {
    const isLiked = Boolean(likedProjects[projectName]);
    const nextLiked = { ...likedProjects, [projectName]: !isLiked };
    const nextLikes = {
      ...projectLikes,
      [projectName]: Math.max(
        0,
        (projectLikes[projectName] || 0) + (isLiked ? -1 : 1),
      ),
    };
    setLikedProjects(nextLiked);
    setProjectLikes(nextLikes);
    try {
      localStorage.setItem(
        "heru-home-project-liked",
        JSON.stringify(nextLiked),
      );
      localStorage.setItem(
        "heru-home-project-likes",
        JSON.stringify(nextLikes),
      );
    } catch {
      // Keep the interactive state even if browser storage is disabled.
    }
  };

  // Replay the count-up each time the statistics block returns to view.
  useEffect(() => {
    const statsElement = document.querySelector(".stats");
    if (!statsElement) return;

    if (shouldReduceMotion) {
      setStatsNumbers({ years: 3, projects: 10, gpa: 3.69 });
      return;
    }

    if (!("IntersectionObserver" in window)) {
      setStatsRun((run) => run + 1);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset first, then increment the run key to start a fresh animation.
          setStatsNumbers({ years: 0, projects: 0, gpa: 0 });
          setStatsRun((run) => run + 1);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(statsElement);
    return () => observer.disconnect();
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (statsRun === 0 || shouldReduceMotion) return;

    const duration = 1500;
    let startTime = 0;
    let frameId = 0;

    const animateNumbers = (timestamp: number) => {
      if (startTime === 0) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setStatsNumbers({
        years: Math.round(3 * easedProgress),
        projects: Math.round(10 * easedProgress),
        gpa: Number((3.69 * easedProgress).toFixed(2)),
      });

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animateNumbers);
      } else {
        setStatsNumbers({ years: 3, projects: 10, gpa: 3.69 });
      }
    };

    frameId = window.requestAnimationFrame(animateNumbers);
    return () => window.cancelAnimationFrame(frameId);
  }, [statsRun, shouldReduceMotion]);

  // Type and rotate through the requested professional roles without changing the hero layout.
  useEffect(() => {
    const roles = [
      "UI/UX Designer",
      "UX Researcher",
      "Front-End Developer",
      "Quality Assurance",
    ];

    if (shouldReduceMotion) {
      setTypedRole(roles[0]);
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let pauseUntil = 0;

    setTypedRole("");

    const timer = window.setInterval(() => {
      const currentRole = roles[roleIndex];

      if (!deleting && charIndex === currentRole.length) {
        if (pauseUntil === 0) {
          pauseUntil = Date.now() + 1100;
          return;
        }
        if (Date.now() < pauseUntil) return;
        deleting = true;
        pauseUntil = 0;
      }

      if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      charIndex += deleting ? -1 : 1;
      setTypedRole(roles[roleIndex].slice(0, charIndex));
    }, 85);

    return () => window.clearInterval(timer);
  }, [shouldReduceMotion]);

  const reveal = shouldReduceMotion
    ? { initial: false, whileInView: undefined, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <main className={`portfolio ${darkMode ? "dark-theme" : ""}`} id="home">
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap");

          :root {
            --cyan: #1236d8;
            --cyan-dark: #09269e;
            --pale: #dce5ff;
            --ink: #171717;
            --muted: #5e5a55;
            --paper: #f7f3e9;
            --line: #e3ddcf;
          }

          * {
            box-sizing: border-box;
          }

          html {
            scroll-behavior: smooth;
            scroll-padding-top: 90px;
          }

          body {
            margin: 0;
            background: var(--paper);
            color: var(--ink);
            font-family: "DM Sans", sans-serif;
            background-color: #f7f3e9;
            background-image: radial-gradient(
              #1515150b 0.7px,
              transparent 0.7px
            );
            background-size: 5px 5px;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button {
            font: inherit;
          }

          .portfolio {
            overflow: hidden;
          }

          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto !important;
            }
            *,
            *::before,
            *::after {
              animation-duration: 0.01ms !important;
            }
          }

          .container {
            width: min(1160px, calc(100% - 48px));
            margin: 0 auto;
          }

          .topbar {
            box-sizing: border-box;
          }

          .topbar {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            min-height: 82px;
            gap: 24px;
            padding-left: max(24px, calc((100vw - 1160px) / 2));
            padding-right: max(24px, calc((100vw - 1160px) / 2));
            border-bottom: 1px solid #ded7c9;
            background: rgba(247, 243, 233, 0.97);
            -webkit-backdrop-filter: blur(16px);
            backdrop-filter: blur(16px);
            box-shadow: 0 8px 24px rgba(24, 52, 82, 0.08);
          }

          /* Keep the hero from sliding underneath the fixed navigation. */
          .topbar + .hero,
          .topbar + section {
            scroll-margin-top: 100px;
          }

          html {
            scroll-padding-top: 100px;
          }

          .brand {
            font:
              700 27px "Space Grotesk",
              sans-serif;
            letter-spacing: -1.5px;
          }

          .brand span {
            color: var(--cyan);
          }

          .nav {
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 5px;
            border: 1px solid rgba(49, 93, 134, 0.14);
            border-radius: 14px;
            background: rgba(255, 253, 248, 0.82);
            box-shadow: 0 4px 14px rgba(24, 52, 82, 0.04);
            font-size: 12px;
            color: #536a80;
          }

          .nav a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 35px;
            padding: 0 13px;
            border: 1px solid transparent;
            border-radius: 9px;
            color: inherit;
            font-weight: 600;
            text-decoration: none;
            transition:
              color 0.2s ease,
              background 0.2s ease,
              border-color 0.2s ease,
              box-shadow 0.2s ease,
              transform 0.2s ease;
          }

          .nav a:hover {
            color: #1236d8;
            background: #e9edff;
            border-color: #cbd6ff;
            transform: translateY(-1px);
          }

          .nav a.active {
            color: #ffffff;
            background: #1236d8;
            border-color: #1236d8;
            box-shadow: 0 5px 14px rgba(18, 54, 216, 0.26);
          }

          .nav a.active:hover {
            color: #ffffff;
            background: #09269e;
            border-color: #09269e;
          }

          .nav a:focus-visible {
            outline: 2px solid #1236d8;
            outline-offset: 2px;
          }

          .nav a:active {
            transform: scale(0.97);
          }

          .mobile-connect {
            display: none;
          }

          .menu-button {
            display: none;
            border: 1px solid var(--line);
            background: white;
            padding: 9px 12px;
            border-radius: 9px;
            color: var(--ink);
          }

          .button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            border: 1px solid var(--line);
            border-radius: 10px;
            padding: 13px 17px;
            font-size: 13px;
            font-weight: 700;
            transition:
              transform 0.2s,
              box-shadow 0.2s,
              background 0.2s;
          }

          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 20px #102b4614;
          }

          .button.primary {
            color: #fff;
            background: var(--cyan);
            border-color: var(--cyan);
          }

          .button.primary:hover {
            background: var(--cyan-dark);
          }

          .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 9px;
            color: var(--cyan-dark);
            text-transform: uppercase;
            letter-spacing: 0.15em;
            font-size: 11px;
            font-weight: 800;
          }

          .eyebrow:before {
            content: "";
            width: 22px;
            height: 2px;
            background: var(--cyan);
          }

          .opportunity-label {
            margin-bottom: 8px;
            font-size: 12px;
            letter-spacing: 0.12em;
          }

          .hero-role {
            display: flex;
            align-items: center;
            gap: 12px;
            min-height: 36px;
            margin: -4px 0 24px;
            color: var(--cyan-dark);
            font:
              800 clamp(18px, 2.1vw, 25px)/1.25 "Space Grotesk",
              sans-serif;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }

          .hero-role-dash {
            display: inline-block;
            flex: 0 0 36px;
            height: 3px;
            background: var(--cyan);
          }

          .hero-role-cursor {
            width: 3px;
            height: 1.15em;
            margin-left: -7px;
            background: var(--cyan);
            animation: hero-role-blink 0.8s steps(2, start) infinite;
          }

          @keyframes hero-role-blink {
            to {
              visibility: hidden;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .hero-role-cursor {
              animation: none;
            }
          }

          .hero {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: center;
            gap: 42px;
            padding: 112px 0 78px;
            scroll-margin-top: 100px;
          }

          h1,
          h2,
          h3,
          p {
            margin-top: 0;
          }

          h1 {
            font:
              700 clamp(48px, 6.6vw, 88px) / 0.98 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.075em;
            margin: 22px 0;
          }

          .hero-name {
            color: #164dff;
            overflow-wrap: anywhere;
          }

          .lead {
            font:
              600 clamp(21px, 2.4vw, 29px) / 1.3 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.035em;
            max-width: 560px;
            margin-bottom: 18px;
          }

          .lead mark {
            color: var(--ink);
            background: var(--pale);
            padding: 0 0.13em;
            border-radius: 4px;
          }

          .lead mark {
            background-image: linear-gradient(
              110deg,
              #dce5ff 0%,
              #dce5ff 32%,
              #ffffff 48%,
              #b8d0ff 56%,
              #dce5ff 72%,
              #dce5ff 100%
            );
            background-size: 260% 100%;
            background-position: 100% 0;
            background-repeat: no-repeat;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
            animation: highlight-phrase-sweep 3.6s
              cubic-bezier(0.45, 0, 0.25, 1) 0.25s infinite;
          }

          @keyframes highlight-phrase-sweep {
            0%,
            100% {
              background-position: 100% 0;
            }
            48%,
            62% {
              background-position: 0 0;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .lead mark {
              animation: none !important;
              background-position: 0 0 !important;
            }
          }

          .intro {
            color: var(--muted);
            max-width: 530px;
            font-size: 15px;
            line-height: 1.85;
          }

          .hero-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            margin: 28px 0 35px;
          }

          .stats {
            display: flex;
            flex-wrap: wrap;
            gap: 0;
          }

          .stat {
            padding: 0 22px;
            border-left: 1px solid var(--line);
          }

          .stat:first-child {
            border: 0;
            padding-left: 0;
          }

          .stat strong {
            display: block;
            font:
              700 24px "Space Grotesk",
              sans-serif;
            letter-spacing: -0.05em;
            font-variant-numeric: tabular-nums;
          }

          .stat span {
            display: block;
            max-width: 110px;
            margin-top: 4px;
            color: var(--muted);
            font-size: 11px;
            line-height: 1.5;
          }

          .hero-visual {
            position: relative;
            min-height: 600px;
            display: grid;
            place-items: center;
            overflow: hidden;
            border-radius: 38px;
            background: #e4eef8;
            border: 1px solid #d1e3f3;
            isolation: isolate;
            clip-path: none;
            box-shadow: 0 18px 45px #173b5a12;
          }

          .hero-visual:before {
            content: "";
            position: absolute;
            inset: 70px 12% 45px 15%;
            background: linear-gradient(
              135deg,
              #72b5ff 0%,
              #3787f5 52%,
              #1d4ed8 100%
            );
            border-radius: 48px;
            z-index: -1;
            transform: rotate(-4deg);
            clip-path: none;
          }

          .hero-visual:after {
            content: "Good\A Design\A Brings\A Good\A Impact";
            white-space: pre;
            position: absolute;
            left: 5%;
            top: 10%;
            color: #12324f;
            font:
              italic 700 clamp(23px, 2.5vw, 38px)/1.05 Georgia,
              serif;
            transform: rotate(-2deg);
            z-index: 2;
            text-shadow: 0 1px 0 #ffffff50;
          }

          .portrait-frame {
            width: min(390px, 43%);
            height: 520px;
            display: grid;
            place-items: center;
            position: absolute;
            left: 29%;
            bottom: 0;
            margin-top: 0;
            z-index: 2;
            transform: rotate(-1.5deg);
          }

          .portrait-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center top;
            border-radius: 0;
            background: transparent;
            border: 0;
            box-shadow: none;
            mix-blend-mode: normal;
          }

          .portrait-placeholder {
            width: 100%;
            height: 100%;
            border-radius: 0;
            background: linear-gradient(160deg, #fff, #b9eaf2);
            border: 0;
            box-shadow: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 20px;
          }

          .portrait-placeholder strong {
            font:
              700 58px "Space Grotesk",
              sans-serif;
            letter-spacing: -0.08em;
            color: var(--cyan-dark);
          }
          .portrait-placeholder span {
            color: var(--muted);
            font-size: 12px;
            margin-top: 8px;
          }

          .float-tag {
            position: absolute;
            right: 2%;
            width: 37%;
            min-height: 62px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16px 12px;
            border: 0;
            background: #fff;
            color: #171717;
            border-radius: 10px;
            box-shadow: 0 12px 28px #183e5b18;
            font:
              800 14px/1.2 "Space Grotesk",
              sans-serif;
            letter-spacing: 0.06em;
            text-align: center;
            text-transform: uppercase;
            z-index: 4;
          }

          .tag-one {
            top: 12%;
            right: 2%;
            transform: rotate(-3deg);
            background: #fff;
          }
          .tag-two {
            top: 27%;
            right: 2%;
            transform: rotate(0deg);
            background: #c8e2ff;
          }
          .tag-three {
            top: 42%;
            right: 2%;
            transform: rotate(2deg);
            background: #d6f3df;
          }
          .tag-four {
            top: 57%;
            right: 2%;
            transform: rotate(3deg);
            background: #fff;
          }
          .tag-five {
            top: 72%;
            right: 2%;
            transform: rotate(0deg);
            background: #fff;
            text-transform: none;
            font-family: Georgia, serif;
            letter-spacing: 0;
          }
          .spark {
            position: absolute;
            color: #008ca8;
            font-size: 38px;
            font-weight: 700;
            z-index: 5;
          }
          .spark-one {
            left: 5%;
            top: 34%;
            color: #0099b5;
          }
          .spark-two {
            left: 28%;
            top: 24%;
            right: auto;
            bottom: auto;
            color: #008ca8;
            font-size: 54px;
          }
          .hero-note {
            position: absolute;
            bottom: 10%;
            left: 2%;
            z-index: 5;
            background: #fff;
            padding: 18px 20px;
            font: 700 17px cursive;
            transform: rotate(-8deg);
            box-shadow: 0 8px 20px #183e5b18;
            border-radius: 20px;
          }
          .hero-note span {
            margin-left: 8px;
          }

          .section {
            padding: 84px 0;
          }

          .about-section {
            position: relative;
            overflow: hidden;
            background: #f8f7f3;
            color: #142f4d;
            isolation: isolate;
            border-top: 1px solid #e8e4dc;
            border-bottom: 1px solid #e8e4dc;
          }

          .about-section::before {
            content: "";
            position: absolute;
            width: 360px;
            height: 360px;
            border-radius: 50%;
            right: -180px;
            top: -190px;
            background: radial-gradient(
              circle,
              #e8f3ee 0%,
              #f1f0e9 48%,
              transparent 72%
            );
            z-index: -1;
            pointer-events: none;
          }

          .about-section .about-copy,
          .about-section .timeline-item p {
            color: #5a6f86;
          }

          .about-section .about-grid {
            gap: clamp(34px, 5vw, 76px);
          }
          .about-section .eyebrow {
            color: #2563eb;
          }

          .about-section .education-card {
            position: relative;
            border: 1px solid #d9e7f6;
            border-radius: 18px;
            background: #fffdf9;
            box-shadow: 0 14px 35px #173d600d;
            padding: 22px;
            margin-top: 28px;
          }
          .about-section .education-card::before {
            content: "EDUCATION";
            display: block;
            color: #4387d9;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.16em;
            margin-bottom: 12px;
          }
          .about-section .education-card strong {
            color: #173654;
          }
          .about-section .timeline {
            border-left: 0;
            padding-left: 0;
            gap: 12px;
          }
          .about-section .timeline-item {
            padding: 19px 20px 20px;
            border: 1px solid #dce8f5;
            border-radius: 17px;
            background: rgba(255, 255, 255, 0.78);
            box-shadow: 0 10px 28px #234e7508;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;
          }
          .about-section .timeline-item:hover {
            transform: translateY(-3px);
            border-color: #b8d8fa;
            box-shadow: 0 16px 34px #234e7512;
          }
          .about-section .timeline-item::before {
            display: none;
          }
          .about-section .timeline-date {
            display: inline-flex;
            align-items: center;
            padding: 6px 9px;
            margin-bottom: 7px;
            border-radius: 999px;
            background: #e5f1ff;
            color: #2866b8;
            font-size: 9px;
            letter-spacing: 0.09em;
          }
          .about-section .timeline-item h3 {
            margin-top: 4px;
            color: #142f4d;
          }
          .about-section .timeline-role {
            color: #294967;
          }
          .about-section .timeline-item p {
            font-size: 12px;
            line-height: 1.7;
          }

          .section.dark {
            background: var(--ink);
            color: #fff;
          }

          .section-head {
            display: flex;
            justify-content: space-between;
            align-items: end;
            gap: 30px;
            margin-bottom: 34px;
          }

          .section-head h2 {
            font:
              700 clamp(37px, 5vw, 60px) / 0.98 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.07em;
            margin: 13px 0 0;
          }

          .section-head p {
            color: var(--muted);
            max-width: 410px;
            font-size: 14px;
            line-height: 1.8;
            margin: 0;
          }

          .dark .section-head p {
            color: #c1d2e0;
          }

          .featured {
            display: grid;
            grid-template-columns: 0.85fr 1.15fr;
            overflow: hidden;
            background: #fff;
            color: var(--ink);
            border-radius: 20px;
          }

          .featured-info {
            padding: clamp(25px, 4vw, 45px);
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }

          .project-number {
            color: var(--cyan-dark);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.12em;
          }

          .featured h3 {
            font:
              700 clamp(38px, 4vw, 53px) / 1 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.07em;
            margin: 28px 0 8px;
          }

          .project-type {
            font-size: 13px;
            font-weight: 700;
            color: #49647b;
            margin-bottom: 16px;
          }

          .project-desc {
            color: var(--muted);
            font-size: 13px;
            line-height: 1.8;
          }

          .chips {
            display: flex;
            flex-wrap: wrap;
            gap: 7px;
            margin: 8px 0 20px;
          }

          .chip {
            background: #e4f8fb;
            color: #006b83;
            padding: 7px 10px;
            border-radius: 7px;
            font-size: 10px;
            font-weight: 800;
          }

          .result {
            font-size: 12px;
            font-weight: 800;
            line-height: 1.7;
            margin-bottom: 22px;
          }

          .mockup-area {
            min-height: 390px;
            padding: clamp(18px, 2.2vw, 30px);
            display: grid;
            place-items: center;
            position: relative;
            overflow: hidden;
            isolation: isolate;
            background: linear-gradient(145deg, #e9fbfe, #c9edf4);
          }

          .mockup-area:before {
            content: "";
            position: absolute;
            z-index: -1;
            inset: 0;
            background-image: radial-gradient(#00b4d830 1px, transparent 1px);
            background-size: 15px 15px;
          }

          .becatur-preview {
            position: relative;
            z-index: 1;
            display: block;
            width: 100%;
            max-width: 920px;
            max-height: 430px;
            height: auto;
            object-fit: contain;
            object-position: center;
            border-radius: 14px;
            filter: drop-shadow(0 16px 24px #102b4618);
            transition:
              transform 0.35s ease,
              filter 0.35s ease;
          }

          .mockup-area:hover .becatur-preview {
            transform: translateY(-3px) scale(1.008);
            filter: drop-shadow(0 20px 28px #102b4624);
          }

          @media (max-width: 900px) {
            .mockup-area {
              min-height: 340px;
            }
            .becatur-preview {
              max-height: 390px;
            }
          }

          @media (max-width: 640px) {
            .mockup-area {
              min-height: 260px;
              padding: 14px;
            }
            .becatur-preview {
              max-height: 320px;
              border-radius: 9px;
            }
          }

          .phone {
            position: absolute;
            width: 170px;
            height: 300px;
            border: 7px solid #152c3f;
            border-radius: 27px;
            background: #fff;
            padding: 17px 11px;
            box-shadow: 0 18px 35px #102b4622;
          }

          .phone.first {
            transform: translateX(-58px) rotate(-8deg);
          }

          .phone.second {
            transform: translateX(65px) rotate(7deg);
          }

          .notch {
            width: 55px;
            height: 6px;
            border-radius: 20px;
            background: #152c3f;
            margin: 0 auto 18px;
          }

          .phone-brand {
            font:
              700 12px "Space Grotesk",
              sans-serif;
            color: var(--cyan-dark);
            text-align: center;
            margin-bottom: 14px;
          }

          .map-art {
            height: 85px;
            border-radius: 8px;
            background:
              linear-gradient(
                30deg,
                transparent 45%,
                white 46% 51%,
                transparent 52%
              ),
              linear-gradient(
                115deg,
                transparent 30%,
                white 31% 36%,
                transparent 37%
              ),
              #d9eee1;
            position: relative;
          }

          .map-art:after {
            content: "●";
            position: absolute;
            top: 30px;
            left: 55%;
            color: var(--cyan-dark);
            font-size: 18px;
          }

          .skeleton {
            height: 7px;
            border-radius: 9px;
            background: #e7edf1;
            margin-top: 10px;
          }

          .skeleton.short {
            width: 58%;
          }

          .driver-row {
            display: flex;
            align-items: center;
            gap: 7px;
            margin-top: 12px;
            font-size: 8px;
            font-weight: 700;
          }

          .avatar {
            width: 23px;
            height: 23px;
            border-radius: 50%;
            background: #b6e5ef;
          }

          .project-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 15px;
            margin-top: 17px;
          }

          .project-card {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-height: 225px;
            padding: 23px;
            border-radius: 16px;
            background: #fff;
            color: var(--ink);
            border: 1px solid #e1eaf0;
            transition:
              transform 0.25s,
              box-shadow 0.25s;
          }

          .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 16px 35px #0002;
          }

          .project-card-top {
            display: flex;
            justify-content: space-between;
            color: #71869a;
            font-size: 11px;
            font-weight: 800;
          }

          .project-card h3 {
            font:
              700 25px "Space Grotesk",
              sans-serif;
            letter-spacing: -0.05em;
            margin: 32px 0 8px;
          }

          .project-card p {
            color: var(--muted);
            font-size: 12px;
            line-height: 1.7;
          }

          .project-card .card-link {
            color: var(--cyan-dark);
            font-size: 12px;
            font-weight: 800;
            margin-top: 14px;
          }

          .card-accent {
            height: 5px;
            width: 46px;
            border-radius: 9px;
            background: var(--cyan);
            margin-bottom: 18px;
          }

          .card-accent.blue {
            background: #6da9ff;
          }

          .card-accent.mint {
            background: #74c69d;
          }

          .card-accent.lavender {
            background: #9b8afb;
          }

          .about-grid {
            display: grid;
            grid-template-columns: 0.75fr 1.25fr;
            gap: 60px;
            align-items: start;
          }

          .about-copy {
            color: var(--muted);
            font-size: 15px;
            line-height: 1.9;
          }

          .education-card {
            background: #fff;
            border: 1px solid var(--line);
            border-radius: 15px;
            padding: 20px;
            margin-top: 22px;
          }

          .education-card strong {
            display: block;
            font:
              700 18px "Space Grotesk",
              sans-serif;
            margin-bottom: 6px;
          }

          .education-card span {
            color: var(--muted);
            font-size: 12px;
          }

          .timeline {
            border-left: 2px solid #bceaf2;
            padding-left: 25px;
            display: grid;
            gap: 27px;
          }

          .timeline-item {
            position: relative;
          }

          .timeline-item:before {
            content: "";
            position: absolute;
            left: -33px;
            top: 4px;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            background: var(--cyan);
            border: 3px solid var(--paper);
          }

          .timeline-date {
            color: var(--cyan-dark);
            font-size: 10px;
            letter-spacing: 0.1em;
            font-weight: 800;
          }

          .timeline-item h3 {
            font:
              700 20px "Space Grotesk",
              sans-serif;
            margin: 8px 0 4px;
          }

          .timeline-role {
            font-size: 13px;
            font-weight: 700;
            margin-bottom: 7px;
          }

          .timeline-item p {
            color: var(--muted);
            font-size: 12px;
            line-height: 1.75;
            margin-bottom: 0;
          }

          .about-focus-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 20px;
          }
          .about-focus-tags span {
            border: 1px solid #d5e6f8;
            border-radius: 999px;
            padding: 7px 10px;
            background: #eaf4ff;
            color: #315b84;
            font-size: 10px;
            font-weight: 700;
          }
          .experience-heading-row {
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 16px;
            margin-bottom: 24px;
          }
          .experience-count {
            flex-shrink: 0;
            border-radius: 999px;
            background: #dcecff;
            color: #2b67b1;
            padding: 7px 10px;
            font-size: 10px;
            font-weight: 800;
          }
          .experience-card-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
          }
          .experience-index {
            color: #9ab9d9;
            font:
              700 13px "Space Grotesk",
              sans-serif;
          }

          .skills-section {
            background: #eaf5f8;
          }

          .skills-grid {
            display: grid;
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
            margin-top: 30px;
          }

          .skill {
            min-height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            background: #fff;
            border: 1px solid #d9eaf0;
            border-radius: 14px;
            padding: 18px;
            font-size: 13px;
            font-weight: 800;
          }

          .skill-icon {
            color: var(--cyan-dark);
            font-size: 24px;
          }

          /* How I Work — clean editorial timeline, not another card grid */
          .process-grid {
            --timeline-line: #d7e1e8;
            position: relative;
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 22px;
            margin-top: 58px;
            padding-top: 0;
            align-items: start;
          }

          .process-grid::before {
            content: "";
            position: absolute;
            top: 17px;
            left: 2.2%;
            right: 2.2%;
            height: 2px;
            background: linear-gradient(
              90deg,
              #315d86 0%,
              #8da8bd 55%,
              #d7e1e8 100%
            );
            border-radius: 2px;
          }

          .process-item {
            position: relative;
            min-width: 0;
            padding: 0;
            border: 0;
            background: transparent;
          }

          .process-item::before {
            content: "";
            position: relative;
            z-index: 1;
            display: block;
            width: 34px;
            height: 34px;
            margin-bottom: 25px;
            border: 2px solid #315d86;
            border-radius: 50%;
            background: #f7f5ef;
            box-shadow:
              inset 0 0 0 7px #f7f5ef,
              inset 0 0 0 10px #315d86,
              0 0 0 7px #e7edf1;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }

          .process-item:hover::before {
            transform: scale(1.08);
            box-shadow:
              inset 0 0 0 6px #f7f5ef,
              inset 0 0 0 10px #315d86,
              0 0 0 9px #e7edf1;
          }

          .process-item span {
            display: block;
            margin-bottom: 9px;
            color: #315d86;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          .process-item h3 {
            color: #1b2e40;
            font:
              700 20px/1.2 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.04em;
            margin: 0 0 10px;
          }

          .process-item p {
            color: var(--muted);
            font-size: 12px;
            line-height: 1.75;
            margin: 0;
            max-width: 185px;
          }

          .process-item:nth-child(even) {
            padding-top: 30px;
          }

          .process-item:nth-child(even)::before {
            margin-top: -30px;
            margin-bottom: 25px;
          }

          .process-item:nth-child(even) span {
            color: #71899d;
          }

          @media (max-width: 1000px) {
            .process-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
              row-gap: 38px;
            }
            .process-grid::before {
              display: none;
            }
            .process-item:nth-child(n) {
              padding-top: 0;
            }
            .process-item:nth-child(n)::before {
              margin-top: 0;
              margin-bottom: 18px;
            }
          }

          @media (max-width: 640px) {
            .process-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 30px 20px;
              margin-top: 35px;
            }
            .process-item h3 {
              font-size: 18px;
            }
            .process-item p {
              max-width: none;
            }
          }

          @media (max-width: 390px) {
            .process-grid {
              grid-template-columns: 1fr;
            }
          }

          .awards {
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 12px;
            margin-top: 30px;
          }

          .award {
            background: #fff;
            border: 1px solid var(--line);
            border-radius: 13px;
            padding: 18px 14px;
          }

          .award span {
            font-size: 23px;
          }

          .award strong {
            display: block;
            font-size: 12px;
            line-height: 1.5;
            margin: 12px 0 5px;
          }

          .award small {
            display: block;
            color: var(--muted);
            font-size: 10px;
            line-height: 1.6;
          }

          .contact {
            background: var(--cyan);
            color: #fff;
            padding: 74px 0 24px;
          }

          .contact-layout {
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 40px;
            align-items: center;
          }

          .contact h2 {
            font:
              700 clamp(42px, 5.6vw, 70px) / 0.98 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.07em;
            margin: 16px 0 0;
          }

          .contact p {
            font-size: 14px;
            line-height: 1.85;
            color: #eaffff;
          }

          .contact .eyebrow {
            color: #fff;
          }

          .contact .eyebrow:before {
            background: #fff;
          }

          .contact-links {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
          }

          .contact-links .button {
            background: #fff;
            color: var(--ink);
            border-color: #fff;
          }

          .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 15px;
            border-top: 1px solid #ffffff70;
            padding-top: 22px;
            margin-top: 60px;
            font-size: 11px;
            color: #eaffff;
          }

          .footer .brand {
            font-size: 22px;
            color: #fff;
          }

          @media (max-width: 900px) {
            .hero {
              grid-template-columns: 1fr;
              gap: 35px;
              padding: 48px 0 65px;
            }

            .hero-visual {
              min-height: 480px;
            }

            .portrait-frame {
              height: 390px;
              width: 42%;
              left: 20%;
            }

            .float-tag {
              width: 40%;
              min-height: 48px;
              font-size: 10px;
              padding: 10px 7px;
              right: 2%;
            }
            .hero-visual:after {
              left: 4%;
              top: 8%;
              font-size: 25px;
            }

            .featured {
              grid-template-columns: 1fr;
            }

            .mockup-area {
              min-height: 360px;
            }

            .about-grid {
              grid-template-columns: 1fr;
              gap: 30px;
            }

            .awards {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }

          @media (max-width: 640px) {
            .container {
              width: calc(100% - 32px);
            }

            .topbar {
              min-height: 72px;
              flex-wrap: wrap;
              padding: 14px 0;
            }

            .menu-button {
              display: block;
            }

            .nav {
              display: none;
              order: 3;
              width: 100%;
              flex-direction: column;
              align-items: stretch;
              gap: 0;
              padding: 8px 0 4px;
            }

            .nav.open {
              display: flex;
            }

            .nav a {
              justify-content: flex-start;
              min-height: 42px;
              padding: 0 13px;
              border: 1px solid transparent;
              border-radius: 9px;
            }

            .nav a.active {
              color: #ffffff;
              border-color: #1236d8;
              background: #1236d8;
            }

            .topbar > .nav .mobile-connect {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              width: calc(100% - 16px);
              min-height: 46px;
              margin: 8px;
              padding: 0 16px;
              border-radius: 10px;
              color: #ffffff;
              background: #3b82f6;
              border: 1px solid #3b82f6;
              font-weight: 700;
              text-decoration: none;
            }

            .topbar > .nav .mobile-connect:hover,
            .topbar > .nav .mobile-connect:focus-visible {
              color: #ffffff;
              background: #2563eb;
              border-color: #2563eb;
            }

            /* Keep the theme switch available on mobile; hide only the extra CTA. */
            .topbar > .button.primary {
              display: none;
            }

            .topbar > .theme-toggle {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              order: 2;
              flex-shrink: 0;
              margin-left: auto;
              padding: 9px 12px;
              min-height: 42px;
              font-size: 12px;
            }

            .topbar > .menu-button {
              order: 1;
              flex-shrink: 0;
            }

            .topbar > .brand {
              order: 0;
            }

            .topbar > .nav {
              order: 3;
            }

            .hero {
              padding: 35px 0 52px;
            }

            h1 {
              font-size: clamp(46px, 13vw, 67px);
            }

            .lead {
              font-size: 23px;
            }

            .hero-role {
              font-size: clamp(16px, 4.4vw, 21px);
              gap: 9px;
              letter-spacing: 0.055em;
              margin-bottom: 22px;
            }

            .hero-role-dash {
              flex-basis: 28px;
            }

            .opportunity-label {
              font-size: 10px;
            }

            .intro {
              font-size: 14px;
            }

            .hero-visual {
              min-height: 390px;
              border-radius: 20px;
            }

            .portrait-frame {
              width: 44%;
              height: 285px;
              left: 15%;
            }

            .hero-visual:before {
              inset: 70px 5% 25px 12%;
              border-radius: 28px;
            }
            .hero-visual:after {
              left: 4%;
              top: 8%;
              font-size: 17px;
            }
            .float-tag {
              width: 42%;
              min-height: 40px;
              font-size: 8px;
              padding: 8px 5px;
              right: 2%;
              border-radius: 7px;
            }
            .tag-one {
              top: 12%;
            }
            .tag-two {
              top: 28%;
            }
            .tag-three {
              top: 44%;
            }
            .tag-four {
              top: 60%;
            }
            .tag-five {
              top: 76%;
            }
            .hero-note {
              bottom: 5%;
              right: 2%;
              left: auto;
              padding: 8px;
              font-size: 10px;
            }
            .hero-micro-card {
              left: 3%;
              right: auto;
              bottom: 5%;
              width: 105px;
              padding: 10px 9px;
              z-index: 4;
            }
            .hero-doodle-stroke {
              left: 56%;
              top: 32%;
              font-size: 42px;
            }
            .spark-one {
              top: 35%;
              left: 4%;
              font-size: 24px;
            }
            .spark-two {
              left: 27%;
              top: 23%;
              font-size: 34px;
            }

            .portrait-placeholder strong {
              font-size: 48px;
            }

            .float-tag {
              font-size: 9px;
              padding: 8px 9px;
            }

            .tag-one {
              top: 40px;
            }

            .tag-two {
              top: 90px;
            }

            .tag-three {
              bottom: 35px;
            }

            .section {
              padding: 58px 0;
            }

            .section-head {
              display: block;
            }

            .section-head p {
              margin-top: 18px;
            }

            .section-head h2 {
              font-size: 43px;
            }

            .project-grid {
              grid-template-columns: 1fr;
            }

            .project-card {
              min-height: 190px;
            }

            .mockup-area {
              min-height: 320px;
            }

            .phone {
              width: 145px;
              height: 270px;
            }

            .phone.first {
              transform: translateX(-42px) rotate(-7deg);
            }

            .phone.second {
              transform: translateX(43px) rotate(6deg);
            }

            .stats {
              gap: 15px 0;
            }

            .stat {
              padding: 0 12px;
            }

            .stat:first-child {
              padding-left: 0;
            }

            .stat strong {
              font-size: 21px;
            }

            .skills-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .skill {
              min-height: 86px;
              padding: 14px;
            }

            .process-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 25px 16px;
            }

            .awards {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .contact {
              padding-top: 58px;
            }

            .contact-layout {
              grid-template-columns: 1fr;
              gap: 24px;
            }

            .footer {
              align-items: flex-start;
              flex-direction: column;
              margin-top: 42px;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }

            *,
            *::before,
            *::after {
              transition: none !important;
              animation: none !important;
            }
          }

          /* Reference-inspired styling for the hero visual only. */
          .hero-visual {
            width: 100%;
            min-width: 0;
            max-width: 100%;
            min-height: 600px;
            height: clamp(600px, 48vw, 690px);
            overflow: hidden;
            border-radius: 28px;
            border-color: #d1e3f3;
            background-color: #e4eef8;
            background-image:
              linear-gradient(#00b4d812 1px, transparent 1px),
              linear-gradient(90deg, #00b4d812 1px, transparent 1px);
            background-size: 48px 48px;
            background-position: 0 0;
            animation: hero-grid-drift 18s linear infinite;
          }

          .hero-visual:before {
            inset: 11% 8% 8% 15%;
            background: linear-gradient(
              135deg,
              #72b5ff 0%,
              #3787f5 52%,
              #1d4ed8 100%
            );
            border-radius: 42px;
            z-index: 0;
            transform: rotate(-4deg);
            animation: hero-paper-float 7s ease-in-out infinite;
          }

          /* The headline is real markup (not CSS escaped text), so every line wraps correctly. */
          .hero-visual:after {
            content: none !important;
          }
          .hero-headline {
            position: absolute;
            max-width: calc(100% - 24px);
            overflow-wrap: normal;
            left: 4.5%;
            top: 9%;
            width: 31%;
            z-index: 3;
            color: #12324f;
            font:
              italic 700 clamp(30px, 3.4vw, 48px)/0.94 Georgia,
              serif;
            letter-spacing: -0.04em;
            transform: rotate(-2deg);
            text-shadow: 0 1px 0 #ffffff50;
            animation: hero-headline-float 5.4s ease-in-out infinite;
            pointer-events: none;
          }
          .hero-headline .headline-star {
            display: block;
            margin-top: 8px;
            color: #0099b5;
            font: 800 clamp(25px, 3vw, 40px)/1 var(--site-font-body);
          }

          .portrait-frame {
            width: min(500px, 64%);
            height: 100%;
            left: 15%;
            bottom: 0;
            margin: 0;
            z-index: 2;
            transform: rotate(-1deg);
          }

          .portrait-frame {
            overflow: visible;
            height: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .portrait-image {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center bottom;
            max-width: 100%;
            max-height: 100%;
          }

          .float-tag {
            box-sizing: border-box;
            max-width: calc(100% - 20px);
            white-space: normal;
            overflow-wrap: anywhere;
            right: 2.5%;
            width: 39%;
            min-height: 62px;
            padding: 13px 14px;
            border-radius: 12px;
            box-shadow: 0 14px 28px #183e5b18;
            font:
              800 clamp(11px, 1.05vw, 14px)/1.2 "Space Grotesk",
              sans-serif;
            letter-spacing: 0.055em;
            animation: hero-card-float 4.8s ease-in-out infinite;
            transition:
              box-shadow 0.25s ease,
              filter 0.25s ease;
          }

          .tag-one {
            top: 12%;
            right: 2.5%;
            background: #fff;
            transform: rotate(-3deg);
          }
          .tag-two {
            top: 27%;
            right: 2.5%;
            background: #c8e2ff;
            transform: rotate(0deg);
            animation-delay: 0.35s;
          }
          .tag-three {
            top: 42%;
            right: 2.5%;
            background: #d6f3df;
            transform: rotate(1.5deg);
            animation-delay: 0.7s;
          }
          .tag-four {
            top: 57%;
            right: 2.5%;
            background: #fff;
            transform: rotate(2deg);
            animation-delay: 1.05s;
          }
          .tag-five {
            top: 72%;
            right: 2.5%;
            background: #fff;
            text-transform: none;
            font-family: Georgia, serif;
            letter-spacing: 0;
            animation-delay: 0.5s;
          }
          .float-tag:hover {
            animation-play-state: paused;
            filter: saturate(1.1);
            box-shadow: 0 18px 34px #183e5b25;
          }

          .spark-one {
            left: 5%;
            top: 34%;
            color: #0099b5;
            font-size: 38px;
            animation: hero-spark-float 3.8s ease-in-out infinite;
          }
          .spark-two {
            left: 28%;
            top: 24%;
            right: auto;
            bottom: auto;
            color: #008ca8;
            font-size: 54px;
            animation: hero-spark-float 4.2s ease-in-out 0.3s infinite reverse;
          }

          .hero-note {
            left: 3%;
            bottom: 10%;
            top: auto;
            z-index: 5;
            width: 43%;
            display: grid;
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 6px;
            padding: 12px;
            border: 0;
            border-radius: 20px;
            background: #fff;
            box-shadow: 0 14px 28px #183e5b18;
            transform: rotate(-9deg);
            animation: hero-keyboard-float 4.8s ease-in-out infinite;
          }
          .hero-note span {
            display: grid;
            min-width: 0;
            height: clamp(24px, 2.5vw, 34px);
            place-items: center;
            margin: 0;
            border-radius: 7px;
            background: #caf0f8;
            color: #006b83;
            font:
              800 clamp(9px, 0.95vw, 13px)/1 "Space Grotesk",
              sans-serif;
            box-shadow: 0 3px 0 #90d9e8;
          }
          .hero-note span:nth-child(3n) {
            background: #ffdf48;
            color: #171717;
            box-shadow: 0 3px 0 #e3bd21;
          }
          .hero-note span:nth-child(4n) {
            background: #b9efa5;
            color: #173b15;
            box-shadow: 0 3px 0 #8dcc77;
          }
          .hero-note span.keyboard-space {
            grid-column: span 3;
          }

          @keyframes hero-grid-drift {
            from {
              background-position:
                0 0,
                0 0;
            }
            to {
              background-position:
                48px 48px,
                -48px -48px;
            }
          }
          @keyframes hero-paper-float {
            0%,
            100% {
              transform: rotate(-4deg) translateY(0);
            }
            50% {
              transform: rotate(-2.5deg) translateY(-7px);
            }
          }
          @keyframes hero-headline-float {
            0%,
            100% {
              translate: 0 0;
            }
            50% {
              translate: 0 -5px;
            }
          }
          @keyframes hero-card-float {
            0%,
            100% {
              translate: 0 0;
            }
            50% {
              translate: 0 -5px;
            }
          }
          @keyframes hero-spark-float {
            0%,
            100% {
              translate: 0 0;
              rotate: 0deg;
            }
            50% {
              translate: 7px -8px;
              rotate: 5deg;
            }
          }
          @keyframes hero-keyboard-float {
            0%,
            100% {
              transform: rotate(-9deg) translateY(0);
            }
            50% {
              transform: rotate(-6deg) translateY(-7px);
            }
          }

          @media (max-width: 900px) {
            .hero-visual {
              min-height: 560px;
              height: 560px;
            }
            .portrait-frame {
              height: 92%;
              width: 49%;
              left: 21%;
            }
            .hero-visual:after {
              content: none !important;
            }
            .hero-headline {
              left: 4%;
              top: 8%;
              width: 31%;
              font-size: clamp(27px, 3vw, 38px);
              line-height: 0.94;
            }
            .portrait-frame {
              height: 100%;
              width: 58%;
              left: 15%;
            }
            .portrait-image {
              object-fit: contain;
              object-position: center bottom;
            }
            .float-tag {
              width: 40%;
              min-height: 54px;
              right: 2%;
              font-size: clamp(10px, 1.8vw, 13px);
              padding: 10px 8px;
            }
            .tag-one {
              top: 12%;
            }
            .tag-two {
              top: 27%;
            }
            .tag-three {
              top: 42%;
            }
            .tag-four {
              top: 57%;
            }
            .tag-five {
              top: 72%;
            }
            .hero-note {
              width: 43%;
              bottom: 8%;
              padding: 9px;
              gap: 4px;
            }
          }
          @media (max-width: 640px) {
            .hero-visual {
              min-height: 440px;
              height: 440px;
              border-radius: 20px;
            }
            .hero-visual:before {
              inset: 16% 4% 8% 11%;
              border-radius: 26px;
            }
            .hero-visual:after {
              content: none !important;
            }
            .hero-headline {
              left: 4%;
              top: 7%;
              width: 35%;
              font-size: clamp(23px, 4.7vw, 31px);
              line-height: 0.94;
            }
            .portrait-frame {
              width: 64%;
              height: 88%;
              left: 13%;
              bottom: 0;
            }
            .portrait-image {
              object-fit: contain;
              object-position: center bottom;
            }
            .float-tag {
              width: 42%;
              min-height: 43px;
              right: 2%;
              padding: 8px 5px;
              font-size: clamp(8px, 2.1vw, 11px);
              border-radius: 7px;
            }
            .tag-one {
              top: 13%;
            }
            .tag-two {
              top: 29%;
            }
            .tag-three {
              top: 45%;
            }
            .tag-four {
              top: 61%;
            }
            .tag-five {
              top: 77%;
            }
            .hero-note {
              width: 44%;
              left: 2%;
              bottom: 6%;
              padding: 6px;
              gap: 3px;
              border-radius: 12px;
            }
            .hero-note span {
              height: 20px;
              font-size: 8px;
              border-radius: 5px;
            }
            .spark-one {
              left: 3%;
              top: 36%;
              font-size: 24px;
            }
            .spark-two {
              left: 28%;
              top: 23%;
              font-size: 34px;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-visual,
            .hero-visual:before,
            .hero-visual:after,
            .portrait-frame,
            .float-tag,
            .hero-note,
            .spark-one,
            .spark-two {
              animation: none !important;
            }
          }

          /* Stable hero layering: blue panel -> portrait -> readable UI cards. */
          .hero-visual {
            position: relative;
            isolation: isolate;
            overflow: hidden;
          }
          .hero-visual::before {
            z-index: 0 !important;
          }
          .hero-visual .portrait-frame {
            position: absolute;
            left: 10% !important;
            bottom: 0 !important;
            width: min(500px, 58%) !important;
            height: 100% !important;
            z-index: 3 !important;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            overflow: visible;
            pointer-events: none;
          }
          .hero-visual .portrait-image {
            display: block;
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            object-fit: contain !important;
            object-position: center bottom !important;
          }
          .hero-visual .hero-headline {
            z-index: 4 !important;
          }
          .hero-visual .float-tag {
            position: absolute;
            z-index: 7 !important;
            right: 2.5% !important;
            left: auto !important;
            width: 37% !important;
            max-width: 37% !important;
            box-sizing: border-box;
            white-space: normal !important;
            overflow-wrap: normal !important;
            word-break: normal !important;
            text-align: center;
          }
          .hero-visual .hero-note {
            z-index: 8 !important;
          }
          @media (max-width: 900px) {
            .hero-visual .portrait-frame {
              left: 5% !important;
              width: 62% !important;
              height: 100% !important;
            }
            .hero-visual .float-tag {
              width: 40% !important;
              max-width: 40% !important;
            }
          }
          @media (max-width: 640px) {
            .hero-visual .portrait-frame {
              left: 4% !important;
              width: 65% !important;
              height: 88% !important;
            }
            .hero-visual .float-tag {
              width: 42% !important;
              max-width: 42% !important;
            }
          }
          /* Final targeted fix: keep the keyboard compact and behind the portrait. */
          .hero-visual {
            position: relative;
            isolation: isolate;
            overflow: hidden;
          }
          .hero-visual .portrait-frame {
            left: 10% !important;
            width: min(500px, 58%) !important;
            height: 100% !important;
            bottom: 0 !important;
            z-index: 3 !important;
          }
          .hero-visual .portrait-image {
            width: 100%;
            height: 100%;
            object-fit: contain !important;
            object-position: center bottom !important;
          }
          .hero-visual .float-tag {
            right: 2.5% !important;
            width: 36% !important;
            max-width: 36% !important;
            z-index: 6 !important;
            overflow-wrap: break-word;
            word-break: normal;
          }
          .hero-visual .hero-note {
            left: 2% !important;
            bottom: 3% !important;
            top: auto !important;
            width: min(265px, 30%) !important;
            padding: 8px !important;
            gap: 4px !important;
            z-index: 2 !important;
            transform: rotate(-7deg);
          }
          .hero-visual .hero-note span {
            min-width: 0;
            height: clamp(19px, 2vw, 28px);
            font-size: clamp(8px, 0.9vw, 11px);
          }
          @media (max-width: 900px) {
            .hero-visual .portrait-frame {
              left: 7% !important;
              width: 62% !important;
            }
            .hero-visual .float-tag {
              width: 40% !important;
              max-width: 40% !important;
            }
            .hero-visual .hero-note {
              width: min(205px, 30%) !important;
              bottom: 3% !important;
            }
          }
          @media (max-width: 640px) {
            .hero-visual .portrait-frame {
              left: 4% !important;
              width: 65% !important;
              height: 88% !important;
            }
            .hero-visual .float-tag {
              width: 42% !important;
              max-width: 42% !important;
              right: 2% !important;
              font-size: clamp(8px, 2vw, 11px);
            }
            .hero-visual .hero-note {
              width: 34% !important;
              max-width: 150px;
              left: 1.5% !important;
              bottom: 2% !important;
              padding: 5px !important;
              gap: 3px !important;
            }
            .hero-visual .hero-note span {
              height: 18px;
              font-size: 8px;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-visual .portrait-frame,
            .hero-visual .hero-note {
              animation: none !important;
            }
          }

          /* Final refinement: move the larger decorative keyboard under the motto on the right. */
          .hero-visual .tag-one {
            top: 10% !important;
          }
          .hero-visual .tag-two {
            top: 22% !important;
          }
          .hero-visual .tag-three {
            top: 34% !important;
          }
          .hero-visual .tag-four {
            top: 46% !important;
          }
          .hero-visual .tag-five {
            top: 58% !important;
          }
          .hero-visual .hero-note {
            left: auto !important;
            right: 2.5% !important;
            top: auto !important;
            bottom: 3% !important;
            width: min(310px, 32%) !important;
            max-width: 32% !important;
            padding: 10px !important;
            gap: 6px !important;
            z-index: 5 !important;
            transform: rotate(-4deg);
          }
          .hero-visual .hero-note span {
            height: clamp(25px, 2.8vw, 36px) !important;
            font-size: clamp(10px, 1.1vw, 13px) !important;
            border-radius: 7px;
          }
          @media (max-width: 900px) {
            .hero-visual .tag-one {
              top: 9% !important;
            }
            .hero-visual .tag-two {
              top: 21% !important;
            }
            .hero-visual .tag-three {
              top: 33% !important;
            }
            .hero-visual .tag-four {
              top: 45% !important;
            }
            .hero-visual .tag-five {
              top: 57% !important;
            }
            .hero-visual .hero-note {
              left: auto !important;
              right: 2.5% !important;
              bottom: 2.5% !important;
              width: min(230px, 34%) !important;
              max-width: 34% !important;
              padding: 8px !important;
              gap: 4px !important;
            }
          }
          @media (max-width: 640px) {
            .hero-visual .tag-one {
              top: 9% !important;
            }
            .hero-visual .tag-two {
              top: 21% !important;
            }
            .hero-visual .tag-three {
              top: 33% !important;
            }
            .hero-visual .tag-four {
              top: 45% !important;
            }
            .hero-visual .tag-five {
              top: 57% !important;
            }
            .hero-visual .hero-note {
              left: auto !important;
              right: 2.5% !important;
              bottom: 3% !important;
              width: 44% !important;
              max-width: 180px !important;
              padding: 6px !important;
              gap: 3px !important;
              border-radius: 12px !important;
            }
            .hero-visual .hero-note span {
              height: 20px !important;
              font-size: 9px !important;
            }
          }

          /* Final placement: keep the Creative Solutions card at the lower-left. */
          .hero-visual .hero-micro-card {
            left: 3% !important;
            right: auto !important;
            bottom: 5% !important;
            top: auto !important;
            z-index: 5 !important;
          }
          @media (max-width: 640px) {
            .hero-visual .hero-micro-card {
              left: 2.5% !important;
              right: auto !important;
              bottom: 4% !important;
              width: min(112px, 30%) !important;
            }
          }

          /* Selected project preview cards */
          .selected-projects-container {
            position: relative;
          }
          .selected-projects-intro {
            max-width: 720px;
            margin-bottom: 34px;
          }
          .selected-projects-intro h2 {
            margin: 18px 0 18px;
            font:
              700 clamp(42px, 5.2vw, 68px)/0.99 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.075em;
            color: #142f4d;
          }
          .selected-projects-intro h2 span {
            background: linear-gradient(100deg, #2868f6, #7656d8 75%, #c254a0);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .selected-projects-intro p {
            max-width: 620px;
            margin: 0;
            color: #536b83;
            font-size: 16px;
            line-height: 1.8;
          }
          .selected-projects-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 20px;
            align-items: stretch;
          }
          .selected-project-card {
            min-width: 0;
            overflow: hidden;
            border: 1px solid #d3e3f7;
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 14px 36px rgba(30, 76, 130, 0.07);
            transition:
              box-shadow 0.25s ease,
              border-color 0.25s ease;
          }
          .selected-project-card:hover {
            border-color: #a9c8ff;
            box-shadow: 0 20px 44px rgba(30, 76, 130, 0.12);
          }
          .selected-project-art {
            height: 174px;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #d9ecff, #a7d0ff 55%, #7e9cff);
          }
          .selected-project-art-image {
            background: #eaf2ff;
          }
          .selected-project-art-image:before,
          .selected-project-art-image:after {
            display: none;
          }
          .selected-project-cover {
            object-fit: cover;
            object-position: center;
            z-index: 0;
          }
          .selected-project-number {
            z-index: 2;
            padding: 5px 7px;
            border-radius: 7px;
            background: rgba(255, 255, 255, 0.88);
            color: #142f4d;
          }
          .selected-project-stats {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-top: 17px;
            color: #7a8ba0;
            font-size: 12px;
          }
          .selected-project-stat {
            display: inline-flex;
            align-items: center;
            gap: 6px;
          }
          .selected-project-stat svg {
            display: block;
            flex: 0 0 15px;
            width: 15px;
            height: 15px;
          }
          .selected-project-like {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 4px 7px;
            border: 0;
            border-radius: 8px;
            background: transparent;
            color: #7a8ba0;
            cursor: pointer;
            font: inherit;
            transition:
              color 0.2s ease,
              background 0.2s ease;
          }
          .selected-project-like:hover {
            background: #fff0f2;
            color: #e54862;
          }
          .selected-project-like.is-liked {
            color: #e54862;
          }
          .selected-project-like svg {
            width: 15px;
            height: 15px;
          }
          .selected-project-startoops .selected-project-art {
            background: linear-gradient(135deg, #e8e3ff, #c9c1ff 55%, #9f9aff);
          }
          .selected-project-mint .selected-project-art {
            background: linear-gradient(135deg, #dcf7ed, #a9ead7 55%, #83c9e8);
          }
          .selected-project-art:before,
          .selected-project-art:after {
            content: "";
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            width: 190px;
            height: 190px;
            right: -22px;
            top: -86px;
          }
          .selected-project-art:after {
            display: none;
          }
          .selected-project-number {
            position: absolute;
            left: 18px;
            top: 16px;
            color: rgba(20, 47, 77, 0.65);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.13em;
          }
          .selected-project-symbol {
            display: grid;
            place-items: center;
            width: 88px;
            height: 88px;
            border-radius: 26px;
            background: rgba(255, 255, 255, 0.68);
            color: #1d56d9;
            font-size: 54px;
            font-weight: 500;
            box-shadow: 0 12px 28px rgba(30, 70, 130, 0.1);
            transform: rotate(-7deg);
          }
          .selected-project-art-label {
            position: absolute;
            bottom: 14px;
            right: 16px;
            color: rgba(20, 47, 77, 0.62);
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.14em;
          }
          .selected-project-content {
            padding: 22px 22px 24px;
          }
          .selected-project-type {
            color: #3868c8;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .selected-project-content h3 {
            margin: 10px 0 9px;
            color: #142f4d;
            font:
              700 25px/1.15 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.045em;
          }
          .selected-project-content p {
            margin: 0;
            color: #5d7189;
            font-size: 13px;
            line-height: 1.75;
          }
          .selected-project-result {
            display: block;
            margin-top: 13px;
            padding: 10px 11px;
            border-radius: 10px;
            background: #edf5ff;
            color: #244f9c;
            font-size: 11px;
            line-height: 1.55;
            font-weight: 700;
          }
          .selected-project-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 18px;
            color: #214be4;
            font-size: 13px;
            font-weight: 800;
            text-decoration: none;
          }
          .selected-project-link svg {
            flex: 0 0 auto;
            transition: transform 0.2s ease;
          }
          .selected-project-link:hover svg {
            transform: translate(3px, -3px);
          }
          .selected-projects-footer {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 18px;
            margin-top: 28px;
            padding-top: 22px;
            border-top: 1px solid #d3e3f4;
            position: relative;
          }
          .selected-projects-footer > span {
            position: absolute;
            left: 0;
            color: #72879b;
            font-size: 12px;
            letter-spacing: 0.03em;
          }
          .all-projects-button {
            min-width: 190px;
          }

          /* All-projects feature section */
          .all-projects-section {
            position: relative;
            overflow: hidden;
            padding: clamp(72px, 9vw, 118px) 0;
            color: #142f4d;
            background: #eaf3fc;
            border-top: 1px solid #dce7f2;
            border-bottom: 1px solid #dce7f2;
          }
          .all-projects-layout {
            display: grid;
            grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
            align-items: center;
            gap: clamp(28px, 6vw, 84px);
          }
          .all-projects-copy h2 {
            margin: 18px 0 20px;
            max-width: 600px;
            font:
              700 clamp(42px, 5.2vw, 68px)/0.99 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.075em;
            color: #142f4d;
          }
          .all-projects-copy p {
            max-width: 460px;
            margin: 0;
            color: #536b83;
            font-size: 15px;
            line-height: 1.85;
          }
          .all-projects-button {
            margin-top: 28px;
            min-height: 52px;
            padding: 15px 22px;
            border-radius: 12px;
            box-shadow: 0 8px 18px #164dff20;
          }
          .all-projects-button span {
            font-size: 18px;
            margin-left: 4px;
          }
          .all-projects-footnote {
            display: block;
            margin-top: 19px;
            color: #72879b;
            font-size: 11px;
            letter-spacing: 0.04em;
          }
          .project-motion-stage {
            min-width: 0;
            height: 440px;
            position: relative;
            display: grid;
            place-items: center;
            isolation: isolate;
          }
          .project-motion-stage:before {
            content: "";
            position: absolute;
            width: 76%;
            height: 76%;
            border-radius: 50%;
            background: radial-gradient(
              circle,
              #c5e2ff 0%,
              #d8eafb80 48%,
              transparent 72%
            );
            z-index: -2;
          }
          .motion-orbit {
            position: absolute;
            border: 1px solid #9fc8ef;
            border-radius: 50%;
            opacity: 0.8;
            pointer-events: none;
          }
          .orbit-one {
            width: 390px;
            height: 300px;
            transform: rotate(-23deg);
          }
          .orbit-two {
            width: 330px;
            height: 390px;
            transform: rotate(26deg);
            border-style: dashed;
            opacity: 0.55;
          }
          .motion-project-card {
            position: relative;
            z-index: 2;
            width: min(390px, 78%);
            min-height: 300px;
            padding: 18px;
            border: 1px solid #ffffff;
            border-radius: 22px;
            background: #ffffffed;
            box-shadow: 0 24px 60px #1c4e7b20;
            backdrop-filter: blur(10px);
          }
          .motion-card-top {
            display: flex;
            justify-content: space-between;
            color: #6b8298;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.12em;
          }
          .motion-phone-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            height: 205px;
            padding-top: 8px;
          }
          .mini-phone {
            width: 82px;
            height: 164px;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 7px;
            padding: 16px 7px 8px;
            border: 3px solid #193b58;
            border-radius: 15px;
            background: #f8fcff;
            box-shadow: 0 8px 16px #183e5b15;
          }
          .phone-a {
            transform: rotate(-8deg) translateY(9px);
          }
          .phone-b {
            height: 184px;
            width: 91px;
            z-index: 2;
            transform: translateY(-3px);
            background: #fff;
          }
          .phone-c {
            transform: rotate(8deg) translateY(11px);
          }
          .mini-notch {
            position: absolute;
            top: 4px;
            width: 24px;
            height: 4px;
            border-radius: 5px;
            background: #193b58;
          }
          .mini-logo {
            align-self: flex-start;
            color: #08775b;
            font:
              800 15px "Space Grotesk",
              sans-serif;
            margin-top: 5px;
          }
          .mini-map {
            width: 100%;
            height: 52px;
            border-radius: 7px;
            background:
              linear-gradient(
                135deg,
                transparent 44%,
                #fff 45% 49%,
                transparent 50%
              ),
              linear-gradient(
                35deg,
                transparent 40%,
                #fff 41% 46%,
                transparent 47%
              ),
              #c9eee4;
          }
          .map-alt {
            height: 65px;
            background:
              radial-gradient(
                circle at 65% 35%,
                #0e9d7b 0 3px,
                transparent 4px
              ),
              linear-gradient(135deg, #e3f3ff, #d5eee6);
          }
          .mini-header {
            width: 80%;
            height: 10px;
            margin-top: 5px;
            border-radius: 5px;
            background: #c9dff3;
          }
          .mini-tile {
            width: 100%;
            height: 44px;
            border-radius: 7px;
            background: linear-gradient(135deg, #d3f2e7, #9edac8);
          }
          .mini-line {
            display: block;
            width: 100%;
            height: 5px;
            border-radius: 5px;
            background: #d7e2eb;
          }
          .mini-line.short {
            width: 62%;
            align-self: flex-start;
          }
          .mini-action {
            width: 100%;
            height: 15px;
            margin-top: auto;
            border-radius: 6px;
            background: #08775b;
          }
          .motion-card-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            border-top: 1px solid #e4edf5;
            padding-top: 13px;
          }
          .motion-card-bottom strong {
            color: #142f4d;
            font:
              700 17px "Space Grotesk",
              sans-serif;
            letter-spacing: -0.04em;
          }
          .motion-card-bottom span {
            color: #71879a;
            font-size: 10px;
          }
          .motion-floating-tag {
            position: absolute;
            z-index: 4;
            display: flex;
            align-items: center;
            gap: 11px;
            padding: 12px 16px 12px 12px;
            border: 1px solid #e0edf7;
            border-radius: 14px;
            background: #fff;
            box-shadow: 0 14px 32px #1b4c761a;
          }
          .floating-tag-one {
            top: 56px;
            right: 0;
          }
          .floating-tag-two {
            left: 0;
            bottom: 47px;
          }
          .floating-icon {
            display: grid;
            place-items: center;
            width: 37px;
            height: 37px;
            border-radius: 10px;
            color: #fff;
            background: #3b82f6;
            font-size: 22px;
          }
          .mint-icon {
            background: #a5e4ce;
            color: #145b4a;
          }
          .motion-floating-tag b,
          .motion-floating-tag small {
            display: block;
            white-space: nowrap;
          }
          .motion-floating-tag b {
            color: #193b58;
            font-size: 11px;
          }
          .motion-floating-tag small {
            margin-top: 3px;
            color: #7b8fa2;
            font-size: 9px;
          }
          .motion-sparkle {
            position: absolute;
            z-index: 3;
            color: #1688e8;
            font-size: 30px;
          }
          .sparkle-a {
            top: 70px;
            left: 12%;
          }
          .sparkle-b {
            right: 12%;
            bottom: 66px;
            color: #14a98a;
            font-size: 26px;
          }
          .design-canvas {
            position: relative;
            z-index: 2;
            width: min(420px, 82%);
            min-height: 300px;
            overflow: hidden;
            padding: 15px 16px 13px;
            border: 1px solid #ffffff;
            border-radius: 20px;
            background: linear-gradient(145deg, #ffffffef, #f7fbffed);
            box-shadow:
              0 28px 70px #285d8c1c,
              0 3px 10px #285d8c0b;
            backdrop-filter: blur(14px);
          }
          .canvas-topbar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding-bottom: 12px;
            border-bottom: 1px solid #e3edf7;
            color: #8aa0b6;
            font-size: 8px;
            font-weight: 800;
            letter-spacing: 0.13em;
          }
          .canvas-dots {
            display: flex;
            gap: 4px;
          }
          .canvas-dots i {
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #c7d9ea;
          }
          .canvas-dots i:first-child {
            background: #8dbaff;
          }
          .canvas-topbar-mark {
            margin-left: auto;
            color: #1688e8;
            font-size: 16px;
          }
          .canvas-content {
            display: grid;
            grid-template-columns: 62px 1fr;
            gap: 14px;
            padding: 17px 0 15px;
          }
          .canvas-sidebar {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 9px;
            padding: 10px 8px;
            border-radius: 10px;
            background: #eef6fd;
          }
          .sidebar-pill {
            width: 35px;
            height: 5px;
            border-radius: 6px;
            background: #d2e2f1;
          }
          .sidebar-pill.active {
            width: 42px;
            background: #3d8cf7;
          }
          .sidebar-pill.short {
            width: 25px;
          }
          .sidebar-divider {
            width: 100%;
            height: 1px;
            margin: 5px 0;
            background: #dce8f3;
          }
          .sidebar-avatar {
            width: 21px;
            height: 21px;
            border-radius: 8px;
            background: linear-gradient(135deg, #a6e6d5, #6ec9b0);
          }
          .sidebar-line {
            width: 33px;
            height: 5px;
            border-radius: 6px;
            background: #d2e2f1;
          }
          .canvas-main {
            min-width: 0;
          }
          .canvas-heading-line {
            width: 58%;
            height: 11px;
            margin: 3px 0 8px;
            border-radius: 7px;
            background: #173d60;
          }
          .canvas-subheading-line {
            width: 78%;
            height: 5px;
            border-radius: 7px;
            background: #c9dbea;
          }
          .canvas-hero-block {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-around;
            min-height: 112px;
            margin-top: 14px;
            padding: 12px;
            overflow: hidden;
            border-radius: 12px;
            background: linear-gradient(120deg, #e4f2ff, #d7edfa 65%, #d9f5ed);
          }
          .canvas-orb {
            display: grid;
            place-items: center;
            width: 72px;
            height: 72px;
            border-radius: 26px 50% 50% 50%;
            color: #fff;
            font-size: 34px;
            background: linear-gradient(145deg, #65b5ff, #3c7cf4);
            box-shadow: 0 10px 22px #3c7cf433;
          }
          .canvas-hero-lines {
            display: flex;
            flex-direction: column;
            gap: 8px;
            width: 42%;
          }
          .canvas-hero-lines span {
            height: 6px;
            border-radius: 5px;
            background: #b6d4ed;
          }
          .canvas-hero-lines span:first-child {
            width: 88%;
            background: #6ba7e8;
          }
          .canvas-hero-lines span:last-child {
            width: 62%;
          }
          .canvas-tile-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
            margin-top: 11px;
          }
          .canvas-tile-row span {
            height: 38px;
            border: 1px solid #e2edf6;
            border-radius: 8px;
            background: linear-gradient(145deg, #ffffff, #e9f3fb);
          }
          .canvas-tile-row span:nth-child(2) {
            background: linear-gradient(145deg, #e0f8ef, #c7eddf);
          }
          .canvas-tile-row span:nth-child(3) {
            background: linear-gradient(145deg, #f4f0ff, #e4ddff);
          }
          .canvas-bottomline {
            display: flex;
            align-items: center;
            gap: 9px;
            padding-top: 10px;
            border-top: 1px solid #e3edf7;
            color: #91a4b6;
            font-size: 7px;
            font-weight: 800;
            letter-spacing: 0.1em;
          }
          .canvas-progress {
            flex: 1;
            height: 4px;
            overflow: hidden;
            border-radius: 5px;
            background: #e6eef6;
          }
          .canvas-progress i {
            display: block;
            width: 38%;
            height: 100%;
            border-radius: inherit;
            background: #4c91f5;
          }
          @media (max-width: 900px) {
            .selected-projects-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .selected-project-card:last-child {
              grid-column: 1 / -1;
            }
            .all-projects-layout {
              grid-template-columns: 1fr;
              gap: 22px;
            }
            .project-motion-stage {
              height: 400px;
            }
            .all-projects-copy p {
              max-width: 600px;
            }
          }
          @media (max-width: 640px) {
            .selected-projects-grid {
              grid-template-columns: 1fr;
              gap: 16px;
            }
            .selected-project-card:last-child {
              grid-column: auto;
            }
            .selected-project-art {
              height: 150px;
            }
            .selected-project-content {
              padding: 19px;
            }
            .selected-projects-footer {
              align-items: center;
              flex-direction: column;
            }
            .selected-projects-footer > span {
              position: static;
              text-align: center;
            }
            .selected-projects-footer .all-projects-button {
              width: 100%;
              justify-content: center;
            }
            .all-projects-section {
              padding: 60px 0;
            }
            .all-projects-copy h2 {
              font-size: clamp(40px, 11vw, 54px);
            }
            .project-motion-stage {
              height: 330px;
              margin: -5px -8px 0;
            }
            .design-canvas {
              width: 76%;
              min-height: 245px;
              padding: 12px;
              border-radius: 16px;
            }
            .canvas-content {
              grid-template-columns: 48px 1fr;
              gap: 9px;
              padding: 12px 0;
            }
            .canvas-hero-block {
              min-height: 88px;
              padding: 8px;
            }
            .canvas-orb {
              width: 55px;
              height: 55px;
              border-radius: 20px 50% 50% 50%;
              font-size: 26px;
            }
            .canvas-tile-row span {
              height: 29px;
            }
            .motion-project-card {
              width: 76%;
              min-height: 250px;
              padding: 13px;
              border-radius: 17px;
            }
            .motion-phone-row {
              height: 170px;
              gap: 5px;
            }
            .mini-phone {
              width: 65px;
              height: 135px;
              padding: 14px 5px 6px;
            }
            .phone-b {
              width: 73px;
              height: 150px;
            }
            .motion-card-bottom strong {
              font-size: 14px;
            }
            .motion-card-bottom span {
              font-size: 8px;
            }
            .motion-floating-tag {
              gap: 7px;
              padding: 8px;
              border-radius: 11px;
            }
            .floating-tag-one {
              top: 22px;
              right: 0;
            }
            .floating-tag-two {
              left: 0;
              bottom: 20px;
            }
            .floating-icon {
              width: 29px;
              height: 29px;
              font-size: 17px;
            }
            .motion-floating-tag b {
              font-size: 9px;
            }
            .motion-floating-tag small {
              font-size: 8px;
            }
            .orbit-one {
              width: 270px;
              height: 230px;
            }
            .orbit-two {
              width: 235px;
              height: 290px;
            }
            .sparkle-a {
              top: 32px;
              left: 9%;
            }
            .sparkle-b {
              right: 8%;
              bottom: 32px;
            }
          }

          /* About and experience refresh */
          .about-section {
            background: #f8f7f3;
            position: relative;
            isolation: isolate;
          }
          .about-grid {
            grid-template-columns: minmax(0, 1.05fr) minmax(300px, 0.8fr);
            column-gap: clamp(34px, 6vw, 88px);
            row-gap: clamp(38px, 5vw, 64px);
            align-items: center;
          }
          .about-intro-panel {
            max-width: 760px;
            padding: 8px 0 18px;
            border-bottom: 0;
            position: relative;
            z-index: 1;
          }
          .about-intro-panel h2 {
            max-width: 650px;
          }
          .about-intro-panel .about-copy {
            max-width: 670px;
          }
          .about-visual-card {
            min-height: 365px;
            position: relative;
            overflow: hidden;
            border-radius: 28px;
            padding: clamp(24px, 3vw, 38px);
            background: linear-gradient(
              145deg,
              #ffffff 0%,
              #f7f8f4 62%,
              #e9f5f0 100%
            );
            border: 1px solid #e4e7df;
            box-shadow: 0 22px 55px rgba(38, 57, 49, 0.07);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            isolation: isolate;
          }
          .about-visual-card::before,
          .about-visual-card::after {
            content: "";
            position: absolute;
            border: 1px solid rgba(49, 155, 157, 0.24);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
          }
          .about-visual-card::before {
            width: 300px;
            height: 300px;
            right: -75px;
            top: -90px;
          }
          .about-visual-card::after {
            width: 220px;
            height: 220px;
            right: -35px;
            top: -50px;
            border-style: dashed;
          }
          .about-visual-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
          }
          .about-visual-label {
            color: #258b89;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.16em;
            text-transform: uppercase;
          }
          /* Keep this brand star as a flat SVG; never render it as an OS emoji/sticker. */
          .about-visual-mark {
            color: #164dff !important;
            font-size: 1rem;
            line-height: 1;
            display: inline-grid;
            place-items: center;
            width: 48px;
            height: 48px;
            flex: 0 0 48px;
            padding: 0 !important;
            background: transparent !important;
            border: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            filter: none !important;
            transform: none !important;
            animation: none !important;
          }
          .about-visual-mark svg {
            display: block;
            width: 100%;
            height: 100%;
            background: transparent !important;
            filter: none !important;
          }
          .about-visual-title {
            max-width: 290px;
            margin: 34px 0 26px;
            color: #173654;
            font:
              700 clamp(29px, 3vw, 39px)/1.04 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.06em;
            animation: about-title-enter 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)
              both;
          }
          @keyframes about-mark-float {
            0%,
            100% {
              transform: translateY(0) rotate(0deg) scale(1);
            }
            50% {
              transform: translateY(-12px) rotate(18deg) scale(1.12);
            }
          }
          @keyframes about-mark-spin {
            from {
              rotate: 0deg;
            }
            to {
              rotate: 360deg;
            }
          }
          @keyframes about-title-enter {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .about-visual-card::before {
            animation: about-orbit-one 7s ease-in-out infinite alternate;
            transform-origin: 50% 50%;
          }
          .about-visual-card::after {
            animation: about-orbit-two 5.5s ease-in-out infinite alternate;
            transform-origin: 50% 50%;
          }
          @keyframes about-orbit-one {
            from {
              transform: translate(0, 0) rotate(-8deg) scale(1);
            }
            to {
              transform: translate(-28px, 20px) rotate(14deg) scale(1.08);
            }
          }
          @keyframes about-orbit-two {
            from {
              transform: translate(0, 0) rotate(12deg) scale(0.96);
              opacity: 0.45;
            }
            to {
              transform: translate(-18px, 12px) rotate(-12deg) scale(1.08);
              opacity: 1;
            }
          }
          .about-process-list {
            display: grid;
            gap: 10px;
            perspective: 800px;
          }
          .about-process-item {
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            gap: 13px;
            padding: 12px 14px;
            border-radius: 14px;
            border: 1px solid rgba(228, 231, 223, 0.95);
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(8px);
            animation:
              about-process-enter 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) both,
              about-card-float 3.8s ease-in-out infinite;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease;
          }
          .about-process-item::after {
            content: "";
            position: absolute;
            inset: 0;
            width: 45%;
            background: linear-gradient(
              105deg,
              transparent,
              rgba(255, 255, 255, 0.72),
              transparent
            );
            transform: translateX(-150%) skewX(-18deg);
            animation: about-card-shine 5s ease-in-out infinite;
            pointer-events: none;
          }
          .about-process-item:nth-child(1) {
            animation-delay: 0.1s, 0s;
          }
          .about-process-item:nth-child(2) {
            animation-delay: 0.25s, 0.35s;
          }
          .about-process-item:nth-child(3) {
            animation-delay: 0.4s, 0.7s;
          }
          .about-process-item:hover {
            transform: translateX(7px) translateY(-3px);
            box-shadow: 0 12px 28px rgba(22, 62, 53, 0.12);
          }
          @keyframes about-process-enter {
            from {
              opacity: 0;
              translate: 0 18px;
            }
            to {
              opacity: 1;
              translate: 0 0;
            }
          }
          @keyframes about-card-float {
            0%,
            100% {
              margin-left: 0;
            }
            50% {
              margin-left: 5px;
            }
          }
          @keyframes about-card-shine {
            0%,
            60%,
            100% {
              transform: translateX(-150%) skewX(-18deg);
            }
            78% {
              transform: translateX(300%) skewX(-18deg);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .about-visual-mark,
            .about-visual-title,
            .about-visual-card::before,
            .about-visual-card::after,
            .about-process-item,
            .about-process-item::after {
              animation: none !important;
              transition: none !important;
            }
          }
          .about-process-number {
            width: 30px;
            height: 30px;
            flex: 0 0 30px;
            display: grid;
            place-items: center;
            border-radius: 10px;
            color: #fff;
            background: #438cf4;
            font-size: 11px;
            font-weight: 800;
          }
          .about-process-item:nth-child(2) .about-process-number {
            background: #38a6b7;
          }
          .about-process-item:nth-child(3) .about-process-number {
            background: #7c8df4;
          }
          .about-process-item strong {
            display: block;
            color: #173654;
            font-size: 13px;
          }
          .about-process-item small {
            display: block;
            margin-top: 2px;
            color: #627c98;
            font-size: 11px;
          }
          .experience-panel {
            grid-column: 1 / -1;
            background: #ffffff;
            border: 1px solid #d9e6f5;
            border-radius: 24px;
            padding: clamp(22px, 4vw, 42px);
            box-shadow: 0 18px 45px rgba(31, 71, 117, 0.06);
          }
          .experience-heading-row {
            margin-bottom: 30px;
          }
          .experience-heading-row h2 {
            max-width: 720px;
          }
          .timeline {
            position: relative;
            border-left: 2px solid #c8ddf7;
            padding-left: clamp(22px, 3vw, 34px);
            gap: 24px;
          }
          .timeline-item {
            background: #f8fbff;
            border: 1px solid #e0ebf8;
            border-radius: 16px;
            padding: 20px 22px;
            transition:
              transform 0.25s ease,
              box-shadow 0.25s ease,
              border-color 0.25s ease;
          }
          .timeline-item:hover {
            transform: translateY(-3px);
            border-color: #b9d5f5;
            box-shadow: 0 12px 26px rgba(31, 71, 117, 0.08);
          }
          .timeline-item:before {
            left: calc(clamp(22px, 3vw, 34px) * -1 - 7px);
            top: 24px;
            width: 12px;
            height: 12px;
            background: #438cf4;
            border: 3px solid #ffffff;
            box-shadow: 0 0 0 3px #dceafe;
          }
          .timeline-date {
            display: inline-flex;
            align-items: center;
            border-radius: 999px;
            background: #e7f1ff;
            color: #2867b8;
            padding: 6px 10px;
            letter-spacing: 0.08em;
          }
          .experience-index {
            color: #8baed8;
          }
          /* Vertical experience timeline: visible connector and nodes */
          .about-section .experience-panel {
            background: #fff;
            border: 1px solid #e6e3dc;
            border-radius: 26px;
            box-shadow: 0 18px 44px rgba(32, 48, 60, 0.045);
          }
          .about-section .timeline {
            display: flex;
            flex-direction: column;
            position: relative;
            border-left: 2px solid #b9d8d1;
            padding: 4px 0 4px 34px;
            margin: 0 0 0 9px;
            gap: 22px;
          }
          .about-section .timeline-item {
            position: relative;
            padding: 21px 24px 22px;
            border: 1px solid #e5e8e3;
            border-radius: 16px;
            background: #fbfcfa;
            box-shadow: 0 8px 22px rgba(26, 48, 62, 0.035);
            animation: timeline-card-in 0.65s cubic-bezier(0.2, 0.8, 0.2, 1)
              both;
            transition:
              transform 0.28s ease,
              border-color 0.28s ease,
              box-shadow 0.28s ease;
          }
          .about-section .timeline-item:nth-child(2) {
            animation-delay: 0.08s;
          }
          .about-section .timeline-item:nth-child(3) {
            animation-delay: 0.16s;
          }
          .about-section .timeline-item:nth-child(4) {
            animation-delay: 0.24s;
          }
          .about-section .timeline-item:nth-child(5) {
            animation-delay: 0.32s;
          }
          .about-section .timeline-item:nth-child(6) {
            animation-delay: 0.4s;
          }
          .about-section .timeline-item::before {
            display: block !important;
            content: "";
            position: absolute;
            left: -44px;
            top: 27px;
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: #2da6a0;
            border: 4px solid #fff;
            box-shadow: 0 0 0 2px #b9d8d1;
            z-index: 2;
          }
          .about-section .timeline-item:hover {
            transform: translateX(5px);
            border-color: #b9d8d1;
            box-shadow: 0 14px 28px rgba(26, 77, 78, 0.08);
          }
          .about-section .timeline-date {
            margin-bottom: 8px;
          }
          @keyframes timeline-card-in {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .about-section .timeline-item {
              animation: none !important;
              transition: none !important;
            }
          }
          @media (max-width: 760px) {
            .about-grid {
              gap: 30px;
            }
            .about-intro-panel {
              max-width: none;
            }
            .experience-panel {
              padding: 20px 16px;
              border-radius: 18px;
            }
            .timeline {
              padding-left: 22px;
              gap: 18px;
            }
            .timeline-item {
              padding: 17px 15px;
            }
            .timeline-item:before {
              left: -30px;
            }
          }

          /* Experience showcase: editorial timeline with date rail, colorful nodes, and airy cards */
          .experience-showcase {
            grid-column: 1 / -1;
            position: relative;
            overflow: hidden;
            padding: clamp(24px, 4vw, 44px);
            border: 1px solid #e8e5df;
            border-radius: 28px;
            background:
              radial-gradient(
                circle at 88% 7%,
                rgba(220, 244, 239, 0.42),
                transparent 17rem
              ),
              radial-gradient(
                circle at 0% 45%,
                rgba(232, 240, 255, 0.46),
                transparent 16rem
              ),
              #fffefa;
            box-shadow: 0 22px 55px rgba(31, 52, 69, 0.045);
          }
          .experience-showcase-heading {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 28px;
            margin-bottom: 28px;
          }
          .experience-showcase-heading h2 {
            margin: 12px 0 8px;
            color: #142f4d;
            font:
              700 clamp(30px, 3.6vw, 43px)/1.04 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.065em;
          }
          .experience-showcase-heading p {
            max-width: 570px;
            margin: 0;
            color: #657d98;
            font-size: 14px;
            line-height: 1.65;
          }
          .experience-heading-aside {
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            gap: 22px;
            min-width: 160px;
            padding-top: 4px;
          }
          .experience-showcase .experience-count {
            border: 1px solid #d7e8f7;
            background: #f1f8ff;
            color: #2867b8;
            padding: 8px 13px;
            font-size: 11px;
          }
          .experience-hand-note {
            max-width: 150px;
            color: #7392c6;
            font-family: Georgia, serif;
            font-size: 14px;
            font-style: italic;
            line-height: 1.4;
            transform: rotate(-5deg);
          }
          .experience-journey {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 14px;
          }
          .experience-journey::before {
            content: "";
            position: absolute;
            left: 179px;
            top: 14px;
            bottom: 14px;
            width: 2px;
            background: linear-gradient(
              to bottom,
              #c5e5e1,
              #d6e4f5 55%,
              #cde8dc
            );
          }
          .experience-journey-row {
            position: relative;
            display: grid;
            grid-template-columns: 142px 54px minmax(0, 1fr);
            align-items: stretch;
            gap: 16px;
            min-width: 0;
          }
          .experience-date-column {
            align-self: center;
            display: flex;
            flex-direction: column;
            padding: 0 4px 0 0;
            color: #193b5d;
            font-size: 12px;
            line-height: 1.25;
          }
          .experience-date-column strong,
          .experience-date-column > span {
            font-size: 13px;
            font-weight: 800;
          }
          .experience-date-column > span {
            color: #193b5d;
          }
          .experience-date-column small {
            margin-top: 9px;
            color: #8194aa;
            font-size: 11px;
            line-height: 1.45;
          }
          .experience-node {
            z-index: 1;
            align-self: start;
            justify-self: center;
            margin-top: 17px;
            width: 44px;
            height: 44px;
            display: grid;
            place-items: center;
            border: 5px solid #fffefa;
            border-radius: 50%;
            box-shadow:
              0 0 0 1px rgba(203, 220, 234, 0.8),
              0 0 0 8px rgba(226, 239, 247, 0.45);
            color: #fff;
            font-size: 16px;
            font-weight: 800;
          }
          .experience-node-blue {
            background: #193b5d;
          }
          .experience-node-sky {
            background: #57b4e9;
            font-size: 17px;
          }
          .experience-node-violet {
            background: #6d79d9;
          }
          .experience-node-pink {
            background: #9b79df;
          }
          .experience-node-rose {
            background: #df6d9a;
          }
          .experience-node-navy {
            background: #173654;
          }
          .experience-node-green {
            background: #21a17d;
          }
          .experience-node-teal {
            background: #309da7;
          }
          .experience-detail-card {
            position: relative;
            display: grid;
            grid-template-columns: minmax(0, 1fr) 28px;
            gap: 12px;
            padding: 17px 18px 16px;
            min-width: 0;
            border: 1px solid #e9edf0;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.88);
            box-shadow: 0 9px 24px rgba(27, 51, 71, 0.045);
            transition:
              transform 0.25s ease,
              border-color 0.25s ease,
              box-shadow 0.25s ease;
            animation: experience-card-glow 6s ease-in-out infinite;
          }
          .experience-detail-card:hover {
            transform: translateY(-3px) translateX(3px);
            border-color: #c7e0ed;
            box-shadow: 0 16px 30px rgba(27, 51, 71, 0.09);
          }
          .experience-detail-card::before {
            content: "";
            position: absolute;
            left: -7px;
            top: 31px;
            width: 12px;
            height: 12px;
            background: #fff;
            border-left: 1px solid #e4eaf0;
            border-bottom: 1px solid #e4eaf0;
            transform: rotate(45deg);
          }
          .experience-date-pill {
            display: inline-flex;
            width: fit-content;
            max-width: 100%;
            margin-bottom: 7px;
            padding: 6px 10px;
            border-radius: 999px;
            background: #e8f2ff;
            color: #2867b8;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.08em;
          }
          .pill-sky {
            background: #e2f4fb;
            color: #2c7da4;
          }
          .pill-violet {
            background: #eee9ff;
            color: #6558bd;
          }
          .pill-pink {
            background: #fce8f1;
            color: #b14f83;
          }
          .pill-rose {
            background: #fff0e4;
            color: #a76627;
          }
          .pill-navy {
            background: #e8eef8;
            color: #294b7a;
          }
          .pill-green {
            background: #e0f5eb;
            color: #168265;
          }
          .pill-teal {
            background: #e0f3f2;
            color: #247e85;
          }
          .experience-detail-main h3 {
            margin: 0 0 3px;
            color: #173654;
            font:
              700 17px/1.25 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.025em;
          }
          .experience-detail-role {
            display: block;
            margin-bottom: 7px;
            color: #345879;
            font-size: 11px;
            line-height: 1.5;
          }
          .experience-detail-main p {
            margin: 0;
            color: #657d98;
            font-size: 11px;
            line-height: 1.6;
          }
          .experience-tag-list {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-top: 10px;
          }
          .experience-tag-list span {
            padding: 5px 9px;
            border-radius: 999px;
            background: #edf5fb;
            color: #315f85;
            font-size: 9px;
            font-weight: 700;
          }
          .experience-node-violet
            ~ .experience-detail-card
            .experience-tag-list
            span {
            background: #f0edff;
            color: #6558bd;
          }
          .experience-detail-index {
            color: #c3d0de;
            font:
              500 19px/1 "Space Grotesk",
              sans-serif;
            text-align: right;
          }
          @keyframes experience-card-glow {
            0%,
            100% {
              box-shadow: 0 9px 24px rgba(27, 51, 71, 0.045);
            }
            50% {
              box-shadow: 0 12px 28px rgba(54, 125, 145, 0.065);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .experience-detail-card {
              animation: none !important;
              transition: none !important;
            }
          }
          @media (max-width: 820px) {
            .experience-showcase {
              padding: 22px 17px;
              border-radius: 22px;
            }
            .experience-showcase-heading {
              gap: 12px;
            }
            .experience-hand-note {
              display: none;
            }
            .experience-heading-aside {
              min-width: auto;
            }
            .experience-journey::before {
              left: 17px;
            }
            .experience-journey-row {
              grid-template-columns: 36px minmax(0, 1fr);
              gap: 12px;
            }
            .experience-date-column {
              display: none;
            }
            .experience-node {
              grid-column: 1;
              grid-row: 1;
              width: 34px;
              height: 34px;
              margin-top: 16px;
              border-width: 4px;
              font-size: 12px;
            }
            .experience-detail-card {
              grid-column: 2;
              grid-row: 1;
              padding: 15px 14px;
            }
            .experience-detail-card::before {
              left: -6px;
              top: 26px;
              width: 10px;
              height: 10px;
            }
            .experience-detail-main h3 {
              font-size: 15px;
            }
          }
          @media (max-width: 480px) {
            .experience-showcase-heading {
              flex-direction: column;
            }
            .experience-heading-aside {
              align-items: flex-start;
            }
            .experience-detail-card {
              grid-template-columns: minmax(0, 1fr) 20px;
              gap: 6px;
            }
            .experience-detail-index {
              font-size: 15px;
            }
            .experience-tag-list span {
              font-size: 8px;
            }
          }

          /* Repeat motion whenever cards enter view; keep timeline details subtly alive */
          .experience-node {
            animation: experience-node-pulse 2.8s ease-in-out infinite;
            will-change: transform, box-shadow;
          }
          .experience-journey-row:nth-child(2n) .experience-node {
            animation-delay: -0.9s;
          }
          .experience-journey-row:nth-child(3n) .experience-node {
            animation-delay: -1.7s;
          }
          .experience-detail-card {
            animation: experience-card-float 5s ease-in-out infinite;
            will-change: transform;
          }
          .experience-journey-row:nth-child(2n) .experience-detail-card {
            animation-delay: -2.1s;
          }
          .experience-journey-row:nth-child(3n) .experience-detail-card {
            animation-delay: -3.4s;
          }
          @keyframes experience-node-pulse {
            0%,
            100% {
              transform: scale(1);
              box-shadow:
                0 0 0 1px rgba(203, 220, 234, 0.8),
                0 0 0 7px rgba(226, 239, 247, 0.28);
            }
            50% {
              transform: scale(1.07);
              box-shadow:
                0 0 0 1px rgba(160, 203, 225, 0.95),
                0 0 0 11px rgba(226, 239, 247, 0.55);
            }
          }
          @keyframes experience-card-float {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-2px);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .experience-node,
            .experience-detail-card {
              animation: none !important;
              will-change: auto;
            }
          }

          .tech-stack-section {
            position: relative;
            overflow: hidden;
            isolation: isolate;
            background:
              radial-gradient(
                circle at 94% 4%,
                rgba(92, 142, 255, 0.18),
                transparent 25rem
              ),
              linear-gradient(135deg, #f7fbff 0%, #edf5ff 54%, #f8fbff 100%);
          }
          .tech-stack-section::before {
            content: "";
            position: absolute;
            z-index: -1;
            width: 420px;
            height: 420px;
            right: -150px;
            top: -180px;
            border: 1px solid rgba(49, 93, 244, 0.12);
            border-radius: 50%;
            box-shadow:
              0 0 0 28px rgba(49, 93, 244, 0.025),
              0 0 0 62px rgba(49, 93, 244, 0.02);
            pointer-events: none;
          }
          .tech-stack-heading {
            display: flex;
            align-items: end;
            justify-content: space-between;
            gap: 32px;
            margin-bottom: 34px;
          }
          .tech-stack-heading .eyebrow {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 18px;
            color: #1539a7;
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.2em;
            text-transform: uppercase;
          }
          .tech-stack-heading .eyebrow::before {
            content: "";
            width: 30px;
            height: 3px;
            background: #214dff;
            border-radius: 4px;
          }
          .tech-stack-heading h2 {
            margin: 0;
            color: #101d37;
            font:
              700 clamp(38px, 5.2vw, 62px)/0.98 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.065em;
          }
          .tech-stack-heading h2 span {
            color: #315df4;
          }
          .tech-stack-heading p {
            max-width: 850px;
            margin: 16px 0 0;
            color: #627792;
            font-size: clamp(15px, 1.4vw, 18px);
            line-height: 1.7;
          }
          .tech-stack-groups {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px 18px;
            align-items: stretch;
          }
          .tech-stack-group {
            position: relative;
            min-width: 0;
            padding: 24px;
            border: 1px solid rgba(180, 205, 238, 0.72);
            border-radius: 24px;
            background: rgba(255, 255, 255, 0.78);
            box-shadow: 0 14px 35px rgba(35, 67, 117, 0.055);
            transition:
              transform 220ms ease,
              box-shadow 220ms ease,
              border-color 220ms ease;
          }
          .tech-stack-group::before {
            content: "";
            position: absolute;
            top: 0;
            left: 26px;
            width: 48px;
            height: 4px;
            border-radius: 0 0 6px 6px;
            background: linear-gradient(90deg, #2456ff, #a45bdb);
          }
          .tech-stack-group:hover {
            transform: translateY(-3px);
            border-color: rgba(81, 126, 235, 0.55);
            box-shadow: 0 20px 44px rgba(35, 67, 117, 0.09);
          }
          .tech-stack-group:nth-child(3) {
            grid-column: 1 / -1;
          }
          .tech-stack-category {
            display: flex;
            align-items: center;
            gap: 12px;
            margin: 0 0 20px;
            color: #14213d;
            font-size: clamp(17px, 1.5vw, 21px);
            line-height: 1.2;
            font-weight: 750;
            letter-spacing: -0.025em;
          }
          .tech-stack-category::before {
            content: "";
            flex: 0 0 auto;
            width: 10px;
            height: 10px;
            border-radius: 4px;
            background: #536bff;
            box-shadow: 0 0 0 6px #edf0ff;
            margin: 0 5px 0 3px;
          }
          .tech-stack-group:nth-child(2) .tech-stack-category::before {
            background: #1fa77a;
            box-shadow: 0 0 0 6px #e4f7f0;
          }
          .tech-stack-group:nth-child(3) .tech-stack-category::before {
            background: #f0a33a;
            box-shadow: 0 0 0 6px #fff2df;
          }
          .tech-stack-items {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }
          .tech-stack-item {
            display: flex;
            align-items: center;
            gap: 13px;
            min-width: 0;
            min-height: 80px;
            padding: 12px 14px;
            border: 1px solid rgba(206, 222, 244, 0.8);
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.88);
            box-shadow: 0 6px 16px rgba(36, 66, 112, 0.035);
            transition:
              transform 180ms ease,
              box-shadow 180ms ease,
              border-color 180ms ease;
          }
          .tech-stack-item:hover {
            transform: translateY(-3px);
            border-color: rgba(81, 126, 235, 0.42);
            box-shadow: 0 10px 22px rgba(36, 66, 112, 0.09);
          }
          .tech-stack-mark {
            display: grid;
            place-items: center;
            flex: 0 0 48px;
            width: 48px;
            height: 48px;
            border-radius: 13px;
            font-size: 25px;
            font-weight: 800;
            line-height: 1;
          }
          .tech-stack-copy {
            display: flex;
            flex-direction: column;
            gap: 4px;
            min-width: 0;
          }
          .tech-stack-name {
            color: #14213d;
            font-size: 15px;
            font-weight: 750;
            line-height: 1.25;
          }
          .tech-stack-desc {
            color: #6a7f9d;
            font-size: 12px;
            line-height: 1.35;
          }
          .figma-logo {
            color: #fff;
            background: #f7f9ff;
            border: 1px solid #e1e8f5;
            border-radius: 13px;
          }
          .tech-stack-mark svg {
            width: 100%;
            height: 100%;
            max-width: 42px;
            max-height: 42px;
            display: block;
            overflow: visible;
          }
          .figma-logo svg,
          .github-logo svg {
            width: 34px;
            height: 34px;
            display: block;
          }
          .word-logo svg,
          .excel-logo svg,
          .teams-logo svg,
          .powerpoint-logo svg,
          .outlook-logo svg,
          .trello-logo svg,
          .html-mark svg,
          .css-mark svg,
          .js-mark svg,
          .vue-logo svg,
          .bootstrap-logo svg,
          .sql-logo svg,
          .react-logo svg,
          .nextjs-logo svg {
            width: 100%;
            height: 100%;
            max-width: 48px;
            max-height: 48px;
          }
          .miro-logo {
            color: #171717;
            background: #ffd92f;
            border-radius: 12px;
            font-style: italic;
            font-size: 37px;
            letter-spacing: -7px;
            padding-right: 7px;
          }
          .sketch-logo {
            color: #fff;
            background: linear-gradient(145deg, #ffd84d, #ff9d00);
            clip-path: polygon(50% 0, 100% 25%, 50% 100%, 0 25%);
            border-radius: 0;
            font-size: 27px;
          }
          .word-logo {
            color: #fff;
            background: linear-gradient(135deg, #2b8de5, #064a9f);
            border-radius: 8px;
            box-shadow: inset -8px -7px 0 rgba(0, 0, 0, 0.12);
          }
          .excel-logo {
            color: #fff;
            background: linear-gradient(135deg, #31b77a, #087443);
            border-radius: 8px;
            box-shadow: inset -8px -7px 0 rgba(0, 0, 0, 0.12);
          }
          .teams-logo {
            color: #fff;
            background: #6264a7;
            border-radius: 14px;
          }
          .powerpoint-logo {
            color: #fff;
            background: linear-gradient(135deg, #f47b50, #c43e1c);
            border-radius: 50%;
          }
          .outlook-logo {
            color: #fff;
            background: linear-gradient(135deg, #35a9e8, #0067b8);
            border-radius: 9px;
          }
          .trello-logo {
            color: #fff;
            background: #1476a8;
            border-radius: 10px;
            font-size: 25px;
          }
          .html-mark {
            color: #fff;
            background: #e94f26;
            border-radius: 0;
            clip-path: polygon(8% 0, 92% 0, 82% 88%, 50% 100%, 18% 88%);
          }
          .css-mark {
            color: #fff;
            background: #2865f0;
            border-radius: 0;
            clip-path: polygon(8% 0, 92% 0, 82% 88%, 50% 100%, 18% 88%);
          }
          .js-mark {
            color: #242424;
            background: #f4dc4e;
            border-radius: 0;
            align-items: end;
            justify-items: end;
            padding: 4px;
            box-sizing: border-box;
          }
          .vue-logo {
            color: #fff;
            background: linear-gradient(135deg, #41b883 0 50%, #35495e 50%);
            clip-path: polygon(0 0, 50% 100%, 100% 0, 75% 0, 50% 48%, 25% 0);
            border-radius: 0;
            font-size: 0;
          }
          .bootstrap-logo {
            color: #fff;
            background: #7952b3;
            border-radius: 10px;
          }
          .sql-logo {
            color: #e0782f;
            background: #fff8ef;
            border: 3px solid #e0782f;
            border-radius: 50% / 18%;
            font-size: 12px;
          }
          .react-logo {
            color: #149eca;
            background: #e9faff;
            border-radius: 50%;
            font-size: 34px;
          }
          .nextjs-logo {
            color: #fff;
            background: #111827;
            border-radius: 50%;
            font-size: 27px;
            font-weight: 650;
          }
          .github-logo {
            color: #24292f;
            background: #f7f9ff;
            border: 1px solid #e1e8f5;
            border-radius: 13px;
          }
          @media (max-width: 980px) {
            .tech-stack-groups {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .tech-stack-group:nth-child(3) {
              grid-column: 1 / -1;
            }
          }
          @media (max-width: 700px) {
            .tech-stack-groups {
              grid-template-columns: 1fr;
              gap: 14px;
            }
            .tech-stack-group:nth-child(3) {
              grid-column: auto;
            }
            .tech-stack-group {
              padding: 22px 17px 18px;
              border-radius: 18px;
            }
            .tech-stack-items {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 10px;
            }
            .tech-stack-item {
              min-height: 70px;
              padding: 10px;
              gap: 9px;
            }
            .tech-stack-mark {
              flex-basis: 40px;
              width: 40px;
              height: 40px;
              font-size: 21px;
              border-radius: 11px;
            }
            .tech-stack-name {
              font-size: 13px;
            }
            .tech-stack-desc {
              font-size: 11px;
            }
            .tech-stack-heading {
              margin-bottom: 24px;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .tech-stack-group,
            .tech-stack-item {
              transition: none !important;
            }
          }

          /* Skills & Tools: richer portfolio cards, with distinct pastel tones */
          .skills-section {
            position: relative;
            overflow: hidden;
            background:
              radial-gradient(
                circle at 3% 0%,
                rgba(255, 255, 255, 0.72),
                transparent 17rem
              ),
              radial-gradient(
                circle at 98% 95%,
                rgba(199, 226, 255, 0.48),
                transparent 20rem
              ),
              #eaf4fa;
          }
          .skills-showcase-heading {
            display: grid;
            grid-template-columns: minmax(0, 1.15fr) minmax(240px, 0.75fr);
            gap: clamp(24px, 5vw, 72px);
            align-items: end;
          }
          .skills-showcase-heading h2 {
            margin: 16px 0 12px;
            color: #101e36;
            font:
              700 clamp(36px, 5vw, 64px)/0.98 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.075em;
          }
          .skills-showcase-heading h2 span {
            background: linear-gradient(
              95deg,
              #287cff 0%,
              #6758d8 48%,
              #ba5a9b 100%
            );
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .skills-intro {
            max-width: 590px;
            margin: 0;
            color: #637894;
            font-size: 15px;
            line-height: 1.65;
          }
          .skills-aside {
            justify-self: end;
            max-width: 350px;
            padding-bottom: 4px;
          }
          .skills-hand-note {
            display: inline-block;
            margin-bottom: 20px;
            color: #287cff;
            font:
              italic 17px/1.4 Georgia,
              serif;
            transform: rotate(-4deg);
          }
          .skills-aside p {
            margin: 0;
            color: #667b94;
            font-size: 14px;
            line-height: 1.8;
          }
          .skills-grid.skills-showcase-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 16px;
            margin-top: 34px;
          }
          .skills-showcase-grid .skill-card {
            position: relative;
            min-height: 254px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 0;
            overflow: hidden;
            padding: 22px 20px 18px;
            border-radius: 22px;
            border: 1px solid var(--skill-border);
            background: linear-gradient(
              145deg,
              var(--skill-bg) 0%,
              #fffdf9 100%
            );
            box-shadow: 0 12px 26px rgba(37, 63, 91, 0.045);
            transition:
              box-shadow 0.3s ease,
              border-color 0.3s ease;
            isolation: isolate;
          }
          .skills-showcase-grid .skill-card:hover {
            border-color: var(--skill-accent);
            box-shadow: 0 18px 35px rgba(37, 63, 91, 0.1);
          }
          .skill-pink,
          .skill-blue,
          .skill-green,
          .skill-orange,
          .skill-purple,
          .skill-sky,
          .skill-mint {
            --skill-bg: #f7f5ef;
            --skill-border: #e7e1d5;
            --skill-accent: #315d86;
            --skill-tag: #e8eef2;
            --skill-text: #315d86;
          }
          .skill-card-top {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;
          }
          .skill-number {
            color: var(--skill-text);
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.08em;
          }
          .skills-showcase-grid .skill-icon {
            display: grid;
            place-items: center;
            width: 44px;
            height: 44px;
            border-radius: 12px;
            background: var(--skill-accent);
            color: white;
            font-size: 25px;
            box-shadow: 0 8px 18px
              color-mix(in srgb, var(--skill-accent) 24%, transparent);
          }
          /* The prototype icon is a UI/cursor SVG, not a green emoji badge. */
          .skills-showcase-grid .skill-icon-prototype {
            background: #eaf2ff !important;
            color: #315d86 !important;
            border: 1px solid #d4e2f6;
            box-shadow: none !important;
          }
          .skills-showcase-grid .skill-icon svg {
            display: block;
            width: 24px;
            height: 24px;
            max-width: none;
            background: transparent !important;
            filter: none !important;
          }
          .skills-showcase-grid .skill-card h3 {
            position: relative;
            z-index: 1;
            margin: 0 0 8px;
            color: #132440;
            font:
              700 19px/1.2 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.035em;
          }
          .skills-showcase-grid .skill-card p {
            position: relative;
            z-index: 1;
            max-width: 290px;
            margin: 0 0 14px;
            color: #5e7390;
            font-size: 12px;
            line-height: 1.6;
          }
          .skill-tags {
            position: relative;
            z-index: 1;
            display: flex;
            flex-wrap: wrap;
            gap: 5px;
            margin-top: auto;
            padding-right: 22px;
          }
          .skill-tags span {
            padding: 5px 8px;
            border-radius: 999px;
            background: var(--skill-tag);
            color: var(--skill-text);
            font-size: 9px;
            font-weight: 700;
          }
          .skill-arrow {
            position: absolute;
            z-index: 2;
            right: 16px;
            bottom: 16px;
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border: 1px solid var(--skill-border);
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.9);
            color: var(--skill-accent);
            font-size: 18px;
            transition: transform 0.25s ease;
          }
          .skill-card:hover .skill-arrow {
            transform: translate(2px, -2px);
          }
          .skill-decor {
            position: absolute;
            right: 18px;
            top: 32px;
            z-index: 0;
            color: var(--skill-accent);
            opacity: 0.07;
            font-size: 76px;
            line-height: 1;
            transform: rotate(-14deg);
            pointer-events: none;
          }
          .skill-decor svg {
            display: block;
            width: 1em;
            height: 1em;
            max-width: none;
          }
          .skill-card:nth-child(2n) .skill-decor {
            transform: rotate(12deg) scale(0.9);
          }
          .skill-card:nth-child(3n) .skill-decor {
            top: 52px;
            right: 8px;
            transform: rotate(22deg) scale(1.15);
          }
          @media (max-width: 1050px) {
            .skills-grid.skills-showcase-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .skills-showcase-grid .skill-card {
              min-height: 230px;
            }
          }
          @media (max-width: 680px) {
            .skills-showcase-grid .skill-decor {
              top: 44px;
              right: 14px;
              font-size: 60px;
              opacity: 0.06;
            }
            .skills-showcase-heading {
              grid-template-columns: 1fr;
              gap: 18px;
            }
            .skills-aside {
              justify-self: start;
              max-width: 100%;
            }
            .skills-hand-note {
              margin-bottom: 8px;
            }
            .skills-grid.skills-showcase-grid {
              grid-template-columns: 1fr;
              gap: 12px;
              margin-top: 25px;
            }
            .skills-showcase-grid .skill-card {
              min-height: 220px;
            }
            .skills-showcase-heading h2 {
              font-size: clamp(34px, 10vw, 48px);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .skills-showcase-grid .skill-card,
            .skills-showcase-grid .skill-arrow {
              transition: none !important;
            }
          }

          /* How I Work: one clear horizontal timeline, flowing left to right */
          .process-grid {
            direction: ltr;
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: 14px;
            margin-top: 48px;
            position: relative;
            align-items: start;
          }
          .process-grid::before {
            content: "";
            position: absolute;
            top: 17px;
            left: 8%;
            right: 8%;
            height: 2px;
            border-radius: 999px;
            background: linear-gradient(
              90deg,
              #3478e5,
              #35b5c2,
              #8a70f4,
              #e57aa7
            );
            opacity: 0.5;
          }
          .process-item {
            direction: ltr;
            position: relative;
            min-width: 0;
            padding: 0 12px 16px;
            border: 0;
            border-radius: 16px;
            background: transparent;
            transition:
              transform 0.3s ease,
              background 0.3s ease,
              box-shadow 0.3s ease;
          }
          .process-item::before {
            content: "";
            position: relative;
            z-index: 1;
            display: block;
            width: 14px;
            height: 14px;
            margin: 10px 0 23px;
            border: 4px solid #fff;
            border-radius: 50%;
            background: var(--process-accent, #3478e5);
            box-shadow:
              0 0 0 2px var(--process-accent, #3478e5),
              0 0 0 7px
                color-mix(
                  in srgb,
                  var(--process-accent, #3478e5) 12%,
                  transparent
                );
            animation: process-node-pulse 3s ease-in-out infinite;
          }
          .process-item:nth-child(2) {
            --process-accent: #27a9b5;
            animation-delay: -0.4s;
          }
          .process-item:nth-child(3) {
            --process-accent: #8a70f4;
          }
          .process-item:nth-child(4) {
            --process-accent: #d967a0;
          }
          .process-item:nth-child(5) {
            --process-accent: #e7a43b;
          }
          .process-item:nth-child(6) {
            --process-accent: #2a9b7d;
          }
          .process-item::after {
            content: "";
            position: absolute;
            top: 47px;
            right: 13px;
            width: 8px;
            height: 8px;
            border-top: 2px solid var(--process-accent, #3478e5);
            border-right: 2px solid var(--process-accent, #3478e5);
            opacity: 0.7;
            transform: rotate(0deg);
            transition: transform 0.3s ease;
          }
          .process-item:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.78);
            box-shadow: 0 12px 28px rgba(26, 55, 84, 0.07);
          }
          .process-item:hover::after {
            transform: translate(3px, -3px);
          }
          .process-item span {
            display: block;
            margin-bottom: 10px;
            color: var(--process-accent, var(--cyan-dark));
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.1em;
          }
          .process-item h3 {
            margin: 0 0 9px;
            color: #173654;
            font:
              700 19px/1.2 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.035em;
          }
          .process-item p {
            margin: 0;
            color: var(--muted);
            font-size: 11px;
            line-height: 1.65;
          }
          @keyframes process-node-pulse {
            0%,
            100% {
              box-shadow:
                0 0 0 2px var(--process-accent, #3478e5),
                0 0 0 7px
                  color-mix(
                    in srgb,
                    var(--process-accent, #3478e5) 12%,
                    transparent
                  );
            }
            50% {
              box-shadow:
                0 0 0 2px var(--process-accent, #3478e5),
                0 0 0 10px
                  color-mix(
                    in srgb,
                    var(--process-accent, #3478e5) 18%,
                    transparent
                  );
            }
          }
          @media (max-width: 1050px) {
            .process-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr));
              row-gap: 28px;
            }
            .process-grid::before {
              display: none;
            }
            .process-item {
              border-top: 1px solid #dce8f2;
              padding-top: 10px;
            }
            .process-item::before {
              margin-top: 0;
              margin-bottom: 14px;
            }
          }
          @media (max-width: 640px) {
            .process-grid {
              display: flex;
              overflow-x: auto;
              gap: 12px;
              padding: 6px 4px 18px;
              scroll-snap-type: x mandatory;
              scrollbar-width: thin;
            }
            .process-grid::before {
              display: block;
              left: 24px;
              right: auto;
              width: calc(6 * 210px);
              top: 23px;
            }
            .process-item {
              flex: 0 0 210px;
              min-height: 190px;
              padding: 0 14px 16px;
              scroll-snap-align: start;
            }
            .process-item::before {
              margin-top: 16px;
              margin-bottom: 23px;
            }
            .process-item::after {
              top: 50px;
              right: 14px;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .process-item,
            .process-item::before,
            .process-item::after {
              animation: none !important;
              transition: none !important;
            }
          }

          /* Enhanced How I Work timeline: visible continuous motion and richer cards */
          .process-grid {
            gap: 13px;
            margin-top: 42px;
            padding-top: 10px;
            isolation: isolate;
          }
          .process-grid::before {
            top: 27px;
            left: 7%;
            right: 7%;
            height: 3px;
            opacity: 1;
            background: #dce8f7;
            overflow: hidden;
          }
          .process-grid::after {
            content: "";
            position: absolute;
            z-index: -1;
            top: 27px;
            left: 7%;
            width: 22%;
            height: 3px;
            border-radius: 999px;
            background: linear-gradient(90deg, #3478e5, #27b7bd, #8a70f4);
            box-shadow: 0 0 12px rgba(52, 120, 229, 0.28);
            animation: process-line-travel 5s ease-in-out infinite;
          }
          .process-item {
            padding: 0 14px 19px;
            border: 1px solid rgba(219, 229, 239, 0.9);
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.78);
            box-shadow: 0 8px 22px rgba(31, 58, 87, 0.035);
            animation: process-card-drift 4.8s ease-in-out infinite;
            will-change: transform;
          }
          .process-item:nth-child(2) {
            animation-delay: -0.8s;
          }
          .process-item:nth-child(3) {
            animation-delay: -1.6s;
          }
          .process-item:nth-child(4) {
            animation-delay: -2.4s;
          }
          .process-item:nth-child(5) {
            animation-delay: -3.2s;
          }
          .process-item:nth-child(6) {
            animation-delay: -4s;
          }
          .process-item::before {
            width: 16px;
            height: 16px;
            margin: 9px 0 24px;
            border: 4px solid #fff;
            box-shadow:
              0 0 0 2px var(--process-accent, #3478e5),
              0 0 0 7px
                color-mix(
                  in srgb,
                  var(--process-accent, #3478e5) 16%,
                  transparent
                );
            animation: process-node-pulse 2.2s ease-in-out infinite;
          }
          .process-item:nth-child(2)::before {
            animation-delay: -0.35s;
          }
          .process-item:nth-child(3)::before {
            animation-delay: -0.7s;
          }
          .process-item:nth-child(4)::before {
            animation-delay: -1.05s;
          }
          .process-item:nth-child(5)::before {
            animation-delay: -1.4s;
          }
          .process-item:nth-child(6)::before {
            animation-delay: -1.75s;
          }
          .process-item::after {
            top: 54px;
            right: 13px;
            width: 29px;
            height: 29px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            background: color-mix(
              in srgb,
              var(--process-accent, #3478e5) 10%,
              white
            );
            font-size: 16px;
            opacity: 0.95;
          }
          .process-item span {
            margin-bottom: 8px;
            font-size: 9px;
          }
          .process-item h3 {
            font-size: 20px;
            margin-bottom: 8px;
          }
          .process-item p {
            font-size: 11px;
            line-height: 1.7;
            padding-right: 3px;
          }
          .process-item:hover {
            animation-play-state: paused;
            transform: translateY(-7px);
            border-color: color-mix(
              in srgb,
              var(--process-accent, #3478e5) 45%,
              white
            );
            background: #fff;
            box-shadow: 0 18px 36px rgba(31, 58, 87, 0.11);
          }
          .process-item:hover::before {
            animation-duration: 0.85s;
          }
          @keyframes process-line-travel {
            0% {
              left: 7%;
              width: 8%;
              opacity: 0.55;
            }
            50% {
              left: 44%;
              width: 28%;
              opacity: 1;
            }
            100% {
              left: 85%;
              width: 8%;
              opacity: 0.55;
            }
          }
          @keyframes process-card-drift {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-4px);
            }
          }
          @keyframes process-node-pulse {
            0%,
            100% {
              transform: scale(1);
              box-shadow:
                0 0 0 2px var(--process-accent, #3478e5),
                0 0 0 7px
                  color-mix(
                    in srgb,
                    var(--process-accent, #3478e5) 14%,
                    transparent
                  );
            }
            50% {
              transform: scale(1.12);
              box-shadow:
                0 0 0 2px var(--process-accent, #3478e5),
                0 0 0 12px
                  color-mix(
                    in srgb,
                    var(--process-accent, #3478e5) 18%,
                    transparent
                  );
            }
          }
          @media (max-width: 1050px) {
            .process-grid {
              gap: 10px;
            }
            .process-item {
              padding: 0 10px 15px;
            }
          }
          @media (max-width: 640px) {
            .process-grid {
              display: flex;
              overflow-x: auto;
              gap: 12px;
              padding: 8px 4px 20px;
              scroll-snap-type: x mandatory;
              scrollbar-width: thin;
            }
            .process-grid::before {
              display: block;
              left: 24px;
              right: auto;
              width: 1260px;
              top: 25px;
            }
            .process-grid::after {
              top: 25px;
              animation: process-line-travel-mobile 5s ease-in-out infinite;
            }
            .process-item {
              flex: 0 0 205px;
              min-height: 205px;
              padding: 0 14px 16px;
              scroll-snap-align: start;
            }
            .process-item::before {
              margin-top: 14px;
              margin-bottom: 22px;
            }
            .process-item::after {
              top: 52px;
              right: 14px;
            }
          }
          @keyframes process-line-travel-mobile {
            0% {
              left: 24px;
              width: 40px;
            }
            100% {
              left: 1170px;
              width: 40px;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .process-grid::after,
            .process-item,
            .process-item::before {
              animation: none !important;
            }
            .process-item {
              transition: none !important;
            }
          }

          /* More Than Design: editorial blue + cream achievement cards */
          .achievement-intro-line {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 36px 0 15px;
            color: #315d86;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: 0.16em;
          }
          .achievement-rule {
            width: 25px;
            height: 2px;
            border-radius: 2px;
            background: #315d86;
          }
          .achievement-intro-count {
            margin-left: auto;
            color: #8a918f;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.04em;
          }
          .awards.awards-showcase {
            display: grid;
            grid-template-columns: repeat(12, minmax(0, 1fr));
            gap: 17px 20px;
            margin-top: 0;
            align-items: stretch;
          }
          .awards-showcase .award-card {
            --award-bg: #fbf9f3;
            --award-border: #e7e1d5;
            --award-accent: #315d86;
            --award-tint: #e8eef2;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            min-height: 225px;
            overflow: hidden;
            padding: 23px 24px 25px;
            border: 1px solid var(--award-border);
            border-radius: 34px 34px 34px 12px;
            background: linear-gradient(
              150deg,
              #fffdf8 0%,
              var(--award-bg) 100%
            );
            box-shadow:
              0 7px 0 rgba(49, 93, 134, 0.035),
              0 14px 30px rgba(30, 52, 72, 0.045);
            transition:
              border-color 0.28s ease,
              box-shadow 0.28s ease,
              background 0.28s ease;
            isolation: isolate;
          }
          .awards-showcase .award-card:nth-child(1),
          .awards-showcase .award-card:nth-child(2),
          .awards-showcase .award-card:nth-child(3) {
            grid-column: span 4;
          }
          .awards-showcase .award-card:nth-child(4),
          .awards-showcase .award-card:nth-child(5) {
            grid-column: span 6;
            min-height: 205px;
            border-radius: 34px 12px 34px 34px;
          }
          .awards-showcase .award-card:nth-child(6),
          .awards-showcase .award-card:nth-child(7) {
            grid-column: span 6;
            min-height: 190px;
            border-radius: 12px 34px 34px 34px;
          }
          .awards-showcase .award-card:nth-child(4)::before,
          .awards-showcase .award-card:nth-child(5)::before,
          .awards-showcase .award-card:nth-child(6)::before,
          .awards-showcase .award-card:nth-child(7)::before {
            width: 4px;
            height: 100%;
          }
          .awards-showcase .award-card::before {
            content: "";
            position: absolute;
            z-index: -1;
            left: 0;
            top: 0;
            width: 100%;
            height: 4px;
            background: #315d86;
            opacity: 0.9;
          }
          .awards-showcase .award-card::after {
            content: "";
            position: absolute;
            z-index: -1;
            width: 145px;
            height: 145px;
            top: -72px;
            right: -58px;
            border: 1px solid #d8e2e9;
            border-radius: 50%;
            box-shadow:
              0 0 0 14px rgba(220, 231, 237, 0.24),
              0 0 0 29px rgba(220, 231, 237, 0.16);
          }
          .awards-showcase .award-card:hover {
            border-color: #b8cad8;
            box-shadow:
              0 10px 0 rgba(49, 93, 134, 0.04),
              0 22px 38px rgba(30, 52, 72, 0.09);
          }
          .award-card-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 22px;
          }
          .awards-showcase .award-icon {
            display: grid;
            place-items: center;
            width: 50px;
            height: 50px;
            border-radius: 14px;
            background: #edf2f5;
            border: 1px solid #dce5e9;
            box-shadow: 0 5px 12px rgba(31, 58, 87, 0.045);
            font-size: 23px;
          }
          .award-number {
            display: grid;
            place-items: center;
            width: 43px;
            height: 43px;
            border: 1px solid #d6e0e7;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.58);
            color: #315d86;
            font:
              700 13px/1 "Space Grotesk",
              sans-serif;
            letter-spacing: 0.08em;
          }
          .awards-showcase .award-category {
            display: inline-flex;
            margin-bottom: 11px;
            padding: 6px 10px;
            border: 1px solid #dce5e9;
            border-radius: 5px;
            background: #edf2f5;
            color: #315d86;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.07em;
            text-transform: uppercase;
          }
          .awards-showcase .award-card strong {
            display: block;
            max-width: 95%;
            margin: 0 0 9px;
            padding-right: 0;
            color: #192f46;
            font:
              700 18px/1.28 "Space Grotesk",
              sans-serif;
            letter-spacing: -0.035em;
          }
          .awards-showcase .award-detail {
            display: block;
            max-width: 90%;
            padding-right: 0;
            color: #758494;
            font-size: 11px;
            line-height: 1.6;
          }
          .award-arrow {
            position: absolute;
            right: 18px;
            bottom: 18px;
            display: grid;
            place-items: center;
            width: 31px;
            height: 31px;
            border: 1px solid #dce5e9;
            border-radius: 50%;
            background: #fffdf8;
            color: #315d86;
            font-size: 17px;
            transition:
              transform 0.25s ease,
              background 0.25s ease,
              color 0.25s ease;
          }
          .award-card:hover .award-arrow {
            transform: translate(3px, -3px);
            background: #315d86;
            color: #fffdf8;
          }
          @media (max-width: 900px) {
            .awards.awards-showcase {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .awards-showcase .award-card:nth-child(n) {
              grid-column: span 1;
              min-height: 220px;
            }
          }
          @media (max-width: 560px) {
            .achievement-intro-line {
              gap: 7px;
              font-size: 9px;
            }
            .achievement-intro-count {
              font-size: 9px;
            }
            .awards.awards-showcase {
              grid-template-columns: 1fr;
              gap: 13px;
            }
            .awards-showcase .award-card:nth-child(n) {
              grid-column: span 1;
              min-height: 205px;
              padding: 20px;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .awards-showcase .award-card,
            .award-arrow {
              transition: none !important;
            }
          }

          /* Final override: timeline milestones are open, not card-shaped */
          .process-grid {
            display: grid !important;
            grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
            gap: 22px !important;
            align-items: start;
            overflow: visible !important;
            padding: 0 !important;
            margin-top: 55px !important;
            scroll-snap-type: none !important;
          }
          .process-grid::before {
            display: block !important;
            top: 17px !important;
            left: 2% !important;
            right: 2% !important;
            height: 2px !important;
            background: linear-gradient(90deg, #315d86, #c9d7e0) !important;
            border: 0 !important;
          }
          .process-item {
            display: block !important;
            min-height: 0 !important;
            flex: initial !important;
            padding: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
            scroll-snap-align: unset !important;
            animation: none !important;
            transform: none;
          }
          .process-item::before {
            display: block !important;
            width: 34px !important;
            height: 34px !important;
            margin: 0 0 25px !important;
            border: 2px solid #315d86 !important;
            border-radius: 50% !important;
            background: #f7f5ef !important;
            box-shadow:
              inset 0 0 0 7px #f7f5ef,
              inset 0 0 0 10px #315d86,
              0 0 0 6px #e7edf1 !important;
            animation: none !important;
          }
          .process-item::after {
            display: none !important;
          }
          .process-item:nth-child(n) {
            padding-top: 0 !important;
            border-top: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
          }
          .process-item:nth-child(n)::before {
            margin-top: 0 !important;
            margin-bottom: 25px !important;
          }
          .process-item:nth-child(even) {
            padding-top: 28px !important;
          }
          .process-item:nth-child(even)::before {
            margin-top: -28px !important;
            margin-bottom: 25px !important;
          }
          .process-item span {
            color: #315d86 !important;
            font-size: 10px !important;
            letter-spacing: 0.13em !important;
          }
          .process-item h3 {
            margin: 0 0 10px !important;
            color: #1b2e40 !important;
            font-size: 21px !important;
            line-height: 1.2 !important;
          }
          .process-item p {
            max-width: 180px !important;
            color: #6d7780 !important;
            font-size: 12px !important;
            line-height: 1.75 !important;
          }
          @media (max-width: 1000px) {
            .process-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              gap: 34px 22px !important;
            }
            .process-grid::before {
              display: none !important;
            }
            .process-item:nth-child(n) {
              padding-top: 0 !important;
            }
            .process-item:nth-child(n)::before {
              margin: 0 0 18px !important;
            }
          }
          @media (max-width: 640px) {
            .process-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
              gap: 30px 18px !important;
              margin-top: 35px !important;
            }
            .process-item h3 {
              font-size: 18px !important;
            }
            .process-item p {
              max-width: none !important;
            }
          }
          @media (max-width: 390px) {
            .process-grid {
              grid-template-columns: 1fr !important;
            }
          }

          /* More Than Design — editorial list to avoid another card grid */
          .awards.awards-showcase.achievement-list {
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 0 38px !important;
            margin-top: 0 !important;
            align-items: stretch;
          }
          .achievement-list .achievement-row {
            display: grid !important;
            grid-template-columns: 34px 44px minmax(0, 1fr) 28px !important;
            align-items: center;
            gap: 13px;
            position: relative;
            min-width: 0;
            min-height: 132px;
            padding: 22px 0 !important;
            border: 0 !important;
            border-bottom: 1px solid #dedfd8 !important;
            border-radius: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
            transform: none;
          }
          .achievement-list .achievement-row::before,
          .achievement-list .achievement-row::after {
            display: none !important;
            content: none !important;
          }
          .achievement-number {
            align-self: start;
            padding-top: 5px;
            color: #9ba9b4;
            font:
              700 12px/1 "Space Grotesk",
              sans-serif;
            letter-spacing: 0.08em;
          }
          .achievement-icon {
            display: grid;
            place-items: center;
            width: 42px;
            height: 42px;
            border-radius: 50%;
            background: #e9eef2;
            color: #315d86;
            font-size: 20px;
          }
          .achievement-icon svg {
            display: block;
            width: 24px;
            height: 24px;
            max-width: none;
          }
          .achievement-copy {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            min-width: 0;
          }
          .achievement-list .achievement-category {
            display: block;
            margin: 0 0 6px !important;
            padding: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            color: #315d86 !important;
            font-size: 9px !important;
            font-weight: 800;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
          .achievement-list .achievement-copy strong {
            display: block;
            margin: 0 0 5px !important;
            color: #1b2e40 !important;
            font:
              700 16px/1.35 "Space Grotesk",
              sans-serif !important;
            letter-spacing: -0.025em !important;
          }
          .achievement-list .achievement-detail {
            display: block;
            color: #7b858c !important;
            font-size: 11px !important;
            line-height: 1.5 !important;
          }
          .achievement-arrow {
            display: grid;
            place-items: center;
            width: 28px;
            height: 28px;
            border: 1px solid #d8e1e6;
            border-radius: 50%;
            color: #315d86;
            font-size: 16px;
            transition:
              background 0.2s ease,
              color 0.2s ease,
              transform 0.2s ease;
          }
          .achievement-row:hover .achievement-arrow {
            color: #fffdf8;
            background: #315d86;
            transform: translate(2px, -2px);
          }
          .achievement-row:hover .achievement-number {
            color: #315d86;
          }
          @media (max-width: 760px) {
            .awards.awards-showcase.achievement-list {
              grid-template-columns: 1fr !important;
              gap: 0 !important;
            }
            .achievement-list .achievement-row {
              min-height: 112px;
              grid-template-columns: 30px 42px minmax(0, 1fr) 26px !important;
              gap: 10px;
            }
          }
          @media (max-width: 420px) {
            .achievement-list .achievement-row {
              grid-template-columns: 25px 36px minmax(0, 1fr) 22px !important;
              gap: 8px;
              padding: 18px 0 !important;
            }
            .achievement-icon {
              width: 36px;
              height: 36px;
              font-size: 17px;
            }
            .achievement-list .achievement-copy strong {
              font-size: 14px !important;
            }
          }

          /* Final refinement: stronger hierarchy, wider layout, balanced final milestone */
          .achievement-intro-line {
            margin-top: 30px !important;
            margin-bottom: 20px !important;
          }
          .awards.awards-showcase.achievement-list {
            width: 100%;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 0 52px !important;
          }
          .achievement-list .achievement-row {
            min-height: 145px !important;
            grid-template-columns: 42px 54px minmax(0, 1fr) 32px !important;
            gap: 15px !important;
            padding: 24px 0 !important;
            border-bottom: 1px solid #d8d9d2 !important;
            transition:
              background 0.25s ease,
              padding 0.25s ease;
          }
          .achievement-list .achievement-row:hover {
            padding-left: 10px !important;
            padding-right: 10px !important;
            background: linear-gradient(
              90deg,
              rgba(232, 238, 242, 0.55),
              rgba(247, 245, 239, 0)
            );
          }
          .achievement-number {
            padding-top: 4px !important;
            color: #8a9aa7 !important;
            font-size: 12px !important;
          }
          .achievement-icon {
            width: 50px !important;
            height: 50px !important;
            background: #e5edf2 !important;
            border: 1px solid #d8e3e9 !important;
            font-size: 23px !important;
          }
          .achievement-list .achievement-category {
            margin-bottom: 7px !important;
            font-size: 9px !important;
            letter-spacing: 0.15em !important;
          }
          .achievement-list .achievement-copy strong {
            font-size: 17px !important;
            line-height: 1.35 !important;
            margin-bottom: 6px !important;
          }
          .achievement-list .achievement-detail {
            font-size: 12px !important;
            line-height: 1.55 !important;
          }
          .achievement-arrow {
            width: 31px !important;
            height: 31px !important;
            background: #fbf9f3;
          }
          .achievement-list .achievement-row-featured {
            grid-column: 1 / -1 !important;
            grid-template-columns: 42px 54px minmax(0, 1fr) auto 32px !important;
            min-height: 112px !important;
            margin-top: 8px;
            padding: 20px 22px !important;
            border: 1px solid #d9e2e7 !important;
            border-radius: 18px 5px 18px 5px !important;
            background: linear-gradient(
              100deg,
              #eaf0f3 0%,
              #f8f6f0 70%
            ) !important;
          }
          .achievement-list .achievement-row-featured::after {
            content: "INTERNATIONAL EXPERIENCE";
            display: block;
            grid-column: 4;
            grid-row: 1;
            color: #6f8799;
            font-size: 9px;
            font-weight: 800;
            letter-spacing: 0.13em;
            align-self: center;
          }
          .achievement-list .achievement-row-featured .achievement-arrow {
            grid-column: 5;
            grid-row: 1;
          }
          .achievement-list .achievement-row-featured:hover {
            padding-left: 26px !important;
            padding-right: 26px !important;
            background: linear-gradient(
              100deg,
              #e4edf2 0%,
              #f8f6f0 70%
            ) !important;
          }
          @media (max-width: 760px) {
            .awards.awards-showcase.achievement-list {
              grid-template-columns: 1fr !important;
              gap: 0 !important;
            }
            .achievement-list .achievement-row {
              min-height: 120px !important;
              grid-template-columns: 32px 46px minmax(0, 1fr) 28px !important;
              gap: 12px !important;
            }
            .achievement-list .achievement-row-featured {
              grid-column: auto !important;
              grid-template-columns: 32px 46px minmax(0, 1fr) 28px !important;
              padding: 20px 0 !important;
              border: 0 !important;
              border-bottom: 1px solid #d8d9d2 !important;
              border-radius: 0 !important;
              background: transparent !important;
            }
            .achievement-list .achievement-row-featured::after {
              display: none;
            }
            .achievement-list .achievement-row-featured .achievement-arrow {
              grid-column: 4;
              grid-row: 1;
            }
          }
          @media (max-width: 420px) {
            .achievement-list .achievement-row {
              grid-template-columns: 24px 38px minmax(0, 1fr) 24px !important;
              gap: 8px !important;
              min-height: 110px !important;
            }
            .achievement-icon {
              width: 36px !important;
              height: 36px !important;
              font-size: 17px !important;
            }
            .achievement-list .achievement-copy strong {
              font-size: 14px !important;
            }
            .achievement-list .achievement-detail {
              font-size: 10px !important;
            }
          }

          /* New visual direction: structured milestone lanes, not cards or a plain list */
          .achievement-intro-line {
            margin-top: 32px !important;
            margin-bottom: 22px !important;
          }
          .awards.awards-showcase.achievement-list {
            display: grid !important;
            width: 100%;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            column-gap: 44px !important;
            row-gap: 0 !important;
            margin-top: 0 !important;
            align-items: stretch;
          }
          .achievement-list .achievement-row,
          .achievement-list .achievement-row-featured {
            position: relative;
            display: grid !important;
            grid-template-columns: 46px 50px minmax(0, 1fr) 30px !important;
            align-items: center;
            gap: 14px !important;
            min-height: 136px !important;
            margin: 0 !important;
            padding: 22px 4px 22px 0 !important;
            border: 0 !important;
            border-bottom: 1px solid #d8dcd9 !important;
            border-radius: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
            transition:
              background 0.25s ease,
              padding 0.25s ease;
          }
          .achievement-list .achievement-row::before {
            content: "";
            position: absolute;
            left: 0;
            bottom: -1px;
            width: 0;
            height: 2px;
            background: #315d86;
            transition: width 0.28s ease;
          }
          .achievement-list .achievement-row:hover::before {
            width: 100%;
          }
          .achievement-list .achievement-row::after {
            display: none !important;
            content: none !important;
          }
          .achievement-list .achievement-row:hover {
            padding-left: 8px !important;
            padding-right: 0 !important;
            background: linear-gradient(
              90deg,
              rgba(226, 235, 241, 0.55),
              rgba(247, 245, 239, 0)
            );
          }
          .achievement-number {
            align-self: center;
            display: grid;
            place-items: center;
            width: 37px;
            height: 37px;
            padding: 0 !important;
            border: 1px solid #cbd9e2;
            border-radius: 50%;
            color: #315d86 !important;
            background: #f9f7f1;
            font:
              700 12px/1 "Space Grotesk",
              sans-serif !important;
            letter-spacing: 0.06em;
          }
          .achievement-icon {
            width: 48px !important;
            height: 48px !important;
            border-radius: 15px !important;
            background: #e6edf1 !important;
            border: 1px solid #d7e2e8 !important;
            color: #315d86;
            font-size: 22px !important;
          }
          .achievement-copy {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            min-width: 0;
          }
          .achievement-list .achievement-category {
            display: block;
            margin: 0 0 7px !important;
            padding: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            color: #315d86 !important;
            font-size: 9px !important;
            font-weight: 800;
            letter-spacing: 0.13em !important;
            text-transform: uppercase;
          }
          .achievement-list .achievement-copy strong {
            display: block;
            margin: 0 0 6px !important;
            color: #1b2e40 !important;
            font:
              700 16px/1.35 "Space Grotesk",
              sans-serif !important;
            letter-spacing: -0.025em !important;
          }
          .achievement-list .achievement-detail {
            display: block;
            color: #77838a !important;
            font-size: 11px !important;
            line-height: 1.55 !important;
          }
          .achievement-arrow {
            display: grid;
            place-items: center;
            width: 29px !important;
            height: 29px !important;
            border: 1px solid #d4e0e6 !important;
            border-radius: 50% !important;
            background: #fbf9f3 !important;
            color: #315d86 !important;
            font-size: 16px;
            transition:
              transform 0.22s ease,
              background 0.22s ease,
              color 0.22s ease;
          }
          .achievement-list .achievement-row:hover .achievement-arrow {
            transform: translate(2px, -2px);
            background: #315d86 !important;
            color: #fffdf8 !important;
          }
          .achievement-list .achievement-row-featured::after {
            display: none !important;
          }
          @media (max-width: 760px) {
            .awards.awards-showcase.achievement-list {
              grid-template-columns: 1fr !important;
              column-gap: 0 !important;
            }
            .achievement-list .achievement-row,
            .achievement-list .achievement-row-featured {
              grid-template-columns: 40px 46px minmax(0, 1fr) 28px !important;
              min-height: 118px !important;
              gap: 11px !important;
            }
          }
          @media (max-width: 420px) {
            .achievement-list .achievement-row,
            .achievement-list .achievement-row-featured {
              grid-template-columns: 30px 38px minmax(0, 1fr) 24px !important;
              gap: 8px !important;
              min-height: 110px !important;
            }
            .achievement-number {
              width: 28px;
              height: 28px;
              font-size: 10px !important;
            }
            .achievement-icon {
              width: 36px !important;
              height: 36px !important;
              font-size: 17px !important;
            }
            .achievement-list .achievement-copy strong {
              font-size: 14px !important;
            }
            .achievement-list .achievement-detail {
              font-size: 10px !important;
            }
          }

          /* More Than Design — zigzag milestone path with sculptural markers */
          .achievement-intro-line {
            margin-top: 32px !important;
            margin-bottom: 28px !important;
          }
          .awards.awards-showcase.achievement-zigzag {
            position: relative;
            display: grid !important;
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 22px 72px !important;
            align-items: start;
            margin-top: 0 !important;
            padding: 0 22px 12px !important;
          }
          .achievement-zigzag::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 18px;
            bottom: 30px;
            width: 1px;
            background: linear-gradient(to bottom, #b7cbd8, #e1e4df);
            transform: translateX(-50%);
          }
          .achievement-zigzag .achievement-node {
            position: relative;
            display: grid !important;
            grid-template-columns: 42px minmax(0, 1fr) 30px !important;
            grid-template-areas: "icon copy arrow" "number copy arrow";
            align-items: center;
            column-gap: 15px !important;
            row-gap: 5px;
            min-height: 135px !important;
            padding: 20px 22px !important;
            border: 1px solid #dce2df !important;
            border-radius: 26px 6px 26px 6px !important;
            background: rgba(255, 253, 248, 0.72) !important;
            box-shadow: 0 8px 22px rgba(36, 55, 67, 0.035) !important;
            transition:
              transform 0.25s ease,
              background 0.25s ease,
              border-color 0.25s ease;
          }
          .achievement-zigzag .achievement-node:nth-child(even) {
            margin-top: 42px;
            border-radius: 6px 26px 6px 26px !important;
            background: rgba(232, 239, 243, 0.55) !important;
          }
          .achievement-zigzag .achievement-node::before {
            content: "";
            position: absolute;
            top: 31px;
            width: 28px;
            height: 1px;
            background: #bdced9;
          }
          .achievement-zigzag .node-left::before {
            right: -29px;
          }
          .achievement-zigzag .node-right::before {
            left: -29px;
          }
          .achievement-zigzag .achievement-node:hover {
            transform: translateY(-4px);
            border-color: #b8cad6 !important;
            background: #fffdf8 !important;
          }
          .achievement-zigzag .achievement-number {
            grid-area: number;
            align-self: start;
            width: 31px;
            height: 31px;
            font-size: 10px !important;
            background: #f7f5ef;
          }
          .achievement-zigzag .achievement-icon {
            grid-area: icon;
            width: 42px !important;
            height: 42px !important;
            border-radius: 50% !important;
            background: #e4edf2 !important;
            border: 1px solid #d5e1e8 !important;
            font-size: 20px !important;
          }
          .achievement-zigzag .achievement-copy {
            grid-area: copy;
          }
          .achievement-zigzag .achievement-category {
            margin-bottom: 7px !important;
            font-size: 8px !important;
            letter-spacing: 0.12em !important;
          }
          .achievement-zigzag .achievement-copy strong {
            font-size: 15px !important;
            line-height: 1.35 !important;
            margin-bottom: 6px !important;
          }
          .achievement-zigzag .achievement-detail {
            font-size: 10px !important;
            line-height: 1.5 !important;
          }
          .achievement-zigzag .achievement-arrow {
            grid-area: arrow;
            align-self: center;
            width: 28px !important;
            height: 28px !important;
            border-radius: 50% !important;
            background: #f7f5ef !important;
          }
          .achievement-zigzag .achievement-node:hover .achievement-arrow {
            background: #315d86 !important;
            color: #fffdf8 !important;
          }
          @media (max-width: 760px) {
            .awards.awards-showcase.achievement-zigzag {
              grid-template-columns: 1fr !important;
              gap: 14px !important;
              padding: 0 0 10px !important;
            }
            .achievement-zigzag::before {
              left: 21px;
            }
            .achievement-zigzag .achievement-node:nth-child(n) {
              margin-top: 0;
              margin-left: 38px;
              border-radius: 22px 6px 22px 6px !important;
            }
            .achievement-zigzag .achievement-node::before {
              left: -18px !important;
              right: auto !important;
              width: 17px;
            }
          }
          @media (max-width: 420px) {
            .achievement-zigzag .achievement-node {
              grid-template-columns: 36px minmax(0, 1fr) 26px !important;
              padding: 17px 13px !important;
              column-gap: 10px !important;
            }
            .achievement-zigzag .achievement-icon {
              width: 36px !important;
              height: 36px !important;
            }
            .achievement-zigzag .achievement-copy strong {
              font-size: 13px !important;
            }
          }

          /* Replace the right-side text cards with quieter, decorative design elements. */
          .hero-visual .float-tag,
          .hero-visual .motion-floating-tag {
            display: none !important;
          }
          .hero-decor {
            position: absolute;
            z-index: 4;
            pointer-events: none;
          }
          .hero-decor-orbit {
            top: 13%;
            right: 8%;
            width: 112px;
            height: 112px;
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.16);
            box-shadow: 0 12px 30px rgba(18, 54, 216, 0.12);
            animation: decor-drift 5s ease-in-out infinite;
          }
          .orbit-ring {
            position: absolute;
            inset: 17px;
            border: 2px dashed rgba(18, 54, 216, 0.48);
            border-radius: 50%;
          }
          .orbit-dot {
            position: absolute;
            width: 17px;
            height: 17px;
            top: 8px;
            right: 14px;
            border-radius: 50%;
            background: #ffdf48;
            box-shadow: 0 0 0 6px rgba(255, 223, 72, 0.25);
          }
          .orbit-cross {
            position: absolute;
            inset: 0;
            display: grid;
            place-items: center;
            color: #1236d8;
            font:
              700 34px/1 "Space Grotesk",
              sans-serif;
          }
          .hero-decor-palette {
            right: 6%;
            bottom: 8%;
            display: flex;
            gap: 7px;
            padding: 10px;
            border: 1px solid rgba(255, 255, 255, 0.8);
            border-radius: 16px;
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 14px 28px rgba(24, 62, 91, 0.14);
            transform: rotate(-7deg);
          }
          .hero-decor-palette span {
            display: block;
            width: 24px;
            height: 42px;
            border-radius: 8px;
            background: #164dff;
          }
          .hero-decor-palette span:nth-child(2) {
            background: #75b8ff;
          }
          .hero-decor-palette span:nth-child(3) {
            background: #c8e2ff;
          }
          .hero-decor-palette span:nth-child(4) {
            background: #d6f3df;
          }
          .hero-decor-palette span:nth-child(5) {
            background: #ffdf48;
          }
          /* Hide only the decorative stamp peeking out beside the keyboard. */
          .hero-decor-stamp {
            display: none !important;
            top: 44%;
            right: 5%;
            display: grid;
            gap: 5px;
            padding: 13px 15px;
            border: 1px solid rgba(18, 54, 216, 0.12);
            border-radius: 13px;
            background: rgba(255, 253, 248, 0.9);
            color: #1236d8;
            box-shadow: 0 12px 28px rgba(24, 62, 91, 0.1);
            font:
              800 9px/1.2 "Space Grotesk",
              sans-serif;
            letter-spacing: 0.16em;
            transform: rotate(4deg);
          }
          .hero-decor-stamp span:nth-child(2) {
            padding: 5px 0;
            border-top: 1px solid #dce5ff;
            border-bottom: 1px solid #dce5ff;
          }
          @keyframes decor-drift {
            0%,
            100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-8px) rotate(5deg);
            }
          }
          @media (max-width: 900px) {
            .hero-decor-orbit {
              width: 86px;
              height: 86px;
              top: 9%;
              right: 7%;
            }
            .orbit-ring {
              inset: 13px;
            }
            .orbit-cross {
              font-size: 27px;
            }
            .hero-decor-stamp {
              top: 38%;
              right: 4%;
              padding: 10px;
            }
            .hero-decor-palette {
              right: 5%;
              bottom: 5%;
              gap: 5px;
              padding: 7px;
            }
            .hero-decor-palette span {
              width: 17px;
              height: 30px;
            }
          }
          @media (max-width: 640px) {
            .hero-decor-orbit {
              width: 64px;
              height: 64px;
              top: 8%;
              right: 6%;
            }
            .orbit-ring {
              inset: 9px;
            }
            .orbit-dot {
              width: 11px;
              height: 11px;
              top: 4px;
              right: 7px;
            }
            .orbit-cross {
              font-size: 20px;
            }
            .hero-decor-stamp {
              top: 36%;
              right: 3%;
              gap: 4px;
              padding: 8px;
              font-size: 7px;
            }
            .hero-decor-palette {
              bottom: 4%;
              right: 4%;
              gap: 4px;
              padding: 6px;
            }
            .hero-decor-palette span {
              width: 13px;
              height: 24px;
              border-radius: 5px;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-decor-orbit {
              animation: none !important;
            }
          }
          /* Final hero polish: remove the stray white/blue card peeking beside the keyboard,
           keep the keyboard itself, and add a few restrained graphic accents. */
          .hero-visual .hero-decor-palette,
          .hero-visual .hero-decor-stamp,
          .hero-visual .float-tag,
          .hero-visual .motion-floating-tag,
          .hero-visual .tag-one,
          .hero-visual .tag-two,
          .hero-visual .tag-three,
          .hero-visual .tag-four,
          .hero-visual .tag-five {
            display: none !important;
            visibility: hidden !important;
          }

          .hero-visual .hero-decor-orbit {
            display: block;
            top: 10%;
            right: 7%;
            width: clamp(112px, 18%, 190px);
            aspect-ratio: 1;
            border: 2px solid rgba(255, 255, 255, 0.82);
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 12px rgba(255, 255, 255, 0.06);
          }

          .hero-visual .orbit-ring {
            position: absolute;
            inset: 13%;
            border: 2px dashed rgba(18, 54, 216, 0.48);
            border-radius: 50%;
          }

          .hero-visual .orbit-cross {
            position: absolute;
            inset: 0;
            display: grid;
            place-items: center;
            color: #164dff;
            font-size: clamp(28px, 4vw, 48px);
          }

          .hero-visual .orbit-dot {
            position: absolute;
            top: 7%;
            right: 4%;
            width: 19%;
            aspect-ratio: 1;
            border-radius: 50%;
            background: #ffdf4d;
            box-shadow: 0 0 0 9px rgba(255, 223, 77, 0.2);
            z-index: 2;
          }

          .hero-visual::marker {
            content: "";
          }

          .hero-visual .hero-decor-orbit::after {
            content: "";
            position: absolute;
            left: -22%;
            bottom: -35%;
            width: clamp(24px, 3vw, 40px);
            aspect-ratio: 1;
            background: currentColor;
            color: #0099b5;
            -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M24 2.5V45.5M2.5 24H45.5M8.8 8.8L39.2 39.2M39.2 8.8L8.8 39.2' stroke='black' stroke-width='4.5' stroke-linecap='square'/%3E%3C/svg%3E")
              center / contain no-repeat;
            mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M24 2.5V45.5M2.5 24H45.5M8.8 8.8L39.2 39.2M39.2 8.8L8.8 39.2' stroke='black' stroke-width='4.5' stroke-linecap='square'/%3E%3C/svg%3E")
              center / contain no-repeat;
            transform: rotate(-12deg);
          }

          .hero-visual .hero-note {
            z-index: 7;
            right: 4%;
            left: auto;
            bottom: 4%;
            width: min(310px, 38%);
            max-width: 38%;
            transform: rotate(-6deg);
          }

          @media (max-width: 640px) {
            .hero-visual .hero-note {
              right: 3%;
              bottom: 3%;
              width: 48%;
              max-width: 48%;
            }
            .hero-visual .hero-decor-orbit {
              width: 110px;
              right: 5%;
              top: 7%;
            }
          }

          /* Extra lightweight doodles to match the selected hero reference. */
          .hero-micro-card {
            position: absolute;
            left: 3%;
            right: auto;
            bottom: 5%;
            z-index: 4;
            display: flex;
            flex-direction: column;
            gap: 3px;
            width: clamp(100px, 14%, 155px);
            padding: 14px 12px 13px;
            border: 1px solid rgba(255, 255, 255, 0.9);
            border-radius: 22px;
            background: rgba(255, 255, 255, 0.22);
            color: #3984c9;
            font:
              700 clamp(8px, 0.95vw, 12px)/1.45 "Space Grotesk",
              sans-serif;
            letter-spacing: 0.15em;
            transform: rotate(-5deg);
            box-shadow: 0 10px 30px rgba(33, 91, 143, 0.06);
            pointer-events: none;
          }
          .hero-micro-card .micro-card-star {
            color: #00a0c5;
            font-size: 25px;
            line-height: 1;
            margin-bottom: 5px;
          }
          .hero-doodle {
            position: absolute;
            z-index: 4;
            display: block;
            pointer-events: none;
            user-select: none;
          }
          .hero-doodle-squiggle {
            left: 7%;
            bottom: 34%;
            color: #3787f5;
            font:
              700 clamp(44px, 6vw, 76px)/0.7 Georgia,
              serif;
            transform: rotate(-28deg);
          }
          .hero-doodle-stroke {
            /* Keep the decorative stroke away from the portrait's face. */
            left: 55%;
            top: 38%;
            color: #9ed2ff;
            font:
              700 clamp(48px, 6vw, 76px)/0.5 Georgia,
              serif;
            transform: rotate(35deg) scaleX(1.5);
            opacity: 0.8;
            z-index: 1;
            pointer-events: none;
          }
          .hero-doodle-sparkle {
            right: 29%;
            top: 29%;
            color: #cfe5ff;
            font-size: clamp(24px, 3vw, 42px);
            text-shadow: 0 0 12px rgba(255, 255, 255, 0.25);
          }
          .hero-doodle-cursor {
            right: 25%;
            bottom: 43%;
            color: #eaf6ff;
            font-size: clamp(28px, 4vw, 48px);
            transform: rotate(12deg);
            text-shadow: 0 2px 5px rgba(16, 68, 150, 0.25);
          }
          .hero-doodle-rays {
            right: 1.5%;
            bottom: 28%;
            color: #007b9a;
            font:
              800 clamp(34px, 4vw, 50px)/1 "Space Grotesk",
              sans-serif;
            transform: rotate(-50deg);
          }
          .hero-dot-matrix {
            position: absolute;
            right: 18%;
            bottom: 35%;
            z-index: 2;
            display: grid;
            grid-template-columns: repeat(5, 5px);
            gap: 13px 15px;
            pointer-events: none;
          }
          .hero-dot-matrix span {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: rgba(235, 247, 255, 0.95);
          }
          .hero-flight-path {
            position: absolute;
            top: 28%;
            right: 2%;
            z-index: 2;
            width: clamp(85px, 14%, 150px);
            height: auto;
            color: #cfe5ff;
            pointer-events: none;
            opacity: 0.95;
          }
          /* Keep the keyboard as the only keyboard-shaped element; remove old peek-card decorations. */
          .hero-visual .hero-decor-palette,
          .hero-visual .hero-decor-stamp {
            display: none !important;
          }
          @media (max-width: 640px) {
            .hero-micro-card {
              left: 2.5%;
              right: auto;
              bottom: 4%;
              width: 112px;
              padding: 10px;
              font-size: 7px;
            }
            .hero-doodle-squiggle {
              bottom: 30%;
              left: 3%;
            }
            .hero-doodle-stroke {
              left: 18%;
              top: 40%;
            }
            .hero-doodle-sparkle {
              right: 33%;
              top: 28%;
            }
            .hero-doodle-cursor {
              right: 24%;
              bottom: 43%;
            }
            .hero-doodle-rays {
              right: 0;
              bottom: 26%;
            }
            .hero-dot-matrix {
              right: 23%;
              bottom: 32%;
              grid-template-columns: repeat(5, 3px);
              gap: 8px 9px;
            }
            .hero-dot-matrix span {
              width: 3px;
              height: 3px;
            }
            .hero-flight-path {
              right: 0;
              top: 28%;
              width: 18%;
            }
          }

          @media (max-width: 760px) {
            .tech-stack-heading {
              display: block;
            }
            .tech-stack-heading > p {
              margin-top: 18px;
            }
            .tech-stack-group {
              grid-template-columns: 1fr;
              gap: 16px;
              padding: 18px;
            }
            .tech-stack-items {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .tech-stack-item {
              min-width: 0;
              padding: 0;
              grid-template-columns: 1fr;
            }
            .tech-stack-mark {
              width: 36px;
              height: 36px;
              border-radius: 10px;
            }
            .tech-stack-logo {
              width: 36px;
              height: 36px;
            }
          }

          /* Final responsive pass: tablet and mobile layouts */
          @media (max-width: 900px) {
            .container {
              width: min(100% - 36px, 720px);
            }
            .hero,
            .about-grid,
            .featured,
            .contact-layout {
              grid-template-columns: minmax(0, 1fr);
            }
            .hero {
              gap: 30px;
              padding-top: 112px;
            }
            .hero-visual {
              width: 100%;
              min-height: clamp(400px, 72vw, 560px);
            }
            .section-head {
              align-items: flex-start;
              flex-direction: column;
              gap: 16px;
            }
            .section-head > p {
              max-width: 620px;
            }
            .project-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .awards {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
            .contact-layout {
              gap: 26px;
            }
          }

          @media (max-width: 640px) {
            .container {
              width: calc(100% - 32px);
            }
            .topbar {
              min-height: 68px;
              gap: 12px;
              padding-left: 16px;
              padding-right: 16px;
            }
            .brand {
              font-size: 24px;
            }
            .nav {
              max-width: 100%;
              overflow-x: auto;
              gap: 2px;
              font-size: 11px;
            }
            .nav a {
              min-height: 32px;
              padding: 0 9px;
              white-space: nowrap;
            }
            .hero {
              padding: 94px 0 48px;
              gap: 24px;
            }
            h1 {
              font-size: clamp(42px, 12vw, 64px);
              overflow-wrap: anywhere;
            }
            .lead {
              font-size: clamp(19px, 5.4vw, 25px);
            }
            .intro,
            .about-copy {
              font-size: 14px;
            }
            .hero-actions {
              gap: 9px;
            }
            .button {
              min-height: 46px;
              padding: 12px 14px;
              font-size: 12px;
            }
            .stats {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 10px;
            }
            .stat {
              min-width: 0;
              padding: 0 0 0 10px;
            }
            .stat strong {
              font-size: 21px;
            }
            .stat span {
              font-size: 10px;
            }
            .hero-visual {
              min-height: clamp(360px, 112vw, 480px);
              border-radius: 24px;
            }
            .portrait-frame {
              max-width: 60%;
              height: 78%;
              left: 16%;
            }
            .section {
              padding: 58px 0;
            }
            .section-head h2 {
              font-size: clamp(34px, 9vw, 48px);
            }
            .featured-info {
              padding: 24px 20px;
            }
            .featured h3 {
              font-size: clamp(34px, 9vw, 46px);
              margin-top: 20px;
            }
            .mockup-area {
              min-height: 240px;
            }
            .project-grid,
            .skills-grid {
              grid-template-columns: minmax(0, 1fr);
            }
            .project-card {
              min-height: 190px;
              padding: 20px;
            }
            .awards {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }
            .achievement-row {
              min-width: 0;
            }
            .achievement-copy strong,
            .achievement-detail,
            .achievement-category {
              overflow-wrap: anywhere;
            }
            .experience-heading-row {
              align-items: flex-start;
              flex-direction: column;
            }
            .contact {
              padding: 54px 0 20px;
            }
            .contact h2 {
              font-size: clamp(38px, 10vw, 54px);
            }
            .contact p {
              font-size: 14px;
              line-height: 1.8;
            }
            .contact-links {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }
            .contact-links .button {
              flex: 1 1 145px;
              min-width: 0;
              white-space: normal;
              text-align: center;
            }
            .footer {
              display: flex;
              flex-wrap: wrap;
              align-items: flex-start;
              gap: 12px 18px;
              margin-top: 36px;
            }
            .footer > span {
              max-width: 100%;
              overflow-wrap: anywhere;
            }
          }

          @media (max-width: 420px) {
            .container {
              width: calc(100% - 28px);
            }
            .topbar {
              padding-left: 12px;
              padding-right: 12px;
            }
            .nav {
              max-width: calc(100vw - 95px);
            }
            .hero-visual {
              min-height: 340px;
            }
            .float-tag {
              width: 40%;
              right: 1%;
              padding: 10px 7px;
              font-size: 11px;
            }
            .hero-note {
              max-width: 42%;
              padding: 11px 12px;
              font-size: 13px;
            }
            .awards {
              grid-template-columns: minmax(0, 1fr);
            }
            .achievement-intro-line {
              flex-wrap: wrap;
              gap: 8px;
            }
            .achievement-intro-count {
              width: 100%;
            }
            .contact-links .button {
              flex-basis: 100%;
              justify-content: center;
            }
            .stat {
              padding-left: 7px;
            }
            .stat strong {
              font-size: 19px;
            }
          }

          /* Optional dark theme — keeps the original light theme as default. */
          .portfolio.dark-theme {
            --cyan: #60a5fa;
            --cyan-dark: #93c5fd;
            --pale: #1e3a5f;
            --ink: #f3f4f6;
            --muted: #c0cad8;
            --paper: #0b1120;
            --line: #334155;
            background: #0b1120;
            color: #f3f4f6;
          }
          .dark-theme .topbar {
            background: rgba(11, 17, 32, 0.96);
            border-color: #263449;
          }
          .dark-theme .nav {
            background: #172235;
            border-color: #334155;
            color: #cbd5e1;
          }
          .dark-theme .nav a:hover,
          .dark-theme .nav a.active {
            background: #243b5a;
            color: #bfdbfe;
            border-color: #3b5b83;
          }
          .dark-theme .button:not(.primary) {
            background: #1e293b;
            border-color: #475569;
            color: #f8fafc;
          }
          .dark-theme .button:not(.primary):hover {
            background: #29384d;
          }
          .dark-theme .menu-button {
            background: #1e293b;
            border-color: #475569;
            color: #f8fafc;
          }
          .dark-theme .hero-visual {
            background: #172b43;
            border-color: #294866;
          }
          .dark-theme .about-section,
          .dark-theme .skills-section {
            background: #111c2e;
            color: #e5edf7;
            border-color: #27384e;
          }
          .dark-theme .about-section .about-copy,
          .dark-theme .about-section .timeline-item p,
          .dark-theme .section-head p {
            color: #bac8d8;
          }
          .dark-theme .education-card,
          .dark-theme .about-section .timeline-item,
          .dark-theme .skill,
          .dark-theme .award,
          .dark-theme .project-card {
            background: #1a2638;
            color: #e5edf7;
            border-color: #33465e;
          }
          .dark-theme .about-section .education-card strong,
          .dark-theme .about-section .timeline-item h3,
          .dark-theme .about-section .timeline-role,
          .dark-theme .project-card h3,
          .dark-theme .process-item h3 {
            color: #f1f5f9;
          }
          .dark-theme .timeline-date,
          .dark-theme .about-section .timeline-date,
          .dark-theme .experience-count {
            background: #203854;
            color: #bfdbfe;
          }
          .dark-theme .about-focus-tags span {
            background: #1d3048;
            border-color: #344d69;
            color: #cbdcf0;
          }
          .dark-theme .featured {
            background: #172235;
            color: #f1f5f9;
          }
          .dark-theme .featured-info {
            background: #172235;
          }
          .dark-theme .project-desc,
          .dark-theme .project-card p,
          .dark-theme .timeline-item p,
          .dark-theme .process-item p {
            color: #bdc9d8;
          }
          .dark-theme .mockup-area {
            background: linear-gradient(145deg, #172b43, #203d59);
          }
          .dark-theme .process-grid {
            --timeline-line: #334155;
          }
          .dark-theme .process-item::before {
            background: #172235;
            box-shadow:
              inset 0 0 0 7px #172235,
              inset 0 0 0 10px #60a5fa,
              0 0 0 7px #243449;
          }
          .dark-theme .contact {
            background: #102fbd;
            color: #fff;
          }
          .dark-theme .contact .button {
            background: #f8fafc;
            color: #111827;
            border-color: #f8fafc;
          }
          .dark-theme .footer {
            border-color: #ffffff30;
          }
          .dark-theme .chip {
            background: #18384a;
            color: #a5f3fc;
          }
          .dark-theme .project-number,
          .dark-theme .eyebrow {
            color: #93c5fd;
          }
          .dark-theme .experience-index {
            color: #8eb9e7;
          }
          .dark-theme .portrait-placeholder {
            background: linear-gradient(160deg, #1e293b, #164e63);
          }
          .dark-theme .portrait-placeholder strong,
          .dark-theme .portrait-placeholder span {
            color: #e0f2fe;
          }
          .theme-toggle {
            white-space: nowrap;
            cursor: pointer;
          }
          @media (max-width: 900px) {
            .theme-toggle {
              padding: 10px 12px;
            }
          }

          /* Dark theme contrast pass: keep every text readable without changing the light theme. */
          .portfolio.dark-theme {
            color-scheme: dark;
            background: #0b1120;
            color: #f1f5f9;
          }
          .dark-theme .hero,
          .dark-theme .section,
          .dark-theme .section:not(.dark),
          .dark-theme .experience-section,
          .dark-theme .process-section,
          .dark-theme .awards-section {
            color: #f1f5f9;
          }
          .dark-theme .hero h1,
          .dark-theme .hero .lead,
          .dark-theme .section-head h2,
          .dark-theme .section h2,
          .dark-theme .section h3,
          .dark-theme .stat strong,
          .dark-theme .education-card strong,
          .dark-theme .timeline-item h3,
          .dark-theme .award strong,
          .dark-theme .skill,
          .dark-theme .process-item h3 {
            color: #f1f5f9;
          }
          .dark-theme .intro,
          .dark-theme .section p,
          .dark-theme .section-head p,
          .dark-theme .about-copy,
          .dark-theme .timeline-item p,
          .dark-theme .timeline-role,
          .dark-theme .project-desc,
          .dark-theme .project-card p,
          .dark-theme .process-item p,
          .dark-theme .award small,
          .dark-theme .stat span,
          .dark-theme .education-card span {
            color: #cbd5e1;
          }
          .dark-theme .lead mark {
            color: #f8fafc !important;
            background: #1e3a5f !important;
            background-image: none !important;
            box-shadow: inset 0 0 0 1px #345781;
          }
          .dark-theme .about-section,
          .dark-theme .skills-section,
          .dark-theme .section:not(.dark) {
            background-color: #111c2e;
            color: #e5edf7;
            border-color: #26384f;
          }
          .dark-theme .education-card,
          .dark-theme .timeline-item,
          .dark-theme .skill,
          .dark-theme .award,
          .dark-theme .project-card,
          .dark-theme .featured,
          .dark-theme .featured-info,
          .dark-theme .experience-card,
          .dark-theme .experience-item {
            background: #172235;
            color: #e5edf7;
            border-color: #33465e;
          }
          .dark-theme .project-card:hover,
          .dark-theme .timeline-item:hover,
          .dark-theme .experience-card:hover {
            border-color: #5279a6;
            box-shadow: 0 16px 34px #0005;
          }
          .dark-theme .project-type,
          .dark-theme .project-card-top,
          .dark-theme .timeline-date,
          .dark-theme .experience-count {
            color: #bfdbfe;
          }
          .dark-theme .project-number,
          .dark-theme .eyebrow,
          .dark-theme .timeline-date,
          .dark-theme .experience-count,
          .dark-theme .experience-index {
            color: #93c5fd;
          }
          .dark-theme .education-card::before {
            color: #93c5fd;
          }
          .dark-theme .about-focus-tags span,
          .dark-theme .chip {
            background: #1d3048;
            border-color: #385575;
            color: #dbeafe;
          }
          .dark-theme .mockup-area {
            background: linear-gradient(145deg, #14263b, #1c3550);
          }
          .dark-theme .process-grid::before {
            background: linear-gradient(
              90deg,
              #60a5fa 0%,
              #496987 55%,
              #293b50 100%
            );
          }
          .dark-theme .process-item::before {
            background: #172235;
            box-shadow:
              inset 0 0 0 7px #172235,
              inset 0 0 0 10px #60a5fa,
              0 0 0 7px #243449;
          }
          .dark-theme .button:not(.primary),
          .dark-theme .menu-button {
            background: #1e293b;
            border-color: #475569;
            color: #f8fafc;
          }
          .dark-theme .button:not(.primary):hover,
          .dark-theme .menu-button:hover {
            background: #29384d;
            border-color: #64748b;
          }
          .dark-theme .button.primary {
            background: #3b82f6;
            border-color: #60a5fa;
            color: #fff;
          }
          .dark-theme .button.primary:hover {
            background: #2563eb;
          }
          .dark-theme .contact {
            background: #132d76;
            color: #f8fafc;
          }
          .dark-theme .contact p,
          .dark-theme .contact .eyebrow {
            color: #e2e8f0;
          }
          .dark-theme .contact .button {
            background: #f8fafc;
            color: #111827;
            border-color: #f8fafc;
          }
          .dark-theme .footer {
            color: #cbd5e1;
            border-color: #ffffff30;
          }
          .dark-theme .hero-visual .float-tag,
          .dark-theme .hero-visual .motion-floating-tag,
          .dark-theme .hero-visual .hero-note {
            color: #17324d;
          }
          .dark-theme .portrait-placeholder {
            background: linear-gradient(160deg, #1e293b, #164e63);
          }
          .dark-theme .portrait-placeholder strong,
          .dark-theme .portrait-placeholder span {
            color: #e0f2fe;
          }

          /* Final dark-mode fixes for sections/cards that previously kept light-theme colors. */
          .portfolio.dark-theme .all-projects-section,
          .portfolio.dark-theme .experience-showcase,
          .portfolio.dark-theme .tech-stack-section,
          .portfolio.dark-theme .process-section,
          .portfolio.dark-theme .awards-section,
          .portfolio.dark-theme #skills,
          .portfolio.dark-theme #work {
            background-color: #0b1424 !important;
            color: #edf4ff !important;
          }

          .portfolio.dark-theme .selected-project-card,
          .portfolio.dark-theme .experience-detail-card,
          .portfolio.dark-theme .tech-stack-group,
          .portfolio.dark-theme .tech-stack-item,
          .portfolio.dark-theme .achievement-node,
          .portfolio.dark-theme .achievement-list .achievement-node,
          .portfolio.dark-theme .skill-card,
          .portfolio.dark-theme .skill-item {
            background: #17263b !important;
            color: #edf4ff !important;
            border-color: #344b68 !important;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.16);
          }

          .portfolio.dark-theme .selected-project-card h2,
          .portfolio.dark-theme .selected-project-card h3,
          .portfolio.dark-theme .selected-project-card strong,
          .portfolio.dark-theme .experience-showcase h2,
          .portfolio.dark-theme .experience-detail-card h3,
          .portfolio.dark-theme .experience-detail-role,
          .portfolio.dark-theme .tech-stack-section h2,
          .portfolio.dark-theme .tech-stack-section h3,
          .portfolio.dark-theme .achievement-copy strong,
          .portfolio.dark-theme .achievement-node strong,
          .portfolio.dark-theme .process-item h3,
          .portfolio.dark-theme .skills-showcase-heading h2 {
            color: #f3f7ff !important;
          }

          .portfolio.dark-theme .selected-project-card p,
          .portfolio.dark-theme .selected-project-card .project-description,
          .portfolio.dark-theme .experience-showcase-heading p,
          .portfolio.dark-theme .experience-detail-card p,
          .portfolio.dark-theme .experience-date-column,
          .portfolio.dark-theme .experience-date-column strong,
          .portfolio.dark-theme .experience-date-column span,
          .portfolio.dark-theme .experience-date-column small,
          .portfolio.dark-theme .experience-hand-note,
          .portfolio.dark-theme .tech-stack-section p,
          .portfolio.dark-theme .tech-stack-item p,
          .portfolio.dark-theme .achievement-detail,
          .portfolio.dark-theme .process-item p,
          .portfolio.dark-theme .skills-showcase-heading p {
            color: #c2d0e2 !important;
          }

          .portfolio.dark-theme .selected-project-card .eyebrow,
          .portfolio.dark-theme .selected-project-card .project-type,
          .portfolio.dark-theme .experience-showcase .eyebrow,
          .portfolio.dark-theme .tech-stack-section .eyebrow,
          .portfolio.dark-theme .achievement-category,
          .portfolio.dark-theme .process-item > span {
            color: #8fc3ff !important;
          }

          .portfolio.dark-theme .experience-date-pill,
          .portfolio.dark-theme .experience-tag-list span,
          .portfolio.dark-theme .tech-stack-item span,
          .portfolio.dark-theme .achievement-number,
          .portfolio.dark-theme .achievement-icon {
            background-color: #243c59 !important;
            color: #d9eaff !important;
            border-color: #426184 !important;
          }

          .portfolio.dark-theme .achievement-node:nth-child(n),
          .portfolio.dark-theme .achievement-node:nth-child(even) {
            background: #17263b !important;
            color: #edf4ff !important;
          }

          .portfolio.dark-theme .achievement-node::before {
            border-color: #3b5878 !important;
            background: #17263b !important;
          }

          /* Brand marks keep their original colors in both themes. */

          .portfolio.dark-theme .selected-project-card a,
          .portfolio.dark-theme .achievement-arrow {
            color: #7db7ff !important;
          }

          .portfolio.dark-theme .selected-project-card a:hover,
          .portfolio.dark-theme .achievement-node:hover .achievement-arrow {
            color: #b9d9ff !important;
          }

          .portfolio.dark-theme .process-grid::before,
          .portfolio.dark-theme .achievement-zigzag::before {
            opacity: 0.8;
          }

          .portfolio.dark-theme .section-head h2,
          .portfolio.dark-theme .selected-projects-intro h2,
          .portfolio.dark-theme .experience-showcase-heading h2,
          .portfolio.dark-theme .skills-showcase-heading h2 {
            text-shadow: none !important;
          }
          /* Focused About-section dark-mode contrast fix */
          .dark-theme .about-section {
            background: #0f1b2d !important;
            color: #eaf1fb !important;
          }
          .dark-theme .about-section .about-intro-panel h2 {
            color: #f3f7ff !important;
            text-shadow: none !important;
          }
          .dark-theme .about-section .about-copy {
            color: #c4d0e0 !important;
          }
          .dark-theme .about-section .eyebrow {
            color: #8fc2ff !important;
          }
          .dark-theme .about-section .education-card {
            background: #17263b !important;
            border-color: #344a66 !important;
            color: #eaf1fb !important;
          }
          .dark-theme .about-section .education-card strong,
          .dark-theme .about-section .education-card span {
            color: #eaf1fb !important;
          }
          .dark-theme .about-section .about-focus-tags span {
            background: #1c3049 !important;
            border-color: #3a5879 !important;
            color: #d9e9ff !important;
          }
          /* Keep the design-approach card light, with dark readable text. */
          .dark-theme .about-section .about-visual-card {
            background: linear-gradient(
              145deg,
              #ffffff 0%,
              #f8faf8 64%,
              #edf7f3 100%
            ) !important;
            border-color: #d9e5df !important;
            box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18) !important;
          }
          .dark-theme .about-section .about-visual-card .about-visual-label {
            color: #167b7a !important;
          }
          .dark-theme .about-section .about-visual-card .about-visual-title {
            color: #173654 !important;
            text-shadow: none !important;
          }
          .dark-theme .about-section .about-process-item,
          .dark-theme .about-section .about-process-item strong,
          .dark-theme .about-section .about-process-item h3 {
            color: #173654 !important;
          }
          /* Preserve the decorative glow, but soften it so it does not overpower the section. */
          .dark-theme .about-section::before {
            background: radial-gradient(
              circle,
              rgba(95, 132, 169, 0.22) 0%,
              rgba(55, 79, 107, 0.14) 45%,
              transparent 72%
            ) !important;
            opacity: 0.72 !important;
          }
          /* Tech Stack dark-mode contrast and background correction */
          .dark-theme .tech-stack-section {
            background: #0f1b2d !important;
            color: #edf4ff !important;
          }
          .dark-theme .tech-stack-section::before {
            border-color: rgba(125, 183, 255, 0.12) !important;
            box-shadow:
              0 0 0 28px rgba(125, 183, 255, 0.018),
              0 0 0 62px rgba(125, 183, 255, 0.012) !important;
            opacity: 0.55 !important;
          }
          .dark-theme .tech-stack-section .tech-stack-heading h2 {
            color: #f3f7ff !important;
            text-shadow: none !important;
          }
          .dark-theme .tech-stack-section .tech-stack-heading h2 span {
            color: #6f98ff !important;
          }
          .dark-theme .tech-stack-section .tech-stack-heading p {
            color: #c3d0e2 !important;
          }
          .dark-theme .tech-stack-section .tech-stack-heading .eyebrow {
            color: #91bfff !important;
          }
          .dark-theme .tech-stack-section .tech-stack-group {
            background: #17263b !important;
            border-color: #344b68 !important;
            color: #edf4ff !important;
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.18) !important;
          }
          .dark-theme .tech-stack-section .tech-stack-category,
          .dark-theme .tech-stack-section .tech-stack-name {
            color: #f3f7ff !important;
          }
          .dark-theme .tech-stack-section .tech-stack-desc,
          .dark-theme .tech-stack-section .tech-stack-item p {
            color: #c3d0e2 !important;
          }
          .dark-theme .tech-stack-section .tech-stack-item {
            background: #1c3049 !important;
            border-color: #344b68 !important;
            color: #edf4ff !important;
          }
          /* Tech-stack logo wrappers and SVG brand colors are intentionally not overridden by dark mode. */
          .dark-theme .tech-stack-section .tech-stack-mark svg,
          .dark-theme .tech-stack-section .tech-stack-logo svg {
            filter: none !important;
            opacity: 1 !important;
          }
          /* Hero artwork dark-mode contrast: target the actual headline and note elements. */
          .portfolio.dark-theme .hero-visual .hero-headline {
            color: #f4f8ff !important;
            text-shadow:
              0 2px 10px rgba(5, 16, 32, 0.72),
              0 1px 0 rgba(5, 16, 32, 0.55) !important;
            -webkit-text-stroke: 0.25px rgba(5, 16, 32, 0.45);
          }
          .portfolio.dark-theme .hero-visual .hero-headline .headline-star {
            color: #22c1d6 !important;
            text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3) !important;
          }
          .portfolio.dark-theme .hero-visual .hero-micro-card {
            background: rgba(12, 27, 46, 0.86) !important;
            border-color: rgba(219, 234, 254, 0.88) !important;
            color: #dbeafe !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28) !important;
            backdrop-filter: blur(5px);
          }
          .portfolio.dark-theme .hero-visual .hero-micro-card .micro-card-star {
            color: #22c1d6 !important;
          }
          .portfolio.dark-theme .hero-visual .hero-note {
            background: rgba(12, 27, 46, 0.88) !important;
            border: 1px solid rgba(191, 219, 254, 0.8) !important;
            color: #f1f7ff !important;
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.28) !important;
            backdrop-filter: blur(5px);
          }
          .portfolio.dark-theme .hero-visual .hero-note span {
            color: #93c5fd !important;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
          }
          .portfolio.dark-theme .hero-visual .spark,
          .portfolio.dark-theme .hero-visual .spark-one,
          .portfolio.dark-theme .hero-visual .spark-two {
            filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.25));
          }
          /* Keep Miro's brand tile yellow in both themes. */
          .portfolio.dark-theme .tech-stack-section .tech-stack-mark.miro-logo {
            background: #ffd92f !important;
            color: #171717 !important;
            border-color: #ffd92f !important;
            box-shadow: none !important;
          }
          .portfolio.dark-theme
            .tech-stack-section
            .tech-stack-mark.miro-logo
            svg {
            filter: none !important;
            opacity: 1 !important;
          }

          /* The CTA inside the navigation is for the mobile menu only. */
          .portfolio .topbar > .nav .mobile-connect {
            display: none;
          }

          /* Desktop navbar layout: centered section links, theme toggle beside the CTA. */
          @media (min-width: 901px) {
            .portfolio .topbar {
              justify-content: space-between;
              gap: 14px;
            }

            .portfolio .topbar > .nav {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              margin: 0;
              max-width: calc(100vw - 620px);
              justify-content: center;
              white-space: nowrap;
            }

            .portfolio .topbar > .theme-toggle {
              margin-left: auto;
              flex: 0 0 auto;
            }

            .portfolio .topbar > .button.primary:not(.mobile-connect) {
              margin-left: 0;
              flex: 0 0 auto;
            }
          }

          /* Mobile header polish: compact controls, floating menu, tighter hero spacing. */
          @media (max-width: 640px) {
            .portfolio .topbar {
              position: relative;
              z-index: 100;
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: nowrap;
              gap: 8px;
              min-height: 70px;
              padding: 10px 0;
            }

            .portfolio .topbar > .brand {
              flex: 0 0 auto;
              margin: 0 auto 0 0;
              font-size: 26px;
              line-height: 1;
            }

            .portfolio .topbar > .menu-button,
            .portfolio .topbar > .theme-toggle {
              flex: 0 0 auto;
              min-height: 42px;
              height: 42px;
              padding: 0 12px;
              border-radius: 13px;
              font-size: 13px;
              line-height: 1;
              white-space: nowrap;
            }

            /* Mobile order: brand on the left, theme toggle before Menu on the right. */
            .portfolio .topbar > .theme-toggle {
              order: 1;
              margin-left: auto;
              display: inline-flex;
              align-items: center;
              justify-content: center;
            }

            .portfolio .topbar > .menu-button {
              order: 2;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 6px;
            }

            .portfolio .topbar > .nav,
            .portfolio .topbar > .nav.open {
              position: absolute;
              top: calc(100% + 8px);
              left: 0;
              right: 0;
              width: 100%;
              max-width: none;
              margin: 0;
              padding: 8px;
              display: none;
              flex-direction: column;
              align-items: stretch;
              gap: 4px;
              overflow: visible;
              border: 1px solid var(--line);
              border-radius: 16px;
              background: var(--paper);
              color: var(--ink);
              box-shadow: 0 18px 42px rgba(3, 10, 24, 0.24);
              z-index: 110;
            }

            .portfolio .topbar > .nav.open {
              display: flex;
            }

            .portfolio .topbar > .nav a {
              min-height: 44px;
              padding: 0 14px;
              border-radius: 10px;
              font-size: 14px;
            }

            .portfolio .topbar > .nav .mobile-connect {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-top: 6px;
            }

            .portfolio.dark-theme .topbar > .nav,
            .portfolio.dark-theme .topbar > .nav.open {
              background: #172235;
              border-color: #334155;
              color: #e5edf7;
            }

            .portfolio .hero {
              padding-top: 34px;
              gap: 24px;
            }
          }

          @media (max-width: 390px) {
            .portfolio .topbar {
              gap: 6px;
            }

            .portfolio .topbar > .brand {
              font-size: 23px;
            }

            .portfolio .topbar > .menu-button,
            .portfolio .topbar > .theme-toggle {
              min-height: 39px;
              height: 39px;
              padding: 0 9px;
              font-size: 12px;
            }
          }

          /* Responsive How I Work timeline: horizontal on desktop, vertical on mobile. */
          .portfolio .process-grid {
            position: relative !important;
            display: grid !important;
            grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
            align-items: start !important;
            gap: clamp(12px, 1.7vw, 24px) !important;
            margin-top: 54px !important;
            padding: 0 !important;
            overflow: visible !important;
            isolation: isolate !important;
          }

          .portfolio .process-grid::before {
            content: "" !important;
            display: block !important;
            position: absolute !important;
            top: 16px;
            left: 17px;
            right: 17px;
            width: auto;
            height: 2px;
            border: 0 !important;
            border-radius: 99px !important;
            background: linear-gradient(
              90deg,
              #315d86 0%,
              #8da8bd 55%,
              #d7e1e8 100%
            ) !important;
            z-index: 0 !important;
          }

          .portfolio .process-grid::after {
            content: "" !important;
            display: block !important;
            position: absolute !important;
            z-index: 1 !important;
            top: 15px;
            left: 7%;
            right: auto;
            bottom: auto;
            width: 22%;
            height: 4px;
            border: 0 !important;
            border-radius: 999px !important;
            background: linear-gradient(
              90deg,
              #3478e5,
              #27b7bd,
              #8a70f4
            ) !important;
            box-shadow: 0 0 10px rgba(52, 120, 229, 0.32) !important;
            animation: process-line-travel-final 4s linear infinite !important;
            animation-play-state: running !important;
            pointer-events: none !important;
          }

          .portfolio .process-item,
          .portfolio .process-item:nth-child(n),
          .portfolio .process-item:nth-child(even) {
            position: relative !important;
            display: block !important;
            min-width: 0 !important;
            min-height: 0 !important;
            padding: 0 !important;
            margin: 0 !important;
            border: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
            box-shadow: none !important;
            transform: none !important;
            animation: none !important;
          }

          .portfolio .process-item::before,
          .portfolio .process-item:nth-child(n)::before,
          .portfolio .process-item:nth-child(even)::before {
            content: "" !important;
            position: relative !important;
            z-index: 2 !important;
            display: block !important;
            width: 32px;
            height: 32px;
            margin: 0 0 27px !important;
            border: 2px solid #315d86 !important;
            border-radius: 50% !important;
            background: #f7f5ef !important;
            box-shadow:
              inset 0 0 0 5px #f7f5ef,
              inset 0 0 0 8px #315d86,
              0 0 0 5px #e7edf1 !important;
            animation: none !important;
            transform: none !important;
          }

          .portfolio .process-item::after,
          .portfolio .process-item:nth-child(n)::after,
          .portfolio .process-item:nth-child(even)::after {
            display: none !important;
            content: none !important;
            animation: none !important;
          }

          .portfolio .process-item > span {
            display: block !important;
            margin: 0 0 9px !important;
            color: #315d86 !important;
            font-size: 10px !important;
            line-height: 1.4 !important;
            font-weight: 800 !important;
            letter-spacing: 0.13em !important;
          }

          .portfolio .process-item h3 {
            margin: 0 0 10px !important;
            color: #1b2e40 !important;
            font-size: clamp(17px, 1.45vw, 21px) !important;
            line-height: 1.2 !important;
            overflow-wrap: anywhere;
          }

          .portfolio .process-item p {
            max-width: 200px !important;
            margin: 0 !important;
            color: #6d7780 !important;
            font-size: 12px !important;
            line-height: 1.75 !important;
            overflow-wrap: break-word;
          }

          .portfolio.dark-theme .process-grid::before {
            background: linear-gradient(
              90deg,
              #60a5fa 0%,
              #496987 55%,
              #293b50 100%
            ) !important;
          }

          .portfolio.dark-theme .process-grid::after {
            background: linear-gradient(
              90deg,
              #60a5fa,
              #38bdf8,
              #a78bfa
            ) !important;
            box-shadow: 0 0 12px rgba(96, 165, 250, 0.3) !important;
          }

          .portfolio.dark-theme .process-item::before {
            background: #172235 !important;
            border-color: #60a5fa !important;
            box-shadow:
              inset 0 0 0 5px #172235,
              inset 0 0 0 8px #60a5fa,
              0 0 0 5px #243449 !important;
          }

          .portfolio.dark-theme .process-item > span {
            color: #93c5fd !important;
          }

          .portfolio.dark-theme .process-item h3 {
            color: #f1f5f9 !important;
          }

          .portfolio.dark-theme .process-item p {
            color: #cbd5e1 !important;
          }

          @media (max-width: 1000px) {
            .portfolio .process-grid {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              gap: 34px 24px !important;
              margin-top: 40px !important;
            }

            .portfolio .process-grid::before,
            .portfolio .process-grid::after {
              display: none !important;
            }

            .portfolio .process-item::before,
            .portfolio .process-item:nth-child(n)::before {
              margin: 0 0 20px !important;
            }

            .portfolio .process-item p {
              max-width: 260px !important;
            }
          }

          @media (max-width: 640px) {
            /* One-column mobile timeline with a moving accent strip; no arrows. */
            .portfolio .process-grid {
              position: relative !important;
              isolation: isolate !important;
              display: grid !important;
              grid-template-columns: minmax(0, 1fr) !important;
              gap: 0 !important;
              margin-top: 34px !important;
              padding: 0 0 0 2px !important;
              overflow: visible !important;
            }

            .portfolio .process-grid::before {
              display: block !important;
              content: "" !important;
              position: absolute !important;
              top: 15px;
              bottom: 42px;
              left: 15px;
              right: auto;
              width: 2px;
              height: auto;
              border: 0 !important;
              border-radius: 99px !important;
              background: linear-gradient(
                180deg,
                #315d86 0%,
                #58a6ef 55%,
                #9b87f5 100%
              ) !important;
              z-index: 0 !important;
            }

            .portfolio .process-grid::after {
              display: block !important;
              content: "" !important;
              position: absolute !important;
              z-index: 4 !important;
              top: 15px;
              bottom: auto;
              left: 14px;
              right: auto;
              width: 4px;
              height: 36px;
              border: 0 !important;
              border-radius: 999px !important;
              background: linear-gradient(
                180deg,
                #3478e5 0%,
                #27b7bd 55%,
                #8a70f4 100%
              ) !important;
              box-shadow: 0 0 10px rgba(52, 120, 229, 0.32) !important;
              animation: process-line-travel-vertical-final 3.2s linear infinite !important;
              animation-play-state: running !important;
              will-change: top, opacity !important;
              pointer-events: none !important;
            }

            .portfolio.dark-theme .process-grid::before {
              background: linear-gradient(
                180deg,
                #60a5fa 0%,
                #38bdf8 55%,
                #a78bfa 100%
              ) !important;
            }

            .portfolio.dark-theme .process-grid::after {
              background: linear-gradient(
                180deg,
                #60a5fa 0%,
                #38bdf8 55%,
                #a78bfa 100%
              ) !important;
              box-shadow: 0 0 12px rgba(96, 165, 250, 0.3) !important;
            }

            .portfolio .process-item,
            .portfolio .process-item:nth-child(n),
            .portfolio .process-item:nth-child(even) {
              position: relative !important;
              z-index: 1 !important;
              display: grid !important;
              grid-template-columns: 30px minmax(0, 1fr) !important;
              grid-template-rows: auto auto auto !important;
              column-gap: 16px !important;
              align-items: start !important;
              padding: 0 0 34px !important;
              margin: 0 !important;
            }

            .portfolio .process-item:last-child {
              padding-bottom: 0 !important;
            }

            .portfolio .process-item::before,
            .portfolio .process-item:nth-child(n)::before,
            .portfolio .process-item:nth-child(even)::before {
              grid-column: 1 !important;
              grid-row: 1 / span 3 !important;
              width: 25px;
              height: 25px;
              margin: 2px 0 0 !important;
              border: 2px solid #315d86 !important;
              border-radius: 50% !important;
              background: #f7f5ef !important;
              box-shadow:
                inset 0 0 0 4px #f7f5ef,
                inset 0 0 0 7px #315d86,
                0 0 0 4px #e7edf1 !important;
              z-index: 2 !important;
            }

            .portfolio.dark-theme .process-item::before,
            .portfolio.dark-theme .process-item:nth-child(n)::before,
            .portfolio.dark-theme .process-item:nth-child(even)::before {
              background: #172235 !important;
              border-color: #60a5fa !important;
              box-shadow:
                inset 0 0 0 4px #172235,
                inset 0 0 0 7px #60a5fa,
                0 0 0 4px #243449 !important;
            }

            .portfolio .process-item > span {
              grid-column: 2 !important;
              grid-row: 1 !important;
              margin: 0 0 7px !important;
              font-size: 10px !important;
              letter-spacing: 0.1em !important;
            }

            .portfolio .process-item h3 {
              grid-column: 2 !important;
              grid-row: 2 !important;
              margin: 0 0 8px !important;
              font-size: 19px !important;
              line-height: 1.25 !important;
              overflow-wrap: normal !important;
            }

            .portfolio .process-item p {
              grid-column: 2 !important;
              grid-row: 3 !important;
              max-width: none !important;
              margin: 0 !important;
              font-size: 13px !important;
              line-height: 1.7 !important;
            }
          }

          @keyframes process-line-travel-vertical-final {
            0% {
              top: 15px;
              opacity: 0.75;
            }
            8% {
              opacity: 1;
            }
            92% {
              opacity: 1;
            }
            100% {
              top: calc(100% - 55px);
              opacity: 0.75;
            }
          }

          @keyframes process-line-travel-final {
            0% {
              left: 7%;
              width: 8%;
              opacity: 0.7;
            }
            50% {
              left: 44%;
              width: 28%;
              opacity: 1;
            }
            100% {
              left: 85%;
              width: 8%;
              opacity: 0.7;
            }
          }

          /* Explicitly keep the timeline accent animated on desktop and mobile,
             even when the browser requests reduced motion. */
          .portfolio .process-grid::after {
            animation: process-line-travel-final 4s linear infinite !important;
            animation-play-state: running !important;
            animation-play-state: running !important;
            will-change: left, width, opacity, top !important;
          }

          @media (max-width: 640px) {
            .portfolio .process-grid::after {
              animation: process-line-travel-vertical-final 3.2s linear infinite !important;
              animation-play-state: running !important;
              animation-play-state: running !important;
            }
          }

          /* Final mobile-only timeline repair: keep the vertical track visible
             and animate the short gradient segment from the first node to the last.
             Desktop timeline rules above remain unchanged. */
          @media screen and (max-width: 640px) {
            .portfolio .process-grid {
              position: relative !important;
              overflow: visible !important;
            }

            .portfolio .process-grid::before {
              display: block !important;
              content: "" !important;
              position: absolute !important;
              top: 15px !important;
              bottom: 14px !important;
              left: 15px !important;
              right: auto !important;
              width: 2px !important;
              height: auto !important;
              background: linear-gradient(
                180deg,
                #315d86 0%,
                #58a6ef 55%,
                #9b87f5 100%
              ) !important;
              z-index: 0 !important;
            }

            .portfolio .process-grid::after {
              display: block !important;
              content: "" !important;
              position: absolute !important;
              top: 15px !important;
              bottom: auto !important;
              left: 14px !important;
              right: auto !important;
              width: 4px !important;
              height: 36px !important;
              background: linear-gradient(
                180deg,
                #3478e5 0%,
                #27b7bd 55%,
                #8a70f4 100%
              ) !important;
              border: 0 !important;
              border-radius: 999px !important;
              box-shadow: 0 0 10px rgba(52, 120, 229, 0.32) !important;
              animation-name: mobile-process-strip-fall !important;
              animation-duration: 3.2s !important;
              animation-timing-function: linear !important;
              animation-iteration-count: infinite !important;
              animation-delay: 0s !important;
              animation-fill-mode: none !important;
              animation-play-state: running !important;
              pointer-events: none !important;
              z-index: 4 !important;
            }

            .portfolio.dark-theme .process-grid::before {
              background: linear-gradient(
                180deg,
                #60a5fa 0%,
                #38bdf8 55%,
                #a78bfa 100%
              ) !important;
            }

            .portfolio.dark-theme .process-grid::after {
              background: linear-gradient(
                180deg,
                #60a5fa 0%,
                #38bdf8 55%,
                #a78bfa 100%
              ) !important;
            }
          }

          @keyframes mobile-process-strip-fall {
            0% {
              top: 15px;
              opacity: 0.65;
            }
            10% {
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              top: calc(100% - 50px);
              opacity: 0.65;
            }
          }

          /* Reliable mobile animation: use a real child element rather than a pseudo-element. */
          .portfolio .process-motion-strip {
            display: none;
          }

          @media screen and (max-width: 640px) {
            .portfolio .process-grid::after {
              display: none !important;
              animation: none !important;
            }

            .portfolio .process-motion-strip {
              display: block !important;
              position: absolute !important;
              z-index: 5 !important;
              top: 15px;
              left: 14px !important;
              width: 4px !important;
              height: 44px !important;
              padding: 0 !important;
              margin: 0 !important;
              border: 0 !important;
              border-radius: 999px !important;
              background: linear-gradient(
                180deg,
                #3478e5 0%,
                #27b7bd 55%,
                #8a70f4 100%
              ) !important;
              box-shadow: 0 0 10px rgba(52, 120, 229, 0.32) !important;
              pointer-events: none !important;
              animation: mobile-process-child-fall 2.8s linear infinite !important;
              animation-play-state: running !important;
              will-change: top, opacity;
            }

            .portfolio.dark-theme .process-motion-strip {
              background: linear-gradient(
                180deg,
                #60a5fa 0%,
                #38bdf8 55%,
                #a78bfa 100%
              ) !important;
            }
          }

          @keyframes mobile-process-child-fall {
            0% {
              top: 15px;
              opacity: 0.55;
            }
            8% {
              opacity: 1;
            }
            92% {
              opacity: 1;
            }
            100% {
              top: calc(100% - 50px);
              opacity: 0.55;
            }
          }

          /* iPhone Safari-only responsive safeguards.
             These overrides are limited to narrow WebKit screens so desktop styling stays intact. */
          @supports (-webkit-touch-callout: none) {
            @media screen and (max-width: 640px) {
              html {
                width: 100%;
                max-width: 100%;
                overflow-x: clip;
                -webkit-text-size-adjust: 100%;
                text-size-adjust: 100%;
                scroll-padding-top: 100px;
              }

              body,
              .portfolio {
                width: 100%;
                max-width: 100%;
                overflow-x: clip;
              }

              .portfolio *,
              .portfolio *::before,
              .portfolio *::after {
                min-width: 0;
              }

              .portfolio .container {
                width: calc(100% - 32px) !important;
                max-width: 100%;
                margin-left: auto;
                margin-right: auto;
              }

              .portfolio .topbar {
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                max-width: 100%;
                padding-top: calc(12px + env(safe-area-inset-top, 0px));
                padding-right: max(16px, env(safe-area-inset-right, 0px));
                padding-bottom: 12px;
                padding-left: max(16px, env(safe-area-inset-left, 0px));
              }

              .portfolio .hero {
                min-width: 0;
                grid-template-columns: minmax(0, 1fr);
                padding-top: 112px;
                scroll-margin-top: 100px;
              }

              .portfolio .hero > *,
              .portfolio .about-grid > *,
              .portfolio .featured > *,
              .portfolio .project-grid > *,
              .portfolio .skills-grid > *,
              .portfolio .awards > *,
              .portfolio .section-head > * {
                min-width: 0;
                max-width: 100%;
              }

              .portfolio h1,
              .portfolio h2,
              .portfolio h3,
              .portfolio p,
              .portfolio a,
              .portfolio span,
              .portfolio strong {
                overflow-wrap: anywhere;
                -webkit-hyphens: auto;
                hyphens: auto;
              }

              .portfolio img,
              .portfolio video,
              .portfolio iframe,
              .portfolio svg {
                max-width: 100%;
              }

              .portfolio .hero-visual {
                width: 100%;
                min-width: 0;
                max-width: 100%;
              }

              .portfolio .hero-actions,
              .portfolio .contact-links {
                min-width: 0;
                flex-wrap: wrap;
              }

              .portfolio .button {
                max-width: 100%;
                white-space: normal;
                overflow-wrap: anywhere;
              }

              .portfolio section[id],
              .portfolio footer[id] {
                scroll-margin-top: 100px;
              }
            }
          }

          /* Final responsive polish: keep the layout comfortable on phones. */
          @media (max-width: 760px) {
            .portfolio {
              width: 100%;
              overflow-x: clip;
            }

            .portfolio .container {
              width: min(100% - 36px, 560px);
            }

            .portfolio .topbar {
              min-height: 68px;
              gap: 12px;
              padding-left: 18px;
              padding-right: 18px;
            }

            .portfolio .brand {
              font-size: 24px;
              flex-shrink: 0;
            }

            .portfolio .nav {
              max-width: 100%;
            }

            .portfolio .hero {
              grid-template-columns: minmax(0, 1fr);
              gap: 28px;
              padding-top: 100px;
              padding-bottom: 48px;
            }

            .portfolio .hero > *,
            .portfolio .about-grid > *,
            .portfolio .contact-layout > * {
              min-width: 0;
            }

            .portfolio h1 {
              font-size: clamp(42px, 11vw, 64px);
              line-height: 1;
              overflow-wrap: anywhere;
            }

            .portfolio .hero-role {
              flex-wrap: wrap;
              gap: 8px;
              font-size: clamp(15px, 4vw, 20px);
              letter-spacing: 0.04em;
              min-height: 0;
            }

            .portfolio .hero-role-dash {
              flex-basis: 24px;
            }

            .portfolio .hero-actions {
              gap: 10px;
              margin: 24px 0 28px;
            }

            .portfolio .stats {
              display: grid;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              gap: 12px;
            }

            .portfolio .stat,
            .portfolio .stat:first-child {
              min-width: 0;
              padding: 0 0 0 10px;
              border-left: 1px solid var(--line);
            }

            .portfolio .stat strong {
              font-size: clamp(19px, 5vw, 24px);
            }

            .portfolio .stat span {
              font-size: 10px;
              overflow-wrap: anywhere;
            }

            .portfolio .hero-visual {
              min-height: clamp(350px, 100vw, 500px);
              border-radius: 24px;
            }

            .portfolio .portrait-frame {
              width: 54%;
              height: 82%;
              left: 14%;
            }

            .portfolio .float-tag {
              width: 39%;
              right: 2%;
              min-height: 48px;
              padding: 10px 7px;
              font-size: clamp(9px, 2.6vw, 12px);
              overflow-wrap: anywhere;
            }

            .portfolio .hero-visual::after {
              font-size: clamp(21px, 6vw, 30px);
              left: 5%;
              top: 7%;
            }

            .portfolio .hero-note {
              max-width: 48%;
              padding: 12px;
              font-size: 13px;
            }

            .portfolio .section {
              padding-top: 58px;
              padding-bottom: 58px;
            }

            .portfolio .section-head {
              align-items: flex-start;
              flex-direction: column;
              gap: 14px;
              margin-bottom: 25px;
            }

            .portfolio .section-head h2 {
              font-size: clamp(34px, 8vw, 48px);
              overflow-wrap: anywhere;
            }

            .portfolio .section-head p {
              max-width: none;
            }

            .portfolio .featured {
              grid-template-columns: minmax(0, 1fr);
            }

            .portfolio .featured-info {
              padding: 24px;
            }

            .portfolio .featured h3 {
              font-size: clamp(32px, 8vw, 44px);
              margin-top: 20px;
              overflow-wrap: anywhere;
            }

            .portfolio .project-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
            }

            .portfolio .project-card {
              min-width: 0;
              padding: 17px;
            }

            .portfolio .project-card h3 {
              font-size: clamp(19px, 5vw, 24px);
              margin-top: 24px;
              overflow-wrap: anywhere;
            }

            .portfolio .about-grid {
              grid-template-columns: minmax(0, 1fr);
              gap: 28px;
            }

            .portfolio .skills-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .portfolio .awards {
              grid-template-columns: minmax(0, 1fr);
            }

            .portfolio .contact-layout {
              grid-template-columns: minmax(0, 1fr);
              gap: 24px;
            }

            .portfolio .contact-links {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }

            .portfolio .contact-links .button {
              flex: 1 1 145px;
              min-width: 0;
              text-align: center;
            }

            .portfolio .footer {
              flex-wrap: wrap;
              gap: 12px 18px;
              padding-top: 24px;
            }
          }

          @media (max-width: 480px) {
            .portfolio .container {
              width: calc(100% - 32px);
            }

            .portfolio .hero {
              padding-top: 88px;
              gap: 24px;
            }

            .portfolio .intro {
              font-size: 14px;
              line-height: 1.75;
            }

            .portfolio .hero-actions .button {
              flex: 1 1 140px;
              padding: 12px 13px;
              font-size: 12px;
            }

            .portfolio .hero-visual {
              min-height: 370px;
            }

            .portfolio .portrait-frame {
              width: 58%;
              height: 78%;
              left: 10%;
            }

            .portfolio .float-tag {
              width: 40%;
              min-height: 43px;
              letter-spacing: 0.025em;
            }

            .portfolio .spark-two {
              left: 23%;
              top: 22%;
              font-size: 40px;
            }

            .portfolio .project-grid {
              grid-template-columns: minmax(0, 1fr);
            }

            .portfolio .project-card {
              min-height: 0;
            }

            .portfolio .process-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .portfolio .achievement-intro-line {
              flex-wrap: wrap;
              gap: 8px;
            }

            .portfolio .achievement-intro-count {
              width: 100%;
            }

            .portfolio .contact h2 {
              font-size: clamp(34px, 9vw, 46px);
              overflow-wrap: anywhere;
            }

            .portfolio .footer > span {
              max-width: 100%;
              overflow-wrap: anywhere;
            }
          }

          @media (max-width: 360px) {
            .portfolio .container {
              width: calc(100% - 28px);
            }

            .portfolio .stats {
              gap: 8px;
            }

            .portfolio .stat strong {
              font-size: 18px;
            }

            .portfolio .hero-visual {
              min-height: 330px;
            }

            .portfolio .process-grid {
              grid-template-columns: minmax(0, 1fr);
            }

            .portfolio .contact-links .button {
              flex-basis: 100%;
            }
          }

          /* Cross-device responsive fixes: desktop, Android and iPhone */
          html,
          body {
            width: 100%;
            max-width: 100%;
            overflow-x: clip;
            -webkit-text-size-adjust: 100%;
          }
          img,
          video,
          canvas,
          svg {
            max-width: 100%;
          }
          a,
          button {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
          }
          .portfolio {
            width: 100%;
            min-width: 0;
            overflow-x: clip;
          }
          .hero > *,
          .container,
          .hero-copy,
          .hero-visual {
            min-width: 0;
          }
          .hero-name {
            overflow-wrap: normal;
            word-break: normal;
          }
          @media (max-width: 640px) {
            .container {
              width: calc(100% - 36px) !important;
            }
            .topbar {
              padding-left: max(18px, env(safe-area-inset-left)) !important;
              padding-right: max(18px, env(safe-area-inset-right)) !important;
              min-height: calc(72px + env(safe-area-inset-top)) !important;
              padding-top: env(safe-area-inset-top);
            }
            .hero {
              grid-template-columns: minmax(0, 1fr) !important;
              gap: 28px !important;
              padding-top: calc(112px + env(safe-area-inset-top)) !important;
              padding-bottom: 48px !important;
            }
            h1 {
              font-size: clamp(40px, 10.5vw, 60px) !important;
              line-height: 1.04 !important;
              letter-spacing: -0.065em !important;
              overflow-wrap: normal !important;
            }
            .hero-role {
              min-height: 30px;
              font-size: clamp(15px, 4.2vw, 21px) !important;
              letter-spacing: 0.045em !important;
              gap: 8px !important;
              margin-bottom: 18px !important;
              overflow-wrap: anywhere;
            }
            .lead {
              font-size: clamp(21px, 5.6vw, 28px) !important;
              line-height: 1.32 !important;
              overflow-wrap: break-word;
            }
            .intro {
              font-size: 15px !important;
              line-height: 1.8 !important;
            }
            .hero-actions {
              display: grid !important;
              grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
              gap: 10px !important;
            }
            .hero-actions .button {
              min-width: 0;
              min-height: 54px;
              padding: 12px 10px !important;
              text-align: center;
              font-size: 12px !important;
              line-height: 1.35;
              white-space: normal;
            }
            .stats {
              display: grid !important;
              grid-template-columns: repeat(3, minmax(0, 1fr));
              width: 100%;
            }
            .stat {
              min-width: 0;
              padding: 0 10px !important;
            }
            .stat:first-child {
              padding-left: 0 !important;
            }
            .stat strong {
              font-size: clamp(18px, 5.3vw, 25px) !important;
              white-space: nowrap;
            }
            .stat span {
              font-size: 10px !important;
              line-height: 1.5;
              overflow-wrap: anywhere;
            }
            .hero-visual {
              width: 100%;
              min-height: clamp(390px, 125vw, 520px) !important;
              height: auto !important;
              border-radius: 24px !important;
            }
            .hero-visual:after {
              font-size: clamp(21px, 6.2vw, 30px) !important;
              line-height: 1.02 !important;
              left: 4% !important;
              top: 8% !important;
            }
            .hero-visual .portrait-frame {
              left: 8% !important;
              width: 64% !important;
              height: 76% !important;
              bottom: 0 !important;
            }
            .hero-visual .float-tag {
              width: 31% !important;
              right: 3% !important;
              min-height: 42px !important;
              padding: 8px 5px !important;
              font-size: clamp(8px, 2.5vw, 11px) !important;
              letter-spacing: 0.025em !important;
            }
            .hero-visual .tag-one {
              top: 10% !important;
            }
            .hero-visual .tag-two {
              top: 25% !important;
            }
            .hero-visual .tag-three {
              top: 40% !important;
            }
            .hero-visual .tag-four {
              top: 55% !important;
            }
            .hero-visual .tag-five {
              top: 70% !important;
            }
            .section {
              padding: 60px 0 !important;
            }
            .section-head {
              align-items: flex-start !important;
              flex-direction: column;
              gap: 16px !important;
            }
            .project-grid {
              grid-template-columns: minmax(0, 1fr) !important;
            }
            .featured {
              grid-template-columns: minmax(0, 1fr) !important;
            }
            .skills-grid {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
            .awards {
              grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            }
          }
          @media (max-width: 390px) {
            .container {
              width: calc(100% - 28px) !important;
            }
            .hero-actions {
              grid-template-columns: minmax(0, 1fr);
            }
            .hero-visual {
              min-height: 390px !important;
            }
            .stat {
              padding-right: 6px !important;
              padding-left: 7px !important;
            }
          }

          .hero-symbol {
            display: inline-block;
            color: var(--cyan);
            font-family: "Space Grotesk", sans-serif;
            font-size: 0.72em;
            line-height: 1;
            vertical-align: 0.08em;
            margin-left: 0.08em;
            font-variant-emoji: text;
          }

          /* Final cross-device layout guardrails */
          html,
          body {
            width: 100%;
            max-width: 100%;
            overflow-x: clip;
          }

          .portfolio,
          .portfolio main,
          .portfolio section,
          .portfolio footer {
            max-width: 100%;
          }

          img,
          video,
          svg,
          canvas {
            max-width: 100%;
          }

          @media (max-width: 640px) {
            .container {
              width: calc(100% - 32px) !important;
              max-width: calc(100% - 32px) !important;
            }

            .hero {
              grid-template-columns: minmax(0, 1fr) !important;
              gap: 28px !important;
              padding-top: 118px !important;
              padding-bottom: 42px !important;
              min-width: 0 !important;
            }

            .hero > * {
              min-width: 0 !important;
              width: 100%;
              max-width: 100%;
            }

            .hero h1 {
              max-width: 100% !important;
              font-size: clamp(38px, 10vw, 54px) !important;
              line-height: 1.04 !important;
              letter-spacing: -0.065em !important;
              overflow-wrap: anywhere;
            }

            .hero-role {
              min-width: 0;
              max-width: 100%;
              font-size: clamp(16px, 4.5vw, 22px) !important;
              letter-spacing: 0.04em !important;
              overflow-wrap: anywhere;
            }

            .lead {
              max-width: 100% !important;
              font-size: clamp(20px, 5.3vw, 27px) !important;
              line-height: 1.3 !important;
              overflow-wrap: break-word;
            }

            .intro {
              max-width: 100% !important;
              font-size: 15px !important;
              line-height: 1.75 !important;
              overflow-wrap: break-word;
            }

            .hero-actions {
              display: grid !important;
              grid-template-columns: minmax(0, 1fr) !important;
              width: 100%;
              max-width: 100%;
              gap: 10px !important;
            }

            .hero-actions .button {
              width: 100% !important;
              min-width: 0 !important;
              max-width: 100%;
              min-height: 56px;
              padding: 14px 12px !important;
              white-space: normal !important;
              text-align: center;
              overflow-wrap: anywhere;
            }

            .stats {
              display: grid !important;
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
              width: 100%;
              max-width: 100%;
              min-width: 0;
            }

            .stat {
              min-width: 0 !important;
              padding: 0 8px !important;
              overflow-wrap: anywhere;
            }

            .stat:first-child {
              padding-left: 0 !important;
            }

            .stat strong {
              font-size: clamp(19px, 5.2vw, 25px) !important;
              line-height: 1.15;
              overflow-wrap: anywhere;
            }

            .stat span {
              max-width: 100% !important;
              font-size: 11px !important;
              overflow-wrap: anywhere;
              word-break: normal;
            }

            .hero-visual {
              width: 100% !important;
              max-width: 100% !important;
              min-width: 0 !important;
              min-height: clamp(330px, 105vw, 440px) !important;
              border-radius: 28px !important;
              overflow: hidden !important;
            }

            .portrait-frame {
              width: 68% !important;
              max-width: 270px !important;
              height: 86% !important;
              left: 18% !important;
            }

            .hero-visual:after {
              left: 4% !important;
              top: 8% !important;
              font-size: clamp(22px, 6vw, 31px) !important;
              max-width: 42%;
            }

            .hero-visual:before {
              inset: 18% 5% 8% 10% !important;
            }

            .topbar {
              gap: 8px !important;
              padding-left: 16px !important;
              padding-right: 16px !important;
              min-height: 72px !important;
            }

            .topbar .button {
              padding: 10px 12px !important;
              min-width: 0 !important;
              white-space: nowrap;
            }

            .section,
            .contact {
              max-width: 100%;
              overflow: clip;
            }

            .project-grid,
            .featured,
            .skills-grid,
            .awards,
            .process-grid,
            .contact-layout {
              grid-template-columns: minmax(0, 1fr) !important;
              min-width: 0 !important;
            }

            .project-card,
            .featured > *,
            .skill,
            .process-item,
            .achievement-row,
            .contact-layout > * {
              min-width: 0 !important;
              max-width: 100%;
            }
          }

          @media (max-width: 390px) {
            .container {
              width: calc(100% - 28px) !important;
              max-width: calc(100% - 28px) !important;
            }

            .hero h1 {
              font-size: clamp(35px, 9.5vw, 43px) !important;
            }

            .stats .stat {
              padding-right: 5px !important;
              padding-left: 6px !important;
            }

            .stats .stat:first-child {
              padding-left: 0 !important;
            }
          }

          /* Final responsive consistency: preserve the same design language on every device. */
          .hero-symbol svg,
          .spark svg,
          .hero-headline .headline-star svg,
          .orbit-cross svg {
            display: block;
            max-width: none;
          }

          .hero-symbol {
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
            width: 0.78em;
            height: 0.78em;
            color: #164dff !important;
            vertical-align: -0.04em !important;
            margin-left: 0.08em !important;
            font-size: 0.82em !important;
          }

          .hero-actions .button,
          .all-projects-button {
            box-sizing: border-box;
            align-items: center;
            justify-content: center;
            gap: 8px;
          }

          .hero-actions .button > span[aria-hidden="true"],
          .all-projects-button > span[aria-hidden="true"] {
            flex-shrink: 0;
          }

          .selected-projects-footer {
            flex-wrap: wrap;
          }

          @media (min-width: 641px) {
            .hero {
              grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important;
              align-items: center;
            }
            .hero > :first-child,
            .hero > .hero-visual {
              min-width: 0;
            }
            .hero-actions {
              display: flex !important;
              flex-direction: row;
              align-items: center;
            }
            .hero-actions .button {
              width: auto;
              white-space: nowrap;
            }
          }

          @media (max-width: 640px) {
            .portfolio .hero {
              grid-template-columns: minmax(0, 1fr) !important;
              width: calc(100% - 32px) !important;
              max-width: calc(100% - 32px) !important;
              margin-inline: auto;
              gap: 26px !important;
              padding-top: 96px !important;
              padding-bottom: 40px !important;
            }
            .portfolio .hero > div:first-child,
            .portfolio .hero-visual {
              width: 100% !important;
              min-width: 0 !important;
              max-width: 100% !important;
            }
            .portfolio .hero h1 {
              font-size: clamp(36px, 9.2vw, 54px) !important;
              line-height: 1.04 !important;
              letter-spacing: -0.065em !important;
              overflow-wrap: normal !important;
              word-break: normal !important;
            }
            .portfolio .hero-actions {
              display: grid !important;
              grid-template-columns: minmax(0, 1fr) !important;
              width: 100% !important;
              gap: 10px !important;
            }
            .portfolio .hero-actions .button {
              display: inline-flex !important;
              width: 100% !important;
              min-width: 0 !important;
              max-width: 100% !important;
              min-height: 54px;
              padding: 14px 16px !important;
              white-space: normal !important;
              overflow-wrap: normal !important;
              line-height: 1.3;
            }
            .portfolio .hero-visual {
              min-height: clamp(340px, 105vw, 440px) !important;
              height: auto;
              border-radius: 28px !important;
            }
            .portfolio .selected-projects-footer {
              justify-content: center;
              padding-top: 22px;
            }
            .portfolio .selected-projects-footer > span {
              position: static !important;
              width: 100%;
              text-align: center;
            }
            .portfolio .all-projects-button {
              display: inline-flex !important;
              width: auto !important;
              max-width: 100%;
              min-height: 54px;
              white-space: nowrap;
            }
          }

          @media (max-width: 380px) {
            .portfolio .hero h1 {
              font-size: clamp(33px, 8.8vw, 38px) !important;
            }
            .portfolio .stats {
              grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            }
            .portfolio .stat {
              padding-inline: 5px !important;
            }
            .portfolio .stat span {
              font-size: 10px !important;
              overflow-wrap: anywhere;
            }
          }

          /* Only adjust the two hero buttons and the arrow badge. */
          .portfolio .hero-actions > .button {
            box-sizing: border-box;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            min-height: 54px !important;
            height: 54px;
            padding: 0 18px !important;
            border-radius: 12px !important;
            font-size: 14px !important;
            line-height: 1.2 !important;
            gap: 8px;
          }

          .portfolio
            .hero-actions
            > .button.primary
            > span[aria-hidden="true"] {
            flex: 0 0 20px;
            width: 20px;
            height: 20px;
            margin-left: 2px;
          }

          .portfolio
            .hero-actions
            > .button.primary
            > span[aria-hidden="true"]
            svg {
            width: 20px;
            height: 20px;
          }
        `}
      </style>

      <motion.header
        className="container topbar"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.55,
          ease: "easeOut",
        }}
      >
        <a className="brand" href="#home" aria-label="Heru home">
          heru<span>.</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <>
              Close <CloseIcon size="14px" />
            </>
          ) : (
            <>
              Menu <MenuIcon size="14px" />
            </>
          )}
        </button>

        <nav
          id="main-navigation"
          className={`nav ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
        >
          {[
            ["About", "#about"],
            ["Work", "#work"],
            ["Experience", "#experience"],
            ["Skills", "#skills"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className={activeNav === label ? "active" : ""}
              aria-current={activeNav === label ? "location" : undefined}
              onClick={() => {
                setActiveNav(label);
                setMenuOpen(false);
              }}
            >
              {label}
            </a>
          ))}
          <a
            className="button primary mobile-connect"
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              setMenuOpen(false);
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
              window.history.replaceState(null, "", "#contact");
            }}
          >
            Let&apos;s connect <ArrowUpRightIcon size="15px" />
          </a>
        </nav>

        <button
          className="button theme-toggle"
          type="button"
          onClick={toggleTheme}
          aria-label={
            darkMode ? "Switch to light theme" : "Switch to dark theme"
          }
          aria-pressed={darkMode}
        >
          {darkMode ? (
            <>
              <SunIcon size="14px" /> Light
            </>
          ) : (
            <>
              <MoonIcon size="14px" /> Dark
            </>
          )}
        </button>

        <a className="button primary" href="#contact">
          Let&apos;s connect <ArrowUpRightIcon size="15px" />
        </a>
      </motion.header>

      <motion.section
        className="container hero"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.75,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
      >
        <div>
          <span className="eyebrow opportunity-label">
            Open for new opportunities
          </span>

          <h1 aria-label="Hi, I'm Heru">
            Hi, I&apos;m <span className="hero-name">Heru</span>
            <span className="hero-symbol" aria-hidden="true">
              <StarburstIcon size="0.72em" />
            </span>
          </h1>

          <div className="hero-role" aria-live="polite" aria-atomic="true">
            <span>{typedRole || "UI/UX Designer"}</span>
            {!shouldReduceMotion && (
              <span className="hero-role-cursor" aria-hidden="true" />
            )}
          </div>

          <p className="lead">
            I turn complex challenges into{" "}
            <mark>simple, accessible digital experiences.</mark>
          </p>

          <p className="intro">
            I&apos;m a UI/UX Designer based in Indonesia who starts with real
            user needs. I turn early ideas into digital products that feel
            clear, intuitive, practical, and easy to navigate.
          </p>

          <div className="hero-actions">
            <a className="button primary" href="#work">
              Explore selected work <ArrowBadge />
            </a>

            <a
              className="button"
              href="https://drive.google.com/file/d/1aIRt55e3ALeuI7HnxW61Kcuzpv4xlbfm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Open my CV <ArrowDownIcon size="14px" />
            </a>
          </div>

          <div className="stats" aria-label="Portfolio statistics">
            <div className="stat">
              <strong aria-label="3 or more years of design experience">
                {statsNumbers.years}+
              </strong>
              <span>Years of design experience</span>
            </div>

            <div className="stat">
              <strong aria-label="10 or more projects and explorations">
                {statsNumbers.projects}+
              </strong>
              <span>Projects and explorations</span>
            </div>

            <div className="stat">
              <strong aria-label="GPA 3.69 out of 4">
                {statsNumbers.gpa.toFixed(2)}/4
              </strong>
              <span>ITS Informatics · Cum Laude</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Portfolio visual">
          <span className="spark spark-one" aria-hidden="true">
            <StarburstIcon size="1em" />
          </span>
          <span className="spark spark-two" aria-hidden="true">
            <ArrowUpRightIcon size="1em" />
          </span>
          <div className="hero-headline" aria-hidden="true">
            Good
            <br />
            Design
            <br />
            Brings
            <br />
            Good
            <br />
            Impact
            <span className="headline-star">
              <StarburstIcon size="1em" />
            </span>
          </div>

          <div className="hero-decor hero-decor-orbit" aria-hidden="true">
            <span className="orbit-dot" />
            <span className="orbit-ring" />
            <span className="orbit-cross">
              <StarburstIcon size="1em" />
            </span>
          </div>
          <div className="hero-decor hero-decor-palette" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="hero-decor hero-decor-stamp" aria-hidden="true">
            <span>IDEATE</span>
            <span>DESIGN</span>
            <span>CREATE</span>
          </div>

          {/* Additional editorial doodles based on the user's reference image. */}
          <div className="hero-micro-card" aria-hidden="true">
            <span className="micro-card-star">
              <StarburstIcon size="1em" />
            </span>
            <span>CREATIVE</span>
            <span>SOLUTIONS</span>
            <span>FOR A BETTER</span>
            <span>TOMORROW</span>
          </div>
          <span className="hero-doodle hero-doodle-squiggle" aria-hidden="true">
            <svg
              viewBox="0 0 48 24"
              width="1.8em"
              height="1em"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 16C8 2 14 28 20 14S32 2 37 14 44 22 46 10"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="hero-doodle hero-doodle-stroke" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 21 21 3"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="square"
              />
            </svg>
          </span>
          <span className="hero-doodle hero-doodle-sparkle" aria-hidden="true">
            <StarburstIcon size="1em" />
          </span>
          <span className="hero-doodle hero-doodle-cursor" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 2 22 13.5 13.8 15.1 10.6 22 3 2Z" />
            </svg>
          </span>
          <span className="hero-doodle hero-doodle-rays" aria-hidden="true">
            <StarburstIcon size="1em" />
          </span>
          <div className="hero-dot-matrix" aria-hidden="true">
            {Array.from({ length: 15 }, (_, i) => (
              <span key={i} />
            ))}
          </div>
          <svg
            className="hero-flight-path"
            viewBox="0 0 180 230"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M135 8 C178 35 163 70 130 92 S95 118 126 135 S142 174 66 218"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
          </svg>

          <div className="hero-note" aria-label="Decorative keyboard">
            <span>
              <CommandKeyIcon size="16px" />
            </span>
            <span>F</span>
            <span>G</span>
            <span>H</span>
            <span>
              <ArrowUpRightIcon size="16px" />
            </span>
            <span>U</span>
            <span>I</span>
            <span>
              <StarburstIcon size="1em" />
            </span>
            <span>X</span>
            <span>O</span>
            <span className="keyboard-space">SPACE</span>
            <span>
              <EnterKeyIcon size="16px" />
            </span>
          </div>

          <motion.div
            className="portrait-frame"
            initial={
              shouldReduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
          >
            <motion.img
              src="/heru.png"
              alt="Heru Dwi Kurniawan"
              className="portrait-image"
              initial={false}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.025 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="section all-projects-section"
        id="work"
        {...reveal}
      >
        <div className="container selected-projects-container">
          <div className="selected-projects-intro">
            <span className="eyebrow">Selected projects</span>
            <h2>
              Thoughtful design.
              <br />
              <span>Real-world impact.</span>
            </h2>
            <p>
              A few projects where I turned user needs into clear, useful
              digital experiences. Explore the highlights below, or see all my
              projects for more.
            </p>
          </div>

          <div className="selected-projects-grid">
            {projects.slice(0, 3).map((project, index) => (
              <motion.article
                className={`selected-project-card selected-project-${project.tone || "blue"}`}
                key={project.number}
                onViewportEnter={() => registerProjectView(project.name)}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              >
                <div
                  className={`selected-project-art ${index === 0 ? "selected-project-art-image" : ""}`}
                  aria-label={`${project.name} project preview`}
                >
                  {index < 3 ? (
                    <Image
                      src={
                        index === 0
                          ? "/Afeksi.png"
                          : index === 1
                            ? "/agro.png"
                            : "/bedenbender.png"
                      }
                      alt={`${project.name} project preview`}
                      fill
                      sizes="(max-width: 580px) 100vw, (max-width: 1000px) 50vw, 33vw"
                      className="selected-project-cover"
                      priority={index === 0}
                    />
                  ) : null}
                  <span className="selected-project-number">
                    {project.number}
                  </span>
                  {!(index === 0 || index === 1 || index === 2) ? (
                    <>
                      <span
                        className="selected-project-symbol"
                        aria-hidden="true"
                      >
                        {project.symbol === "arrow" ? (
                          <ArrowUpRightIcon size="1em" />
                        ) : (
                          <StarburstIcon size="1em" />
                        )}
                      </span>
                      <span className="selected-project-art-label">
                        {project.artLabel || "DESIGN · EXPERIENCE · IMPACT"}
                      </span>
                    </>
                  ) : null}
                </div>
                <div className="selected-project-content">
                  <span className="selected-project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  {project.result ? (
                    <span className="selected-project-result">
                      {project.result}
                    </span>
                  ) : null}
                  <div
                    className="selected-project-stats"
                    aria-label="Project engagement"
                  >
                    <span
                      className="selected-project-stat"
                      aria-label={`${projectViews[project.name] || 0} views`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      {projectViews[project.name] || 0}
                    </span>
                    <button
                      type="button"
                      className={`selected-project-like ${likedProjects[project.name] ? "is-liked" : ""}`}
                      aria-label={`${likedProjects[project.name] ? "Unlike" : "Like"} ${project.name}; ${projectLikes[project.name] || 0} likes`}
                      aria-pressed={Boolean(likedProjects[project.name])}
                      onClick={() => toggleProjectLike(project.name)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill={
                          likedProjects[project.name] ? "currentColor" : "none"
                        }
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                      </svg>
                      {projectLikes[project.name] || 0}
                    </button>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="selected-project-link"
                  >
                    {project.label || "View project"}{" "}
                    <ArrowUpRightIcon size="17px" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="selected-projects-footer">
            <span>More case studies · Product design · UX research</span>
            <motion.div
              whileHover={
                shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              <Link
                className="button primary all-projects-button"
                href="/projects"
                prefetch
              >
                See All My Projects <ArrowBadge />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section about-section" id="about" {...reveal}>
        <div className="container about-grid">
          <div className="about-intro-panel">
            <span className="eyebrow">01 / A little about me</span>
            <h2
              style={{
                font: '700 clamp(38px,4.5vw,55px)/1.02 "Space Grotesk",sans-serif',
                letterSpacing: "-.07em",
                margin: "18px 0 20px",
                color: "#142f4d",
              }}
            >
              Curious by nature.
              <br />
              People by design.
            </h2>
            <p className="about-copy">
              I studied Informatics Engineering at Institut Teknologi Sepuluh
              Nopember (ITS), where I found my focus in UI/UX and product
              design. I connect user research, thoughtful interaction, and
              collaboration to make digital experiences clearer and easier to
              use.
            </p>
            <div className="education-card">
              <strong>Institut Teknologi Sepuluh Nopember</strong>
              <span>
                B.Eng. Informatics · 2021–2025 · GPA 3.69/4.00 · Cum Laude
              </span>
            </div>
            <div className="about-focus-tags" aria-label="Design focus">
              <span>UX Research</span>
              <span>Product Thinking</span>
              <span>UI Design</span>
            </div>
          </div>

          <aside className="about-visual-card" aria-label="My design approach">
            <div className="about-visual-top">
              <span className="about-visual-label">My design approach</span>
              <span className="about-visual-mark" aria-hidden="true">
                <StarburstIcon size="1em" />
              </span>
            </div>
            <div>
              <h3 className="about-visual-title">
                Good design starts with people.
              </h3>
              <div className="about-process-list">
                <div className="about-process-item">
                  <span className="about-process-number">01</span>
                  <span>
                    <strong>Understand</strong>
                    <small>Listen to people and their needs</small>
                  </span>
                </div>
                <div className="about-process-item">
                  <span className="about-process-number">02</span>
                  <span>
                    <strong>Explore</strong>
                    <small>Turn insights into clear ideas</small>
                  </span>
                </div>
                <div className="about-process-item">
                  <span className="about-process-number">03</span>
                  <span>
                    <strong>Improve</strong>
                    <small>Test, learn, and refine the experience</small>
                  </span>
                </div>
              </div>
            </div>
          </aside>

          <section id="experience" className="experience-showcase">
            <div className="experience-showcase-heading">
              <div>
                <span className="eyebrow">02 / Experience</span>
                <h2>Where I’ve made an impact</h2>
                <p>
                  A journey of roles, projects, and collaborations where I
                  contributed, learned, and helped create meaningful digital
                  experiences.
                </p>
              </div>
              <div className="experience-heading-aside">
                <span className="experience-count">
                  {String(experiences.length).padStart(2, "0")} roles
                </span>
                <span className="experience-hand-note">
                  Designing better experiences, step by step.
                </span>
              </div>
            </div>

            <div className="experience-journey">
              {experiences.map((item, index) => {
                const meta = [
                  {
                    icon: "design",
                    tone: "blue",
                    tags: [
                      "UI/UX Design",
                      "Figma",
                      "WordPress",
                      "User Research",
                    ],
                  },
                  {
                    icon: "b.",
                    tone: "sky",
                    tags: [
                      "Testing",
                      "QA Documentation",
                      "Team Leadership",
                      "Product Quality",
                    ],
                  },
                  {
                    icon: "visual",
                    tone: "violet",
                    tags: [
                      "Product Design",
                      "UI/UX Design",
                      "Figma",
                      "Problem Solving",
                    ],
                  },
                  {
                    icon: "strategy",
                    tone: "pink",
                    tags: [
                      "UI/UX Design",
                      "Website Redesign",
                      "Figma",
                      "Leadership",
                    ],
                  },
                  {
                    icon: "design",
                    tone: "rose",
                    tags: [
                      "UI/UX Design",
                      "Website Design",
                      "Figma",
                      "Prototyping",
                    ],
                  },
                  {
                    icon: "IN",
                    tone: "navy",
                    tags: [
                      "UI/UX Design",
                      "Website Development",
                      "Figma",
                      "Event Website",
                    ],
                  },
                  {
                    icon: "wireframe",
                    tone: "green",
                    tags: [
                      "UI/UX Design",
                      "Website Design",
                      "Figma",
                      "Content Management",
                    ],
                  },
                  {
                    icon: "prototype",
                    tone: "teal",
                    tags: ["UI/UX Design", "Collaboration", "Design Thinking"],
                  },
                ][index] || {
                  icon: "prototype",
                  tone: "blue",
                  tags: ["UI/UX Design"],
                };
                const dateParts = item.date.split(" — ");

                return (
                  <div className="experience-journey-row" key={item.company}>
                    <div className="experience-date-column">
                      <strong>{dateParts[0]}</strong>
                      <span>— {dateParts[1] || ""}</span>
                      <small>{item.date}</small>
                    </div>

                    <div
                      className={`experience-node experience-node-${meta.tone}`}
                    >
                      <span>
                        {meta.icon === "IN" ? (
                          "IN"
                        ) : (
                          <SkillSymbolIcon symbol={meta.icon} size="22px" />
                        )}
                      </span>
                    </div>

                    <motion.article
                      className="experience-detail-card"
                      initial={
                        shouldReduceMotion ? false : { opacity: 0, y: 18 }
                      }
                      whileInView={
                        shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                      }
                      viewport={{ once: false, amount: 0.18 }}
                      transition={{ duration: 0.45, delay: index * 0.055 }}
                    >
                      <div className="experience-detail-main">
                        <span
                          className={`experience-date-pill pill-${meta.tone}`}
                        >
                          {item.date}
                        </span>
                        <h3>{item.company}</h3>
                        <strong className="experience-detail-role">
                          {item.role}
                        </strong>
                        <p>{item.description}</p>
                        <div className="experience-tag-list">
                          {meta.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                          ))}
                        </div>
                      </div>
                      <span className="experience-detail-index">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </motion.section>

      <motion.section
        className="section skills-section"
        id="skills"
        {...reveal}
      >
        <div className="container">
          <div className="skills-showcase-heading">
            <div>
              <span className="eyebrow">03 / Skills &amp; Tools</span>
              <h2>
                Purposeful design.
                <br />
                <span>Practical tools.</span>
              </h2>
              <p className="skills-intro">
                A combination of design skills, research methods, and practical
                tools I use to create user-centered digital products.
              </p>
            </div>
            <div className="skills-aside">
              <span className="skills-hand-note">
                Turning ideas into real experiences.
              </span>
              <p>
                My approach combines user research, structured design processes,
                and the right tools to turn ideas into practical and meaningful
                solutions.
              </p>
            </div>
          </div>

          <div className="skills-grid skills-showcase-grid">
            {skills.map((skill, index) => {
              const skillDetails = [
                {
                  icon: "design",
                  tone: "pink",
                  description:
                    "Designing user interfaces, prototypes, and design systems for digital products.",
                  tags: ["UI Design", "Prototyping", "Design System"],
                },
                {
                  icon: "wireframe",
                  tone: "blue",
                  description:
                    "Structuring ideas into clear, intuitive, and user-friendly flows.",
                  tags: ["User Flow", "Information Architecture"],
                },
                {
                  icon: "research",
                  tone: "green",
                  description:
                    "Understanding user needs through interviews, surveys, and usability testing.",
                  tags: ["Interviews", "Surveys", "Insights"],
                },
                {
                  icon: "prototype",
                  tone: "blue",
                  description:
                    "Turning concepts into interactive experiences to test ideas early.",
                  tags: ["Figma", "Interaction", "Testing"],
                },
                {
                  icon: "testing",
                  tone: "orange",
                  description:
                    "Evaluating interfaces to identify friction and improve usability.",
                  tags: ["Test Plans", "Feedback", "Iteration"],
                },
                {
                  icon: "systems",
                  tone: "purple",
                  description:
                    "Creating consistent components, patterns, and reusable guidelines.",
                  tags: ["Components", "Style Guide", "Scalability"],
                },
                {
                  icon: "visual",
                  tone: "sky",
                  description:
                    "Crafting clear layouts, typography, and visual hierarchy.",
                  tags: ["Layout", "Typography", "Color"],
                },
                {
                  icon: "strategy",
                  tone: "mint",
                  description:
                    "Connecting user needs, business goals, and design decisions.",
                  tags: ["Strategy", "Prioritization", "Problem Solving"],
                },
              ][index];

              return (
                <motion.article
                  className={`skill skill-card skill-${skillDetails.tone}`}
                  key={skill}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 18, scale: 0.98 }
                  }
                  whileInView={
                    shouldReduceMotion
                      ? undefined
                      : { opacity: 1, y: 0, scale: 1 }
                  }
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: (index % 4) * 0.07 }}
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -5, scale: 1.015 }
                  }
                >
                  <div className="skill-card-top">
                    <span className="skill-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`skill-icon skill-icon-${skillDetails.icon}`}
                    >
                      <SkillSymbolIcon symbol={skillDetails.icon} size="24px" />
                    </span>
                  </div>
                  <h3>{skill}</h3>
                  <p>{skillDetails.description}</p>
                  <div className="skill-tags">
                    {skillDetails.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="skill-arrow" aria-hidden="true">
                    <ArrowUpRightIcon size="18px" />
                  </span>
                  <span className="skill-decor" aria-hidden="true">
                    <SkillSymbolIcon symbol={skillDetails.icon} size="1em" />
                  </span>
                </motion.article>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section tech-stack-section"
        id="tech-stack"
        {...reveal}
      >
        <div className="container">
          <div className="tech-stack-heading">
            <div>
              <span className="eyebrow">04 / TECH STACK</span>
              <h2>
                Design meets <span>technology.</span>
              </h2>
              <p>
                Tools and technologies I use to shape ideas into clear, usable
                digital experiences.
              </p>
            </div>
          </div>
          <div className="tech-stack-groups">
            <div className="tech-stack-group">
              <h3 className="tech-stack-category">UI/UX Design</h3>
              <div className="tech-stack-items">
                <div className="tech-stack-item" title="Figma">
                  <span
                    className="tech-stack-mark figma-logo"
                    aria-label="Figma logo"
                  >
                    <svg viewBox="0 0 38 57" role="img" aria-hidden="true">
                      <path
                        fill="#F24E1E"
                        d="M9 0h10v19H9a9.5 9.5 0 0 1 0-19Z"
                      />
                      <path
                        fill="#FF7262"
                        d="M19 0h10a9.5 9.5 0 0 1 0 19H19Z"
                      />
                      <path
                        fill="#A259FF"
                        d="M9 19h10v19H9a9.5 9.5 0 0 1 0-19Z"
                      />
                      <circle cx="28.5" cy="28.5" r="9.5" fill="#1ABCFE" />
                      <path
                        fill="#0ACF83"
                        d="M9 38h10v9.5a9.5 9.5 0 1 1-10-9.5Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Figma</span>
                    <span className="tech-stack-desc">
                      UI design & prototyping
                    </span>
                  </span>
                </div>
                <div className="tech-stack-item" title="Miro">
                  <span
                    className="tech-stack-mark miro-logo"
                    aria-label="Miro logo"
                  >
                    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
                      <path
                        fill="#050505"
                        d="M4 5h6l4 8 4-8h6l-4 22h-5l2-11-4 7-4-7 2 11H6L4 5Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Miro</span>
                    <span className="tech-stack-desc">
                      Ideas & collaboration
                    </span>
                  </span>
                </div>
                <div className="tech-stack-item" title="Sketch">
                  <span
                    className="tech-stack-mark sketch-logo"
                    aria-label="Sketch logo"
                  >
                    <svg viewBox="0 0 32 32" role="img" aria-hidden="true">
                      <path fill="#FDB300" d="M7 4h18l6 7-15 17L1 11 7 4Z" />
                      <path fill="#EA6C00" d="M7 4 1 11h30l-6-7H7Z" />
                      <path fill="#FDD231" d="M7 4 5 11h22l-2-7H7Z" />
                      <path fill="#FEDC90" d="M1 11h30L16 28 1 11Z" />
                      <path fill="#FEEEB7" d="M5 11h22L16 28 5 11Z" />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Sketch</span>
                    <span className="tech-stack-desc">Interface design</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="tech-stack-group">
              <h3 className="tech-stack-category">Project Officer</h3>
              <div className="tech-stack-items">
                <div className="tech-stack-item" title="Microsoft Word">
                  <span
                    className="tech-stack-mark word-logo"
                    aria-label="Microsoft Word logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <path
                        fill="#185ABD"
                        d="M6 7h30a5 5 0 0 1 5 5v24a5 5 0 0 1-5 5H6a4 4 0 0 1-4-4V11a4 4 0 0 1 4-4Z"
                      />
                      <path fill="#2B7CD3" d="M14 3h25a5 5 0 0 1 5 5v32H14Z" />
                      <path
                        fill="#103F91"
                        d="M3 13h20a4 4 0 0 1 4 4v23H7a4 4 0 0 1-4-4Z"
                      />
                      <path
                        fill="#fff"
                        d="m8 17 3 15h4l3-9 3 9h4l3-15h-4l-2 10-3-10h-3l-3 10-2-10Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Microsoft Word</span>
                    <span className="tech-stack-desc">Documents & reports</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="Microsoft Excel">
                  <span
                    className="tech-stack-mark excel-logo"
                    aria-label="Microsoft Excel logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <path
                        fill="#107C41"
                        d="M6 5h32a5 5 0 0 1 5 5v28a5 5 0 0 1-5 5H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4Z"
                      />
                      <path fill="#21A366" d="M15 3h24a5 5 0 0 1 5 5v32H15Z" />
                      <path
                        fill="#185C37"
                        d="M3 13h21a4 4 0 0 1 4 4v23H7a4 4 0 0 1-4-4Z"
                      />
                      <path
                        fill="#fff"
                        d="m9 16 4 8-4 8h4l2-5 3 5h4l-5-8 4-8h-4l-2 5-2-5Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Microsoft Excel</span>
                    <span className="tech-stack-desc">Spreadsheets & data</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="Microsoft Teams">
                  <span
                    className="tech-stack-mark teams-logo"
                    aria-label="Microsoft Teams logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <circle cx="35" cy="12" r="7" fill="#7B83EB" />
                      <path
                        fill="#505AC9"
                        d="M29 21h12a3 3 0 0 1 3 3v13a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3Z"
                      />
                      <rect
                        x="5"
                        y="12"
                        width="30"
                        height="31"
                        rx="5"
                        fill="#464EB8"
                      />
                      <path fill="#fff" d="M10 19h20v5h-7v14h-6V24h-7Z" />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Microsoft Teams</span>
                    <span className="tech-stack-desc">Team collaboration</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="PowerPoint">
                  <span
                    className="tech-stack-mark powerpoint-logo"
                    aria-label="Microsoft PowerPoint logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <circle cx="27" cy="24" r="19" fill="#ED6C47" />
                      <path fill="#C43E1C" d="M27 5a19 19 0 0 1 0 38Z" />
                      <path
                        fill="#fff"
                        d="M10 12h13c7 0 11 4 11 10s-4 10-11 10h-6v7h-7Zm7 6v8h6c3 0 4-1 4-4s-1-4-4-4Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">PowerPoint</span>
                    <span className="tech-stack-desc">Presentations</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="Outlook">
                  <span
                    className="tech-stack-mark outlook-logo"
                    aria-label="Microsoft Outlook logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <path
                        fill="#0078D4"
                        d="M18 7h24a4 4 0 0 1 4 4v27a4 4 0 0 1-4 4H18Z"
                      />
                      <path fill="#28A8EA" d="M18 7h17v35H18Z" />
                      <rect
                        x="2"
                        y="12"
                        width="25"
                        height="27"
                        rx="3"
                        fill="#0A5EB7"
                      />
                      <path
                        fill="#fff"
                        d="M14.5 17c-5 0-8 3.8-8 8.5s3 8.5 8 8.5 8-3.8 8-8.5-3-8.5-8-8.5Zm0 4c2.5 0 4 1.8 4 4.5s-1.5 4.5-4 4.5-4-1.8-4-4.5 1.5-4.5 4-4.5Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Outlook</span>
                    <span className="tech-stack-desc">Email & calendar</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="Trello">
                  <span
                    className="tech-stack-mark trello-logo"
                    aria-label="Trello logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <rect
                        x="4"
                        y="4"
                        width="40"
                        height="40"
                        rx="8"
                        fill="#0C66E4"
                      />
                      <rect
                        x="11"
                        y="11"
                        width="10"
                        height="25"
                        rx="2"
                        fill="#fff"
                      />
                      <rect
                        x="27"
                        y="11"
                        width="10"
                        height="17"
                        rx="2"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Trello</span>
                    <span className="tech-stack-desc">Task management</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="tech-stack-group">
              <h3 className="tech-stack-category">Web Programming</h3>
              <div className="tech-stack-items">
                <div className="tech-stack-item" title="HTML5">
                  <span
                    className="tech-stack-mark html-mark"
                    aria-label="HTML5 logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <path fill="#E44D26" d="M6 3h36l-3.3 37L24 45 9.3 40Z" />
                      <path fill="#F16529" d="M24 6h14l-2.7 31L24 41Z" />
                      <path
                        fill="#fff"
                        d="M13 12h23l-.7 5H18l.5 5h16.3l-1.4 13L24 38l-9.5-3-.6-7h5l.3 3.2 4.8 1.5 4.8-1.5.5-4.3H14.5Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">HTML5</span>
                    <span className="tech-stack-desc">Markup language</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="CSS3">
                  <span
                    className="tech-stack-mark css-mark"
                    aria-label="CSS3 logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <path fill="#1572B6" d="M6 3h36l-3.3 37L24 45 9.3 40Z" />
                      <path fill="#33A9DC" d="M24 6h14l-2.7 31L24 41Z" />
                      <path
                        fill="#fff"
                        d="M13 12h23l-.5 5H18l.4 4h16.6l-1.5 13L24 38l-9.5-3-.6-7h5l.3 3.2 4.8 1.5 4.8-1.5.5-4.3H14.5Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">CSS3</span>
                    <span className="tech-stack-desc">Styling & layout</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="JavaScript">
                  <span
                    className="tech-stack-mark js-mark"
                    aria-label="JavaScript logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <rect width="48" height="48" rx="2" fill="#F7DF1E" />
                      <path
                        fill="#111"
                        d="M25 37c1 2 2 3 5 3 2 0 3-1 3-2 0-2-2-2-4-3-4-1-7-3-7-8 0-4 3-7 8-7 4 0 7 2 9 5l-5 3c-1-2-2-3-4-3s-2 1-2 2c0 2 2 2 4 3 4 2 7 3 7 8 0 5-4 8-9 8-5 0-8-2-10-6Zm-16 0 5-3c1 2 2 3 4 3 1 0 2-1 2-3V20h6v15c0 6-4 9-9 9-4 0-7-2-8-7Z"
                        transform="translate(0 -1) scale(.95)"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">JavaScript</span>
                    <span className="tech-stack-desc">Interactive web</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="Vue.js">
                  <span
                    className="tech-stack-mark vue-logo"
                    aria-label="Vue.js logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <path fill="#41B883" d="M3 7h10l11 19L35 7h10L24 44Z" />
                      <path fill="#35495E" d="M13 7h8l3 5 3-5h8L24 28Z" />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Vue.js</span>
                    <span className="tech-stack-desc">UI framework</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="Bootstrap">
                  <span
                    className="tech-stack-mark bootstrap-logo"
                    aria-label="Bootstrap logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <rect
                        x="2"
                        y="2"
                        width="44"
                        height="44"
                        rx="10"
                        fill="#7952B3"
                      />
                      <path
                        fill="#fff"
                        d="M16 10h11c6 0 9 3 9 7 0 3-2 5-4 6 3 1 5 3 5 7 0 5-4 8-10 8H16Zm6 5v6h5c2 0 3-1 3-3s-1-3-3-3Zm0 11v7h5c3 0 4-1 4-4 0-2-1-3-4-3Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Bootstrap</span>
                    <span className="tech-stack-desc">CSS framework</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="SQL">
                  <span
                    className="tech-stack-mark sql-logo"
                    aria-label="SQL database logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <ellipse cx="24" cy="10" rx="17" ry="6" fill="#4479A1" />
                      <path
                        fill="#4479A1"
                        d="M7 10v27c0 4 8 7 17 7s17-3 17-7V10c0 4-8 7-17 7S7 14 7 10Z"
                      />
                      <path
                        fill="none"
                        stroke="#DCEBFA"
                        strokeWidth="2"
                        d="M7 10c0 4 8 7 17 7s17-3 17-7M7 23c0 4 8 7 17 7s17-3 17-7"
                      />
                      <text
                        x="24"
                        y="25"
                        textAnchor="middle"
                        fontSize="9"
                        fontWeight="700"
                        fill="#fff"
                      >
                        SQL
                      </text>
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">SQL</span>
                    <span className="tech-stack-desc">Database queries</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="React">
                  <span
                    className="tech-stack-mark react-logo"
                    aria-label="React logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <g fill="none" stroke="#61DAFB" strokeWidth="2.2">
                        <ellipse cx="24" cy="24" rx="21" ry="8" />
                        <ellipse
                          cx="24"
                          cy="24"
                          rx="21"
                          ry="8"
                          transform="rotate(60 24 24)"
                        />
                        <ellipse
                          cx="24"
                          cy="24"
                          rx="21"
                          ry="8"
                          transform="rotate(120 24 24)"
                        />
                      </g>
                      <circle cx="24" cy="24" r="3.5" fill="#61DAFB" />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">React</span>
                    <span className="tech-stack-desc">UI library</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="Next.js">
                  <span
                    className="tech-stack-mark nextjs-logo"
                    aria-label="Next.js logo"
                  >
                    <svg viewBox="0 0 48 48" role="img" aria-hidden="true">
                      <circle cx="24" cy="24" r="22" fill="#000" />
                      <path
                        fill="#fff"
                        d="M12 34V14h4l15 14V14h5v20h-4L17 20v14Z"
                      />
                      <path fill="#888" d="m27 27 4 4 5 7h-6l-5-7Z" />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">Next.js</span>
                    <span className="tech-stack-desc">React framework</span>
                  </span>
                </div>
                <div className="tech-stack-item" title="GitHub">
                  <span
                    className="tech-stack-mark github-logo"
                    aria-label="GitHub logo"
                  >
                    <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.92.1-.72.39-1.21.7-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.06 1.15a10.6 10.6 0 0 1 5.57 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.72.78 1.15 1.78 1.15 3.01 0 4.29-2.62 5.23-5.11 5.51.4.35.75 1.03.75 2.08v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                      />
                    </svg>
                  </span>
                  <span className="tech-stack-copy">
                    <span className="tech-stack-name">GitHub</span>
                    <span className="tech-stack-desc">
                      Code hosting & collaboration
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section className="section" {...reveal}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">How I work</span>
              <h2>
                From discovery
                <br />
                to meaningful impact.
              </h2>
            </div>

            <p>
              My process begins by learning about users, then exploring
              solutions and refining design decisions with feedback.
            </p>
          </div>

          <div className="process-grid">
            <span className="process-motion-strip" aria-hidden="true" />
            {process.map(([number, title, description]) => (
              <article className="process-item" key={number}>
                <span>{number} / PROCESS</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section className="section" style={{ paddingTop: 0 }} {...reveal}>
        <div className="container">
          <div className="section-head">
            <div>
              <span className="eyebrow">More than design</span>
              <h2>
                Learning, leading,
                <br />
                and contributing.
              </h2>
            </div>

            <p>
              Experiences beyond design have helped me grow as a collaborator,
              communicator, and leader, while sharpening my problem-solving
              skills.
            </p>
          </div>

          <div className="achievement-intro-line">
            <span className="achievement-rule" />
            <span>SELECTED MILESTONES</span>
            <span className="achievement-intro-count">
              07 achievements · 2022—2025
            </span>
          </div>

          <div className="awards awards-showcase achievement-list achievement-zigzag">
            {achievements.map(
              ([icon, title, detail, category, tone], index) => (
                <motion.article
                  className={`achievement-row achievement-node ${index % 2 ? "node-right" : "node-left"}`}
                  key={`${title}-${index}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
                >
                  <span className="achievement-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="achievement-icon" aria-hidden="true">
                    <AchievementSymbolIcon name={String(icon)} />
                  </span>
                  <div className="achievement-copy">
                    <small className="achievement-category">{category}</small>
                    <strong>{title}</strong>
                    <small className="achievement-detail">{detail}</small>
                  </div>
                  <span className="achievement-arrow" aria-hidden="true">
                    <ArrowUpRightIcon size="16px" />
                  </span>
                </motion.article>
              ),
            )}
          </div>
        </div>
      </motion.section>

      <motion.footer className="contact" id="contact" {...reveal}>
        <div className="container">
          <div className="contact-layout">
            <div>
              <span className="eyebrow">Let&apos;s connect</span>
              <h2>
                Let’s work through
                <br />a meaningful challenge.
              </h2>
            </div>

            <div>
              <p>
                I welcome opportunities in UI/UX and product design, creative
                partnerships, and conversations about building digital
                experiences that make everyday tasks better for the people who
                use them.
              </p>

              <div className="contact-links">
                <a
                  className="button"
                  href="https://drive.google.com/file/d/1aIRt55e3ALeuI7HnxW61Kcuzpv4xlbfm/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my CV <ArrowUpRightIcon size="16px" />
                </a>

                <a
                  className="button"
                  href="https://drive.google.com/file/d/14ZSDU0aTU7FEIY0Rc1z0mi5g93IKZwf9/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Browse full portfolio <ArrowUpRightIcon size="16px" />
                </a>

                <a className="button" href="mailto:herukurniawan1610@gmail.com">
                  Email me <ArrowUpRightIcon size="16px" />
                </a>

                <a
                  className="button"
                  href="https://www.linkedin.com/in/herudwikurniawan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn <ArrowUpRightIcon size="16px" />
                </a>

                <a
                  className="button"
                  href="https://github.com/itssuperheru"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub <ArrowUpRightIcon size="16px" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer">
            <a className="brand" href="#home">
              heru<span>.</span>
            </a>

            <span>
              Building better digital experiences, one thoughtful step at a
              time.
            </span>

            <span>© 2026 Heru Dwi Kurniawan</span>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
