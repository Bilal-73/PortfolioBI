import { motion } from "framer-motion";
import { Calendar, DollarSign, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Clock, text: "Flexible scheduling" },
  { icon: DollarSign, text: "Competitive rates" },
  { icon: CheckCircle, text: "Quality guaranteed" },
];

export function PaidProjectsHero() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      {/* Decorative Elements */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Book a Session</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
              Paid Projects{" "}
              <span className="gradient-text">Appointment</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Looking to bring your AI vision to life? Book a consultation session 
              to discuss your project requirements, get expert advice, and kickstart 
              your development journey.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-2">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{feature.text}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                asChild
              >
                <a href="#contact">
                  <span className="relative z-10 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Appointment
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:border-primary hover:bg-primary/5"
                asChild
              >
                <a href="#projects">
                  View Past Projects
                </a>
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-xl">
              {/* Glow Effect */}
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
                  <p className="text-sm text-muted-foreground">
                    💡 First consultation is completely free!
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
