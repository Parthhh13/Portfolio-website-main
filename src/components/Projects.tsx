import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Code } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Machine Learning-based Intrusion Detection System (IDS)",
    description: "Authored a comprehensive research paper on enhancing traditional Intrusion Detection Systems using Machine Learning algorithms to improve security measures and threat detection capabilities.",
    technologies: ["Machine Learning", "Security", "Python", "Data Analysis"],
    liveLink: "#",
    githubLink: "#",
    image: "/Portfolio-website-main/images/projects/ML IDS.jpg"
  },
  {
    id: 2,
    title: "Pet Friendly City Website",
    description: "Developed a comprehensive web platform that helps pet owners discover and navigate pet-friendly locations in cities. Features include interactive maps of pet-friendly parks, restaurants, and services, user reviews and ratings, emergency vet locator, and a community forum for pet owners to share experiences.",
    technologies: ["React", "Node.js", "MongoDB",  "Express.js", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
    image: "/Portfolio-website-main/images/projects/Pet.png"
  },
  {
    id: 3,
    title: "Digibuddy chatbot",
    description: "Developed a sophisticated chatbot system with React frontend and Django backend. Implemented advanced NLP capabilities using fine-tuned LLMs and RAG (Retrieval-Augmented Generation) for enhanced contextual understanding and accurate responses. Features include real-time chat interface, context-aware responses, and seamless integration of multiple tools.",
    technologies: ["RAG", "LLMs", "Django", "React", "Tailwind CSS", "Python"],
    liveLink: "#",
    githubLink: "#",
    image: "/Portfolio-website-main/images/projects/digibuddy.png"
  },
  {
    id: 4,
    title: "Supermarket Inventory Tracking System with AI",
    description: "A capstone project that improves supermarket operations through AI. Designed and deployed a full-stack web application featuring an AI-driven inventory management system with predictive analytics for automated demand forecasting and smart restocking.",
    technologies: ["AI", "Full-Stack", "Predictive Analytics", "Inventory Management"],
    liveLink: "#",
    githubLink: "#",
    image: "/Portfolio-website-main/images/projects/Supermarket.png"
  },
  {
    id: 5,
    title: "Plant Disease Classification using Computer Vision",
    description: "Personal project focused on plant disease classification using computer vision. Developed an AI-powered plant disease detection system using Computer Vision and ML models, achieving 95% accuracy. Built a frontend-integrated API for real-time image-based predictions.",
    technologies: ["Computer Vision", "ML", "API", "Image Processing"],
    liveLink: "#",
    githubLink: "#",
    image: "/Portfolio-website-main/images/projects/Plant.jpg"
  },
  {
    id: 6,
    title: "IoT-based Fitness Tracker",
    description: "Designed and implemented a database management system to efficiently track cultural exchange programs across countries and institutions, enabling streamlined data organization and retrieval.",
    technologies: ["IoT", "Database Design", "Data Management"],
    liveLink: "#",
    githubLink: "#",
    image: "/Portfolio-website-main/images/projects/Iot based fitness tracker.jpg"
  }
];

const Projects = () => {
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
      id="projects" 
      className="py-16 md:py-24 bg-background text-foreground scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center"
        >
          Featured Projects
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-center mb-12 max-w-2xl mx-auto"
        >
          Here are some of my key projects showcasing my expertise in AI, Machine Learning, 
          and software development.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-background/50 backdrop-blur-sm border border-white/10 h-[550px] flex flex-col">
                <div className="h-48 bg-portfolio-blue/20 overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                        asChild
                      >
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                        asChild
                      >
                        <a href="https://github.com/Parthhh13" target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-portfolio-blue transition-colors duration-300">{project.title}</h3>
                  <p className="text-white mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-portfolio-lightBlue/20 text-portfolio-blue text-xs rounded-full hover:bg-portfolio-lightBlue/40 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
