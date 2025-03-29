
import { motion } from 'framer-motion';
import { 
  Code, Database, BarChart, LineChart, GitBranch, 
  Server, PieChart, Table, BrainCircuit, Terminal
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const SkillsSection = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming",
      icon: <Code className="h-6 w-6 text-blue-500" />,
      skills: ["Python", "SQL", "C Programming"]
    },
    {
      title: "Machine Learning",
      icon: <BrainCircuit className="h-6 w-6 text-purple-500" />,
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Regression", "Classification"]
    },
    {
      title: "Data Visualization",
      icon: <BarChart className="h-6 w-6 text-green-500" />,
      skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau"]
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-orange-500" />,
      skills: ["PostgreSQL", "MongoDB", "SQL", "NoSQL"]
    },
    {
      title: "Statistical Analysis",
      icon: <LineChart className="h-6 w-6 text-red-500" />,
      skills: ["Regression", "Hypothesis Testing", "A/B Testing", "Time Series"]
    },
    {
      title: "Tools",
      icon: <Terminal className="h-6 w-6 text-cyan-500" />,
      skills: ["Jupyter", "Git", "Docker", "AWS"]
    },
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
    <section className="section-container bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Skills & Expertise</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          My technical toolkit spans across various facets of data science and analytics
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-full bg-background">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2 mt-2">
              {category.skills.map((skill, idx) => (
                <Badge 
                  key={idx} 
                  variant="secondary" 
                  className="px-3 py-1 bg-background/80 text-foreground"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
