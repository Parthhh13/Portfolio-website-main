
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-portfolio-darkGray mb-12 text-center">
          Education
        </h2>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-portfolio-darkGray">Bachelor of Technology (B.Tech), Computer Science and Engineering (AI & ML)</CardTitle>
              <CardDescription className="text-portfolio-blue font-medium">NIIT University</CardDescription>
              <p className="text-portfolio-gray text-sm">2021 - 2025</p>
              <p className="text-portfolio-gray text-sm">Neemrana, Rajasthan</p>
            </CardHeader>
            <CardContent>
              <p className="text-portfolio-darkGray mb-4">CGPA: 7.33/10</p>
              <div>
                <h4 className="font-semibold mb-2 text-portfolio-darkGray">Key Achievements:</h4>
                <ul className="list-disc pl-5 space-y-1 text-portfolio-gray">
                  <li>2nd Position Hack the Verse'23</li>
                  <li>2nd Runner Up Semicolons (Coding Club) Hackathon</li>
                  <li>3rd in Accelotek'23</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-portfolio-darkGray">Higher Secondary (XII), Science</CardTitle>
              <CardDescription className="text-portfolio-blue font-medium">Ryan International School</CardDescription>
              <p className="text-portfolio-gray text-sm">2019 - 2021</p>
              <p className="text-portfolio-gray text-sm">Gurugram, Haryana</p>
            </CardHeader>
            <CardContent>
              <p className="text-portfolio-darkGray mb-4">Percentage: 94%</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-portfolio-darkGray">Secondary (X)</CardTitle>
              <CardDescription className="text-portfolio-blue font-medium">Ryan International School</CardDescription>
              <p className="text-portfolio-gray text-sm">Graduated 2019</p>
              <p className="text-portfolio-gray text-sm">Gurugram, Haryana</p>
            </CardHeader>
            <CardContent>
              <p className="text-portfolio-darkGray">Percentage: 94%</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
