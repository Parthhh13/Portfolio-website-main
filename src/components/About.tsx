const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="md:w-1/2 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">About Me</h2>
            <p className="text-white">
              I'm Parth Pahwa, a final-year B.Tech student specializing in Artificial Intelligence 
              at NIIT University, Neemrana, Rajasthan. My academic journey has been focused on 
              developing expertise in various domains of AI.
            </p>
            <p className="text-white">
              With a strong foundation in Machine Learning, Deep Learning, NLP, and Computer Vision, 
              I've worked on multiple impactful projects that solve real-world problems. 
              My experiences at 1Stop, Labmentix, and as a Teaching Assistant have further 
              strengthened my technical and soft skills.
            </p>
            <p className="text-white">
              I'm passionate about exploring all domains of AI and continuously expanding my 
              knowledge. My problem-solving abilities, leadership skills, and effective communication 
              have been key to my success in team projects and academic pursuits.
            </p>
            <p className="text-white">
              When I'm not coding or working on AI projects, I pursue my interest in theater arts, 
              where I find joy in creative expression and performance.
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Frame behind the image */}
              <div className="absolute top-2 left-2 w-full h-full rounded-lg border-4 border-portfolio-blue z-0"></div>
              {/* Image container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden z-10 shadow-lg">
                <img 
                  src="/images/profile/Formal 1.jpg" 
                  alt="Parth Pahwa" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
