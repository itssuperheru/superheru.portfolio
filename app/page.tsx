"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const projects = [
  {
    number: "01",
    name: "BECATUR",
    type: "Mobile App · UX Research",
    description:
      "A pedicab booking experience that brings passengers and local drivers together, making rides easier to arrange while supporting tourism in the community.",
    result: "Customer SUS 70.66 → 82.50 · Driver SUS 67.75 → 81.25",
    link: "https://www.figma.com/design/l2s3R0tbTiw2BtYgCHoJVp/Becatur?node-id=1-8&t=CTuBuqnSMWLpUJWW-1",
    label: "View case study",
    tone: "cyan",
  },
  {
    number: "02",
    name: "Startoops",
    type: "Product Design · Freelance Platform",
    description:
      "Contributed to a freelance marketplace by simplifying key user journeys and making the platform more intuitive to use.",
    link: "https://bit.ly/PortofolioHeruu",
    label: "View portfolio",
    tone: "blue",
  },
  {
    number: "03",
    name: "Afeksi Indonesia",
    type: "UI/UX Design · Health Platform",
    description:
      "Designed user-first experiences for a digital healthcare service, with an emphasis on clear interfaces and straightforward navigation.",
    link: "https://bit.ly/PortofolioHeruu",
    label: "View portfolio",
    tone: "mint",
  },
  {
    number: "04",
    name: "Tourism Map Wonomulyo",
    type: "Digital Product · Tourism",
    description:
      "An interactive tourism map concept that helps visitors discover local destinations and explore places of interest with ease.",
    link: "https://bit.ly/PortofolioHeruu",
    label: "View portfolio",
    tone: "lavender",
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
    "🏆",
    "Favorite Tourism Ambassador",
    "Magetan Regency · 2025",
    "Tourism",
    "blue",
  ],
  [
    "🛡️",
    "Patriot Integritas Muda",
    "East Java · 2025",
    "Leadership & Impact",
    "green",
  ],
  [
    "💻",
    "Hackfest Finalist",
    "Universitas Ciputra · 2024",
    "Technology",
    "purple",
  ],
  [
    "🥇",
    "1st Runner-Up — User Experience Design",
    "Information Systems Competition · 2022",
    "UX Competition",
    "orange",
  ],
  [
    "🎨",
    "UI/UX Design Competition Finalist",
    "Universitas PGRI Madiun · 2023",
    "UI/UX Design",
    "pink",
  ],
  [
    "🇵🇱",
    "Student Exchange",
    "University of Łódź, Poland · 2025",
    "International Experience",
    "sky",
  ],
  [
    "🇲🇾",
    "Study Exchange",
    "Universiti Malaya, Malaysia · 2025",
    "International Experience",
    "mint",
  ],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [typedName, setTypedName] = useState("");
  const shouldReduceMotion = useReducedMotion();
  const [statsRun, setStatsRun] = useState(0);
  const [statsNumbers, setStatsNumbers] = useState({
    years: 0,
    projects: 0,
    gpa: 0,
  });

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

  useEffect(() => {
    const fullName = "Heru Dwi Kurniawan";

    if (shouldReduceMotion) {
      setTypedName(fullName);
      return;
    }

    let index = 0;
    let deleting = false;
    let pauseUntil = 0;
    setTypedName("");

    const timer = window.setInterval(() => {
      // Pause briefly when the full name is visible, then erase and type it again.
      if (!deleting && index === fullName.length) {
        if (pauseUntil === 0) {
          pauseUntil = Date.now() + 900;
          return;
        }
        if (Date.now() < pauseUntil) return;
        deleting = true;
        pauseUntil = 0;
      }

      if (deleting && index === 0) {
        deleting = false;
      }

      index += deleting ? -1 : 1;
      setTypedName(fullName.slice(0, index));
    }, 95);

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
    <main className="portfolio" id="home">
      <style jsx global>{`
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
          background-image: radial-gradient(#1515150b 0.7px, transparent 0.7px);
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
          animation: highlight-phrase-sweep 3.6s cubic-bezier(0.45, 0, 0.25, 1)
            0.25s infinite;
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

          .topbar > .button {
            display: none;
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
            left: 2%;
            padding: 10px;
            font-size: 11px;
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
            radial-gradient(circle at 65% 35%, #0e9d7b 0 3px, transparent 4px),
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
        .about-visual-mark {
          color: #21a6a1;
          font-size: 34px;
          line-height: 1;
          display: inline-block;
          transform-origin: center;
          animation:
            about-mark-float 2.8s ease-in-out infinite,
            about-mark-spin 8s linear infinite;
        }
        .about-visual-title {
          max-width: 290px;
          margin: 34px 0 26px;
          color: #173654;
          font:
            700 clamp(29px, 3vw, 39px)/1.04 "Space Grotesk",
            sans-serif;
          letter-spacing: -0.06em;
          animation: about-title-enter 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) both;
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
          animation: timeline-card-in 0.65s cubic-bezier(0.2, 0.8, 0.2, 1) both;
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
          background: linear-gradient(to bottom, #c5e5e1, #d6e4f5 55%, #cde8dc);
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
          background: linear-gradient(145deg, var(--skill-bg) 0%, #fffdf9 100%);
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
          border-radius: 14px;
          background: var(--skill-accent);
          color: white;
          font-size: 25px;
          box-shadow: 0 8px 18px
            color-mix(in srgb, var(--skill-accent) 24%, transparent);
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
          opacity: 0.08;
          font-size: 100px;
          line-height: 1;
          transform: rotate(-14deg);
          pointer-events: none;
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
          content: "↗";
          position: absolute;
          top: 43px;
          right: 10px;
          color: var(--process-accent, #3478e5);
          font-size: 17px;
          font-weight: 700;
          opacity: 0.7;
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
          background: linear-gradient(150deg, #fffdf8 0%, var(--award-bg) 100%);
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
      `}</style>

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
          {menuOpen ? "Close ✕" : "Menu ☰"}
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
        </nav>

        <a className="button primary" href="#contact">
          Let&apos;s connect ↗
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
          <span className="eyebrow">UI/UX Designer · Product Designer</span>

          <h1 aria-label="Hi, I'm Heru Dwi Kurniawan">
            Hi, I&apos;m <span className="hero-name">{typedName}</span>
            {!shouldReduceMotion && (
              <motion.span
                aria-hidden="true"
                className="hero-name"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                |
              </motion.span>
            )}
            <span className="hero-name" aria-hidden="true">
              {" "}
              ✳
            </span>
          </h1>

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
              Explore selected work ↗
            </a>

            <a
              className="button"
              href="https://drive.google.com/file/d/1aIRt55e3ALeuI7HnxW61Kcuzpv4xlbfm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Open my CV ↓
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
          <span className="spark spark-one">✳</span>
          <span className="spark spark-two">↗</span>
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
            <span className="headline-star">✳</span>
          </div>

          <div className="float-tag tag-one">UI/UX DESIGN</div>
          <div className="float-tag tag-two">USER RESEARCH</div>
          <div className="float-tag tag-three">INTERACTION</div>
          <div className="float-tag tag-four">VISUAL DESIGN</div>
          <div className="float-tag tag-five">Urip Iku Urup ✳</div>
          <div className="hero-note" aria-label="Decorative keyboard">
            <span>⌘</span>
            <span>F</span>
            <span>G</span>
            <span>H</span>
            <span>↗</span>
            <span>U</span>
            <span>I</span>
            <span>✳</span>
            <span>X</span>
            <span>O</span>
            <span className="keyboard-space">SPACE</span>
            <span>↵</span>
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
        <div className="container all-projects-layout">
          <div className="all-projects-copy">
            <span className="eyebrow">Selected projects</span>
            <h2>
              Thoughtful design.
              <br />
              Real-world impact.
            </h2>
            <p>
              Explore my work across product design, UX research, and digital
              experiences. Each project starts with understanding people and
              turns insights into clear, useful solutions.
            </p>
            <motion.a
              className="button primary all-projects-button"
              href="/projects"
              whileHover={
                shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              All My Projects <span aria-hidden="true">↗</span>
            </motion.a>
            <span className="all-projects-footnote">
              Case studies · Product design · UX research
            </span>
          </div>

          <div
            className="project-motion-stage"
            aria-label="Abstract animated design workspace"
          >
            <motion.div
              className="motion-orbit orbit-one"
              animate={shouldReduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="motion-orbit orbit-two"
              animate={shouldReduceMotion ? undefined : { rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="design-canvas"
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 22, rotate: 3 }
              }
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true, amount: 0.25 }}
              animate={shouldReduceMotion ? undefined : { y: [0, -9, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={
                shouldReduceMotion ? undefined : { rotate: 0, scale: 1.025 }
              }
            >
              <div className="canvas-topbar">
                <span className="canvas-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>DESIGN WORKSPACE</span>
                <span className="canvas-topbar-mark">✳</span>
              </div>
              <div className="canvas-content">
                <div className="canvas-sidebar">
                  <span className="sidebar-pill active" />
                  <span className="sidebar-pill" />
                  <span className="sidebar-pill short" />
                  <span className="sidebar-divider" />
                  <span className="sidebar-avatar" />
                  <span className="sidebar-line" />
                </div>
                <div className="canvas-main">
                  <div className="canvas-heading-line" />
                  <div className="canvas-subheading-line" />
                  <div className="canvas-hero-block">
                    <motion.div
                      className="canvas-orb"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : { scale: [1, 1.08, 1], rotate: [0, 10, 0] }
                      }
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <span>✳</span>
                    </motion.div>
                    <div className="canvas-hero-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="canvas-tile-row">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="canvas-bottomline">
                <span>USER JOURNEY</span>
                <span className="canvas-progress">
                  <i />
                </span>
                <b>01 — 04</b>
              </div>
            </motion.div>
            <motion.div
              className="motion-floating-tag floating-tag-one"
              animate={
                shouldReduceMotion ? undefined : { y: [0, -9, 0], x: [0, 3, 0] }
              }
              transition={{
                duration: 4.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="floating-icon">✳</span>
              <span>
                <b>User first</b>
                <small>Research & insights</small>
              </span>
            </motion.div>
            <motion.div
              className="motion-floating-tag floating-tag-two"
              animate={
                shouldReduceMotion ? undefined : { y: [0, 8, 0], x: [0, -3, 0] }
              }
              transition={{
                duration: 4.9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3,
              }}
            >
              <span className="floating-icon mint-icon">↗</span>
              <span>
                <b>Ideas in motion</b>
                <small>Prototype & test</small>
              </span>
            </motion.div>
            <motion.div
              className="motion-sparkle sparkle-a"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { rotate: [0, 22, 0], scale: [1, 1.14, 1] }
              }
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✳
            </motion.div>
            <motion.div
              className="motion-sparkle sparkle-b"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { y: [0, -10, 0], rotate: [0, -10, 0] }
              }
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              ✦
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
                ✳
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
                    icon: "▣",
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
                    icon: "✿",
                    tone: "violet",
                    tags: [
                      "Product Design",
                      "UI/UX Design",
                      "Figma",
                      "Problem Solving",
                    ],
                  },
                  {
                    icon: "♥",
                    tone: "pink",
                    tags: [
                      "UI/UX Design",
                      "Website Redesign",
                      "Figma",
                      "Leadership",
                    ],
                  },
                  {
                    icon: "▣",
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
                    icon: "❋",
                    tone: "green",
                    tags: [
                      "UI/UX Design",
                      "Website Design",
                      "Figma",
                      "Content Management",
                    ],
                  },
                  {
                    icon: "✳",
                    tone: "teal",
                    tags: ["UI/UX Design", "Collaboration", "Design Thinking"],
                  },
                ][index] || { icon: "✳", tone: "blue", tags: ["UI/UX Design"] };
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
                      <span>{meta.icon}</span>
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
                  icon: "◉",
                  tone: "pink",
                  description:
                    "Designing user interfaces, prototypes, and design systems for digital products.",
                  tags: ["UI Design", "Prototyping", "Design System"],
                },
                {
                  icon: "▦",
                  tone: "blue",
                  description:
                    "Structuring ideas into clear, intuitive, and user-friendly flows.",
                  tags: ["User Flow", "Information Architecture"],
                },
                {
                  icon: "⌕",
                  tone: "green",
                  description:
                    "Understanding user needs through interviews, surveys, and usability testing.",
                  tags: ["Interviews", "Surveys", "Insights"],
                },
                {
                  icon: "✳",
                  tone: "blue",
                  description:
                    "Turning concepts into interactive experiences to test ideas early.",
                  tags: ["Figma", "Interaction", "Testing"],
                },
                {
                  icon: "▤",
                  tone: "orange",
                  description:
                    "Evaluating interfaces to identify friction and improve usability.",
                  tags: ["Test Plans", "Feedback", "Iteration"],
                },
                {
                  icon: "↗",
                  tone: "purple",
                  description:
                    "Creating consistent components, patterns, and reusable guidelines.",
                  tags: ["Components", "Style Guide", "Scalability"],
                },
                {
                  icon: "✎",
                  tone: "sky",
                  description:
                    "Crafting clear layouts, typography, and visual hierarchy.",
                  tags: ["Layout", "Typography", "Color"],
                },
                {
                  icon: "◎",
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
                    <span className="skill-icon">{skillDetails.icon}</span>
                  </div>
                  <h3>{skill}</h3>
                  <p>{skillDetails.description}</p>
                  <div className="skill-tags">
                    {skillDetails.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <span className="skill-arrow" aria-hidden="true">
                    ↗
                  </span>
                  <span className="skill-decor" aria-hidden="true">
                    {skillDetails.icon}
                  </span>
                </motion.article>
              );
            })}
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
                    {icon}
                  </span>
                  <div className="achievement-copy">
                    <small className="achievement-category">{category}</small>
                    <strong>{title}</strong>
                    <small className="achievement-detail">{detail}</small>
                  </div>
                  <span className="achievement-arrow" aria-hidden="true">
                    ↗
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
                  View my CV ↗
                </a>

                <a
                  className="button"
                  href="https://drive.google.com/file/d/14ZSDU0aTU7FEIY0Rc1z0mi5g93IKZwf9/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  Browse full portfolio ↗
                </a>

                <a className="button" href="mailto:herukurniawan1610@gmail.com">
                  Email me ↗
                </a>

                <a
                  className="button"
                  href="https://www.linkedin.com/in/herudwikurniawan/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn ↗
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
