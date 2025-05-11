import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-12 text-center">
          Education
        </h2>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          <Card className="bg-[#181f2a] shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Bachelor of Technology (B.Tech), Computer Science and Engineering (AI & ML)</CardTitle>
              <CardDescription className="text-portfolio-blue font-medium">NIIT University</CardDescription>
              <p className="text-gray-300 text-sm">2021 - 2025</p>
              <p className="text-gray-300 text-sm">Neemrana, Rajasthan</p>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">CGPA: 7.33/10</p>
              <div>
                <h4 className="font-semibold mb-2 text-white">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-300">
                  <li>2nd Position Hack the Verse'23</li>
                  <li>2nd Runner Up Semicolons (Coding Club) Hackathon</li>
                  <li>3rd in Accelotek'23</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#181f2a] shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Higher Secondary (XII), Science</CardTitle>
              <CardDescription className="text-portfolio-blue font-medium">Ryan International School</CardDescription>
              <p className="text-gray-300 text-sm">2019 - 2021</p>
              <p className="text-gray-300 text-sm">Gurugram, Haryana</p>
            </CardHeader>
            <CardContent>
              <p className="text-white mb-4">Percentage: 94%</p>
            </CardContent>
          </Card>
          
          <Card className="bg-[#181f2a] shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">Secondary (X)</CardTitle>
              <CardDescription className="text-portfolio-blue font-medium">Ryan International School</CardDescription>
              <p className="text-gray-300 text-sm">Graduated 2019</p>
              <p className="text-gray-300 text-sm">Gurugram, Haryana</p>
            </CardHeader>
            <CardContent>
              <p className="text-white">Percentage: 94%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
