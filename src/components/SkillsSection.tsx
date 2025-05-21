const SkillsSection = () => {
  const technicalSkills = [
    { name: "C++", level: 85 },
    { name: "Python", level: 75 },
    { name: "HTML & CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Bootstrap", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
  ];

  const softSkills = [
    "Team Leadership",
    "Communication",
    "Problem Solving",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
    "Creativity"
  ];

  const tools = [
    { name: "VS Code", icon: "💻" },
    { name: "Git & GitHub", icon: "🔄" },
    { name: "Figma", icon: "🎨" },
    { name: "MySQL Workbench", icon: "📊" },
    { name: "AWS", icon: "☁️" },
    { name: "Cursor", icon: "🖱️" },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-portfolio-bright-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            I've acquired a diverse set of skills throughout my educational journey and projects,
            ranging from technical expertise to essential soft skills.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills & Tools */}
          <div className="space-y-12">
            {/* Soft Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </span>
                Soft Skills
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20 text-white py-2 px-4 rounded-lg border border-portfolio-blue/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </span>
                Tools & Technologies
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {tools.map((tool, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-4 bg-portfolio-dark-blue/30 rounded-lg border border-portfolio-blue/20 hover:border-portfolio-bright-blue/30 transition-all"
                  >
                    <span className="text-2xl mr-3">{tool.icon}</span>
                    <span className="font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
