
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import SkillsSection from '@/components/SkillsSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import CertificationsSection from '@/components/CertificationsSection';

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background">
        <div className="section-container flex flex-col items-center justify-center text-center min-h-[calc(100vh-4rem)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary"
            >
              Data Science & Analytics
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
            >
              Mohd Anas
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-6 text-primary"
            >
              Turning Data into Meaningful Insights
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto"
            >
              I specialize in data analysis, visualization, and machine learning to solve real-world problems.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button 
                size="lg" 
                className="gap-1 group"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 flex justify-center"
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full animate-bounce"
                onClick={() => scrollToSection('about')}
                aria-label="Scroll down"
              >
                <ChevronDown className="h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
      </section>

      {/* About Section Brief */}
      <section id="about" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Passionate about Data Science with a focus on extracting meaningful insights from complex datasets.
          </p>
          <Button asChild variant="outline">
            <Link to="/about">Learn More About Me</Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Featured Projects */}
      <section id="projects" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Here are some of my recent data science and analytics projects
          </p>
        </div>
        <FeaturedProjects />
        <div className="text-center mt-10">
          <Button asChild variant="outline">
            <Link to="/projects" className="inline-flex items-center gap-2 group">
              View All Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection />

      {/* Contact Brief */}
      <section id="contact" className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Interested in working together? Feel free to reach out!
          </p>
          <Button asChild>
            <Link to="/contact" className="inline-flex items-center gap-2 group">
              Contact Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
