import { SelectedPage, TechType } from '@/shared/types'
import me from '@/assets/me.jpg'
import arrow from '@/assets/arrow.png'
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import divider from '@/assets/divider.svg'
import TechData from './TechData';
import Abilites from './Abilities';
import Project from '../Projects/Project';


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const AboutMe = ({ setSelectedPage }: Props) => {
    return (
        <>
            <section id="aboutme" className='bg-white pt-20 pb-0'>
                <motion.div
                    onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}>
                </motion.div>
                <fieldset className='border-t-2 border-black text-center'>
                    <legend className='px-2 font-extrabold text-6xl'>About <span className='text-gray-2'>Me</span></legend>
                </fieldset>
                <p className='text-center text-xl font-extrabold text-gray-2 my-5'>Let Me Introduce Myself</p>
                <article className='bg-gray-1 bg-opacity-50 w-11/12 m-auto px-10 py-5 rounded-xl'>
                    <div className='flex flex-col justify-around items-center mt-5 md:flex md:flex-row '>
                        <div className='flex justify-start self-start'>
                            <p className='tracking-widest'>
                                I graduated from the University of Science and culture with a master's degree in Software Engineering. <br /><br />I used to work in a non-related field as a full-time researcher, and interpreter in computer science. Recently due to my appetence in promoting myself as a web developer, I'm trying to elevate my skills in web and <span className='text-gray-2 font-extrabold'>front-end development</span>. <br /><br /> My specialty is front-end web development. Making designs in Figma and then turning it into beautiful <span className='text-gray-2 font-extrabold'> HTML and CSS codes</span>, Writing the logic behind the scenes via <span className='text-gray-2 font-extrabold'> JavaScript, React</span> codes.  I consider myself a responsible, and punctual person and I'm truely good at team work.
                            </p>
                        </div>
                    </div>
                    <h2 className='text-gray-2 font-extrabold m-auto mb-5 pt-7'>LOOK WHAT I CAN DO: </h2>
                    <div className='grid grid-cols-1 gap-4 md:w-3/4 m-auto xs:grid-cols-2 sm:grid-cols-3'>
                        {
                            TechData.map((item: TechType, i) => (
                                <Abilites
                                    key={i}
                                    name={item.name}
                                    image={item.image} />
                            )
                            )
                        }
                    </div>
                </article>
            </section>
        </>
    )
}

export default AboutMe;