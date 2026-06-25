import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

const SkillsSection = () => {
  const skillCategories = [
    {
      label: "Programming",
      icon: "🖥️",
      color: "from-blue-500/20 to-cyan-500/10",
      border: "hover:border-cyan-400/50",
      skills: ["Python", "JavaScript", "SQL"],
    },
    {
      label: "Backend",
      icon: "⚙️",
      color: "from-violet-500/20 to-purple-500/10",
      border: "hover:border-violet-400/50",
      skills: ["FastAPI", "Django", "Flask", "REST APIs"],
    },
    {
      label: "Machine Learning",
      icon: "🤖",
      color: "from-emerald-500/20 to-teal-500/10",
      border: "hover:border-emerald-400/50",
      skills: ["Scikit-learn", "Pandas", "NumPy", "Data Preprocessing", "Model Training"],
    },
    {
      label: "Databases",
      icon: "🗄️",
      color: "from-orange-500/20 to-amber-500/10",
      border: "hover:border-orange-400/50",
      skills: ["MySQL", "SQLAlchemy ORM", "Django ORM"],
    },
    {
      label: "Web",
      icon: "🌐",
      color: "from-pink-500/20 to-rose-500/10",
      border: "hover:border-pink-400/50",
      skills: ["HTML", "CSS", "Tailwind CSS"],
    },
    {
      label: "Concepts",
      icon: "💡",
      color: "from-yellow-500/20 to-lime-500/10",
      border: "hover:border-yellow-400/50",
      skills: ["OOP", "Authentication", "API Development", "Database Design", "Data Structures"],
    },
  ];

  const tools = [
    { name: "Git", icon: "🔀", category: "Tools & Platforms" },
    { name: "GitHub", icon: "🐙", category: "Tools & Platforms" },
    { name: "VS Code", icon: "💻", category: "Tools & Platforms" },
    { name: "Cursor AI", icon: "🤖", category: "Tools & Platforms" },
    { name: "MySQL Workbench", icon: "🗄️", category: "Tools & Platforms" },
    { name: "Postman", icon: "📮", category: "Tools & Platforms" },
    { name: "AWS", icon: "☁️", category: "Cloud & Deployment" },
    { name: "Render", icon: "🚀", category: "Cloud & Deployment" },
    { name: "Vercel", icon: "▲", category: "Cloud & Deployment" },
  ];

  const softSkills = [
    "Team Leadership", "Communication", "Problem Solving",
    "Time Management", "Adaptability", "Critical Thinking", "Creativity",
  ];

  return (
    <section id="skills" className="py-16 bg-background relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-portfolio-bright-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-portfolio-bright-blue font-semibold tracking-widest uppercase text-xs mb-3">What I Know</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-bright-blue to-portfolio-purple mx-auto rounded-full" />
          <p className="mt-5 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            A diverse set of skills across backend development, machine learning, databases, and more.
          </p>
        </motion.div>

        {/* ── Technical Skills ── */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold mb-8 flex items-center gap-3"
          >
            <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </span>
            Technical Skills
          </motion.h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className={`group bg-gradient-to-br ${cat.color} border border-white/10 ${cat.border} rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-lg flex-shrink-0">
                    {cat.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm uppercase tracking-wider">{cat.label}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-gray-300 group-hover:border-white/25 group-hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Bottom Row: Soft Skills + Tools ── */}
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.span
                  key={skill}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="py-2 px-4 rounded-xl bg-gradient-to-r from-portfolio-blue/25 to-portfolio-purple/25 border border-portfolio-blue/30 text-gray-200 text-sm hover:border-portfolio-bright-blue/60 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </span>
              Tools & Technologies
            </h3>

            {["Tools & Platforms", "Cloud & Deployment"].map((category) => (
              <div key={category} className="mb-6">
                <p className="text-xs font-bold text-portfolio-bright-blue uppercase tracking-widest mb-3 flex items-center gap-2">
                  <span className="w-6 h-px bg-portfolio-bright-blue/50 inline-block" />
                  {category}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {tools.filter(t => t.category === category).map((tool, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-portfolio-bright-blue/50 hover:bg-portfolio-bright-blue/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-portfolio-bright-blue/10 transition-all duration-300 cursor-default"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{tool.icon}</span>
                      <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center transition-colors leading-tight">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
