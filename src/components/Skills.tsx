
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, BookOpen, Laptop, School, Book } from "lucide-react";

const skillsCategories = [
  {
    title: "Artificial Intelligence",
    icon: <Laptop className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Predictive Analytics"]
  },
  {
    title: "Programming & Frameworks",
    icon: <Code className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["Python", "JavaScript", "MongoDB", "React", "Express.js", "Node.js", "HTML/CSS", "SQL", "TensorFlow"]
  },
  {
    title: "Data Science",
    icon: <Database className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["Data Structures", "Data Analysis", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"]
  },
  {
    title: "Specialized Skills",
    icon: <BookOpen className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["IoT", "Java", "OpenCV", "Git", "Streamlit", "Flask", "RESTful APIs", "FAISS"]
  },
  {
    title: "Education",
    icon: <School className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["B.Tech in Computer Science (AI Specialization)", "NIIT University", "GPA: 8.18/10"]
  },
  {
    title: "Soft Skills",
    icon: <Book className="h-6 w-6 text-portfolio-blue mb-2" />,
    skills: ["Leadership", "Communication", "Teamwork", "Problem Solving", "Time Management", "Theatre Arts"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-portfolio-darkGray mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-portfolio-gray text-center mb-12 max-w-2xl mx-auto">
          My technical and soft skills that I've developed through academic projects, 
          internships, and personal interests.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsCategories.map((category, index) => (
            <Card key={index} className="animate-fade-in">
              <CardContent className="p-6">
                <div className="flex flex-col items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-portfolio-darkGray">{category.title}</h3>
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
