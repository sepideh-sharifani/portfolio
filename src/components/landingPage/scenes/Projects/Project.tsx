import { useState, useRef, useEffect } from "react";
import Modals from "./Modals";
import { motion } from 'framer-motion';

type Props = {
    name: string;
    link1: string;
    link2?: string;
    image: string;
    image1?: string;
    image2?: string,
    image3?: string,
    image4?: string,
    description: string;
    TeckStack: string;
}

const Project = ({ name, image, link1, link2, description, TeckStack, image1, image2, image3, image4, }: Props) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <motion.div className="font-sans border border-gray-2 flex flex-col items-center justify-center gap-3 p-2"
            initial='hidden'
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 }, }} >
            <div className=" flex flex-col gap-2">
                <img className='w-full h-[200px] object-cover cursor-pointer'
                    src={image}
                    alt={`${image}`}
                    onClick={() => setOpenModal(true)}
                />
            </div>
            <div className="w-11/12 border border-gray-2" />
            <p className="self-start font-Pacifico tracking-widest px-4">{name}</p>
            <div className="flex gap-3">
                <a href={link1} target="_blank"><p className="text-blue-500 hover:underline">Github</p></a>

                {link2 &&
                    <>
                        <span>/</span><a href={link2} target="_blank"><p className="text-blue-500 hover:underline">Live show</p ></a>
                    </>

                }

            </div>
            {openModal &&
                <Modals onclose={() => setOpenModal(false)} image1={image1} image2={image2} image3={image3} image4={image4}
                    description={description} TeckStack={TeckStack} name={name} image={image} link1={link1} link2={link2} />
            }
        </motion.div >
    )
}

export default Project