"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Platform-independent project feature icons rendered as SVG, never emoji glyphs. */
function ProjectFeatureIcon({ kind }: { kind: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    focusable: "false" as const,
  };

  if (kind === "bedenbender") {
    return (
      <svg {...common}>
        <path d="M12 8.2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z" />
        <path d="m19.4 13.5 1.1.9-1.1 1.9-1.4-.5a7.9 7.9 0 0 1-1.6.9l-.3 1.5h-2.2l-.4-1.4a7.7 7.7 0 0 1-1.8 0l-.8 1.2-1.9-1.1.5-1.4a7.9 7.9 0 0 1-.9-1.6l-1.5-.3v-2.2l1.4-.4a7.7 7.7 0 0 1 0-1.8l-1.2-.8 1.1-1.9 1.4.5a7.9 7.9 0 0 1 1.6-.9l.3-1.5h2.2l.4 1.4a7.7 7.7 0 0 1 1.8 0l.8-1.2 1.9 1.1-.5 1.4a7.9 7.9 0 0 1 .9 1.6l1.5.3v2.2l-1.4.4" />
      </svg>
    );
  }

  if (kind === "agro") {
    return (
      <svg {...common}>
        <path d="M20.5 3.5C12 3.7 6 5.8 4.5 11.1c-.9 3.2 1.2 5.8 4.5 5.3 5.4-.8 8.7-7.3 11.5-12.9Z" />
        <path d="M3.5 21c2.2-4 5.4-7.1 10.1-10.3" />
      </svg>
    );
  }

  if (kind === "startoops") {
    return (
      <svg {...common}>
        <path d="M12 2.5v19M2.5 12h19M5.3 5.3l13.4 13.4M18.7 5.3 5.3 18.7" />
      </svg>
    );
  }

  if (kind === "afeksi") {
    return (
      <svg {...common}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 1.8v3M12 19.2v3M1.8 12h3M19.2 12h3" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function ExternalArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    name: "BECATUR",
    category: "UX/UI Design",
    type: "Mobile App · UX Research",
    year: "2025",
    description:
      "A pedicab booking experience that connects passengers and local drivers, making rides easier to arrange while supporting local tourism.",
    outcome: "Customer SUS 70.66 → 82.50",
    secondaryOutcome: "Driver SUS 67.75 → 81.25",
    link: "https://www.figma.com/design/l2s3R0tbTiw2BtYgCHoJVp/Becatur?node-id=1-8&t=QQTld1nESA1crCNf-1",
    linkLabel: "Explore case study",
    kind: "becatur",
    tags: ["User research", "Mobile app", "Usability testing"],
  },
  {
    number: "02",
    name: "Afeksi Indonesia",
    category: "UX/UI Design",
    type: "Health Platform",
    year: "2023",
    description:
      "Designed user-first experiences for a digital healthcare service, with an emphasis on clear interfaces and straightforward navigation.",
    link: "https://www.figma.com/design/kK1RyKe1aKd74FInwNh8FJ/AFEKSI-WEB-FIX?node-id=4669-7448&t=xVTYrgtQ65rlo0cN-1",
    linkLabel: "Explore case study",
    kind: "afeksi",
    tags: ["Interface design", "Information architecture", "Web"],
  },
  {
    number: "03",
    name: "LOFO",
    category: "UX/UI Design",
    type: "Mobile App · Lost & Found",
    year: "2024",
    description:
      "A lost and found application that helps users report, find, and reunite lost items through a simple and intuitive experience.",
    link: "https://www.figma.com/design/pIPqUQVE54hYwSBdh5XgeF/LoFo-App?node-id=0-1&t=0XVlAzGdVkI6kJlh-1",
    linkLabel: "Explore case study",
    kind: "lofo",
    tags: ["Mobile app", "User flows", "Interface design"],
  },
  {
    number: "04",
    name: "Eco Plant Apps",
    category: "UX/UI Design",
    type: "Mobile App · Plant Monitoring",
    year: "2024",
    description:
      "A plant monitoring concept focused on tracking growth, environmental conditions, and plant care through a clear mobile experience.",
    link: "https://www.figma.com/design/0abvoPDaGAoYyuxm3Ux7Rr/Ecoplant?node-id=39-599&t=C3o8Hledk7ZHynQp-1",
    linkLabel: "Explore case study",
    kind: "eco",
    tags: ["Mobile app", "Monitoring", "UI design"],
  },
  {
    number: "05",
    name: "KuyFit Apps",
    category: "UX/UI Design",
    type: "Mobile App · Sports & Fitness",
    year: "2023",
    description:
      "A sports venue and trainer discovery application designed during a UI/UX design competition.",
    link: "https://www.figma.com/design/ptoKwfuA9aLfmc0MH5nb04/KuyFit?node-id=0-1&t=jZaFmrRQzFdhnDaL-1",
    linkLabel: "Explore case study",
    kind: "kuyfit",
    tags: ["Mobile app", "Sports", "Discovery"],
  },
  {
    number: "06",
    name: "PhinLang VR Apps",
    category: "UX/UI Design",
    type: "VR · Language Learning",
    year: "2023",
    description:
      "An immersive VR language-learning concept that helps users practise language skills in interactive environments.",
    link: "https://www.figma.com/design/CovGOChww9nJmqp4ctwp5o/Learning-Languages-Apps?node-id=123-331&t=9Pk5GlOMpS4mpaEn-1",
    linkLabel: "Explore case study",
    kind: "vr",
    tags: ["VR experience", "Learning", "Interaction design"],
  },
  {
    number: "07",
    name: "GreenAct Website",
    category: "Digital Experience",
    type: "Website · Environmental Campaigns",
    year: "2023",
    description:
      "A website concept supporting environmental campaigns with information, education, and practical programmes to help preserve nature.",
    link: "https://www.figma.com/design/JWUUrdciVz61gUfNYfKFbB/greenAct-?node-id=35418-50426&t=KFunyI4ll36P1d0H-1",
    linkLabel: "Explore case study",
    kind: "greenact",
    tags: ["Website", "Environmental", "Web design"],
  },
  {
    number: "08",
    name: "Warisan Hikayat Website",
    category: "Digital Experience",
    type: "Website · Folktale Heritage",
    year: "2023",
    description:
      "A digital platform concept to preserve and introduce Indonesian folktales and cultural heritage to a wider audience.",
    link: "https://www.figma.com/design/2J5beYffDR1mZAP8GTM1kp/Annisa-Afrilia?node-id=0-1&t=dOFJ4Q3FtmjioZMM-1",
    linkLabel: "Explore case study",
    kind: "warisan",
    tags: ["Website", "Culture", "Education"],
  },
  {
    number: "09",
    name: "Indocoor Website",
    category: "Digital Experience",
    type: "Organization Website · Corrosion Community",
    year: "2022",
    description:
      "A company-profile and community website for the Indonesian Corrosion Association, presenting its profile, activities, events, and publications.",
    link: "https://indocor-landing.vercel.app/",
    linkLabel: "Visit website",
    kind: "indocoor",
    tags: ["Website", "Organization", "Content design"],
  },
  {
    number: "10",
    name: "Lapak Kasih Apps",
    category: "UX/UI Design",
    type: "Mobile App · Donation Marketplace",
    year: "2023",
    description:
      "A donation-based secondhand marketplace concept that lets users buy or donate pre-owned items to support people in need.",
    link: "https://www.figma.com/design/V1QiaT3HM6b6k0Y7zX4sCq/LapaKasih?node-id=1070-38920&t=wI3aBjyo5hCEPxUV-1",
    linkLabel: "Explore case study",
    kind: "lapakkasih",
    tags: ["Mobile app", "Marketplace", "Social impact"],
  },
  {
    number: "11",
    name: "Magetan Apps",
    category: "Digital Experience",
    type: "Mobile App · Tourism Discovery",
    year: "2023",
    description:
      "A tourism application concept designed to promote destinations, local food, and attractions in Magetan.",
    link: "https://www.figma.com/design/TXdn1RmHXjRd9THACJawac/Magetan-Apps-2?node-id=0-1&t=PaSgS1Fv1BXg7ayU-1",
    linkLabel: "Explore case study",
    kind: "magetan",
    tags: ["Tourism", "Mobile app", "Local discovery"],
  },
  {
    number: "12",
    name: "PMD.ID Website",
    category: "Digital Experience",
    type: "Community Website · Women Empowerment",
    year: "2023",
    description:
      "A community platform for Indonesian women to share information, learn, connect through events, and access empowerment programmes.",
    link: "https://www.figma.com/design/AHVLHW0NMZWBs8Lk31GFth/Final-Design?node-id=0-1&t=oXBT4GsNqqNmf5ig-1",
    linkLabel: "Explore case study",
    kind: "pmd",
    tags: ["Website", "Community", "Empowerment"],
  },
  {
    number: "13",
    name: "SRE Website",
    category: "Digital Experience",
    type: "Organization Website · Renewable Energy",
    year: "2023",
    description:
      "A website design for SRE ITS SC, created in collaboration with the IT development staff to communicate renewable-energy initiatives and activities.",
    link: "https://www.figma.com/design/eb6scRYSKUZeT5r79e4yJA/WEBSITE-SRE-ITS-2022?node-id=0-1&t=u7GEUatHzXOD6In2-1",
    linkLabel: "Explore case study",
    kind: "sre",
    tags: ["Website", "Renewable energy", "Collaboration"],
  },
  {
    number: "14",
    name: "SuperStore Website",
    category: "Digital Experience",
    type: "Dashboard · CRM Data Management",
    year: "2023",
    description:
      "A business dashboard concept using CRM data management and real-time insights to support operational decisions and business growth.",
    link: "https://www.figma.com/design/vy1kCtnnZU1d5ttIyBR4m8/SUPERSTORE--Backup-?node-id=0-1&t=5gNJwd40RUzeotiU-1",
    linkLabel: "Explore case study",
    kind: "superstore",
    tags: ["Dashboard", "Data visualization", "CRM"],
  },
  {
    number: "15",
    name: "TiKo Apps",
    category: "UX/UI Design",
    type: "Mobile App · Concert Ticketing",
    year: "2023",
    description:
      "A mobile application concept for managing concert ticket sales and helping users discover events and purchase tickets online.",
    link: "https://www.figma.com/design/6QyQIfxkNNxBW7p70L2UxE/TiKo---Heru?node-id=206-287&t=kZSzgJdDKIvjpLWQ-1",
    linkLabel: "Explore case study",
    kind: "tiko",
    tags: ["Mobile app", "Ticketing", "Events"],
  },
  {
    number: "16",
    name: "ITS Website",
    category: "Digital Experience",
    type: "University Website · Information Portal",
    year: "2023",
    description:
      "A university website experience that presents academic information, campus news, important schedules, and international collaborations.",
    link: "https://bit.ly/PortofolioHeruu",
    linkLabel: "View portfolio",
    kind: "its",
    tags: ["Website", "Higher education", "Information design"],
  },
  {
    number: "17",
    name: "Bedenbender Mobile Automotive LLC",
    category: "Digital Experience",
    type: "Business Website · Mobile Auto Repair",
    year: "2026",
    description:
      "A business website for a mobile automotive service, highlighting convenient on-location repairs, service information, and appointment booking.",
    link: "https://bedenbender.queryflow.id/",
    linkLabel: "Visit website",
    kind: "bedenbender",
    tags: ["Website", "Automotive", "Business website"],
  },
  {
    number: "18",
    name: "PT Agro Biomass Nusantara",
    category: "Digital Experience",
    type: "Corporate Website · Biomass Energy",
    year: "2026",
    description:
      "A corporate website presenting Indonesian biomass products, premium wood pellets, product specifications, production processes, and business inquiries.",
    link: "https://agrobiomassnusantara.com/",
    linkLabel: "Visit website",
    kind: "agro",
    tags: ["Website", "Biomass", "Corporate website"],
  },
];

const filters = [
  "All projects",
  "UX/UI Design",
  "Product Design",
  "Digital Experience",
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All projects");
  const [darkMode, setDarkMode] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const [projectViews, setProjectViews] = useState<Record<string, number>>({});
  const [projectLikes, setProjectLikes] = useState<Record<string, number>>({});
  const [likedProjects, setLikedProjects] = useState<Record<string, boolean>>(
    {},
  );

  // Use the same saved theme preference as the main portfolio page.
  useEffect(() => {
    const syncTheme = () => {
      try {
        setDarkMode(localStorage.getItem("heru-portfolio-theme") === "dark");
      } catch {
        setDarkMode(false);
      }
    };

    syncTheme();
    window.addEventListener("storage", syncTheme);
    window.addEventListener("heru-portfolio-theme-change", syncTheme);
    return () => {
      window.removeEventListener("storage", syncTheme);
      window.removeEventListener("heru-portfolio-theme-change", syncTheme);
    };
  }, []);

  useEffect(() => {
    try {
      setProjectViews(
        JSON.parse(localStorage.getItem("heru-project-archive-views") || "{}"),
      );
      setProjectLikes(
        JSON.parse(localStorage.getItem("heru-project-archive-likes") || "{}"),
      );
      setLikedProjects(
        JSON.parse(localStorage.getItem("heru-project-archive-liked") || "{}"),
      );
    } catch {
      // Keep the default values if browser storage is unavailable.
    }
  }, []);

  const registerProjectView = (projectName: string) => {
    try {
      const sessionKey = `heru-project-archive-viewed-${projectName}`;
      if (sessionStorage.getItem(sessionKey)) return;
      sessionStorage.setItem(sessionKey, "1");
      setProjectViews((current) => {
        const next = {
          ...current,
          [projectName]: (current[projectName] || 0) + 1,
        };
        localStorage.setItem(
          "heru-project-archive-views",
          JSON.stringify(next),
        );
        return next;
      });
    } catch {
      // Cards remain usable if browser storage is disabled.
    }
  };

  const toggleProjectLike = (projectName: string) => {
    const wasLiked = Boolean(likedProjects[projectName]);
    const nextLiked = { ...likedProjects, [projectName]: !wasLiked };
    const nextLikes = {
      ...projectLikes,
      [projectName]: Math.max(
        0,
        (projectLikes[projectName] || 0) + (wasLiked ? -1 : 1),
      ),
    };

    setLikedProjects(nextLiked);
    setProjectLikes(nextLikes);
    try {
      localStorage.setItem(
        "heru-project-archive-liked",
        JSON.stringify(nextLiked),
      );
      localStorage.setItem(
        "heru-project-archive-likes",
        JSON.stringify(nextLikes),
      );
    } catch {
      // Keep the interactive state if browser storage is disabled.
    }
  };

  const visibleProjects = useMemo(
    () =>
      activeFilter === "All projects"
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  );

  return (
    <main className={`projects-page ${darkMode ? "dark-theme" : ""}`}>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap");

        :root {
          --projects-cream: #f7f5ef;
          --projects-paper: #fffdf8;
          --projects-navy: #183452;
          --projects-blue: #315d86;
          --projects-muted: #6f8090;
          --projects-line: #dce4e8;
        }

        * {
          box-sizing: border-box;
        }
        .projects-page {
          min-height: 100vh;
          overflow: hidden;
          background: var(--projects-cream);
          color: var(--projects-navy);
          font-family: "DM Sans", sans-serif;
        }
        .projects-shell {
          width: min(1180px, calc(100% - 64px));
          margin: 0 auto;
        }
        .projects-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 27px 0;
          border-bottom: 1px solid rgba(49, 93, 134, 0.15);
        }
        .projects-brand {
          color: var(--projects-navy);
          text-decoration: none;
          font:
            700 13px "Space Grotesk",
            sans-serif;
          letter-spacing: 0.08em;
        }
        .projects-back {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 46px;
          padding: 0 20px;
          border: 1px solid #2458ff;
          border-radius: 12px;
          background: #2458ff;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          text-decoration: none;
          box-shadow: 0 8px 18px rgba(36, 88, 255, 0.16);
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            transform 0.2s ease;
        }
        .projects-back:hover {
          border-color: #1746e8;
          background: #1746e8;
          color: #ffffff;
          box-shadow: 0 11px 22px rgba(36, 88, 255, 0.24);
          transform: translateY(-2px);
        }
        .projects-back:focus-visible {
          outline: 3px solid rgba(36, 88, 255, 0.35);
          outline-offset: 4px;
        }
        .projects-back span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          transition: transform 0.2s ease;
        }
        .projects-back:hover span {
          transform: translateX(-3px);
        }
        .projects-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(260px, 0.75fr);
          gap: 50px;
          align-items: end;
          padding: 72px 0 38px;
        }
        .projects-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          color: #2458ff;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }
        .projects-eyebrow::before {
          content: "";
          width: 25px;
          height: 2px;
          background: #2458ff;
        }
        .projects-hero h1 {
          max-width: 720px;
          margin: 0;
          color: #183452;
          font:
            700 clamp(48px, 7vw, 84px)/0.98 "Space Grotesk",
            sans-serif;
          letter-spacing: -0.075em;
        }
        .projects-hero h1 em {
          color: #64839d;
          font-style: normal;
        }
        .projects-hero-copy {
          max-width: 360px;
          padding-bottom: 7px;
          color: #65798b;
          font-size: 14px;
          line-height: 1.9;
        }
        .projects-hero-copy p {
          margin: 0 0 18px;
        }
        .projects-count {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #8393a0;
          font-size: 11px;
          letter-spacing: 0.04em;
        }
        .projects-count strong {
          color: var(--projects-blue);
          font:
            700 24px "Space Grotesk",
            sans-serif;
        }
        .projects-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 23px 0 19px;
          border-top: 1px solid var(--projects-line);
        }
        .projects-controls-label {
          color: #81909c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .projects-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .projects-filter {
          border: 1px solid #dce4e8;
          border-radius: 999px;
          padding: 10px 14px;
          background: transparent;
          color: #617689;
          cursor: pointer;
          font:
            600 11px "DM Sans",
            sans-serif;
          transition:
            color 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease;
        }
        .projects-filter:hover,
        .projects-filter.active {
          border-color: var(--projects-navy);
          background: var(--projects-navy);
          color: #fffdf8;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          max-width: 1040px;
          margin: 0 auto;
          padding: 8px 0 80px;
        }
        .project-entry {
          position: relative;
          min-width: 0;
          overflow: hidden;
          border: 1px solid #e0e4df;
          border-radius: 28px 7px 28px 7px;
          background: var(--projects-paper);
          box-shadow: 0 14px 36px rgba(31, 55, 76, 0.045);
          transition:
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }
        .project-entry:nth-child(even) {
          margin-top: 0;
          border-radius: 28px 7px 28px 7px;
        }
        .project-entry:hover {
          border-color: #b9ccd9;
          box-shadow: 0 20px 45px rgba(31, 55, 76, 0.09);
        }
        .project-art {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 270px;
          overflow: hidden;
          background: #e7f0f7;
        }
        .project-entry:nth-child(2) .project-art {
          background: #e9eee8;
        }
        .project-entry:nth-child(3) .project-art {
          background: #e8edf3;
        }
        .project-entry:nth-child(4) .project-art {
          background: #e7eef0;
        }
        .project-art-becatur,
        .project-art-afeksi,
        .project-art-lofo,
        .project-art-image {
          position: relative;
          width: 100%;
          min-height: 0;
          aspect-ratio: 2 / 1;
          padding: 0;
          background: #e7f0f7;
          overflow: hidden;
        }
        .project-art-becatur::before,
        .project-art-becatur::after,
        .project-art-afeksi::before,
        .project-art-afeksi::after,
        .project-art-lofo::before,
        .project-art-lofo::after,
        .project-art-image::before,
        .project-art-image::after {
          display: none;
        }
        .project-cover {
          object-fit: cover;
          object-position: center;
          padding: 0;
        }
        .project-cover-lofo {
          object-fit: cover;
          object-position: center;
          padding: 0;
          background: transparent;
        }
        .project-art::before,
        .project-art::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(49, 93, 134, 0.15);
          border-radius: 50%;
        }
        .project-art::before {
          width: 300px;
          height: 300px;
        }
        .project-art::after {
          width: 230px;
          height: 230px;
        }
        .art-window {
          position: relative;
          z-index: 1;
          width: 72%;
          min-height: 175px;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 16px;
          background: rgba(255, 253, 248, 0.88);
          box-shadow: 0 18px 38px rgba(31, 55, 76, 0.12);
          transform: rotate(-3deg);
        }
        .project-entry:nth-child(even) .art-window {
          transform: rotate(3deg);
        }
        .art-window-head {
          display: flex;
          align-items: center;
          gap: 5px;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e9ed;
        }
        .art-window-head i {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #91aec4;
        }
        .art-window-head span {
          margin-left: 7px;
          color: #7791a5;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.16em;
        }
        .art-content {
          display: grid;
          grid-template-columns: 55px 1fr;
          gap: 12px;
          padding-top: 13px;
        }
        .art-sidebar {
          display: grid;
          gap: 7px;
          align-content: start;
        }
        .art-sidebar i {
          display: block;
          height: 7px;
          border-radius: 8px;
          background: #dbe7ee;
        }
        .art-sidebar i:first-child {
          width: 80%;
          background: #6c9bd2;
        }
        .art-main {
          display: grid;
          gap: 9px;
          align-content: start;
        }
        .art-title-line {
          width: 64%;
          height: 10px;
          border-radius: 8px;
          background: #294d70;
        }
        .art-wide-line {
          width: 91%;
          height: 6px;
          border-radius: 8px;
          background: #d5e2eb;
        }
        .art-feature {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 3px;
          padding: 13px;
          border-radius: 10px;
          background: linear-gradient(110deg, #dcecf9, #d8f0e9);
        }
        .art-feature-mark {
          display: grid;
          place-items: center;
          flex: 0 0 42px;
          height: 42px;
          border-radius: 50%;
          background: #4d91e8;
          color: white;
          font-size: 19px;
        }
        .art-feature-lines {
          display: grid;
          gap: 7px;
          flex: 1;
        }
        .art-feature-lines i {
          display: block;
          height: 5px;
          border-radius: 6px;
          background: #80b2dc;
        }
        .art-feature-lines i:last-child {
          width: 70%;
          background: #b5d3e6;
        }
        .project-info {
          padding: 25px 27px 27px;
        }
        .project-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 11px;
          color: #315d86;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }
        .project-meta span:last-child {
          color: #94a0a6;
          letter-spacing: 0.08em;
        }
        .project-info h2 {
          margin: 0 0 10px;
          color: var(--projects-navy);
          font:
            700 27px/1.15 "Space Grotesk",
            sans-serif;
          letter-spacing: -0.05em;
        }
        .project-type {
          margin: 0 0 12px;
          color: #7d8c98;
          font-size: 11px;
        }
        .project-description {
          max-width: 510px;
          margin: 0;
          color: #617487;
          font-size: 13px;
          line-height: 1.8;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 18px;
        }
        .project-tags span {
          padding: 7px 10px;
          border: 1px solid #dce5e9;
          border-radius: 999px;
          color: #607b91;
          font-size: 9px;
          font-weight: 600;
        }
        .project-outcome {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 17px;
        }
        .project-outcome span {
          padding: 8px 10px;
          border-radius: 8px;
          background: #e8f0f4;
          color: #315d86;
          font-size: 10px;
          font-weight: 700;
        }
        .project-engagement {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 18px;
          color: #71869a;
          font-size: 11px;
          font-weight: 700;
        }
        .project-engagement-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: inherit;
          line-height: 1;
        }
        .project-like-button {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 0;
          border: 0;
          background: transparent;
          color: #71869a;
          cursor: pointer;
          font: inherit;
          line-height: 1;
          transition:
            color 0.2s ease,
            transform 0.2s ease;
        }
        .project-like-button:hover {
          color: #e25570;
          transform: translateY(-1px);
        }
        .project-like-button.liked {
          color: #e25570;
        }
        .project-like-button:focus-visible {
          outline: 2px solid #2458ff;
          outline-offset: 4px;
          border-radius: 4px;
        }
        .project-like-button svg,
        .project-engagement-item svg {
          width: 15px;
          height: 15px;
          flex: 0 0 15px;
        }
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 22px;
          color: #2458ff;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
        }
        .project-link span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: transform 0.2s ease;
        }
        .project-link:hover span {
          transform: translate(3px, -3px);
        }
        .projects-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 0 35px;
          border-top: 1px solid var(--projects-line);
          color: #81909c;
          font-size: 11px;
        }
        .projects-footer a {
          color: var(--projects-blue);
          font-weight: 700;
          text-decoration: none;
        }
        @media (max-width: 800px) {
          .projects-shell {
            width: min(100% - 36px, 650px);
          }
          .projects-hero {
            grid-template-columns: 1fr;
            gap: 22px;
            padding-top: 52px;
          }
          .projects-hero-copy {
            max-width: 540px;
          }
          .projects-controls {
            align-items: flex-start;
            flex-direction: column;
          }
          .projects-grid {
            gap: 17px;
            max-width: 100%;
          }
          .project-art {
            min-height: 220px;
          }
          .project-info {
            padding: 21px;
          }
          .project-info h2 {
            font-size: 23px;
          }
        }
        @media (max-width: 580px) {
          .projects-shell {
            width: calc(100% - 30px);
          }
          .projects-nav {
            padding: 20px 0;
            gap: 12px;
          }
          .projects-back {
            min-height: 42px;
            padding: 0 13px;
            border-radius: 10px;
            font-size: 11px;
            white-space: nowrap;
          }
          .projects-hero {
            padding: 42px 0 28px;
          }
          .projects-hero h1 {
            font-size: clamp(45px, 13vw, 64px);
          }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 18px;
            padding-bottom: 50px;
          }
          .project-entry:nth-child(even) {
            margin-top: 0;
          }
          .project-art {
            min-height: 235px;
          }
          .project-art-becatur,
          .project-art-afeksi,
          .project-art-lofo,
          .project-art-image {
            min-height: 0;
            aspect-ratio: 2 / 1;
          }
          .project-info {
            padding: 22px;
          }
          .projects-footer {
            align-items: flex-start;
            flex-direction: column;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .project-entry,
          .project-link span,
          .projects-filter {
            transition: none !important;
          }
        }

        /* Keep Project Archive in sync with the theme selected on the home page. */
        .projects-page.dark-theme {
          --projects-cream: #0b1220;
          --projects-paper: #172438;
          --projects-navy: #edf4ff;
          --projects-blue: #93c5fd;
          --projects-muted: #bac9dc;
          --projects-line: #2d4058;
          background: #0b1220;
          color: #edf4ff;
          color-scheme: dark;
        }
        .projects-page.dark-theme .projects-nav {
          border-color: #2d4058;
        }
        .projects-page.dark-theme .projects-brand,
        .projects-page.dark-theme .projects-hero h1 {
          color: #edf4ff;
        }
        .projects-page.dark-theme .projects-hero h1 em {
          color: #93c5fd;
        }
        .projects-page.dark-theme .projects-hero-copy,
        .projects-page.dark-theme .projects-count,
        .projects-page.dark-theme .projects-controls-label {
          color: #b7c6d9;
        }
        .projects-page.dark-theme .projects-filter {
          border-color: #3b506b;
          color: #d6e3f4;
          background: #111d30;
        }
        .projects-page.dark-theme .projects-filter:hover,
        .projects-page.dark-theme .projects-filter.active {
          border-color: #3b82f6;
          background: #2563eb;
          color: #ffffff;
        }
        .projects-page.dark-theme .project-entry {
          border-color: #2d4058;
          background: #172438;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.16);
        }
        .projects-page.dark-theme .project-entry:hover {
          border-color: #52739a;
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
        }
        .projects-page.dark-theme .project-info,
        .projects-page.dark-theme .project-info h2,
        .projects-page.dark-theme .project-info h3,
        .projects-page.dark-theme .project-name,
        .projects-page.dark-theme .project-description {
          color: #edf4ff;
        }
        .projects-page.dark-theme .project-type,
        .projects-page.dark-theme .project-meta,
        .projects-page.dark-theme .project-engagement,
        .projects-page.dark-theme .project-engagement-item {
          color: #b7c6d9;
        }
        .projects-page.dark-theme .project-tags span {
          border-color: #3b506b;
          background: #20334c;
          color: #d5e5f8;
        }
        .projects-page.dark-theme .project-outcome {
          border-color: #385472;
          background: #1b3048;
          color: #dbeafe;
        }
        .projects-page.dark-theme .project-link {
          color: #93c5fd;
        }
        .projects-page.dark-theme .projects-footer {
          border-color: #2d4058;
          color: #aebfd3;
        }
        .projects-page.dark-theme .art-window {
          border-color: #405570;
          background: rgba(18, 31, 49, 0.94);
        }
        .projects-page.dark-theme .art-window-head {
          border-color: #354a63;
        }
        .projects-page.dark-theme .art-window-head span,
        .projects-page.dark-theme .art-content,
        .projects-page.dark-theme .art-sidebar {
          color: #dbeafe;
        }
        .projects-page.dark-theme .projects-back {
          border-color: #3b82f6;
          background: #2563eb;
          color: #ffffff;
        }
        .projects-page.dark-theme .projects-back:hover {
          border-color: #60a5fa;
          background: #1d4ed8;
          color: #ffffff;
        }
      `}</style>

      <div className="projects-shell">
        <nav className="projects-nav" aria-label="Main navigation">
          <Link href="/" className="projects-brand">
            HERU DWI KURNIAWAN<span aria-hidden="true">.</span>
          </Link>
          <Link href="/" className="projects-back">
            <span aria-hidden="true">
              <ArrowLeftIcon />
            </span>{" "}
            Back to portfolio
          </Link>
        </nav>

        <header className="projects-hero">
          <div>
            <span className="projects-eyebrow">Project archive</span>
            <h1>
              Selected work.
              <br />
              <em>Thoughtful by design.</em>
            </h1>
          </div>
          <div className="projects-hero-copy">
            <p>
              A closer look at the products, experiences, and design challenges
              I’ve worked on — grounded in user needs, clear thinking, and
              measurable outcomes.
            </p>
            <div className="projects-count">
              <strong>0{visibleProjects.length}</strong>
              <span>PROJECTS SHOWN / 2022—2026</span>
            </div>
          </div>
        </header>

        <section aria-label="Project filters">
          <div className="projects-controls">
            <span className="projects-controls-label">
              Browse by discipline
            </span>
            <div className="projects-filters">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`projects-filter ${activeFilter === filter ? "active" : ""}`}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-grid" aria-label="Selected projects">
          {visibleProjects.map((project, index) => (
            <motion.article
              className="project-entry"
              key={project.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.12 }}
              onViewportEnter={() => registerProjectView(project.name)}
              transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
            >
              <div
                className={`project-art ${["becatur", "afeksi", "lofo", "eco", "kuyfit", "vr", "greenact", "warisan", "indocoor", "lapakkasih", "magetan", "pmd", "sre", "superstore", "tiko", "its", "bedenbender", "agro"].includes(project.kind) ? "project-art-image" : ""}`}
              >
                {[
                  "becatur",
                  "afeksi",
                  "lofo",
                  "eco",
                  "kuyfit",
                  "vr",
                  "greenact",
                  "warisan",
                  "indocoor",
                  "lapakkasih",
                  "magetan",
                  "pmd",
                  "sre",
                  "superstore",
                  "tiko",
                  "its",
                  "bedenbender",
                  "agro",
                ].includes(project.kind) ? (
                  <Image
                    src={
                      {
                        becatur: "/Becatur.png",
                        afeksi: "/Afeksi.png",
                        lofo: "/Lofo.png",
                        eco: "/eco.png",
                        kuyfit: "/kuyfit.png",
                        vr: "/vr.png",
                        greenact: "/greenact.png",
                        warisan: "/warisan.png",
                        indocoor: "/indocoor.png",
                        lapakkasih: "/lapakkasih.png",
                        magetan: "/magetan.png",
                        pmd: "/pmd.png",
                        sre: "/sre.png",
                        superstore: "/superstore.png",
                        tiko: "/Tiko.png",
                        its: "/its.png",
                        bedenbender: "/bedenbender.png",
                        agro: "/agro.png",
                      }[project.kind]!
                    }
                    alt={`${project.name} project preview`}
                    fill
                    sizes="(max-width: 580px) 100vw, (max-width: 800px) 50vw, 580px"
                    className="project-cover"
                    priority={project.kind === "becatur"}
                  />
                ) : (
                  <div className="art-window" aria-hidden="true">
                    <div className="art-window-head">
                      <i />
                      <i />
                      <i />
                      <span>
                        {project.kind === "bedenbender"
                          ? "BEDENBENDER / MOBILE AUTO REPAIR"
                          : project.kind === "agro"
                            ? "AGRO BIOMASS NUSANTARA / RENEWABLE ENERGY"
                            : project.kind === "startoops"
                              ? "STARTOOPS / WORKSPACE"
                              : project.kind === "afeksi"
                                ? "AFEKSI / CARE EXPERIENCE"
                                : "WONOMULYO / EXPLORE"}
                      </span>
                    </div>
                    <div className="art-content">
                      <div className="art-sidebar">
                        <i />
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="art-main">
                        <div className="art-title-line" />
                        <div className="art-wide-line" />
                        <div className="art-feature">
                          <div className="art-feature-mark">
                            <ProjectFeatureIcon kind={project.kind} />
                          </div>
                          <div className="art-feature-lines">
                            <i />
                            <i />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>
                    {project.number} / {project.year}
                  </span>
                </div>
                <h2>{project.name}</h2>
                <p className="project-type">{project.type}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                {"outcome" in project && (
                  <div className="project-outcome">
                    <span>{project.outcome}</span>
                    <span>{project.secondaryOutcome}</span>
                  </div>
                )}
                <div
                  className="project-engagement"
                  aria-label={`${project.name} engagement`}
                >
                  <span
                    className="project-engagement-item"
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
                    <span>{projectViews[project.name] || 0} views</span>
                  </span>
                  <button
                    type="button"
                    className={`project-like-button ${likedProjects[project.name] ? "liked" : ""}`}
                    onClick={() => toggleProjectLike(project.name)}
                    aria-pressed={Boolean(likedProjects[project.name])}
                    aria-label={`${likedProjects[project.name] ? "Unlike" : "Like"} ${project.name}`}
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
                    <span>{projectLikes[project.name] || 0} likes</span>
                  </button>
                </div>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.linkLabel}{" "}
                  <span aria-hidden="true">
                    <ExternalArrowIcon />
                  </span>
                </a>
              </div>
            </motion.article>
          ))}
        </section>

        <footer className="projects-footer">
          <span>Thoughtful design, grounded in real user needs.</span>
        </footer>
      </div>
    </main>
  );
}
