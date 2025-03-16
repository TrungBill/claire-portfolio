import { RevealOnScroll } from "../RevealOnScroll"

export const Experience = () => {
    return(
        <section id = "experience"className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-400 via-pink-500 to-rose-400 bg-clip-text text-transparent text-center" > Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-2">Relevant Course Work</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="text-gray-400"><strong>Business Analytics</strong></li>
                            <li className="text-gray-400"><strong>Database Management</strong></li>
                            <li className="text-gray-400"><strong>Statistical Analysis</strong></li>
                            <li className="text-gray-400"><strong>Machine Learning</strong></li>
                            <li className="text-gray-400"><strong>Data Visualization</strong></li>
                            <li className="text-gray-400"><strong>Business Intelligence</strong></li>
                            <li className="text-gray-400"><strong>Big Data</strong></li>
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-2" >Achivements and Certifications</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="text-gray-400"><strong>2024 Deakin Bowater Business Challenge-Fourth Place</strong></li>
                            <li className="text-gray-400"><strong> Placeholder</strong></li>
                            <li className="text-gray-400"><strong>Placeholder</strong></li>
                            
                        </ul>
                    </div>

                   
                </div>
            </div>
            </RevealOnScroll>
            
        </section>
    )
} 