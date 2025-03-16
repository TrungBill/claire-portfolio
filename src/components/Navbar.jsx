import { useEffect } from "react";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);
    
    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-6">
                <div className="flex justify-between items-center py-4">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        <span className="text-white-500">Claire Nguyen</span>
                    </a>

                    <div className="md:hidden flex items-center pr-2 z-40"
                        onClick={() => setMenuOpen((prev)=> !prev)}>
                       <span className="text-white text-2xl">&#9776;</span>
                    </div>
                    
                    <div className="hidden md:flex items-center space-x-6 pr-2">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
            
           
        </nav>
    );
};