import { RevealOnScroll } from '../RevealOnScroll';
import image from '/pic3.jpg' // Move image to root public folder

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0">
            <RevealOnScroll>
                <div className="text-center z-10 px-4 flex flex-col items-center mt-10 sm:mt-0">
                    
                    <div className="mb-8 w-full flex justify-center">
                        <img 
                            src={image}  
                            alt="Claire Nguyen" 
                            className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[280px] md:h-[280px] object-cover rounded-full shadow-xl shadow-gray-900 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl hover:shadow-gray-600"
                        />
                    </div>
                    
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-pink-500 to-rose-400 bg-clip-text text-transparent leading-tight">Hi, I'm Claire Nguyen</h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm a Business Analytics undergraduate at Deakin University. I'm fascinated by the intersection of business strategy and data-driven decision making, with the goal of solving real-world business challenges through analytics.
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                    <a href="#experience"
                        className="bg-gradient-to-r from-gray-400 via-pink-500 to-rose-400 text-white py-3 px-6 rounded font-bold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236, 72, 153, 0.4)]"    >
                        Experience
                    </a>

                    <a href="#contact"
                        className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236, 72, 153, 0.2)] hover:bg-pink-500/10"    >
                        Contact Me
                    </a>

                    
                    </div>

                    <div className="mt-8 mb-12">
                        <a 
                            href="/cv2.pdf" 
                            download
                            className="inline-block bg-gradient-to-r from-gray-400 via-pink-500 to-rose-400 text-white py-3 px-6 rounded font-bold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236, 72, 153, 0.4)]"
                        >
                            Download CV
                        </a>
                    </div>
                    
                </div>
            </RevealOnScroll>
        </section>
    )
}