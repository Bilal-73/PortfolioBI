// import { useState } from "react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import { Email,Send, Mail, MapPin, Linkedin, Github, Twitter } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/hooks/use-toast";

// const socialLinks = [
//   { name: "GitHub", icon: Github, url: "https://github.com/Bilal-73" },
//   { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/bilalimran73ai" },
//   { name: "Email", icon: Email, url: "https://twitter.com/bilalimran" },
// ];

// export function Contact() {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     toast({
//       title: "Message sent!",
//       description: "Thank you for reaching out. I'll get back to you soon.",
//     });

//     setFormData({ name: "", email: "", message: "" });
//     setIsSubmitting(false);
//   };

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   return (
//     <section id="contact" className="section-padding">
//       <div className="container-narrow" ref={ref}>
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <span className="text-primary font-mono text-sm">// Contact</span>
//           <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
//             Let's <span className="gradient-text">Connect</span>
//           </h2>
//           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? I'd love to hear from you.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <motion.div
//             initial={{ opacity: 0, x: -30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="space-y-8"
//           >
//             <div>
//               <h3 className="text-xl font-display font-semibold text-foreground mb-4">
//                 Get in Touch
//               </h3>
//               <p className="text-muted-foreground">
//                 I'm always open to discussing new projects, creative ideas, or
//                 opportunities to be part of your vision.
//               </p>
//             </div>

//             <div className="space-y-4">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10">
//                   <Mail className="w-5 h-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Email</p>
//                   <a
//                     href="mailto:bilal@example.com"
//                     className="text-foreground hover:text-primary transition-colors"
//                   >
//                     bilal@example.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <div className="p-3 rounded-lg bg-primary/10">
//                   <MapPin className="w-5 h-5 text-primary" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-muted-foreground">Location</p>
//                   <p className="text-foreground">Lahore, Pakistan</p>
//                 </div>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div>
//               <p className="text-sm text-muted-foreground mb-3">Follow me on</p>
//               <div className="flex gap-3">
//                 {socialLinks.map((social) => (
//                   <motion.a
//                     key={social.name}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <social.icon className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
//                   </motion.a>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div
//             initial={{ opacity: 0, x: 30 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-foreground mb-2"
//                 >
//                   Name
//                 </label>
//                 <Input
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your name"
//                   required
//                   className="bg-card border-border focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-foreground mb-2"
//                 >
//                   Email
//                 </label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="your@email.com"
//                   required
//                   className="bg-card border-border focus:border-primary"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-foreground mb-2"
//                 >
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Tell me about your project..."
//                   required
//                   rows={5}
//                   className="bg-card border-border focus:border-primary resize-none"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
//               >
//                 {isSubmitting ? (
//                   "Sending..."
//                 ) : (
//                   <>
//                     Send Message
//                     <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
//                   </>
//                 )}
//               </Button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Email,
  Send,
  Mail,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/Bilal-73" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/bilalimran73ai" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/bilalimran" },
  { name: "Facebook", icon: Facebook, url: "https://facebook.com/bilalimran" },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-mono text-sm">// Contact</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                Get in Touch
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:acc.bilalimran@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    acc.bilaimran@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5 text-foreground hover:text-primary transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
