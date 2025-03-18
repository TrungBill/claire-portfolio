import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa';

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-[rgba(10,10,10,0.9)] backdrop-blur-lg border-t border-white/10 py-8 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <p className="text-gray-400 text-sm">
                            © {currentYear} Claire Nguyen. All rights reserved.
                        </p>
                    </div>
                    
                    <div className="flex space-x-6">
                        <a 
                            href="https://www.linkedin.com/in/claire-nguyen-694894281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-500 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={24} />
                        </a>
                       
                       
                       
                    </div>
                </div>
                
                
            </div>
        </footer>
    );
};