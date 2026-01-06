"use client";

import {
  ArrowUpRight,
  Github,
  Instagram,
  NotebookPen,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const projects = [
  {
    name: "kambit",
    description:
      "A premier fintech platform for instant crypto trading in Nigeria. I built an interface for buying and selling BTC, USDT, and other assets, focusing on real-time market rates and seamless Naira settlements.",
    url: "https://kambit.vercel.app",
  },
  {
    name: "marginplus",
    description:
      "A digital investment platform connecting users with agribusiness opportunities across Africa. I focused on building clear, performant interfaces for tracking investments, returns, and investment cycles.",
    url: "https://marginplusgroup.com",
  },
  {
    name: "corium.ai",
    description:
      "An AI-powered skincare platform that generates personalized routines based on user input and skin data. I designed and built the frontend experience, prioritizing clarity, trust, and ease of use.",
    url: "https://corium-ai.vercel.app",
  },
  {
    name: "atelier",
    description:
      "A minimalist e-commerce experience for curated furniture and home objects. I built a clean product browsing and checkout flow with a strong focus on visual hierarchy and usability.",
    url: "https://atelier-store-tau.vercel.app/",
  },
];

const experience = [
  {
    year: "2025–Now",
    company: "Frontend Developer at MarginPlus",
    description:
      " Building and maintaining user-friendly web interfaces for an agribusiness investment platform, focusing on performance and scalability.",
  },
  {
    year: "2023–2024",
    company: "Freelance Frontend Developer",
    description:
      "Designed and built responsive, production-ready web interfaces for startups and individuals using modern frontend technologies.",
  },
  {
    year: "2021–2022",
    company:
      "Frontend Developer at SOAIR (School of Artificial Intelligence and Research)",
    description:
      "Studied web development fundamentals and later joined as a Frontend Developer, contributing to internal and student-facing platforms.",
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/khaleelalhaji/",
    icon: <Instagram size={15} />,
    preview: "/instagram.png",
  },
  {
    name: "Github",
    href: "https://github.com/khaleelibraheem",
    icon: <Github size={15} />,
    preview: "/github.png",
  },
  {
    name: "X",
    href: "https://x.com/khaleelalhaji",
    icon: <Twitter size={15} />,
    preview: "/twitter.png",
  },
];

export default function LandingPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.main
      className="min-h-screen"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="max-w-2xl mx-auto px-4 md:px-0 pt-20 pb-8">
        {/* Header */}
        <motion.header variants={fadeUp}>
          <h1 className="text-[35px] sm:text-5xl font-bold tracking-tight text-gray12">
            Khaleel Alhaji
          </h1>

          <p className="sm:mt-1 text-[14px] text-gray9">Frontend Engineer</p>

          <p className="mt-4 text-gray12 text-[15px] leading-relaxed">
            I design and build clean, fast, and reliable web interfaces that
            focus on clarity, usability, and real business outcomes.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-[14px] text-gray10">
              Open to remote frontend roles and freelance work.
            </p>

            <Link
              href="#contact"
              className="text-[13px] text-gray12 underline underline-offset-4 hover:opacity-70 transition w-fit"
            >
              Stay in touch
            </Link>
          </div>
        </motion.header>

        {/* About */}
        <motion.section
          className="mt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-[30px] tracking-tight font-bold text-gray12">
            About
          </h2>

          <p className="mt-5 text-gray12 text-[15px] leading-relaxed">
            I’m a frontend engineer with a strong eye for design and a deep
            appreciation for simplicity. I care less about flashy UI and more
            about how a product feels, performs, and scales over time.
          </p>

          <p className="mt-5 text-gray12 text-[15px] leading-relaxed">
            My background in computer science helps me think beyond visuals,
            focusing on performance, maintainability, and clean architecture. I
            enjoy working with startups and founders who value thoughtful design
            and solid engineering.
          </p>
        </motion.section>

        {/* Projects */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2
            className="text-[30px] tracking-tight font-bold text-gray12"
            variants={fadeUp}
          >
            Projects
          </motion.h2>

          <motion.div className="mt-7 flex flex-col gap-8" variants={stagger}>
            {projects.map((project) => (
              <motion.div
                key={project.name}
                variants={fadeUp}
                className="border-b border-[#2a2a2a] pb-8 cursor-pointer group"
              >
                <div className="flex items-center gap-1">
                  <Link href={project.url} target="_blank">
                    <h4 className="text-gray12 uppercase font-semibold text-[12px]">
                      {project.name}
                    </h4>
                  </Link>
                  <span className="hidden sm:group-hover:block transition-all">
                    <ArrowUpRight size={15} />
                  </span>
                </div>

                <p className="text-[15px] text-gray10 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Career */}
        <motion.section
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          <motion.h2
            className="text-[30px] tracking-tight font-bold text-gray12"
            variants={fadeUp}
          >
            Experience
          </motion.h2>

          <motion.div className="mt-7 flex flex-col gap-8" variants={stagger}>
            {experience.map((item) => (
              <motion.div
                key={item.company}
                variants={fadeUp}
                className="flex flex-col sm:flex-row gap-1 items-start sm:gap-5 pb-2 sm:pb-6"
              >
                <div className="sm:w-[20%]">
                  <h4 className="text-[13px] text-gray10">{item.year}</h4>
                </div>

                <div>
                  <h4 className="font-semibold text-[14px] tracking-tight text-gray12">
                    {item.company}
                  </h4>
                  <p className="text-gray10 text-[15px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          className="mt-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <h2 className="text-[30px] tracking-tight font-bold text-gray12">
            Stay in touch
          </h2>

          <div className="mt-7 flex flex-col gap-8">
            <div className="border-b border-[#2a2a2a] pb-8 flex sm:justify-between gap-2 flex-col sm:flex-row">
              <div>
                <h4 className="text-gray12 uppercase font-semibold text-[12px]">
                  Email:
                </h4>
                <p className="text-[15px] text-gray10">
                  alhajikhaleel@gmail.com
                </p>
              </div>

              <Link href="mailto:alhajikhaleel@gmail.com">
                <div className="px-3 py-2 flex items-center gap-2 rounded-lg border border-[#2a2a2a] bg-[#181818] hover:bg-[#1f1f1f] transition w-fit">
                  <NotebookPen size={15} />
                  <p className="text-gray12 text-sm">Compose</p>
                </div>
              </Link>
            </div>

            {/* Socials */}
            <div className="border-b border-[#2a2a2a] pb-8 flex sm:justify-between gap-2 flex-col sm:flex-row">
              <div>
                <h4 className="text-gray12 uppercase font-semibold text-[12px]">
                  Socials:
                </h4>
                <p className="text-[14px] text-gray10">
                  Check out my Instagram, Github, and X profiles.
                </p>
              </div>

              <div className="flex gap-6 items-center">
                {socials.map((social, index) => (
                  <div
                    key={social.name}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <AnimatePresence>
                      {hoveredIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 h-24 bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden shadow-2xl z-50 pointer-events-none"
                        >
                          <Image
                            src={social.preview}
                            alt={social.name}
                            width={160}
                            height={96}
                            priority
                            className="w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1a1a1a] border-r border-b border-[#2a2a2a] rotate-45" />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <Link
                      href={social.href}
                      target="_blank"
                      className="hover:opacity-70 transition-opacity"
                    >
                      <div className="flex items-center gap-1">
                        {social.icon}
                        <p className="text-[13px] text-gray12">{social.name}</p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <footer className="flex justify-between mt-10">
              <p className="text-gray10 text-[12px]">
                Built with Next.js & Tailwind CSS
              </p>
              <p className="text-gray10 text-[12px]">&copy; 2025</p>
            </footer>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
