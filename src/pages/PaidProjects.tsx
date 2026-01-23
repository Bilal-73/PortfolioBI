import { motion } from "framer-motion";
import { Calendar, DollarSign, Clock, ArrowRight, CheckCircle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DarkModeToggle } from "@/components/DarkModeToggle";

const features = [
  { icon: Clock, text: "Flexible scheduling" },
  { icon: DollarSign, text: "Competitive rates" },
  { icon: CheckCircle, text: "Quality guaranteed" },
];

const services = [
  {
    title: "AI/ML Development",
    description: "Custom machine learning models, neural networks, and AI solutions tailored to your business needs.",
    price: "Custom Quote",
  },
  {
    title: "Web Application",
    description: "Full-stack React applications with modern UI/UX, responsive design, and seamless user experience.",
    price: "Custom Quote",
  },
  {
    title: "Data Analysis",
    description: "Transform your raw data into actionable insights with advanced analytics and visualization.",
    price: "Custom Quote",
  },
  {
    title: "Consultation",
    description: "Expert advice on AI strategy, technology stack, and project planning for your business.",
    price: "Free Initial",
  },
];

export default function PaidProjects() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container-narrow">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Portfolio</span>
            </Link>
            <DarkModeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="container-narrow relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Paid Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Let's Build Something{" "}
              <span className="gradient-text">Amazing</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Looking to bring your AI vision to life? I offer professional development 
              services for AI/ML projects, web applications, and data solutions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Services Offered</h2>
            <p className="text-muted-foreground">Choose the service that fits your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <span className="text-primary font-medium">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-20">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-xl"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-xl opacity-50" />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Project Consultation</h3>
                    <p className="text-muted-foreground">1-on-1 Expert Session</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Initial Consultation</span>
                    <span className="font-semibold text-primary">Free</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Project Planning</span>
                    <span className="font-semibold">Custom Quote</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-muted-foreground">Development</span>
                    <span className="font-semibold">Per Project</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-muted-foreground">Ongoing Support</span>
                    <span className="font-semibold">Available</span>
                  </div>
                </div>
                
                <div className="pt-4 text-center">
                  <p className="text-sm text-muted-foreground mb-6">
                    💡 First consultation is completely free!
                  </p>
                  <Button
                    size="lg"
                    className="group w-full relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <Link to="/#contact">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Book Appointment
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container-narrow text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Bilal Imran. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
