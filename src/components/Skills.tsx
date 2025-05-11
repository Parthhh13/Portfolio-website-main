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
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-white text-center mb-12 max-w-2xl mx-auto">
          My technical and soft skills that I've developed through academic projects, 
          internships, and personal interests.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, index) => (
            <Card key={index} className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-portfolio-lightBlue text-portfolio-blue rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
