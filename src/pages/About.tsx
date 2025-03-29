
import { motion } from 'framer-motion';
import { 
  Rocket, Heart, Brain, BookOpen, GraduationCap, Award, 
  Code, Database, BarChart, LineChart, BrainCircuit, Terminal 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

// Define skills data
const skillCategories = [
  {
    title: "Programming",
    icon: <Code className="h-5 w-5 text-blue-500" />,
    skills: ["Python", "SQL", "C Programming"]
  },
  {
    title: "Machine Learning",
    icon: <BrainCircuit className="h-5 w-5 text-purple-500" />,
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Regression", "Classification"]
  },
  {
    title: "Data Visualization",
    icon: <BarChart className="h-5 w-5 text-green-500" />,
    skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau"]
  },
  {
    title: "Databases",
    icon: <Database className="h-5 w-5 text-orange-500" />,
    skills: ["PostgreSQL", "MongoDB", "SQL", "NoSQL"]
  },
  {
    title: "Statistical Analysis",
    icon: <LineChart className="h-5 w-5 text-red-500" />,
    skills: ["Regression", "Hypothesis Testing", "A/B Testing", "Time Series"]
  },
  {
    title: "Tools",
    icon: <Terminal className="h-5 w-5 text-cyan-500" />,
    skills: ["Jupyter", "Git", "Docker", "AWS"]
  },
];

// Define what I can do
const capabilities = [
  {
    title: "Data Cleaning & Analysis",
    icon: <Database className="h-6 w-6" />,
    description: "Transform raw data into structured, clean datasets ready for analysis using Pandas, SQL, and other tools."
  },
  {
    title: "Machine Learning",
    icon: <BrainCircuit className="h-6 w-6" />,
    description: "Build and deploy predictive models using Scikit-learn, TensorFlow, and other ML frameworks."
  },
  {
    title: "Data Visualization",
    icon: <BarChart className="h-6 w-6" />,
    description: "Create compelling visual stories from data using Matplotlib, Seaborn, and Tableau."
  },
  {
    title: "Statistical Analysis",
    icon: <LineChart className="h-6 w-6" />,
    description: "Apply statistical methods to derive insights and test hypotheses using real-world data."
  }
];

const About = () => {
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
            About Me
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            My Journey & Expertise
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate data enthusiast on a mission to solve complex problems through data-driven approaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Heart className="h-5 w-5 text-red-500" />
              My Passion
            </h2>
            <p className="text-muted-foreground">
              I'm deeply passionate about the world of Data Science and Analytics. From a young age, I've been fascinated by patterns and how data can tell compelling stories that drive decision-making. This passion has led me to pursue a career where I can transform complex data into actionable insights.
            </p>

            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Rocket className="h-5 w-5 text-blue-500" />
              My Journey
            </h2>
            <p className="text-muted-foreground">
              My journey into data science began with a curiosity about how businesses use information to make decisions. I've spent countless hours learning programming, statistics, and machine learning through online courses, hands-on projects, and continuous self-study. Each project and challenge has expanded my skillset and deepened my understanding of data's power.
            </p>

            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-500" />
              What Excites Me
            </h2>
            <p className="text-muted-foreground">
              I get most excited about uncovering hidden patterns in data that lead to valuable insights. The moment when a visualization reveals a trend, or when a model successfully predicts an outcome – those "aha!" moments drive my passion. I'm particularly interested in how machine learning can be applied to solve real-world problems in healthcare, finance, and environmental science.
            </p>
          </motion.div>

          {/* Right Column - Education & Values */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-500" />
              Learning Approach
            </h2>
            <p className="text-muted-foreground">
              I believe in continuous learning and hands-on experience. My approach combines theoretical knowledge with practical application. I regularly participate in online competitions, work on personal projects, and stay updated with the latest developments in the field through research papers and industry blogs.
            </p>

            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-yellow-500" />
              Education
            </h2>
            <p className="text-muted-foreground">
              My educational background includes a strong foundation in mathematics and computer science. I've supplemented my formal education with specialized courses in data science, machine learning, and statistical analysis from platforms like Coursera, edX, and Kaggle.
            </p>

            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Award className="h-5 w-5 text-orange-500" />
              My Values
            </h2>
            <p className="text-muted-foreground">
              Integrity in data analysis, transparency in methodology, and ethical considerations are core to my work. I believe in creating solutions that are not just technically sound but also ethically responsible and accessible. I'm committed to continuously improving and adapting to new challenges in this evolving field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What I Can Do Section */}
      <section className="section-container bg-secondary/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">What I Can Do</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My expertise lies in transforming data into actionable insights through various analytical approaches
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold">{capability.title}</h3>
              </div>
              <p className="text-muted-foreground">{capability.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I use to bring data to life
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                {category.icon}
                <h3 className="font-medium">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="secondary" 
                    className="px-2.5 py-0.5 bg-background/80"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default About;
