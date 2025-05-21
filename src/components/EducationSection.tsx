import { motion } from "framer-motion";

const EducationSection = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Artificial Intelligence",
      institution: "G.H. Raisoni College of Engineering",
      location: "Nagpur, India",
      duration: "2022 - 2026 (Expected)",
      description: "Currently pursuing B.Tech in Artificial Intelligence with focus on machine learning, computer vision, and natural language processing."
    },
    {
      degree: "Diploma in Computer Science",
      institution: "Anjuman Polytechnic",
      location: "Nagpur, India",
      duration: "2019 - 2022",
      description: "Completed a three-year diploma program under the Maharashtra State Board of Technical Education with a strong foundation in computer science fundamentals."
    }
  ];

  const certifications = [
    {
      name: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services"
    },
    {
      name: "MERN Stack Development",
      issuer: "IIT Bombay"
    },
    {
      name: "PostgreSQL Database Management",
      issuer: "IIT Bombay"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-portfolio-bright-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h3>
            
            <div className="space-y-10 relative">
              {/* Vertical line */}
              <div className="absolute left-3.5 top-0 bottom-0 w-0.5 bg-portfolio-blue/20 z-0"></div>
              
              {educationData.map((item, index) => (
                <div key={index} className="relative z-10 pl-14">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1.5 w-7 h-7 rounded-full bg-portfolio-bright-blue flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  <div className="bg-portfolio-dark-blue/30 rounded-lg p-6 border border-portfolio-blue/20 hover:border-portfolio-bright-blue/40 transition-all">
                    <h4 className="font-bold text-xl text-portfolio-bright-blue">{item.degree}</h4>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="text-gray-300">{item.institution}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                      <span className="text-gray-400">{item.location}</span>
                    </div>
                    <div className="text-sm text-portfolio-bright-blue/80 font-medium mt-1">{item.duration}</div>
                    <p className="mt-3 text-gray-300">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="bg-portfolio-bright-blue/20 text-portfolio-bright-blue p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </span>
              Certifications
            </h3>
            
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-portfolio-dark-blue/60 to-portfolio-blue/20 p-6 rounded-lg border-l-4 border-portfolio-bright-blue hover:shadow-lg transition-all"
                >
                  <div>
                    <h4 className="font-bold text-lg">{cert.name}</h4>
                    <p className="text-gray-400">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-portfolio-dark-blue/40 rounded-lg p-6 border border-portfolio-blue/30">
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-portfolio-bright-blue mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </span>
                Additional Qualifications
              </h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-bright-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Participated in national-level hackathons</span>
                </li>
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-bright-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Completed 30+ projects in web development</span>
                </li>
                <li className="flex gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-bright-blue flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Active member of college programming club</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
