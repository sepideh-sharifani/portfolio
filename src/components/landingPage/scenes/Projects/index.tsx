import { SelectedPage, ProjectType } from "@/shared/types";
import { motion } from "framer-motion";
import ProjectsData from '@/components/landingPage/scenes/Projects/ProjectData'
import Project from "./Project";
import { Link } from "react-router-dom";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Projects = ({ setSelectedPage }: Props) => {
    return (
        <section id="projects" className='bg-white'>
            <motion.div className="pt-20"
                onViewportEnter={() => { setSelectedPage(SelectedPage.Projects) }}>
                <fieldset className='border-t-2 border-black text-center'>
                    <legend className='px-2 font-extrabold text-4xl md:text-6xl'>My{' '}<span className='text-gray-2'>Projects</span></legend>
                </fieldset>
                <div className="mt-10 p-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6 m-auto">
                    {ProjectsData.slice(0, 3).map((item: ProjectType) => (
                        <Project
                            key={item.id}
                            name={item.name}
                            link1={item.link1}
                            link2={item.link2}
                            image={item.image}
                            image1={item.image1}
                            image2={item.image2}
                            image3={item.image3}
                            image4={item.image4}
                            description={item.description}
                            TeckStack={item.TechStack}
                        />
                    ))}

                </div>
            </motion.div>
            <Link to='/projects'><button className="m-auto transition delay-150 duration-300 flex items-center justify-center bg-orange-10 w-40 h-10 font-bold rounded-md mt-20 hover:bg-gray-2 hover:text-white">view all projects</button></Link>
        </section>
    )
}

export default Projects