import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";

const AboutSection = () => {
  const handleDownloadCV = async () => {
    try {
      // First check if the file exists
      const response = await fetch('/documents/Sujal_Raut_CV.pdf');
      if (!response.ok) {
        throw new Error('CV file not found');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Sujal_Raut_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success('CV downloaded successfully!');
    } catch (error) {
      console.error('Download error:', error);
      toast.error('Failed to download CV. Please try again later.');
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-portfolio-dark-blue/60">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-portfolio-bright-blue mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg">
              I'm Sujal R Raut, an ambitious B.Tech candidate specializing in Artificial Intelligence at G.H. Raisoni College of Engineering, Nagpur. With a strong foundation in computer science and programming, I'm passionate about developing innovative solutions that make a difference.
            </p>
            <p className="text-lg">
              My journey in technology has equipped me with comprehensive skills in full-stack development, and I've earned certifications in AWS Cloud Practitioner Essentials, MERN Stack development, and PostgreSQL from IIT Bombay.
            </p>
            <p className="text-lg">
              Based in Nagpur, India, I combine technical expertise with strong communication and team leadership abilities. I'm eagerly looking to enhance my skills through meaningful internships and collaborative projects.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-400">Nagpur, India</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-400">sujalraut.dev@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-portfolio-blue/20 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-portfolio-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Study</h3>
                  <p className="text-gray-400">Artificial Intelligence</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleDownloadCV}
              className="mt-6 bg-portfolio-bright-blue hover:bg-portfolio-blue text-white px-6 py-2 rounded-lg flex items-center gap-2"
            >
              Download Resume <Download className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-tr from-portfolio-blue to-portfolio-purple rounded-lg p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-white">My Expertise</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Full Stack Development</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Problem Solving</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Database Management</span>
                    <span>80%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '80%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">AI & Machine Learning</span>
                    <span>75%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-lg bg-portfolio-pink/20 -z-10 transform rotate-12"></div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-portfolio-bright-blue/20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
