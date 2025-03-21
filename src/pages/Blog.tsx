
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogCategories = ["All", "Design", "Development", "Career", "Technology"];

const blogPosts = [
  {
    title: "Designing for Accessibility: A Comprehensive Guide",
    excerpt:
      "Learn how to create inclusive digital experiences that work for everyone regardless of ability or disability.",
    date: "May 15, 2023",
    readTime: "8 min read",
    category: "Design",
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    slug: "#"
  },
  {
    title: "The Future of JavaScript: What's Coming in ES2023",
    excerpt:
      "Explore the upcoming features in JavaScript and how they will change the way we write code.",
    date: "April 3, 2023",
    readTime: "10 min read",
    category: "Development",
    image: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
    slug: "#"
  },
  {
    title: "How to Build a Design System from Scratch",
    excerpt:
      "A step-by-step guide to creating a consistent and scalable design system for your products.",
    date: "March 21, 2023",
    readTime: "12 min read",
    category: "Design",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    slug: "#"
  },
  {
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Learn how to identify and fix performance bottlenecks in your React applications.",
    date: "February 18, 2023",
    readTime: "15 min read",
    category: "Development",
    image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    slug: "#"
  },
  {
    title: "From Developer to Tech Lead: My Journey",
    excerpt:
      "Insights and lessons learned from transitioning from an individual contributor to a leadership role.",
    date: "January 5, 2023",
    readTime: "7 min read",
    category: "Career",
    image: "bg-gradient-to-br from-indigo-500/20 to-violet-500/20",
    slug: "#"
  },
  {
    title: "The State of Web Development in 2023",
    excerpt:
      "An overview of current trends, technologies, and practices in modern web development.",
    date: "December 12, 2022",
    readTime: "9 min read",
    category: "Technology",
    image: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
    slug: "#"
  }
];

const featuredPost = blogPosts[0];

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
            Thoughts & Insights
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I write about design, development, and my experiences in the tech industry.
            Browse my latest articles below.
          </p>
        </motion.div>

        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div
              className={`aspect-video rounded-lg ${featuredPost.image} flex items-center justify-center p-8`}
            >
              <span className="text-5xl opacity-30">
                {featuredPost.title.charAt(0)}
              </span>
            </div>
            <div className="space-y-4">
              <div className="text-sm text-primary">{featuredPost.category}</div>
              <h2 className="text-3xl font-bold">{featuredPost.title}</h2>
              <p className="text-muted-foreground">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              <Link
                to={featuredPost.slug}
                className="inline-flex items-center text-primary font-medium hover:underline gap-1 mt-2"
              >
                Read article <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {blogCategories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
            >
              <div
                className={`aspect-video w-full rounded-md mb-4 ${post.image} flex items-center justify-center`}
              >
                <span className="text-3xl opacity-30">
                  {post.title.charAt(0)}
                </span>
              </div>
              <div className="text-sm text-primary mb-2">{post.category}</div>
              <h3 className="text-xl font-medium mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </div>
              </div>
              <Link
                to={post.slug}
                className="mt-4 inline-block text-primary font-medium hover:underline"
              >
                Read more
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Blog;
