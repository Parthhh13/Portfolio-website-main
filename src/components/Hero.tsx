import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  return (
    <motion.section 
      ref={ref}
      style={{ opacity, scale, y }}
      id="hero" 
      className="pt-28 md:pt-32 lg:pt-36 pb-16 md:pb-20 bg-background text-foreground scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-3/5 space-y-6"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-portfolio-blue font-medium"
          >
            Hello, my name is
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white"
          >
            Parth Pahwa
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-gray-200"
          >
            AI & Software Engineer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-lg text-gray-300 max-w-2xl"
          >
           Final-year B.Tech student specializing in AI, with hands-on experience in building and deploying 
           real-world AI-powered applications. Skilled in Machine Learning, Deep Learning, NLP, and Computer 
           Vision, with expertise in full-stack development using React, Node.js, and Django. Proficient in training
           and fine-tuning LLMs, building scalable AI models, and delivering end-to-end products. I leverage Generative
           AI tools to 10x development speed and turn ideas into impactful solutions, fast.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Button asChild className="flex items-center gap-2 group">
              <a href="#projects">
                View My Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="h-4 w-4" /> 
              <a href="/Portfolio-website-main/documents/ParthPahwaFResume.pdf" download>Download Resume</a>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 md:mt-0 md:w-2/5 flex justify-center md:justify-end"
        >
          <div className="relative">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-portfolio-lightBlue w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-lg"
            >
              <img 
                src="/Portfolio-website-main/images/profile/Formal 1.jpg" 
                alt="Parth Pahwa" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
