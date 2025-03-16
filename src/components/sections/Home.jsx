import{ RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-400 via-pink-500 to-rose-400 bg-clip-text text-transparent leading-tight ">Hi, I'm Claire Nguyen</h1>

                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm a Business Analytics undergraduate at Deakin University. I'm fascinated by the intersection of business strategy and data-driven decision making, with the goal of solving real-world business challenges through analytics.
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                    <a href="#experience"
                        className="bg-pink-300 text-white py-3 px-6 rounded font-bold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236, 72, 153, 0.4)]"    >
                        Experience
                    </a>

                    <a href="#contact"
                        className="border border-pink-500/50 text-pink-500 py-3 px-6 rounded font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236, 72, 153, 0.2)] hover:bg-pink-500/10"    >
                        Contact Me
                    </a>
                    </div>
                    
                </div>
            </RevealOnScroll>
        </section>
    )
}