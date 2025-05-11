import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, Code } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Machine Learning-based Intrusion Detection System (IDS)",
    description: "Authored a comprehensive research paper on enhancing traditional Intrusion Detection Systems using Machine Learning algorithms to improve security measures and threat detection capabilities.",
    technologies: ["Machine Learning", "Security", "Python", "Data Analysis"],
    liveLink: "#",
    githubLink: "#",
    image: "/images/projects/ML IDS.jpg"
  },
  {
    id: 2,
    title: "RAG-Powered Multi-Agent Chatbot",
    description: "Built a powerful chatbot system utilizing RAG (Retrieval-Augmented Generation), blockchain agents, and LLMs. Integrated FAISS for semantic search, routed queries intelligently using tools (calculator, dictionary), and deployed as interactive UI with Streamlit.",
    technologies: ["RAG", "LLMs", "FAISS", "Streamlit", "Blockchain"],
    liveLink: "#",
    githubLink: "#",
    image: "/images/projects/RAG.jpg"
  },
  {
    id: 3,
    title: "Supermarket Inventory Tracking System with AI",
    description: "A capstone project that improves supermarket operations through AI. Designed and deployed a full-stack web application featuring an AI-driven inventory management system with predictive analytics for automated demand forecasting and smart restocking.",
    technologies: ["AI", "Full-Stack", "Predictive Analytics", "Inventory Management"],
    liveLink: "#",
    githubLink: "#",
    image: "/images/projects/Supermarket.png"
  },
  {
    id: 4,
    title: "Plant Disease Classification using Computer Vision",
    description: "Personal project focused on plant disease classification using computer vision. Developed an AI-powered plant disease detection system using Computer Vision and ML models, achieving 95% accuracy. Built a frontend-integrated API for real-time image-based predictions.",
    technologies: ["Computer Vision", "ML", "API", "Image Processing"],
    liveLink: "#",
    githubLink: "#",
    image: "/images/projects/Plant.jpg"
  },
  {
    id: 5,
    title: "IoT-based Fitness Tracker",
    description: "Designed and implemented a database management system to efficiently track cultural exchange programs across countries and institutions, enabling streamlined data organization and retrieval.",
    technologies: ["IoT", "Database Design", "Data Management"],
    liveLink: "#",
    githubLink: "#",
    image: "/images/projects/Iot based fitness tracker.jpg"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-portfolio-lightGray">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-portfolio-darkGray mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-portfolio-gray text-center mb-12 max-w-2xl mx-auto">
          Here are some of my key projects showcasing my expertise in AI, Machine Learning, 
          and software development.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
              <div className="h-48 bg-portfolio-blue/20 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-darkGray mb-2">{project.title}</h3>
                <p className="text-portfolio-gray mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-portfolio-lightBlue text-portfolio-blue text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
