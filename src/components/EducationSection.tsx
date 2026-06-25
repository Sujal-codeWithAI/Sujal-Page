import { motion } from "framer-motion";

const EducationSection = () => {
  const educationData = [
    {
      degree: "B.Tech in Artificial Intelligence",
      institution: "G.H. Raisoni College of Engineering",
      location: "Nagpur, India",
      duration: "2023 – Expected 2026",
      description: "Currently pursuing B.Tech in Artificial Intelligence with a CGPA of 7.94/10. Curriculum covers core Computer Science along with specialized AI and machine learning courses.",
      score: "CGPA: 7.94 / 10",
      icon: "🎓",
    },
    {
      degree: "Diploma in Computer Engineering (CS)",
      institution: "Anjuman Polytechnic",
      location: "Nagpur, India",
      duration: "2019 – 2023",
      description: "Completed a comprehensive diploma in Computer Engineering with a strong foundation in programming and computer fundamentals.",
      score: "Percentage: 70.51%",
      icon: "📘",
    },
  ];

  const certifications = [
    {
      name: "Artificial Intelligence Fundamentals",
      issuer: "IBM SkillsBuild",
      description: "Demonstrates knowledge of AI concepts including NLP, computer vision, machine learning, deep learning, neural networks, and AI ethics. Includes IBM Watson Studio.",
      date: "Jun 17, 2026",
      link: "https://www.credly.com/badges/3f0cfdd2-d0bc-4ddd-a733-d66f9a9a8cec",
      pdfLink: "/documents/IBM_AI_Fundamentals.pdf",
      color: "from-blue-500/20 to-cyan-500/10",
      border: "border-blue-400/30",
      tag: "IBM",
    },
    {
      name: "JavaScript Essentials 1",
      issuer: "Cisco Networking Academy",
      description: "Enhanced JavaScript skills focused on client-side development and debugging.",
      link: "https://www.netacad.com/certificates?issuanceId=50ecd749-e8d6-4a1a-b9a7-aff5f8a04ff1",
      color: "from-yellow-500/20 to-amber-500/10",
      border: "border-yellow-400/30",
      tag: "Cisco",
    },
    {
      name: "Python Essentials 1",
      issuer: "Cisco Networking Academy",
      description: "Built foundational problem-solving and programming capabilities with Python.",
      link: "https://www.netacad.com/certificates?issuanceId=8dc3f594-3c98-4847-af79-e8d574dc692b",
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-400/30",
      tag: "Cisco",
    },
  ];

  const experience = [
    {
      role: "Software Developer Intern",
      company: "Negals Technologies Pvt. Ltd.",
      duration: "June 2025 – Present",
      points: [
        "Developed and maintained Django-based web applications with modular architecture and secure authentication.",
        "Built and integrated RESTful APIs using FastAPI with emphasis on validation, error handling, and scalability.",
        "Managed MySQL databases and deployed applications on AWS EC2.",
        "Created interactive dashboards and analytics reports using Power BI.",
      ],
      icon: "💼",
    },
  ];

  return (
    <section id="education" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-portfolio-bright-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-portfolio-bright-blue text-xs font-bold tracking-widest uppercase mb-3">My Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-bright-blue to-portfolio-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Education Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-8 flex items-center gap-3"
            >
              <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </motion.h3>

            <div className="relative space-y-6">
              <div className="absolute left-3.5 top-2 bottom-2 w-px bg-gradient-to-b from-portfolio-bright-blue via-portfolio-blue/40 to-transparent" />
              {educationData.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-2 w-7 h-7 rounded-full bg-portfolio-bright-blue/20 border-2 border-portfolio-bright-blue flex items-center justify-center text-sm">
                    {item.icon}
                  </div>
                  <div className="bg-white/4 border border-white/10 rounded-2xl p-5 hover:border-portfolio-bright-blue/30 hover:bg-white/6 transition-all duration-300">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <h4 className="font-bold text-white text-base">{item.degree}</h4>
                      <span className="text-xs text-portfolio-bright-blue font-semibold bg-portfolio-bright-blue/10 px-2.5 py-1 rounded-lg">{item.score}</span>
                    </div>
                    <p className="text-portfolio-bright-blue/80 text-sm font-medium">{item.institution}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.location} · {item.duration}</p>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience */}
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold mt-12 mb-8 flex items-center gap-3"
            >
              <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Experience
            </motion.h3>

            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-portfolio-blue/20 to-portfolio-purple/10 border border-white/10 rounded-2xl p-6 hover:border-portfolio-bright-blue/30 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="text-2xl">{exp.icon}</span>
                  <div>
                    <h4 className="font-bold text-white">{exp.role}</h4>
                    <p className="text-portfolio-bright-blue text-sm font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{exp.duration}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-portfolio-bright-blue mt-1 flex-shrink-0">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl font-bold mb-8 flex items-center gap-3"
            >
              <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Certifications
            </motion.h3>

            <div className="space-y-5">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`bg-gradient-to-br ${cert.color} border ${cert.border} rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-bold text-white text-base leading-tight">{cert.name}</h4>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-white/10 text-gray-300 flex-shrink-0">{cert.tag}</span>
                  </div>
                  <p className="text-sm text-gray-400 font-medium mb-2">{cert.issuer}</p>
                  {cert.date && <p className="text-xs text-gray-500 mb-2">Issued: {cert.date}</p>}
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{cert.description}</p>
                  <div className="flex gap-4 flex-wrap">
                    {cert.link && (
                      <a href={cert.link} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-semibold text-portfolio-bright-blue hover:text-white transition-colors flex items-center gap-1">
                        View Badge →
                      </a>
                    )}
                    {cert.pdfLink && (
                      <a href={cert.pdfLink} target="_blank" rel="noopener noreferrer"
                        className="text-xs font-semibold text-portfolio-bright-blue hover:text-white transition-colors flex items-center gap-1">
                        Download PDF →
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
