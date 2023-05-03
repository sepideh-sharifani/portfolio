import { SelectedPage } from '@/shared/types'
import { AiOutlineGithub } from 'react-icons/ai';
import { HiOutlineArrowCircleDown } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa';
import Typed from 'react-typed';
import resume from '@/assets/Sepideh-Sharifani-CV1.pdf';
import { motion } from 'framer-motion';
import me from '@/assets/me.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    return (
        <section id="home" className='bg-white flex flex-col items-center justify-center pt-20 pb-4 bg-gray-20 mt-14 h-full bg-homeBg bg-cover bg-bottom'>
            <div className='flex flex-col items-center justify-around bg-gray-1 w-4/5 h-fit md:h-4/5 p-5 m-auto bg-opacity-90 rounded-xl'>
                <motion.div className='flex flex-col-reverse gap-4 items-center justify-evenly z-10 basis-1/3 mb-4 md:flex md:flex-row md:gap-20'
                    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
                    <motion.div className='flex flex-col justify-center items-center gap-3 ml-4 h-full'
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 2 }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }, }} >
                        <div className="flex text-2xl gap-4">
                            <a href="https://github.com/sepideh-sharifani" target="_blank">
                                <AiOutlineGithub className="text-4xl rounded-full transition ease-in-out delay-150 hover:-translate-y-4 hover:bg-gray-2 hover:bg-opacity-70" />
                            </a>
                            <a href="https://www.linkedin.com/in/sepideh-sharifani/" target="_blank">
                                <FaLinkedin className="text-4xl transition ease-in-out delay-150 hover:-translate-y-4 hover:bg-gray-2 hover:bg-opacity-70" />
                            </a>
                        </div>
                        <p className='text-gray-2 text-xl font-bold text-center'>Hey There, I'm <span className='text-orange-10'>Sepideh</span></p>
                        <p className='text-xl h-10 my-5 font-extrabold text-center'><Typed
                            strings={[
                                "Passionate Developer😊",
                                "JavaScript/ ReactJS 🔥",
                                "full of energy",
                            ]}
                            typeSpeed={50}
                            backSpeed={50}
                            loop
                        />
                        </p>
                        <p className='text-gray-2 text-sm font-bold text-center'>Front End developer who writes clean, elegant and efficient Codes</p>
                        <a href={resume}><button className='transition delay-150 duration-300 flex items-center justify-center bg-orange-10 w-40 h-12 font-bold rounded-xl mt-10 hover:bg-gray-2 hover:text-white'>Get My Resume</button></a>
                    </motion.div>
                    <motion.div className='w-40 md:w-56'
                        initial='hidden'
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 }, }}>
                        <img src={me} className='rounded-full p-1 border border-spacing-2 border-black' />
                    </motion.div>
                </motion.div>
            </div>
            <AnchorLink href={`#${SelectedPage.AboutMe}`}><HiOutlineArrowCircleDown onClick={() => { setSelectedPage(SelectedPage.AboutMe) }} className='text-3xl animate-bounce text-gray-2 cursor-pointer' /></AnchorLink>
        </section >
    )
}

export default Home