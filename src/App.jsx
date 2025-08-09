import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Linkedin,
  Database,
  Cloud,
  Server,
  BarChart3,
  Sparkles,
  Sun,
  Moon,
} from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";

// ---- Rotating Titles ---- //
const ROTATING_TITLES = [
  "Data Engineer",
  "Data Analytics Engineer",
  "Data AI Specialist",
  "Prompt Engineer",
];

// ---- Profile ---- //
const PROFILE = {
  name: "Sai Chandan Regonda",
  title: "Data Engineer",
  location: "Milwaukee, WI, USA",
  phone: "414-210-0477",
  email: "saichandanregonda21@gmail.com",
  linkedin: "https://www.linkedin.com/in/saichandanregonda/",
  summary:
    "Results-driven Data Engineer with 4+ years of experience designing and delivering scalable data solutions in cloud-native environments (AWS, Azure, Snowflake). Proven expertise in building robust ETL/ELT pipelines, automating workflows, and enabling real-time analytics for high-volume, business-critical operations.",
  highlights: [
    "Designed 15+ scalable ETL/ELT pipelines processing 8TB+ data daily",
    "Reduced pipeline latency by 40% and compute costs by 20%",
    "Implemented real-time streaming with Kafka, Event Hub, and Spark",
    "Delivered 20+ interactive dashboards enabling self-service analytics",
  ],
};

// ---- Tech ---- //
const TECH = {
  languages: ["Python", "SQL", "R", "Java", "JavaScript", "Scala", "Shell Scripting"],
  platforms: [
    "AWS (Lambda, Glue, S3, Redshift, EMR)",
    "Azure (ADF, Databricks, Synapse, Event Hub)",
    "Snowflake",
    "GCP (BigQuery)",
  ],
  frameworks: [
    "Apache Spark",
    "Apache Airflow",
    "Hadoop",
    "Apache Kafka",
    "Databricks",
    "Terraform",
    "Dagster",
    "SnapLogic",
  ],
  databases: ["Snowflake", "MySQL", "PostgreSQL", "MongoDB", "MS SQL Server"],
  visualization: ["Tableau", "Power BI", "MS Excel", "SSRS"],
  tooling: ["Git/GitHub", "Jenkins", "CI/CD", "Docker", "Azure Monitor"],
  certs: [
    "SnowPro Core Certification - Snowflake",
    "Azure Data Engineer Associate - Microsoft",
    "AWS Solutions Architect Associate",
    "AWS Academy Cloud Foundation",
    "Data Analytics Essentials - Cisco",
    "Programming Essentials in Python - Cisco",
  ],
};

// ---- Projects ---- //
const PROJECTS = [
  {
    title: "AI-Powered Data Quality Anomaly Detection",
    timeline: "Personal Project",
    badges: ["Python", "Scikit-learn", "Airflow", "Snowflake", "Azure Monitor"],
    impact:
      "Designed ML-based anomaly detection system to monitor ETL pipeline health, identifying schema drift, null spikes, and outliers in time-series data.",
    outcomes: ["40% reduction in downstream data issues", "Real-time data observability", "Proactive issue resolution"],
    link: "#",
  },
  {
    title: "Resume Screening Bot Using LLMs (GenAI)",
    timeline: "2024",
    badges: ["GPT-4", "LangChain", "FAISS", "OpenAI", "Streamlit"],
    impact:
      "Developed AI-powered resume screening bot using GPT-4 to evaluate candidate resumes against job descriptions with semantic search capabilities.",
    outcomes: ["Semantic matching with FAISS", "Interactive Streamlit frontend", "Natural language feedback"],
    link: "#",
  },
  {
    title: "Smart Bot for Handwritten Digit Recognition",
    timeline: "2022",
    badges: ["Python", "CNN", "TensorFlow", "Computer Vision"],
    impact:
      "Developed Python-based CNN model for real-time handwritten digit string recognition, improving cheque processing accuracy and security.",
    outcomes: ["25% increase in processing accuracy", "30% boost in verification efficiency", "Featured in IEEE publications"],
    link: "#",
  },
  {
    title: "Brain Tumor Detection Using CNN",
    timeline: "2022",
    badges: ["TensorFlow", "Keras", "CNN", "Medical AI"],
    impact:
      "Designed and optimized robust CNN architecture for medical image analysis with comprehensive data augmentation techniques.",
    outcomes: ["97.5% accuracy achieved", "50% improvement in dataset quality", "30% better model accuracy"],
    link: "#",
  },
];

// ---- Experience ---- //
const EXPERIENCE = [
  {
    role: "Technical Analyst",
    company: "Northwestern Mutual",
    period: "March 2025 – Present",
    bullets: [
      "Designed and deployed 15+ scalable ETL/ELT pipelines using Databricks, Apache Airflow, Python, and Azure Blobs, processing over 8 TB of data with 99.8% accuracy.",
      "Modeled and partitioned datasets in Snowflake and Azure Synapse Analytics, applying dimensional modeling to optimize read performance for analytical workloads.",
      "Automated data pipeline deployment with GitHub Actions and Jenkins, integrating unit tests and data validation scripts for robust CI/CD.",
      "Enabled data observability using Azure Monitor and custom Python scripts, reducing incident resolution time by 40%.",
      "Delivered 20+ interactive dashboards in Power BI and Tableau, enabling self-service access to KPIs and real-time insights.",
    ],
  },
  {
    role: "Data Engineer",
    company: "ENSIGN Group",
    period: "April 2024 – March 2025",
    bullets: [
      "Designed and deployed scalable ETL/ELT pipelines in Azure Data Factory and Snowflake, processing 2M+ records daily with 99.9% accuracy.",
      "Led data migration project transferring 5+ TB of critical business data from on-premises to Azure Data Lake and Snowflake with zero data loss.",
      "Optimized Snowflake performance through clustering, partitioning, and query tuning, reducing compute costs by 20% and improving execution speed by 30%.",
      "Integrated Databricks with Snowflake for scalable big data processing, reducing batch processing time by 25%.",
      "Developed real-time data streaming architecture using Azure Event Hub, Snowflake Streams, and Apache Kafka.",
    ],
  },
  {
    role: "Data & Analytical Engineer",
    company: "Dream Ambassadors",
    period: "Feb 2021 – Jul 2022",
    bullets: [
      "Collaborated with stakeholders to gather business requirements, improving data-driven decision-making and reporting efficiency by 30%.",
      "Analyzed and transformed large datasets using SQL and Python in Snowflake, contributing to 20% increase in operational efficiency.",
      "Designed and maintained 5+ real-time dashboards in Tableau and Power BI, resulting in 15% increase in operational efficiency.",
      "Performed statistical analysis and predictive modeling using SQL and Python, improving demand forecasting accuracy by 12%.",
    ],
  },
];

// ---- Education ---- //
const EDUCATION = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Wisconsin, Milwaukee",
    period: "Sep 2022 - Dec 2023",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Gokaraju Rangaraju Institute of Engineering and Technology, India",
    period: "June 2018 - May 2022",
  },
];

// ---- Theme Colors ---- //
const COLORS = {
  dark: {
    bg: "bg-gray-950",
    card: "bg-gray-900/60 backdrop-blur-md bg-opacity-70",
    stroke: "border-gray-800",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    muted: "text-gray-400",
    accent: "text-indigo-400",
    pill: "bg-gray-800 text-gray-200",
    divider: "border-b border-gray-800",
    badge: "bg-gray-800 text-gray-200",
  },
  light: {
    bg: "bg-gray-100",
    card: "bg-white/80 backdrop-blur-md bg-opacity-80",
    stroke: "border-gray-300",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    muted: "text-gray-500",
    accent: "text-indigo-600",
    pill: "bg-gray-200 text-gray-800",
    divider: "border-b border-gray-300",
    badge: "bg-gray-200 text-gray-800",
  },
};

const Section = ({ id, title, icon, children, theme }) => (
  <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="flex items-center gap-3 mb-6">
        {icon}
        <h2 className={`text-2xl sm:text-3xl font-semibold ${COLORS[theme].textPrimary}`}>{title}</h2>
      </div>
      <div
        className={`relative overflow-hidden ${COLORS[theme].card} border ${COLORS[theme].stroke} rounded-2xl p-6 shadow-2xl transition-all duration-300 backdrop-blur-xl before:absolute before:inset-0 before:bg-white/10 before:backdrop-blur-2xl before:rounded-2xl before:pointer-events-none`}
        style={{ boxShadow: theme === "dark"
          ? "0 8px 32px 0 rgba(31, 38, 135, 0.37), 0 1.5px 6px 0 rgba(0,0,0,0.18)"
          : "0 8px 32px 0 rgba(60, 100, 255, 0.10), 0 1.5px 6px 0 rgba(0,0,0,0.08)" }}
      >
        <div className="relative z-10">{children}</div>
      </div>
    </motion.div>
    <div className={`my-10 ${COLORS[theme].divider}`} />
  </section>
);

export default function Portfolio() {
  const [theme, setTheme] = useState("dark");
  const color = COLORS[theme];
  const [titleIndex, setTitleIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setTitleIndex((i) => (i + 1) % ROTATING_TITLES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <AnimatedBackground />
      <div className={`${color.bg} ${color.textPrimary} min-h-screen font-sans transition-colors duration-300`}>
        {/* Header / Nav */}
        <header
          className={`sticky top-0 z-30 border-b ${color.stroke} backdrop-blur bg-opacity-60 ${
            theme === "dark" ? "bg-gray-950/60" : "bg-white/70"
          } shadow-[0_1px_0_0_rgba(255,255,255,0.03)]`}
        >
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
            <a href="#home" className="flex items-center gap-2 font-medium">
              <Sparkles className="w-5 h-5" aria-hidden="true" />
              <span>{PROFILE.name}</span>
            </a>
            <div className="hidden sm:flex items-center gap-5 text-sm">
              <a className="hover:underline" href="#projects">Projects</a>
              <a className="hover:underline" href="#experience">Experience</a>
              <a className="hover:underline" href="#education">Education</a>
              <a className="hover:underline" href="#skills">Skills</a>
              <a className="hover:underline" href="#contact">Contact</a>
              <button
                aria-label="Toggle dark/light mode"
                className="ml-4 p-2 rounded-full border border-transparent hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-transparent transition"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-indigo-600" />}
              </button>
            </div>
          </nav>
        </header>

        {/* Hero */}
        <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className={`${color.card} border ${color.stroke} rounded-3xl p-8 md:p-12`}>
            <div className="flex flex-col md:flex-row items-center md:items-center gap-10 mb-6">
              <div className="flex-shrink-0 flex items-center justify-center w-full md:w-auto">
                <img
                  src="/sai.jpg"
                  alt="Sai Chandan Regonda profile"
                  loading="lazy"
                  className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover object-top"
                  style={{ display: 'block' }}
                />
              </div>
              <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-2">
                  Hi, I’m{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                    {PROFILE.name}
                  </span>
                </h1>
                <div className="text-xl sm:text-2xl font-semibold mb-4 h-[34px] sm:h-[40px]" aria-live="polite">
                  {(() => {
                    const rotatingColors = [
                      'text-indigo-500',
                      'text-pink-500',
                      'text-emerald-500',
                      'text-yellow-500',
                      'text-blue-500',
                      'text-purple-500',
                      'text-orange-500',
                    ];
                    const colorClass = rotatingColors[titleIndex % rotatingColors.length];
                    return (
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={titleIndex}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.35 }}
                          className={`inline-block font-bold ${colorClass}`}
                        >
                          {ROTATING_TITLES[titleIndex]}
                        </motion.span>
                      </AnimatePresence>
                    );
                  })()}
                  <span className={`ml-2 ${color.textSecondary}`}>crafting scalable data solutions</span>
                </div>
                <p className={`${color.textSecondary} text-lg max-w-3xl`}>{PROFILE.summary}</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
              {PROFILE.highlights.map((h) => (
                <li key={h} className={`flex items-start gap-2 p-3 rounded-xl ${color.pill} border ${color.stroke}`}>
                  <ArrowRight className="w-4 h-4 mt-1 shrink-0" aria-hidden="true" />
                  <span className="text-sm">{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-transparent text-gray-950 font-semibold transition"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/SAI_CHANDAN_REGONDA_Data_Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border ${color.stroke} hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-transparent transition`}
              >
                View Resume
              </a>
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <Section id="experience" title="Experience" icon={<Server className="w-6 h-6 text-indigo-400" aria-hidden="true" />} theme={theme}>
          <div className="space-y-6">
            {EXPERIENCE.map((e) => (
              <motion.div key={e.role} className={`rounded-2xl border ${color.stroke} ${color.card} p-5 shadow-lg hover:scale-[1.01] hover:shadow-2xl transition-all duration-200`} whileHover={{ scale: 1.01 }}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className={`text-lg font-semibold ${color.textPrimary}`}>{e.role} • {e.company}</h3>
                  <span className={`text-sm ${color.muted}`}>{e.period}</span>
                </div>
                <ul className={`mt-3 list-disc pl-5 ${color.textSecondary} space-y-2`}>
                  {e.bullets.map((b) => (<li key={b}>{b}</li>))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" icon={<Database className="w-6 h-6 text-indigo-400" aria-hidden="true" />} theme={theme}>
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <motion.a
                key={p.title}
                href={p.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className={`group rounded-2xl border ${color.stroke} ${color.card} p-5 shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 cursor-pointer`}
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-xl font-semibold ${color.textPrimary} group-hover:text-indigo-500 transition-colors`}>{p.title}</h3>
                  <span className={`text-xs ${color.muted}`}>{p.timeline}</span>
                </div>
                <p className={`${color.textSecondary} mb-3`}>{p.impact}</p>
                <ul className="flex flex-wrap gap-2 mb-3">
                  {p.badges.map((b) => (
                    <li key={b} className={`text-xs px-2.5 py-1 rounded-full ${color.pill} group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-200`}>
                      {b}
                    </li>
                  ))}
                </ul>
                <ul className={`flex flex-wrap gap-3 text-sm ${color.textSecondary}`}>
                  {p.outcomes.map((o) => (
                    <li key={o} className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" /> {o}
                    </li>
                  ))}
                </ul>
              </motion.a>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education" icon={<Database className="w-6 h-6 text-indigo-400" aria-hidden="true" />} theme={theme}>
          <div className="space-y-4">
            {EDUCATION.map((edu) => (
              <motion.div key={edu.degree} className={`rounded-2xl border ${color.stroke} ${color.card} p-5 shadow-lg hover:scale-[1.01] hover:shadow-2xl transition-all duration-200`} whileHover={{ scale: 1.01 }}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className={`text-lg font-semibold ${color.textPrimary}`}>{edu.degree}</h3>
                  <span className={`text-sm ${color.muted}`}>{edu.period}</span>
                </div>
                <p className={`${color.textSecondary} mt-1`}>{edu.school}</p>
              </motion.div>
            ))}
          </div>
        </Section>


        {/* Skills */}
        <Section id="skills" title="Skills & Stack" icon={<Cloud className="w-6 h-6 text-indigo-400" aria-hidden="true" />} theme={theme}>
          <div className="grid md:grid-cols-2 gap-6">
            <SkillBlock title="Programming Languages" items={TECH.languages} theme={theme} />
            <SkillBlock title="Cloud Platforms" items={TECH.platforms} theme={theme} />
            <SkillBlock title="Frameworks & Tools" items={TECH.frameworks} theme={theme} />
            <SkillBlock title="Databases" items={TECH.databases} theme={theme} />
            <SkillBlock title="Data Visualization" items={TECH.visualization} theme={theme} />
            <SkillBlock title="CI/CD & DevOps" items={TECH.tooling} theme={theme} />
          </div>

          <div className="mt-8">
            <h3 className={`text-lg font-semibold mb-4 ${color.textPrimary}`}>Certifications</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {TECH.certs.map((cert) => (
                <li key={cert} className={`flex items-center gap-2 p-3 rounded-xl ${color.card} border ${color.stroke} hover:scale-105 transition-all duration-200`}>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span className={`text-sm ${color.textSecondary}`}>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" icon={<Mail className="w-6 h-6 text-indigo-400" aria-hidden="true" />} theme={theme}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className={`${color.textSecondary}`}>
                Looking for a skilled Data Engineer? Let's discuss how I can help build scalable, reliable data platforms for your organization.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-transparent text-gray-950 font-semibold transition"
                >
                  <Mail className="w-4 h-4" /> Email Me
                </a>
                <a
                  href={PROFILE.linkedin}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${color.stroke} hover:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-transparent transition`}
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <ContactCard theme={theme} />
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} {PROFILE.name}. Built with React & Tailwind.
          </div>
        </footer>
      </div>
    </>
  );
}

function SkillBlock({ title, items, theme = "dark" }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i} className={`${COLORS[theme].pill} px-3 py-1 rounded-full text-sm hover:scale-105 hover:bg-indigo-500 hover:text-white transition-all duration-200`}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactCard({ theme = "dark" }) {
  const [formData, setFormData] = React.useState({
    name: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Opportunity: ${formData.subject}`);
    const body = encodeURIComponent(`Hi ${PROFILE.name},\n\n${formData.message}\n\n— ${formData.name} (${formData.company})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputBase =
    theme === "dark"
      ? "bg-gray-900/70 border border-gray-800 text-white placeholder-gray-400"
      : "bg-white/80 border border-gray-300 text-gray-900 placeholder-gray-500";

  return (
    <div className={`rounded-2xl border ${COLORS[theme].stroke} ${COLORS[theme].card} p-4 w-full md:w-96 shadow-lg transition-all duration-300`}>
      <form className="grid gap-3" onSubmit={handleSubmit}>
        <input aria-label="Your name" className={`w-full rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-400 transition-all duration-200 ${inputBase}`} name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required />
        <input aria-label="Company" className={`w-full rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-400 transition-all duration-200 ${inputBase}`} name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
        <input aria-label="Subject" className={`w-full rounded-xl px-3 py-2 focus:ring-2 focus:ring-indigo-400 transition-all duration-200 ${inputBase}`} name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
        <textarea aria-label="Message" className={`w-full rounded-xl px-3 py-2 min-h-[120px] focus:ring-2 focus:ring-indigo-400 transition-all duration-200 ${inputBase}`} name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
        <button type="submit" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/60 focus:ring-offset-2 focus:ring-offset-transparent text-gray-950 font-semibold transition">
          Send Email <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
