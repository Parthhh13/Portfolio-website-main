import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Avatar } from "@/components/ui/avatar";

const experiences = [
  {
    id: "exp1",
    company: "Labmentix",
    logo: "/Portfolio-website-main/images/companies/Labmentix.png",
    position: "AI and ML Intern",
    period: "May 2023 - Present",
    location: "Gurugram, Haryana",
    description: [
      "Collaborating with Industry Experts: Engaging with seasoned professionals to gain practical insights and mentorship in AI applications",
      "Hands-on Project Development: Working on live AI projects to apply theoretical knowledge to real-world scenarios.",
      "Skill Enhancement and Certification: Participating in Labmentix's structured internship program to acquire industry-recognized certifications and enhance employability"
    ],
    technologies: ["Python", "Machine Learning", "Deep Learning", "Computer Vision"]
  },
  {
    id: "exp2",
    company: "NIIT University",
    logo: "/Portfolio-website-main/images/companies/NIIT.png",
    position: "Teaching Assistant",
    period: "Feb 2023 - May 2023",
    location: "Neemrana, Rajasthan",
    description: [
      "Assisted in the Digital Image Processing course as a Teaching Assistant",
      "Helped students understand complex concepts and algorithms",
      "Conducted practical sessions and provided guidance on assignments",
      "Graded student submissions and provided constructive feedback"
    ],
    technologies: ["Image Processing", "Python", "OpenCV", "Computer Vision"]
  },
  {
    id: "exp3",
    company: "1Stop",
    logo: "/Portfolio-website-main/images/companies/1Stop_logo_New.png",
    position: "Artificial Intelligence Intern",
    period: "June 2022 - August 2022",
    location: "New Delhi, India",
    description: [
      "Gained expertise in NumPy, Pandas, TensorFlow, and Keras for efficient data manipulation and model development",
      "Developed and deployed two live projects: Text Classification and Pet Classification, leveraging both ML and DL models to deliver real-world solutions",
      "Applied industry-standard practices to preprocess data, train models, and evaluate performance metrics"
    ],
    technologies: ["Machine Learning", "AI", "Data Analysis", "Python"]
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  const activeExperience = experiences.find(exp => exp.id === activeTab);

  return (
    <section id="experience" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-12 text-center">
          Where I've Worked
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="md:w-1/4 flex md:flex-col overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 md:space-y-1 pb-4 md:pb-0">
            {experiences.map((exp) => (
              <Button
                key={exp.id}
                variant="ghost"
                className={cn(
                  "justify-start px-4 font-medium border-b-2 md:border-l-2 md:border-b-0 border-gray-200 rounded-none whitespace-nowrap",
                  activeTab === exp.id 
                    ? "text-portfolio-blue border-portfolio-blue bg-portfolio-lightBlue/30" 
                    : "hover:text-portfolio-blue hover:border-portfolio-gray"
                )}
                onClick={() => setActiveTab(exp.id)}
              >
                {exp.company}
              </Button>
            ))}
          </div>
          
          {/* Content */}
          {activeExperience && (
            <div className="md:w-3/4 animate-fade-in">
              <div className="flex items-start gap-4 mb-4">
                <Avatar className="h-16 w-16 border border-gray-200">
                  <img src={activeExperience.logo} alt={`${activeExperience.company} logo`} className="h-full w-full object-cover" />
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {activeExperience.position} <span className="text-portfolio-blue">@ {activeExperience.company}</span>
                  </h3>
                  <p className="text-sm text-gray-300 mb-1">{activeExperience.period}</p>
                  <p className="text-sm text-gray-300">{activeExperience.location}</p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {activeExperience.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-gray-300 mr-2">▹</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {activeExperience.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-portfolio-lightBlue text-portfolio-blue text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
