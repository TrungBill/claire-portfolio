import { RevealOnScroll } from "../RevealOnScroll"
import { FaAward, FaTrophy } from "react-icons/fa" // Import icons

export const Experience = () => {
    const techStack = ["RapidMiner","Power BI", "Risk Analysis","Decision Tree Operator","Naive Bayes Operator", "Ensemble"]

    const techStack2 = ["Data Prep","Modeling","Clustering", "Association Rule Mining","Performance Metrics", "Power BI", "Risk Analysis"]
    return(
        <section id = "experience"className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-400 via-pink-500 to-rose-400 bg-clip-text text-transparent text-center" > Experience</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-2">Relevant Course Work</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="text-gray-400"><strong>Digital Business Analysis</strong></li>
                            <li className="text-gray-400"><strong>Business Analytics</strong></li>
                            <li className="text-gray-400"><strong>Introduction to Data Science and Artificial Intelligence</strong></li>
                            <li className="text-gray-400"><strong>Database Fundamentals</strong></li>
                            <li className="text-gray-400"><strong>Managing Data and Information</strong></li>
                           
                        </ul>
                    </div>
                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-2" >Achievements and Certifications</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="text-gray-400">
                                <strong>2024 Deakin Bowater Business Challenge - Fourth Place</strong>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    <a 
                                        href="/cert.png" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center bg-gradient-to-r from-gray-400 via-pink-500 to-rose-400 text-white py-0.5 px-2 rounded text-xs hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(236,72,153,0.4)] transition-all"
                                    >
                                        <FaAward className="mr-1 text-xs" /> View Certificate
                                    </a>
                                    <a 
                                        href="https://businessnewsroom.deakin.edu.au/news/2024/09/students-solve-real-business-problem-for-vision-radiology/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center bg-transparent border border-pink-500 text-pink-500 py-0.5 px-2 rounded text-xs hover:bg-pink-500/10 hover:-translate-y-0.5 hover:shadow-[0_0_10px_rgba(236,72,153,0.2)] transition-all"
                                    >
                                        <FaTrophy className="mr-1 text-xs" /> View Competition
                                    </a>
                                </div>
                            </li>
                            <li className="text-gray-400"><strong>Powerbi Essential Training</strong></li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-2" >Project 1: Fraud Detection in Personal Injury Claim</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ">
                            <li className="text-gray-400"><strong>Developed a predictive model to identify fraudulent insurance claims for DAX Compensation Lawyers</strong></li>
                            <li className="text-gray-400"><strong> Utilized a dataset of over 3,000 claims to create models using decision trees, k-NN, and ensemble methods</strong></li>
                            <li className="text-gray-400"><strong> Achieved a model accuracy of up to 96.83% with a kappa of 0.186, enhancing claim screening processes and reducing
                            financial losses</strong></li>
                        </ul>

                        <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech, key) => (
                                        <span key={key} className="backdrop-blur-sm bg-white/10 py-1 px-3 rounded-full text-sm border border-white/20 hover:bg-pink-500/20 hover:border-pink-500/30 hover:shadow-[0_0_8px_rgba(236,72,153,0.3)] transition-all">{tech}</span>
                                    ))}
                                </div>

                        <div className="flex justify-end mt-4">
                            <a href="/a1.pdf" target="blank" className="text-pink-500 hover:text-pink-400 transition-colors ">View Project -{'> '} </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-2" >Project 2: Compensation Structure Optimization</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 ">
                            <li className="text-gray-400"><strong>Conducted a comprehensive analysis using nearly 120,000 data points to optimize employee compensation structures</strong></li>
                            <li className="text-gray-400"><strong> Employed linear regression, clustering, and FP-Growth models to predict total compensation, analyze job family-union
                            relationships, and identify disparities in benefits</strong></li>
                            <li className="text-gray-400"><strong> Improved predictive accuracy and informed strategic HR decisions through detailed visualizations and data-driven insights </strong></li>
                        </ul>

                        <div className="flex flex-wrap gap-2">
                                    {techStack2.map((tech, key) => (
                                        <span key={key} className="backdrop-blur-sm bg-white/10 py-1 px-3 rounded-full text-sm border border-white/20 hover:bg-pink-500/20 hover:border-pink-500/30 hover:shadow-[0_0_8px_rgba(236,72,153,0.3)] transition-all">{tech}</span>
                                    ))}
                                </div>

                        <div className="flex justify-end mt-4">
                            <a href="/a2.pdf " target="blank" className="text-pink-500 hover:text-pink-400 transition-colors ">View Project -{'> '} </a>
                        </div>
                    </div>
                    

                   
                </div>
            </div>
            </RevealOnScroll>
            
        </section>
    )
}