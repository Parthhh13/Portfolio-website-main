import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import emailjs from 'emailjs-com';
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [50, 0, 0, -50]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'service_axdlyu8',
      'template_w908j0j',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'myIKo90R0raiAclxh'
    )
    .then((result) => {
        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
    }, (error) => {
        toast({
          title: "Error",
          description: "Message could not be sent. Please try again later.",
        });
    });
  };

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      id="contact"
      className="py-16 md:py-24 bg-background/50 text-foreground"
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
            <form onSubmit={handleSubmit} className="space-y-4 bg-[#181f2a] p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  value={formData.message} 
                  onChange={handleChange} 
                  required
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
