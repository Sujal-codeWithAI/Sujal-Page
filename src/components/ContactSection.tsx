import { motion } from "framer-motion";

const ContactSection = () => {
  const contactInfo = [
    { icon: "📧", label: "Email", value: "sujalraut.dev@gmail.com", href: "mailto:sujalraut.dev@gmail.com" },
    { icon: "📞", label: "Phone", value: "+91 98907 91986", href: "tel:+919890791986" },
    { icon: "📍", label: "Location", value: "Nagpur, Maharashtra, India" },
  ];

  const socials = [
    {
      label: "LinkedIn", href: "https://www.linkedin.com/in/sujal-raut",
      desc: "Connect with me professionally",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
      color: "hover:border-blue-400/50 hover:bg-blue-500/10",
    },
    {
      label: "GitHub", href: "https://github.com/Sujal-codeWithAI",
      desc: "Check out my projects",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
      color: "hover:border-gray-400/50 hover:bg-gray-500/10",
    },
    {
      label: "Email Me", href: "mailto:sujalraut.dev@gmail.com",
      desc: "Drop me a message anytime",
      path: "M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z",
      color: "hover:border-portfolio-bright-blue/50 hover:bg-portfolio-bright-blue/10",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-portfolio-dark-blue/40 to-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-portfolio-bright-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-portfolio-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="text-portfolio-bright-blue text-xs font-bold tracking-widest uppercase mb-3">Let's Talk</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-portfolio-bright-blue to-portfolio-purple mx-auto rounded-full" />
          <p className="mt-5 text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
            I'm open to opportunities, collaborations, or just a friendly hello. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-10">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/4 border border-white/10 hover:border-portfolio-bright-blue/30 hover:bg-white/6 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-portfolio-bright-blue/15 flex items-center justify-center text-xl">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-gray-200 hover:text-portfolio-bright-blue transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-200 font-medium">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-4"
          >
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -3 }}
                className={`flex flex-col items-center text-center gap-3 p-5 rounded-2xl bg-white/4 border border-white/10 ${s.color} transition-all duration-300 cursor-pointer`}
              >
                <div className="w-11 h-11 rounded-xl bg-white/8 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="text-gray-300" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">{s.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
