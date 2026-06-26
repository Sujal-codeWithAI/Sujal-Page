import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const AboutSection = () => {
  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/documents/Sujal_Raut_CV.pdf');
      if (!response.ok) throw new Error('CV file not found');
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
    } catch {
      toast.error('Failed to download CV. Please try again later.');
    }
  };

  const stats = [
    { value: "7.94", label: "CGPA" },
    { value: "3+", label: "Projects" },
    { value: "1+", label: "Internship" },
    { value: "3+", label: "Certs" },
  ];

  const expertise = [
    { label: "Backend Development", icon: "⚙️" },
    { label: "Python & REST APIs", icon: "🐍" },
    { label: "Database Management", icon: "🗄️" },
    { label: "AI & Machine Learning", icon: "🤖" },
    { label: "Cloud & Deployment", icon: "☁️" },
    { label: "Data Analysis", icon: "📊" },
  ];

  const info = [
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />,
      label: "Location", value: "Nagpur, India",
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      label: "Email", value: "sujalraut.dev@gmail.com",
    },
    {
      icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
      label: "Degree", value: "B.Tech AI",
    },
  ];

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-background to-portfolio-dark-blue/40 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-portfolio-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-portfolio-bright-blue text-xs font-bold tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-bright-blue to-portfolio-purple mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Left: Bio + stats + info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            <p className="text-gray-300 text-base leading-relaxed">
              I'm <span className="text-white font-semibold">Sujal Raut</span>, a motivated Artificial Intelligence student at G.H. Raisoni College of Engineering, Nagpur. I have hands-on experience in software development, machine learning, backend technologies, and cloud platforms.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Currently interning as a <span className="text-white font-medium">Software Developer at Negals Technologies Pvt. Ltd.</span>, where I build Django & FastAPI applications, integrate RESTful APIs, manage MySQL databases, and deploy on AWS EC2.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-3 py-2">
              {stats.map((s) => (
                <div key={s.label} className="text-center p-3 rounded-xl bg-white/5 border border-white/10 hover:border-portfolio-bright-blue/30 transition-colors">
                  <p className="text-xl font-bold text-portfolio-bright-blue">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Info cards */}
            <div className="space-y-3">
              {info.map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-3 rounded-xl bg-white/3 hover:bg-white/5 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-portfolio-bright-blue/15 flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-portfolio-bright-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{item.label}</p>
                    <p className="text-sm text-gray-200 font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleDownloadCV}
              className="bg-portfolio-bright-blue hover:bg-portfolio-bright-blue/90 text-white px-6 py-2.5 rounded-xl flex items-center gap-2 font-semibold shadow-lg shadow-portfolio-bright-blue/20 transition-all"
            >
              Download Resume <Download className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right: Expertise bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="bg-gradient-to-br from-portfolio-blue/30 to-portfolio-purple/20 rounded-2xl p-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold mb-8 text-white">My Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {expertise.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    className="flex flex-col gap-2 p-4 rounded-xl bg-white/8 border border-white/10 hover:border-portfolio-bright-blue/40 hover:bg-white/12 transition-all duration-300"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <p className="text-sm font-semibold text-white leading-tight">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -z-10 w-24 h-24 rounded-xl bg-portfolio-pink/10 transform rotate-12 translate-x-8 -translate-y-8 blur-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
