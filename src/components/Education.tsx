import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Education = () => {
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
      id="education"
      className="py-16 md:py-24 bg-background text-foreground"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-heading text-white mb-12 text-center"
        >
          Education
        </motion.h2>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-[#181f2a] shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Bachelor of Technology (B.Tech), Computer Science and Engineering (AI Specialization)</CardTitle>
                <CardDescription className="text-portfolio-blue font-medium">NIIT University</CardDescription>
                <p className="text-gray-300 text-sm">2022 - 2026</p>
                <p className="text-gray-300 text-sm">Neemrana, Rajasthan</p>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">CGPA: 8.17/10</p>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Batch Topper in 1st year</li>
                    <li>Theatre Society President</li>
                    <li>Organized 20+ events in 4 years</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-[#181f2a] shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Senior Secondary (XII), CBSE</CardTitle>
                <CardDescription className="text-portfolio-blue font-medium">Delhi Public School, Rohini</CardDescription>
                <p className="text-gray-300 text-sm">2022</p>
                <p className="text-gray-300 text-sm">Rohini, Delhi</p>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">Percentage: 97.4%</p>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>School Topper in Maths, Computer Science, and Chemistry</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-[#181f2a] shadow-md hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Secondary (X), CBSE</CardTitle>
                <CardDescription className="text-portfolio-blue font-medium">Laurel High the School</CardDescription>
                <p className="text-gray-300 text-sm">2020</p>
                <p className="text-gray-300 text-sm">Pitampura, Delhi</p>
              </CardHeader>
              <CardContent>
                <p className="text-white mb-4">Percentage: 91.8%</p>
                <div>
                  <h4 className="font-semibold mb-2 text-white">Key Achievements:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    <li>Maths Topper</li>
                    <li>House Captain</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;
