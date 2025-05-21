
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Student Management System",
      description: "A comprehensive system for managing student data with CRUD operations, user authentication, and reporting features.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop",
      category: ["web", "database"],
      technologies: ["MySQL", "Flask", "HTML", "CSS", "JavaScript"],
      link: "#"
    },
    {
      id: 2,
      title: "Employee Payroll Management",
      description: "Dynamic system for managing employee payroll with automated calculations and payslip generation.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop", 
      category: ["web", "database"],
      technologies: ["MySQL", "Node.js", "Express.js", "React.js"],
      link: "#"
    },
    {
      id: 3,
      title: "Online Examination System",
      description: "Web-based platform for conducting online exams with automated grading and result analysis.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
      category: ["web", "database", "python"],
      technologies: ["MySQL", "Python", "Django", "Bootstrap"],
      link: "#"
    }
  ];
  
  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Dev" },
    { id: "database", label: "Database" },
    { id: "python", label: "Python" }
  ];
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeTab));

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-portfolio-dark-blue/60 to-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-portfolio-bright-blue mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development, 
            database management, and programming.
          </p>
        </div>
        
        {/* Project filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-portfolio-dark-blue/40 rounded-lg p-1">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeTab === tab.id 
                    ? "bg-portfolio-bright-blue text-white" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="project-card bg-portfolio-dark-blue/30 rounded-xl overflow-hidden border border-portfolio-blue/20 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-portfolio-dark-blue to-transparent opacity-60"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium bg-portfolio-blue/20 text-portfolio-bright-blue py-1 px-2 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-portfolio-bright-blue hover:text-portfolio-light-blue transition-colors font-medium"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" className="px-6 py-2 rounded-lg border-portfolio-bright-blue text-portfolio-bright-blue hover:bg-portfolio-bright-blue/10">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
