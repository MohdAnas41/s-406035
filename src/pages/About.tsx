
import { motion } from "framer-motion";
import { Download, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const skills = [
  "UI/UX Design",
  "Frontend Development",
  "React/Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Figma",
  "Responsive Design"
];

const experience = [
  {
    period: "2022 - Present",
    role: "Senior Frontend Developer",
    company: "Design Studio Inc.",
    description:
      "Led the frontend development of multiple client projects, improving site performance by 40% and implementing modern design systems."
  },
  {
    period: "2020 - 2022",
    role: "UI/UX Designer",
    company: "Creative Agency",
    description:
      "Designed user interfaces for web and mobile applications, working closely with clients to deliver intuitive and aesthetically pleasing experiences."
  },
  {
    period: "2018 - 2020",
    role: "Web Developer",
    company: "Tech Startup",
    description:
      "Developed responsive websites and implemented design systems while collaborating with cross-functional teams."
  }
];

const education = [
  {
    period: "2014 - 2018",
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    description:
      "Graduated with honors. Focused on human-computer interaction and web technologies."
  },
  {
    period: "2020",
    degree: "UI/UX Design Certification",
    institution: "Design Academy",
    description:
      "Intensive program covering user research, wireframing, prototyping, and design systems."
  }
];

const About = () => {
  return (
    <div className="min-h-screen">
      <section className="section-container">
        <div className="max-w-4xl mx-auto">
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
              Hi, I'm John Doe
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate designer and developer with over 5 years of experience
              creating beautiful, functional, and user-centered digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-4">My Background</h2>
              <p className="mb-4 text-muted-foreground">
                I began my journey as a web developer in 2018, having discovered my
                passion for creating digital experiences that are both beautiful and
                functional. My background in computer science, combined with my eye
                for design, allows me to bridge the gap between aesthetics and
                functionality.
              </p>
              <p className="mb-6 text-muted-foreground">
                I believe that great design is not just about how things look, but
                also about how they work. This philosophy guides my approach to
                every project I undertake.
              </p>
              <Button className="gap-2">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-secondary rounded-full px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="h-5 w-5" />
              <h2 className="text-2xl font-semibold">Work Experience</h2>
            </div>
            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-border">
                  <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-primary"></div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.period}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.role}</h3>
                  <div className="text-primary mb-2">{item.company}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-border">
                  <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-primary"></div>
                  <div className="text-sm text-muted-foreground mb-1">
                    {item.period}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.degree}</h3>
                  <div className="text-primary mb-2">{item.institution}</div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
