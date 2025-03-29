
import { motion } from 'framer-motion';
import { ExternalLink, Github, FileBarChart, Home, PlayCircle, Database } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  icon: React.ReactNode;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
}

const FeaturedProjects = () => {
  const projects: Project[] = [
    {
      title: "COVID-19 Data Analysis",
      description: "Exploratory data analysis and visualization of COVID-19 data, examining trends, patterns, and correlations across different regions.",
      icon: <FileBarChart className="h-8 w-8 text-blue-500" />,
      technologies: ["Pandas", "Matplotlib", "Seaborn", "Jupyter"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "House Price Prediction",
      description: "Machine learning model to predict house prices based on various features using regression algorithms and feature engineering.",
      icon: <Home className="h-8 w-8 text-green-500" />,
      technologies: ["Scikit-learn", "Pandas", "NumPy", "XGBoost"],
      githubLink: "#"
    },
    {
      title: "Netflix Data SQL Analysis",
      description: "Comprehensive analysis of Netflix dataset using SQL queries to extract insights about content trends and user preferences.",
      icon: <Database className="h-8 w-8 text-red-500" />,
      technologies: ["SQL", "PostgreSQL", "Tableau", "Data Cleaning"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      title: "Stock Market Prediction",
      description: "Time series analysis and forecasting model for stock market prediction using historical data and advanced algorithms.",
      icon: <PlayCircle className="h-8 w-8 text-purple-500" />,
      technologies: ["LSTM", "TensorFlow", "Pandas", "Time Series"],
      githubLink: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {projects.map((project, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="card overflow-hidden group"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-secondary/50">
              {project.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="bg-secondary/50"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4 mt-auto pt-2">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeaturedProjects;
