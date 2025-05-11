import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-3/5 space-y-6 animate-fade-in">
          <p className="text-portfolio-blue font-medium">Hello, my name is</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-portfolio-darkGray">
            Parth Pahwa
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-portfolio-gray">
            AI & ML Engineer
          </h2>
          <p className="text-lg text-portfolio-gray max-w-2xl">
            Final year B.Tech student specializing in Artificial Intelligence with a strong academic record and a portfolio of impactful AI projects. 
            Proficient in Machine Learning, Deep Learning, NLP, and Computer Vision, with hands-on experience building real-world solutions.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild className="flex items-center gap-2 group">
              <a href="#projects">
                View My Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" /> 
              <a href="public\documents\ParthPahwaFResume.pdf" download>Download Resume</a>
            </Button>
          </div>
        </div>
        <div className="mt-12 md:mt-0 md:w-2/5 flex justify-center md:justify-end animate-fade-in">
          <div className="relative">
            <div className="bg-portfolio-lightBlue w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="public\images\profile\Formal 1.jpg" 
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
