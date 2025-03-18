import { RevealOnScroll } from "../RevealOnScroll"

export const About = () => {
    const techStack = ["Predictive Modeling","Database Mangagement","Risk Analasys","Python", "SQL", "Excel", "Pandas", "NumPy", "Matplotlib","Seaborn","Risk Analysis", "AI Studio", "Power BI", "Google Analytics", "Google Data Studio", "Canva", "Microsoft Office", "Jupyter NoteBook"]
    return(
       

   
        <section id="about" className="min-h-screen flex items-center justify-center" py-20>
             <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-400 via-pink-500 to-rose-400 bg-clip-text text-transparent text-center">About Me</h2>

                    <div className="glass rounded-xl p-8 border-w/10 border hover:-translate-y-1 transition-all">
                        <p className=" text-gray-300 mb-6">
                            I blend analytical thinking with strategic vision to tackle real-world business challenges through data-driven approaches.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Technical Skills 🧑🏻‍💻</h3>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, key) => (
                                        <span key={key} className="backdrop-blur-sm bg-white/10 py-1 px-3 rounded-full text-sm border border-white/20 hover:bg-pink-500/20 hover:border-pink-500/30 hover:shadow-[0_0_8px_rgba(236,72,153,0.3)] transition-all">{tech}</span>
                                    ))}
                                </div>
                                
                            </div>

                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Education 📚</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li className="text-gray-300"><strong>Bachelor of Business Analytics - Deakin Universiy - Melbourne - Current WAM: 80 -  (2023-Current)</strong></li>
                                    <li className="text-gray-300"><strong>Thang Long Highschool - Hanoi, Vietnam - GPA: 9.5/10 - (2019-2022)</strong></li>
                                
                                </ul>
                        </div>

                            
                        </div>

                        
                    </div>
                    
                </div>
            </RevealOnScroll>
        </section>
       
    )
}