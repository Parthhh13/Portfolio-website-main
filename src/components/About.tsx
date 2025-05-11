import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
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
      id="about"
      className="py-16 md:py-24 bg-background/50 text-foreground"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 space-y-4"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold font-heading text-white"
            >
              About Me
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white"
            >
              I'm Parth Pahwa, a final-year B.Tech student specializing in Artificial Intelligence 
              at NIIT University, Neemrana. With a robust academic foundation and a portfolio of 
              impactful AI projects, I'm not just focused on learning — I'm focused on delivering results.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-white"
            >
              Proficient in Machine Learning, Deep Learning, NLP, and Computer Vision,
              I've honed my skills in both building intelligent models and deploying 
              them at scale. My expertise extends to full-stack development (React, Flask, Node.js)
              and DevOps (Docker, CI/CD), enabling me to take AI solutions from concept to production 
              seamlessly. With a hands-on approach, I've worked on real-world projects that solve complex 
              problems and create tangible value.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white"
            >
              Throughout my journey, I've had the privilege of working with innovative teams at 1Stop and Labmentix, as well as serving as a Teaching Assistant, where I further developed my leadership and communication skills. I thrive in collaborative environments and have consistently demonstrated my ability to lead, solve problems, and drive projects to successful outcomes.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-white"
            >
              I'm passionate about leveraging Generative AI to supercharge my productivity and deliver results faster than most could imagine. Whether it's building models, developing applications, or optimizing workflows, I consistently deliver high-quality solutions with unmatched efficiency.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-white"
            >
              When I'm not building the future of AI, you'll find me expressing my creativity through theater arts, where I channel my passion for storytelling and performance.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-white"
            >
              I am confident that my blend of AI expertise, development skills, and relentless drive to innovate will make me your best investment. Let's build something extraordinary together.
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Frame behind the image */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-2 left-2 w-full h-full rounded-lg border-4 border-portfolio-blue z-0"
              ></motion.div>
              {/* Image container */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative w-full h-full rounded-lg overflow-hidden z-10 shadow-lg"
              >
                <img 
                  src="/Portfolio-website-main/images/profile/Formal 1.jpg" 
                  alt="Parth Pahwa" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
