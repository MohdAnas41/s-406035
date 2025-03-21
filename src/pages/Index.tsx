
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Project One",
    description: "A mobile application designed to help users track their daily habits.",
    category: "Mobile App",
    link: "/projects"
  },
  {
    title: "Project Two",
    description: "E-commerce platform with a focus on sustainable products.",
    category: "Web Development",
    link: "/projects"
  },
  {
    title: "Project Three",
    description: "Dashboard interface for business analytics and insights.",
    category: "UI/UX Design",
    link: "/projects"
  }
];

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of my latest work spanning web development, design, and mobile applications.
          </p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card flex flex-col"
            >
              <div className="aspect-video w-full rounded-md bg-secondary mb-4"></div>
              <div className="text-sm text-primary mb-2">{project.category}</div>
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              <Link
                to={project.link}
                className="text-sm font-medium text-primary inline-flex items-center group"
              >
                View project
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-10">
          <Link
            to="/projects"
            className="button-subtle inline-flex items-center gap-2 group"
          >
            View all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
