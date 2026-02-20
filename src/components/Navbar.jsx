import { Button } from "./ui/button";

function Navbar() {
  // Navbar for a video sharing platform
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-50 text-gray-100 shadow-md">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/image.png" alt="Logo" className="h-16 w-32" />
        {/* <span className="text-2xl font-bold text-indigo-500">नव्य ईक्षण</span> */}
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-4">
        {/* Link Style */}
        {["Home", "About", "Contact"].map((link) => (
          <li key={link}>
            <a
              href="#"
              className="
                px-3 py-1 rounded-md 
                bg-gray-800 text-gray-100
                border border-transparent
                hover:bg-indigo-600 hover:text-white
                transition-colors duration-200
                shadow-sm
              "
            >
              {link}
            </a>
          </li>
        ))}

        {/* Sign In Button */}
        <li>
          <Button variant="default" className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 shadow-md"
          >
            Sign In
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
