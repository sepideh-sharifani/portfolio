import { useState } from "react";
import { AiFillInstagram, AiOutlineGithub, AiOutlineMenu, AiOutlineClose, AiOutlineHome } from 'react-icons/ai';
import { FaAngellist, FaLinkedin } from 'react-icons/fa';
import { VscProject } from 'react-icons/vsc';
import { MdOutlineContactMail } from 'react-icons/md'
import BannerLogo from '@/assets/BannerLogo.png';
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Link from "./Link";


type Props = {
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
    isAtTop: boolean
}

const Navbar = ({ isAtTop, selectedPage, setSelectedPage }: Props) => {

    const isAboveMediumScreens = useMediaQuery("(min-width:900px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    return (
        <nav>
            <div className="flex items-center justify-between fixed top-0 z-30 w-full h-[65px] bg-gray-1 shadow-xl">
                <div className="flex items-center justify-between mx-auto w-11/12">
                    <div className="flex items-center justify-between w-full gap-20">
                        <img src={BannerLogo} alt="logo" className="w-56 my-2" />
                        {isAboveMediumScreens ? (
                            <div className="flex items-center justify-between w-full">
                                <div className=" flex items-center justify-between gap-6 text-sm font-bold">
                                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="About Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link page="Contact Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                </div>
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex text-2xl gap-4">
                                        <a href="https://github.com/sepideh-sharifani" target="_blank">
                                            <AiOutlineGithub className="text-2xl rounded-full transition ease-in-out delay-150 hover:-translate-y-4 hover:bg-gray-2 hover:bg-opacity-70" />
                                        </a>
                                        <a href="https://www.linkedin.com/in/sepideh-sharifani/" target="_blank">
                                            <FaLinkedin className="text-2xl transition ease-in-out delay-150 hover:-translate-y-4 hover:bg-gray-2 hover:bg-opacity-70" />
                                        </a>
                                    </div>
                                    <ActionButton setSelectedPage={setSelectedPage}>Hire me</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button className="flex items-center justify-center rounded-full bg-gray-2 p-2 hover:w-12 hover:h-12 hover:text-xl" onClick={() => { setIsMenuToggled(!isMenuToggled) }}>
                                <AiOutlineMenu className="text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-gray-1 drop-shadow-xl">
                    <div className="flex justify-end p-4">
                        <button className="flex items-center justify-center rounded-full bg-gray-2 p-2 text-xl text-white hover:w-12 hover:h-12" onClick={() => { setIsMenuToggled(!isMenuToggled) }}><AiOutlineClose /></button>
                    </div>
                    <span className="block border-b-2 border-gray-2 w-11/12 m-auto"></span>
                    <div className=" flex flex-col items-start justify-between gap-6 px-5 mt-3 text-sm font-bold">
                        <div className="flex items-center justify-center">
                            <AiOutlineHome className="text-2xl text-gray-2 mr-4" />
                            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className="flex items-center justify-center">
                            <FaAngellist className="text-xl text-gray-2 mr-4" />
                            <Link page="About Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className="flex items-center justify-center">
                            <VscProject className="text-xl text-gray-2 mr-4" />
                            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                        <div className="flex items-center justify-center">
                            <MdOutlineContactMail className="text-xl text-gray-2 mr-4" />
                            <Link page="Contact Me" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar