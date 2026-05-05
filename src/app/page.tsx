'use client';

import Image from 'next/image';
import { useEffect, useState, type ReactNode } from 'react';
import { motion } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanya-chaudhary-65a591203/' },
  { label: 'Instagram', href: 'https://www.instagram.com/thats.so.tanyaaa?igsh=MTdnemo1M2NydWZrcA==' },
  { label: 'GitHub', href: 'https://github.com/Wittywizaard' },
  { label: 'Medium', href: 'https://medium.com/@tanyachaudhary148' },
];

const socialIcons: Record<string, ReactNode> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zm7.49 0h3.83v2.1h.05c.53-1 1.84-2.07 3.8-2.07 4.07 0 4.82 2.7 4.82 6.2V24h-4v-7.5c0-1.8 0-4.12-2.5-4.12s-2.88 1.95-2.88 3.96V24h-4V8.5z" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.584.01 4.85.07 1.17.06 1.8.25 2.22.42.55.24.94.52 1.35.94.41.41.7.8.94 1.35.17.42.36 1.03.42 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.8-.42 2.22-.24.55-.52.94-.94 1.35-.41.41-.8.7-1.35.94-.42.17-1.03.36-2.22.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.8-.25-2.22-.42a4.17 4.17 0 0 1-1.35-.94 4.17 4.17 0 0 1-.94-1.35c-.17-.42-.36-1.03-.42-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.06-1.17.25-1.8.42-2.22.24-.55.52-.94.94-1.35.41-.41.8-.7 1.35-.94.42-.17 1.03-.36 2.22-.42C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.73 0 8.33.01 7.05.07 5.75.13 4.64.33 3.7.69a6.25 6.25 0 0 0-2.26 1.47A6.25 6.25 0 0 0 .69 4.42C.33 5.36.13 6.47.07 7.77.01 9.05 0 9.45 0 12s.01 2.95.07 4.23c.06 1.3.26 2.41.62 3.35a6.25 6.25 0 0 0 1.47 2.26 6.25 6.25 0 0 0 2.26 1.47c.94.36 2.05.56 3.35.62C8.33 23.99 8.73 24 12 24s3.67-.01 4.95-.07c1.3-.06 2.41-.26 3.35-.62a6.25 6.25 0 0 0 2.26-1.47 6.25 6.25 0 0 0 1.47-2.26c.36-.94.56-2.05.62-3.35.06-1.28.07-1.68.07-4.95s-.01-3.67-.07-4.95c-.06-1.3-.26-2.41-.62-3.35a6.25 6.25 0 0 0-1.47-2.26A6.25 6.25 0 0 0 20.3.69C19.36.33 18.25.13 16.95.07 15.67.01 15.27 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a3.99 3.99 0 1 1 0-7.98 3.99 3.99 0 0 1 0 7.98zm6.4-11.76a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.112.82-.262.82-.582 0-.288-.01-1.05-.016-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.806 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.525.117-3.176 0 0 1.008-.323 3.3 1.23a11.52 11.52 0 0 1 3.003-.404c1.02.005 2.045.138 3.003.404 2.292-1.553 3.298-1.23 3.298-1.23.655 1.65.243 2.872.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.62-5.48 5.92.43.372.814 1.103.814 2.222 0 1.606-.014 2.9-.014 3.293 0 .322.216.698.825.58C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  ),
  Medium: (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M22.5 5.47c0-.27-.16-.51-.41-.61l-2.22-.94-3.12 11.08 2.88 7.31h1.97L24 6.02l-1.5-.55zm-4.9 0c0-.24-.12-.46-.32-.58l-6.3-3.28C10.8.27 10.46.18 10.14.31L1.87 4.97a.72.72 0 0 0-.43.67v12.94c0 .33.2.62.5.74L7.2 20.11l5.95-9.98 3.68 9.74h1.9L17.6 5.8zM3.2 6.25l5.95-2.65V17.7L3.2 6.25z" />
    </svg>
  ),
};

const experiences = [
  {
    title: 'Business Development Associate',
    company: 'SkillEcted Pvt. Ltd.',
    period: 'Dec 2025 - Present',
    location: 'Pune, Maharashtra',
    points: [
      'Led segmented growth initiatives by analyzing customer and lead behavior across campaigns.',
      'Built MIS dashboards and funnel reporting to improve program visibility and conversion.',
      'Partnered with product, sales, and marketing teams to operationalize insights into GTM actions.',
      'Designed outreach automation and AI-supported research workflows to boost efficiency.',
      'Tracked and improved campaign performance with KPI-driven iteration and reporting.',
    ],
  },
  {
    title: 'Product Management Intern',
    company: 'Forage | Electronic Arts',
    period: 'Jul 2025 - Aug 2025',
    location: 'Remote, India',
    points: [
      'Defined product metrics and tracked performance against business objectives.',
      'Wrote user stories, scoped MVP features, and supported backlog refinement.',
      'Collaborated with UX and engineering teams to ensure delivery aligned with user needs.',
      'Performed market and user analysis to support prioritization decisions.',
    ],
  },
  {
    title: 'Project Management Intern',
    company: 'Forage | CBRE',
    period: 'Jun 2025 - Jul 2025',
    location: 'Remote, India',
    points: [
      'Built project tracking systems and dashboards to monitor timelines and risks.',
      'Improved stakeholder reporting, visibility, and team coordination.',
      'Supported sprint planning and delivery management for cross-functional teams.',
    ],
  },
  {
    title: 'Senior Training & Placement Coordinator',
    company: 'Parul University',
    period: 'Sep 2022 - Apr 2025',
    location: 'Vadodara, India',
    points: [
      'Recruited and led a cross-functional team of 30+ coordinators for placement initiatives.',
      'Delivered 50+ programs, managing stakeholder communications and execution quality.',
      'Developed tracking dashboards to improve reporting and operational efficiency.',
      'Recognized with Best Contribution in Placement (2024) for delivery success.',
    ],
  },
];

const certifications = [
  {
    title: 'Google Project Management Professional Certification',
    organization: 'Google',
    note: 'Certified in project management methodologies and tools.',
    isMainCert: true,
  },
];

const projects = [
  {
    title: 'Customer Segmentation & Growth Opportunity Analysis',
    description: 'Analyzed behavioral data to identify high-value segments, build dashboards, and recommend growth initiatives for increased conversion and retention.',
    link: 'https://tinyurl.com/yc8bfjya',
  },
  {
    title: 'Digital Wallet QA & UAT Simulation',
    description: 'Executed end-to-end QA, user stories, and UAT across payment workflows to improve product quality and release readiness.',
    link: 'https://tinyurl.com/3aumecmv',
  },
  {
    title: 'DataLens',
    description: 'Excel-to-Visualization AI Assistant (MVP) Turn spreadsheet data into charts using natural-language prompts.',
    link: 'https://github.com/Wittywizaard/DataLens-AI',
  },
];

const awards = [
  {
    title: 'Cross-Functional Leadership',
    description: 'Recruited and led a cross-functional team of coordinators, delivering structured execution across placement and training programs.',
  },
  {
    title: 'Best Contribution in Placement (2024)',
    description: 'Recognized for delivery success, operational excellence, and measurable improvements to stakeholder outcomes.',
  },
];

const skills = [
  {
    category: 'Product',
    items: ['KPIs/OKRs', 'Prioritization', 'Experimentation', 'Roadmapping', 'MIS Reporting', 'Agile Methodologies', 'Sprint Planning', 'Backlog Management', 'Cross-functional Collaboration'],
  },
  {
    category: 'AI & Data Tools',
    items: ['Figma', 'Google Analytics', 'Excel', 'Tableau', 'Power BI', 'AI Workflows', 'Prompting', 'Jira', 'Confluence'],
  },
  {
    category: 'Technical',
    items: ['Python', 'APIs (Postman)', 'A/B Thinking', 'SQL', 'Data Analysis', 'Workflow Automation'],
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = sections.map((section) => {
        const el = document.getElementById(section.id);
        return {
          id: section.id,
          offsetTop: el ? el.offsetTop : 0,
        };
      });

      const currentPosition = window.scrollY + 160;
      const current = sectionPositions
        .slice()
        .reverse()
        .find((section) => currentPosition >= section.offsetTop);

      if (current) {
        setActiveSection(current.id);
      }

      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-primary transition-colors duration-500">
      <div className="progress-container fixed inset-x-0 top-0 z-50 h-1 bg-white/5">
        <div className="progress-bar h-full rounded-full bg-gradient-to-r from-sky-400 to-violet-500" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl transition-colors duration-500">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-sky-500/30 via-violet-500/30 to-pink-500/30 shadow-lg shadow-black/30 backdrop-blur-sm">
              <span className="text-sm font-bold bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse" style={{ fontFamily: 'cursive', fontStyle: 'italic', textShadow: '0 0 10px rgba(168, 85, 247, 0.4)' }}>TC</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Tanya Chaudhary</p>
              <p className="text-sm text-slate-200">Product Manager</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium uppercase tracking-[0.2em] transition ${
                  activeSection === section.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/20 hover:bg-white/10 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span className="text-lg">{isMenuOpen ? '✕' : '☰'}</span>
            </button>
          </div> 
        </div>

        {isMenuOpen ? (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left text-sm uppercase tracking-[0.2em] text-slate-300 transition hover:text-white"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main className="relative overflow-hidden">
        <div className="floating-ball absolute right-[-8rem] top-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="floating-ball absolute left-[-8rem] bottom-16 h-72 w-72 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="floating-ball absolute left-1/2 top-1/3 h-96 w-96 rounded-full bg-pink-500/5 blur-3xl" />
        <div className="floating-ball absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-blue-500/8 blur-3xl" />

        <section id="hero" className="relative min-h-[90vh] overflow-hidden px-4 pt-16 pb-24 sm:px-6 lg:px-8">
          <div className="floating-ball absolute -left-20 top-14 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="floating-ball absolute right-10 top-10 h-44 w-44 rounded-full bg-violet-500/20 blur-2xl" />
          <div className="floating-ball absolute inset-x-0 bottom-0 h-[28rem] bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

          <div className="mx-auto flex max-w-6xl flex-col items-center text-center gap-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <p className="mb-4 text-sm uppercase tracking-[0.6em] text-slate-500">Hello, I&apos;m</p>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                Tanya <span className="bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">Chaudhary</span>
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-xl font-medium text-slate-300 sm:text-2xl">
                Product Management | Product Strategy | Data & User Analytics.
              </p>
              <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                I help teams launch product experiences with strong growth dynamics, operational visibility, and data-informed execution.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="rounded-full bg-sky-500 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  Get In Touch
                </button>
                <a
                  href="https://drive.google.com/uc?export=download&id=1wckar8nDUPaI1qvSTCNt169j5Q81vk3e"
                  download
                  className="rounded-full border border-white/15 bg-white/5 px-8 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  Download Resume
                </a>
              </div>
              <div className="mt-8 flex justify-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                    aria-label={link.label}
                  >
                    {socialIcons[link.label]}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="relative border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.35em] text-slate-500">About</p>
                <h2 className="text-3xl font-semibold text-white">Computer Science graduate and Growth-focused Product Manager.</h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
                  I have experience in product strategy, analytics, and cross-functional execution. Proven ability to translate user behavior into data-driven decisions, define KPIs, and improve conversion and engagement. Experienced in Agile environments with hands-on exposure to sprint planning, backlog refinement, and cross-team coordination. Strong in leveraging AI tools, analytics, and experimentation to drive product outcomes.
                </p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <Image
                  src="https://drive.google.com/uc?export=view&id=1YwcbGGaCxXPQ_AWkpWYX30Uc4miCZHzj"
                  alt="Tanya Chaudhary"
                  width={720}
                  height={900}
                  className="h-full w-full rounded-[1.75rem] object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white">Experience</motion.h2>
            <div className="mt-12 space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] hover:shadow-[0_40px_100px_rgba(56,189,248,0.15)] transition-all duration-300 hover:border-sky-400/30"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xl font-semibold text-white">{exp.title}</p>
                      <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{exp.company}</p>
                    </div>
                    <p className="text-sm text-slate-400">{exp.period} · {exp.location}</p>
                  </div>
                  <ul className="mt-6 space-y-3 text-slate-300">
                    {exp.points.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-sm leading-7">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="techstack" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white">Tech Stack</motion.h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] hover:shadow-[0_40px_100px_rgba(139,92,246,0.15)] transition-shadow duration-300"
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{skill.category}</p>
                  <ul className="mt-6 space-y-3 text-slate-300 text-sm leading-7">
                    {skill.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white">Achievements</motion.h2>
            <div className="mt-10 flex flex-col gap-6 xl:flex-row xl:items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="min-w-[20rem] rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">PMP Certification</p>
                <div className="mt-6 space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.title}>
                      <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                      <p className="mt-2 text-base text-slate-300 leading-7">{cert.note}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="mt-10 rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Awards</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {awards.map((award) => (
                  <motion.div
                    key={award.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6"
                  >
                    <h3 className="text-lg font-semibold text-white">{award.title}</h3>
                    <p className="mt-3 text-slate-300 leading-7">{award.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white">Projects</motion.h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  transition={{ delay: index * 0.1 }}
                  className="group block rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/30 hover:bg-slate-900 hover:shadow-[0_40px_100px_rgba(56,189,248,0.2)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Project</p>
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-slate-300 transition group-hover:bg-sky-400 group-hover:text-slate-950">
                      →
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white">Education</motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-10 rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Bachelor of Technology</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Computer Science Engineering with Specialization in Cybersecurity & Digital Forensics</h3>
              <p className="mt-3 text-sm text-slate-400">Parul University | Oct 2021 - Dec 2025</p>
              <p className="mt-6 max-w-3xl text-slate-300 leading-7">
                Completed a rigorous program focused on networking, cybersecurity, and software development, combined with practical internships and outcomes-driven product experience.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/5 px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl font-semibold text-white">Contact</motion.h2>
            <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Reach out</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">Let’s build something with impact.</h3>
                <div className="mt-8 space-y-4 text-slate-300">
                  <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/80 text-sky-400">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                        <path d="M2 4.5A2.5 2.5 0 0 1 4.5 2h15A2.5 2.5 0 0 1 22 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 19.5v-15zm2.24.75L12 11.02l7.76-5.77H4.24zm15.51 1.65L14.5 11.77l5.25 3.91V6.9zM20 18.55V13.5l-5.12-3.8L20 6.3v12.25zM12 12.98 5.12 8.5 4 19.5h16l-3.12-7.02L12 12.98z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Email</p>
                      <p className="mt-2 text-base">tanyachaudhary148@gmail.com</p>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/80 text-sky-400">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                        <path d="M12 2.5C8.14 2.5 5 5.64 5 9.5c0 5.25 7 12 7 12s7-6.75 7-12c0-3.86-3.14-7-7-7zm0 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Location</p>
                      <p className="mt-2 text-base">Pune, Maharashtra</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500 mb-4">Follow Me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
                        aria-label={link.label}
                      >
                        {socialIcons[link.label]}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                  <div className="relative">
                    <input id="name" name="name" type="text" required placeholder=" " className="peer h-14 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50" />
                    <label htmlFor="name" className="pointer-events-none absolute left-5 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-300 peer-valid:top-2 peer-valid:text-xs">Name</label>
                  </div>
                  <div className="relative">
                    <input id="email" name="email" type="email" required placeholder=" " className="peer h-14 w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 text-sm text-slate-100 outline-none transition focus:border-sky-400/50" />
                    <label htmlFor="email" className="pointer-events-none absolute left-5 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-300 peer-valid:top-2 peer-valid:text-xs">Email</label>
                  </div>
                  <div className="relative">
                    <textarea id="message" name="message" required placeholder=" " rows={5} className="peer w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-sm text-slate-100 outline-none transition focus:border-sky-400/50" />
                    <label htmlFor="message" className="pointer-events-none absolute left-5 top-4 text-sm text-slate-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-300 peer-valid:top-2 peer-valid:text-xs">Message</label>
                  </div>
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-300">Send message</button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
