
import { motion } from "framer-motion";
import { ExternalLink, Github, FileBarChart, Home, PlayCircle, Database, Code, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  category: string;
  icon: React.ReactNode;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
}

const projectCategories = ["All", "Machine Learning", "Data Analysis", "Visualization", "Database"];

const projects: Project[] = [
  {
    title: "COVID-19 Data Analysis",
    description: "Exploratory data analysis and visualization of COVID-19 data.",
    longDescription: "A comprehensive exploratory data analysis project examining COVID-19 trends, patterns, and correlations across different regions. The project involved data cleaning, statistical analysis, and creating interactive visualizations to help understand the pandemic's impact globally.",
    category: "Data Analysis",
    icon: <FileBarChart className="h-8 w-8 text-blue-500" />,
    technologies: ["Pandas", "Matplotlib", "Seaborn", "Jupyter", "NumPy", "Plotly"],
    githubLink: "#",
    demoLink: "#",
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  },
  {
    title: "House Price Prediction",
    description: "Machine learning model to predict house prices based on various features.",
    longDescription: "Developed a regression model to predict house prices based on features like location, size, amenities, and historical data. Implemented feature engineering, cross-validation, and hyperparameter tuning to improve model accuracy. The final model achieved an R-squared score of 0.89 on the test dataset.",
    category: "Machine Learning",
    icon: <Home className="h-8 w-8 text-green-500" />,
    technologies: ["Scikit-learn", "Pandas", "NumPy", "XGBoost", "Feature Engineering", "Regression"],
    githubLink: "#",
    image: "bg-gradient-to-br from-green-500/20 to-teal-500/20"
  },
  {
    title: "Netflix Data SQL Analysis",
    description: "Comprehensive analysis of Netflix dataset using SQL queries.",
    longDescription: "Used SQL to analyze a comprehensive Netflix dataset containing information about shows, movies, directors, actors, and viewer ratings. Created complex queries to extract insights about content trends, viewer preferences, and platform growth over time. Visualized the findings using Tableau dashboards.",
    category: "Database",
    icon: <Database className="h-8 w-8 text-red-500" />,
    technologies: ["SQL", "PostgreSQL", "Tableau", "Data Cleaning", "Data Visualization"],
    githubLink: "#",
    demoLink: "#",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
  },
  {
    title: "Stock Market Prediction",
    description: "Time series analysis and forecasting model for stock market prediction.",
    longDescription: "Implemented time series forecasting models to predict stock market trends using historical price data. Applied LSTM neural networks and traditional forecasting methods like ARIMA. Created a comparison of different models and their performance metrics, with a web interface to visualize predictions.",
    category: "Machine Learning",
    icon: <PlayCircle className="h-8 w-8 text-purple-500" />,
    technologies: ["LSTM", "TensorFlow", "Pandas", "Time Series", "ARIMA", "Keras"],
    githubLink: "#",
    image: "bg-gradient-to-br from-indigo-500/20 to-violet-500/20"
  },
  {
    title: "Customer Segmentation",
    description: "Clustering analysis to identify customer segments for targeted marketing.",
    longDescription: "Used unsupervised learning techniques to segment customers based on purchasing behavior, demographics, and engagement metrics. Applied K-means clustering and hierarchical clustering to identify distinct customer groups. The resulting segments were used to develop targeted marketing strategies.",
    category: "Machine Learning",
    icon: <Layers className="h-8 w-8 text-yellow-500" />,
    technologies: ["K-means", "Scikit-learn", "Pandas", "Clustering", "Customer Analytics"],
    githubLink: "#",
    demoLink: "#",
    image: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20"
  },
  {
    title: "Sentiment Analysis Dashboard",
    description: "NLP-based sentiment analysis of customer reviews with interactive dashboard.",
    longDescription: "Developed a natural language processing system to analyze sentiment in customer reviews and social media mentions. Used BERT and traditional NLP techniques to classify text as positive, negative, or neutral. Created an interactive dashboard to monitor sentiment trends over time.",
    category: "Visualization",
    icon: <Code className="h-8 w-8 text-cyan-500" />,
    technologies: ["NLP", "BERT", "Python", "Dash", "Plotly", "Sentiment Analysis"],
    githubLink: "#",
    image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20"
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            My Work
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Data Science Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my data science projects, each representing a unique challenge and solution
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {projectCategories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? "default" : "secondary"}
              className="rounded-full"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              <div
                className={`aspect-video w-full rounded-md mb-4 ${project.image} flex items-center justify-center`}
              >
                <span className="text-4xl opacity-30 font-bold">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="text-sm text-primary mb-2">{project.category}</div>
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.longDescription}</p>
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
                  View Code
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
