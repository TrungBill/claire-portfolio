import{ RevealOnScroll } from '../RevealOnScroll';

export const Contact = () => {
    return(
        <section id="contact" className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
                <div className='px-4 w-150'>
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-400 via-pink-500 to-rose-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>

                    <form className='space-y-6'>
                        <div className='relative'>
                            <input type='text' required id='name' placeholder='Name'  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-pink-500/5" />
                            
                           
                        </div>

                        <div className='relative'>
                            <input type='email' required id='email' placeholder='Email'  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-blue-500/5" />
                        </div>

                        <div className='relative'>
                            <textarea placeholder='Message' rows={5} required  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-pink-500 focus:bg-blue-500/5" />
                        </div>

                        <button type='submit' className="bg-pink-500 text-white py-3 px-6 rounded font-bold transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(236, 72, 153, 0.4)]">
                            Submit
                        </button>
                    </form>
                </div>
            </RevealOnScroll>

        </section>
    )
}
