
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
}

const CertificationsSection = () => {
  const certifications: Certification[] = [
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM / Coursera",
      date: "2023",
      link: "#"
    },
    {
      title: "Google Data Analytics Certificate",
      issuer: "Google / Coursera",
      date: "2023",
      link: "#"
    },
    {
      title: "Machine Learning",
      issuer: "Stanford / Coursera (Andrew Ng)",
      date: "2022",
      link: "#"
    },
    {
      title: "Kaggle Competitions",
      issuer: "Kaggle",
      date: "2022-Present",
      link: "#"
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
    <section className="section-container bg-secondary/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Certifications & Learning</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Continuous learning is at the core of my professional journey
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-4xl mx-auto space-y-6"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="card p-6 flex items-start gap-4"
          >
            <div className="p-2 rounded-full bg-primary/10">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1">
                <h3 className="text-xl font-medium">{cert.title}</h3>
                <span className="text-sm text-muted-foreground">{cert.date}</span>
              </div>
              <p className="text-muted-foreground mb-3">Issued by {cert.issuer}</p>
              <Button asChild variant="outline" size="sm">
                <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1">
                  Verify
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CertificationsSection;
