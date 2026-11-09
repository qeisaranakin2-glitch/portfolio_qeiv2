import { ArrowRight, Mail, ExternalLink, MapPin, Terminal as TerminalIcon, Code2, Database, Cpu, MonitorPlay, Layers, Send, ChevronRight, Briefcase, GraduationCap, Code, CheckCircle2, Gamepad2, Volume2, VolumeX, Sparkles, RefreshCw, Trophy, Zap, Play, RotateCcw, Crosshair, GitBranch } from 'lucide-react';

export const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Arcade', 'Experience', 'Contact'];

export const PLANETS = [
  { id: 'about', name: 'PLANET 01 — ABOUT ME', sub: 'Bio & Education', color: '#547BFF', icon: GraduationCap },
  { id: 'skills', name: 'PLANET 02 — SKILLS', sub: 'Tech Ecosystem', color: '#42D9F5', icon: Cpu },
  { id: 'projects', name: 'PLANET 03 — PROJECTS', sub: 'Selected Works', color: '#9565FF', icon: Code2 },
  { id: 'experience', name: 'PLANET 04 — EXPERIENCE', sub: 'Timeline & Career', color: '#38EF7D', icon: Briefcase },
  { id: 'arcade', name: 'PLANET 05 — ARCADE', sub: 'Playable Mini Games', color: '#FF007F', icon: Gamepad2 },
];

export const SKILLS = [
  {
    category: "FRONTEND",
    icon: <MonitorPlay className="w-6 h-6 text-[#547BFF]" />,
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
    color: "from-[#547BFF]/20 to-transparent",
    borderColor: "group-hover:border-[#547BFF]/50"
  },
  {
    category: "BACKEND",
    icon: <Database className="w-6 h-6 text-[#9565FF]" />,
    tech: ["Python", "Flask", "MySQL", "RESTful APIs"],
    color: "from-[#9565FF]/20 to-transparent",
    borderColor: "group-hover:border-[#9565FF]/50"
  },
  {
    category: "AI & ML",
    icon: <Cpu className="w-6 h-6 text-[#42D9F5]" />,
    tech: ["TensorFlow", "Image Classification", "Machine Learning Fundamentals", "Data Processing"],
    color: "from-[#42D9F5]/20 to-transparent",
    borderColor: "group-hover:border-[#42D9F5]/50"
  },
  {
    category: "TOOLS & DEVOPS",
    icon: <TerminalIcon className="w-6 h-6 text-[#F4F5FA]" />,
    tech: ["Git", "GitHub", "VS Code", "Vercel", "NPM/Yarn"],
    color: "from-white/10 to-transparent",
    borderColor: "group-hover:border-white/30"
  }
];

export const PROJECTS = [
  {
    id: 1,
    title: "JASAPRO TOTAL SURVEI",
    desc: "A comprehensive company profile website engineered for high performance and visual impact.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    type: "Featured",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    gradient: "from-[#547BFF]/20 via-[#11131A] to-[#11131A]",
    accent: "#547BFF"
  },
  {
    id: 2,
    title: "ENDEMIX NUSANTARA",
    desc: "Digital presence for an agricultural & coffee business highlighting Indonesian commodities.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    type: "Commercial",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    gradient: "from-[#9565FF]/20 via-[#11131A] to-[#11131A]",
    accent: "#9565FF"
  },
  {
    id: 3,
    title: "SKIN DISEASE DETECTION",
    desc: "AI-powered image classification application capable of identifying various dermatological conditions.",
    tech: ["Python", "Flask", "TensorFlow"],
    type: "Machine Learning",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-2",
    gradient: "from-[#42D9F5]/20 via-[#11131A] to-[#11131A]",
    accent: "#42D9F5"
  },
  {
    id: 4,
    title: "FINANCE TRACKER",
    desc: "Income and expense management application with robust local state handling.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    type: "Utility",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    gradient: "from-white/10 via-[#11131A] to-[#11131A]",
    accent: "#F4F5FA"
  },
  {
    id: 5,
    title: "PERSONAL NOTES",
    desc: "Seamless, fast, and responsive React-based notes application with rich text formatting.",
    tech: ["React", "JavaScript", "CSS"],
    type: "Utility",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
    gradient: "from-[#547BFF]/10 via-[#11131A] to-[#11131A]",
    accent: "#547BFF"
  }
];

export const EXPERIENCE = [
  {
    year: "2024 - Present",
    title: "Informatics Engineering",
    company: "Universitas Gunadarma",
    desc: "Currently in Semester 7. Deepening knowledge in software engineering, artificial intelligence, and complex system architectures.",
    icon: <GraduationCap className="w-5 h-5" />,
    color: "#547BFF"
  },
  {
    year: "2024",
    title: "Practical Internship",
    company: "PT Melindo Perkasa Utama",
    desc: "Responsible for website maintenance, performance improvements, and integrating efficient GitHub workflows into the development pipeline.",
    icon: <Briefcase className="w-5 h-5" />,
    color: "#9565FF"
  }
];
