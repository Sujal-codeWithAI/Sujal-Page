import { useState, useEffect } from "react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const EMAILJS_PUBLIC_KEY = "ox3GE0jSwKy__0zuJ";
const EMAILJS_SERVICE_ID = "service_ga164ew";
const EMAILJS_TEMPLATE_ID = "template_cutkccr";

const inputClass = "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-portfolio-bright-blue/60 focus:bg-portfolio-bright-blue/5 transition-all duration-300";
const labelClass = "block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2";

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => { emailjs.init(EMAILJS_PUBLIC_KEY); }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_name: "Sujal",
        reply_to: form.email,
      }, EMAILJS_PUBLIC_KEY);
      toast.success("Message sent successfully! I'll get back to you soon.");
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: "📧", label: "Email", value: "sujalraut.dev@gmail.com", href: "mailto:sujalraut.dev@gmail.com" },
    { icon: "📞", label: "Phone", value: "+91 98907 91986", href: "tel:+919890791986" },
    { icon: "📍", label: "Location", value: "Nagpur, Maharashtra, India" },
  ];

  const socials = [
    {
      label: "LinkedIn", href: "https://www.linkedin.com/in/sujal-raut",
      path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      label: "GitHub", href: "https://github.com/Sujal-codeWithAI",
      path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      label: "Email", href: "mailto:sujalraut.dev@gmail.com",
      path: "M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z",
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-portfolio-dark-blue/40 to-background relative overflow-hidden">
      {/* Background glows */}
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
            Feel free to reach out for opportunities, collaborations, or just a friendly hello.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-8">

          {/* Left: Info + Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Contact info cards */}
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-white/4 border border-white/10 hover:border-portfolio-bright-blue/30 hover:bg-white/6 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-portfolio-bright-blue/15 flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-gray-200 hover:text-portfolio-bright-blue transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-gray-200 font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="p-5 rounded-2xl bg-white/4 border border-white/10">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Connect With Me</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center text-gray-400 hover:text-portfolio-bright-blue hover:border-portfolio-bright-blue/40 hover:bg-portfolio-bright-blue/10 transition-all duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                      <path d={s.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-white/4 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Sujal Raut"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-portfolio-bright-blue hover:bg-portfolio-bright-blue/90 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-portfolio-bright-blue/20 hover:shadow-portfolio-bright-blue/40 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
