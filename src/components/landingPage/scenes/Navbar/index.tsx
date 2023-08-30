import { useState } from "react";
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineHome,
} from "react-icons/ai";
import { FaAngellist, FaLinkedin } from "react-icons/fa";
import { VscProject } from "react-icons/vsc";
import { MdOutlineContactMail } from "react-icons/md";
import BannerLogo from "@/assets/BannerLogo.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import Link from "./Link";
import LanguageSelector from "../../languageIdentifier/LanguageSelector";
import { Text } from "@/container/Language";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isAtTop: boolean;
};

const Navbar = ({ isAtTop, selectedPage, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:900px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  return (
    <nav>
      <div className="fixed top-0 z-30 flex h-[65px] w-full items-center justify-between bg-gray-1 shadow-xl">
        <div className="mx-auto flex w-11/12 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-20">
            <img src={BannerLogo} alt="logo" className="my-2 w-56" />
            <LanguageSelector />
            {isAboveMediumScreens ? (
              <div className="flex w-full items-center justify-between">
                <div className=" flex items-center justify-between gap-6 text-sm font-bold">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About Me"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Projects"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Me"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="flex gap-4 text-2xl">
                    <a
                      href="https://github.com/sepideh-sharifani"
                      target="_blank"
                    >
                      <AiOutlineGithub className="rounded-full text-2xl transition delay-150 ease-in-out hover:-translate-y-4 hover:bg-gray-2 hover:bg-opacity-70" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sepideh-sharifani/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl transition delay-150 ease-in-out hover:-translate-y-4 hover:bg-gray-2 hover:bg-opacity-70" />
                    </a>
                  </div>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    <Text tid="Hire Me" />
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="flex items-center justify-center rounded-full bg-gray-2 p-2 hover:h-12 hover:w-12 hover:text-xl"
                onClick={() => {
                  setIsMenuToggled(!isMenuToggled);
                }}
              >
                <AiOutlineMenu className="text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] bg-gray-1 drop-shadow-xl">
          <div className="flex justify-end p-4">
            <button
              className="flex items-center justify-center rounded-full bg-gray-2 p-2 text-xl text-white hover:h-12 hover:w-12"
              onClick={() => {
                setIsMenuToggled(!isMenuToggled);
              }}
            >
              <AiOutlineClose />
            </button>
          </div>
          <span className="m-auto block w-11/12 border-b-2 border-gray-2"></span>
          <div className=" mt-3 flex flex-col items-start justify-between gap-6 px-5 text-sm font-bold">
            <div className="flex items-center justify-center">
              <AiOutlineHome className="mr-4 text-2xl text-gray-2" />
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="flex items-center justify-center">
              <FaAngellist className="mr-4 text-xl text-gray-2" />
              <Link
                page="About Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="flex items-center justify-center">
              <VscProject className="mr-4 text-xl text-gray-2" />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
            <div className="flex items-center justify-center">
              <MdOutlineContactMail className="mr-4 text-xl text-gray-2" />
              <Link
                page="Contact Me"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
