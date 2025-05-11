import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, BookOpen, Laptop, Rocket, Book } from "lucide-react";

const skillsCategories = [
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: <Laptop className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Full-Stack Development",
    icon: <Code className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["Python", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "HTML/CSS"]
  },
  {
    title: "Data Science & Analysis",
    icon: <Database className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["Data Structures", "Data Analysis", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"]
  },
  {
    title: "Tools & Technologies",
    icon: <BookOpen className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["TensorFlow", "Flask", "Git", "Streamlit", "RESTful APIs", "FAISS"]
  },
  {
    title: "Generative AI & Automation",
    icon: <Rocket className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["Generative AI", "AI-powered content generation", "Automated coding", "Rapid prototyping", "Task automation"]
  },
  {
    title: "Soft Skills",
    icon: <Book className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["Leadership", "Communication", "Teamwork", "Public Speaking","Problem Solving", "Time Management", "Theatre Arts"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      id="skills"
      className="py-16 md:py-24 bg-background/50 text-foreground"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-center mb-12 max-w-2xl mx-auto"
        >
          My technical and soft skills that I've developed through academic projects, 
          internships, and personal interests.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, index) => (
            <Card key={index} className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  {category.icon}
                  <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-xl font-bold text-white"
                  >
                    {category.title}
                  </motion.h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-portfolio-lightBlue text-portfolio-blue rounded-full text-sm hover:bg-portfolio-lightBlue/40 transition-colors duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
