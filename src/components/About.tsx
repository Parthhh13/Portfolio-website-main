const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="md:w-1/2 space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white">About Me</h2>
            <p className="text-white">
            I’m Parth Pahwa, a final-year B.Tech student specializing in Artificial Intelligence 
            at NIIT University, Neemrana. With a robust academic foundation and a portfolio of 
            impactful AI projects, I’m not just focused on learning — I’m focused on delivering results.
            </p>
            <p className="text-white">
            Proficient in Machine Learning, Deep Learning, NLP, and Computer Vision,
            I’ve honed my skills in both building intelligent models and deploying 
            them at scale. My expertise extends to full-stack development (React, Flask, Node.js)
            and DevOps (Docker, CI/CD), enabling me to take AI solutions from concept to production 
            seamlessly. With a hands-on approach, I’ve worked on real-world projects that solve complex 
            problems and create tangible value.
            </p>
            <p className="text-white">
            Throughout my journey, I’ve had the privilege of working with innovative teams at 1Stop and Labmentix, as well as serving as a Teaching Assistant, where I further developed my leadership and communication skills. I thrive in collaborative environments and have consistently demonstrated my ability to lead, solve problems, and drive projects to successful outcomes.
            </p>
            <p className="text-white">
            I’m passionate about leveraging Generative AI to supercharge my productivity and deliver results faster than most could imagine. Whether it’s building models, developing applications, or optimizing workflows, I consistently deliver high-quality solutions with unmatched efficiency.
            </p>
            <p className="text-white">
            When I’m not building the future of AI, you’ll find me expressing my creativity through theater arts, where I channel my passion for storytelling and performance.
            </p>
            <p className="text-white">
            I am confident that my blend of AI expertise, development skills, and relentless drive to innovate will make me your best investment. Let’s build something extraordinary together.
            </p>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Frame behind the image */}
              <div className="absolute top-2 left-2 w-full h-full rounded-lg border-4 border-portfolio-blue z-0"></div>
              {/* Image container */}
              <div className="relative w-full h-full rounded-lg overflow-hidden z-10 shadow-lg">
                <img 
                  src="/Portfolio-website-main/images/profile/Formal 1.jpg" 
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
