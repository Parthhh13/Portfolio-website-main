
import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science (AI Specialization)",
      institution: "NIIT University, Neemrana",
      duration: "2020 - 2024",
      gpa: "8.18/10",
      description: "Specialized in Artificial Intelligence with coursework covering Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and related fields.",
      achievements: [
        "Secured highest marks in AI/ML courses",
        "Selected for competitive research projects",
        "Developed multiple AI applications as part of coursework"
      ]
    },
    {
      degree: "Class XII, CBSE",
      institution: "St. Mary's Academy, Saharanpur",
      duration: "2019 - 2020",
      gpa: "93.4%",
      description: "Focused on Science stream with specialization in Computer Science, Mathematics and Physics.",
      achievements: [
        "School topper in Computer Science",
        "Participated in regional science competitions"
      ]
    },
    {
      degree: "Class X, CBSE",
      institution: "St. Mary's Academy, Saharanpur",
      duration: "2017 - 2018",
      gpa: "90.6%",
      description: "Comprehensive education with strong foundation in Science and Mathematics.",
      achievements: [
        "Received academic excellence award",
        "Active participant in extracurricular activities"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center mb-14">
              <GraduationCap className="h-12 w-12 text-portfolio-blue mb-4" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-portfolio-darkGray mb-4 text-center">
                Education
              </h1>
              <div className="w-20 h-1 bg-portfolio-blue rounded mb-6"></div>
              <p className="text-portfolio-gray text-lg text-center max-w-2xl">
                My academic journey and qualifications that have shaped my expertise in AI and Machine Learning.
              </p>
            </div>

            <div className="space-y-12 max-w-4xl mx-auto">
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg p-6 md:p-8 border-l-4 border-portfolio-blue hover:shadow-xl transition duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-portfolio-darkGray">{item.degree}</h2>
                    <div className="flex items-center text-portfolio-gray mt-2 md:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{item.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 text-portfolio-blue mr-2" />
                      <span className="text-lg font-medium">{item.institution}</span>
                    </div>
                    <div className="bg-portfolio-lightBlue text-portfolio-blue px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                      GPA: {item.gpa}
                    </div>
                  </div>
                  
                  <p className="text-portfolio-gray mb-4">
                    {item.description}
                  </p>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-portfolio-darkGray mb-2">Key Achievements:</h3>
                    <ul className="list-disc list-inside space-y-1 text-portfolio-gray">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Education;
