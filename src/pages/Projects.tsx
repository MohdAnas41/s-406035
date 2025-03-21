
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projectCategories = ["All", "Web Development", "UI/UX Design", "Mobile App"];

const projects = [
  {
    title: "E-commerce Redesign",
    description:
      "A complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    category: "UI/UX Design",
    tools: ["Figma", "React", "Node.js"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Task Management App",
    description:
      "A productivity application that helps users organize and prioritize their daily tasks.",
    image: "bg-gradient-to-br from-green-500/20 to-teal-500/20",
    category: "Mobile App",
    tools: ["React Native", "Firebase", "Redux"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills with a minimalist design approach.",
    image: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    category: "Web Development",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Health & Fitness Dashboard",
    description:
      "An analytics dashboard for tracking health metrics and fitness progress over time.",
    image: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    category: "Web Development",
    tools: ["React", "D3.js", "Express"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Social Media App",
    description:
      "A social platform focused on connecting people with similar creative interests.",
    image: "bg-gradient-to-br from-indigo-500/20 to-violet-500/20",
    category: "Mobile App",
    tools: ["Flutter", "GraphQL", "Firebase"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Restaurant Website",
    description:
      "A responsive website for a high-end restaurant featuring online reservations and menu showcasing.",
    image: "bg-gradient-to-br from-yellow-500/20 to-amber-500/20",
    category: "Web Development",
    tools: ["HTML/CSS", "JavaScript", "PHP"],
    githubLink: "#",
    liveLink: "#"
  }
];

const Projects = () => {
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
            Projects & Case Studies
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects, designs, and development work.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {projectCategories.map((category, index) => (
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
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card overflow-hidden group"
            >
              <div
                className={`aspect-video w-full rounded-md mb-4 ${project.image} flex items-center justify-center`}
              >
                <span className="text-3xl opacity-30">
                  {project.title.charAt(0)}
                </span>
              </div>
              <div className="text-sm text-primary mb-2">{project.category}</div>
              <h3 className="text-xl font-medium mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-secondary text-xs px-2 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto pt-2">
                <a
                  href={project.githubLink}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
                <a
                  href={project.liveLink}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Projects;
