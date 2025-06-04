import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';
import { motion, useScroll, useTransform } from "framer-motion";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    try {
      setIsSubmitting(true);
      
      const result = await emailjs.sendForm(
        'service_1ghpbcm', // Your EmailJS service ID
        'template_i5trsby', // Your EmailJS template ID
        form.current,
        'myIKo90R0raiAclxh' // Your EmailJS public key
      );

      if (result.text === 'OK') {
        toast({
          title: "Success!",
          description: "Thank you for your message. I'll get back to you soon!",
        });
        form.current.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
      console.error('EmailJS Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, scale, y }}
      id="contact"
      className="py-16 md:py-24 bg-background/50 text-foreground scroll-mt-20"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold font-heading text-white mb-4 text-center"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-center mb-12 max-w-2xl mx-auto"
        >
          Have a project in mind or want to discuss potential opportunities? 
          Feel free to reach out!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-portfolio-blue mt-1" />
              <div>
                <h3 className="font-medium text-white">Email</h3>
                <p className="text-gray-300">parthpahwa1301@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-portfolio-blue mt-1" />
              <div>
                <h3 className="font-medium text-white">Phone</h3>
                <p className="text-gray-300">+91 7835938373</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-portfolio-blue mt-1" />
              <div>
                <h3 className="font-medium text-white">Location</h3>
                <p className="text-gray-300">Sector-11, Rohini, New Delhi, India</p>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="font-medium text-white mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  asChild
                >
                  <a href="https://github.com/Parthhh13" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full"
                  asChild
                >
                  <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 bg-[#181f2a] p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="user_name" className="text-white">Name</Label>
                  <Input 
                    id="user_name" 
                    name="user_name" 
                    required 
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <Label htmlFor="user_email" className="text-white">Email</Label>
                  <Input 
                    id="user_email" 
                    name="user_email" 
                    type="email" 
                    required 
                    className="bg-background/50"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  required 
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  required
                  className="bg-background/50"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
