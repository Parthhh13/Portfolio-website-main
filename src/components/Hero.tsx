import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 space-y-6 animate-fade-in">
          <p className="text-portfolio-blue font-medium">Hello, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white">
            Parth Pahwa
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-200">
            AI & Software Engineer
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl">
            Final year B.Tech student specializing in AI with a strong academic record and a portfolio of impactful  projects. <br />
            Proficient in ML, DL, NLP, and CV, with hands-on experience in full-stack development (React, Flask, Node.js). 
            I build scalable, intelligent solutions and leverage Gen-AI to accelerate development and deliver results efficiently.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild className="flex items-center gap-2 group">
              <a href="#projects">
                View My Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" /> 
              <a href="/Portfolio-website-main/documents/ParthPahwaFResume.pdf" download>Download Resume</a>
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:w-2/5 flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="bg-portfolio-lightBlue w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="/Portfolio-website-main/images/profile/Formal 1.jpg" 
                alt="Parth Pahwa" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
