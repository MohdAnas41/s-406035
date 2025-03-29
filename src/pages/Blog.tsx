
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Tag, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  categories: string[];
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "how-i-built-first-ml-model",
    title: "How I Built My First Machine Learning Model",
    description: "A step-by-step guide through my journey of building and deploying my first machine learning model for predicting housing prices, including challenges faced and lessons learned.",
    date: "April 15, 2023",
    readTime: "8 min read",
    categories: ["Machine Learning", "Beginner", "Tutorial"],
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
  },
  {
    id: "common-mistakes-data-analysis",
    title: "5 Common Mistakes in Data Analysis",
    description: "An exploration of frequent pitfalls that data analysts encounter, how to identify them, and practical strategies to avoid these mistakes in your own analytical work.",
    date: "May 22, 2023",
    readTime: "6 min read",
    categories: ["Data Analysis", "Best Practices"],
    image: "bg-gradient-to-br from-green-500/20 to-teal-500/20"
  },
  {
    id: "data-visualization-principles",
    title: "Principles of Effective Data Visualization",
    description: "Discover key principles that make data visualizations more effective, insightful, and accessible to your audience, with practical examples using Python's visualization libraries.",
    date: "June 10, 2023",
    readTime: "10 min read",
    categories: ["Data Visualization", "Tutorial"],
    image: "bg-gradient-to-br from-red-500/20 to-orange-500/20"
  },
  {
    id: "sql-vs-nosql-data-science",
    title: "SQL vs NoSQL: Which to Choose for Data Science Projects",
    description: "A comparative analysis of SQL and NoSQL databases specifically for data science applications, with guidance on selecting the right database type for different project requirements.",
    date: "July 3, 2023",
    readTime: "7 min read",
    categories: ["Databases", "SQL", "MongoDB"],
    image: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20"
  },
  {
    id: "time-series-forecasting",
    title: "Getting Started with Time Series Forecasting",
    description: "An introduction to time series analysis and forecasting techniques, including practical implementations of ARIMA and LSTM models for predicting stock prices and other time-dependent data.",
    date: "August 17, 2023",
    readTime: "12 min read",
    categories: ["Time Series", "Machine Learning", "Tutorial"],
    image: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20"
  },
  {
    id: "python-data-cleaning",
    title: "Python Data Cleaning: A Comprehensive Guide",
    description: "Learn effective techniques for cleaning and preprocessing data in Python, including handling missing values, outliers, and inconsistent data to prepare high-quality datasets for analysis.",
    date: "September 5, 2023",
    readTime: "9 min read",
    categories: ["Python", "Data Cleaning", "Pandas"],
    image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20"
  }
];

const Blog = () => {
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
            My Blog
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Data Science Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing my experiences, tutorials, and insights on data science, machine learning, and analytics
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="card overflow-hidden group flex flex-col h-full"
            >
              <Link to={`/blog/${post.id}`} className="flex-1 flex flex-col">
                <div
                  className={`aspect-video w-full rounded-md mb-4 ${post.image} flex items-center justify-center`}
                >
                  <span className="text-4xl opacity-30 font-bold">
                    {post.title.charAt(0)}
                  </span>
                </div>
                
                <div className="flex gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-grow">
                  {post.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.map((category, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="bg-secondary/50"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <div className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all mt-auto">
                  Read Article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
