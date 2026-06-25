import { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "CropSense – AI Crop Recommendation",
      description: "AI-powered crop recommendation system using Flask and Scikit-learn to predict suitable crops based on soil nutrients and climate conditions, with an interactive analytics dashboard.",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format&fit=crop",
      category: ["python", "ml"],
      technologies: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "REST APIs"],
      link: "https://github.com/Sujal-codeWithAI/CropSense",
      accent: "from-emerald-500/20 to-teal-500/10",
      badge: "ML / AI",
    },
    {
      id: 2,
      title: "Banking Simulation API",
      description: "REST endpoints for create/deposit/withdraw/transfer/balance with typed Pydantic schemas. Centralized rules via OOP (User, Account, Ledger) with standardized HTTP error handling.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      category: ["web", "python"],
      technologies: ["FastAPI", "Python", "OOP", "Pydantic", "SQLAlchemy", "REST API"],
      link: "https://github.com/Sujal-codeWithAI/Bank_Transaction_Backend",
      accent: "from-blue-500/20 to-cyan-500/10",
      badge: "Backend",
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React, TypeScript and Tailwind CSS to showcase projects, skills and achievements with smooth animations.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      category: ["web"],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      link: "https://github.com/Sujal-codeWithAI/Sujal-Page",
      accent: "from-violet-500/20 to-purple-500/10",
      badge: "Web",
    },
  ];

  const tabs = [
    { id: "all", label: "All" },
    { id: "web", label: "Web Dev" },
    { id: "python", label: "Python" },
    { id: "ml", label: "ML / AI" },
  ];

  const filtered = activeTab === "all" ? projects : projects.filter(p => p.category.includes(activeTab));

  return (
    <section id="projects" className="py-16 bg-gradient-to-b from-portfolio-dark-blue/40 to-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-portfolio-bright-blue text-xs font-bold tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-bright-blue to-portfolio-purple mx-auto rounded-full" />
          <p className="mt-5 text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Projects showcasing my skills in backend development, machine learning, and web development.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white/5 border border-white/10 rounded-xl p-1 gap-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-portfolio-bright-blue text-white shadow-lg shadow-portfolio-bright-blue/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-[#0a1128] border border-white/8 rounded-2xl overflow-hidden hover:border-portfolio-bright-blue/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-portfolio-bright-blue/10 transition-all duration-400"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128] via-[#0a1128]/40 to-transparent" />
                <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${project.accent} border border-white/20 text-white backdrop-blur-sm`}>
                  {project.badge}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-portfolio-bright-blue transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-portfolio-blue/15 border border-portfolio-blue/25 text-portfolio-bright-blue/80">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-portfolio-bright-blue hover:gap-3 transition-all duration-200"
                >
                  View on GitHub <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/Sujal-codeWithAI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-white/15 text-gray-300 hover:text-white hover:border-portfolio-bright-blue/40 hover:bg-portfolio-bright-blue/8 font-semibold transition-all duration-300"
          >
            View All on GitHub <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
