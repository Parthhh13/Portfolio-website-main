
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-portfolio-gray text-sm">
            © {currentYear} Parth Pahwa. All Rights Reserved.
          </p>
          
          <p className="text-portfolio-gray text-sm mt-2 md:mt-0">
            AI & ML Engineer | parthpahwa1301@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
