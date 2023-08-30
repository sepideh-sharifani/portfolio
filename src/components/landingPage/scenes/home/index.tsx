import { SelectedPage } from "@/shared/types";
import { AiOutlineGithub } from "react-icons/ai";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import Typed from "react-typed";
import resume from "@/assets/porfolioCV.pdf";
import { motion } from "framer-motion";
import me from "@/assets/me.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { LanguageContext, Text } from "@/container/Language";
import { languageOptions } from "@/languages";
import { useContext } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
console.log(languageOptions.en);

const Home = ({ setSelectedPage }: Props) => {
  const { userLanguage } = useContext(LanguageContext);
  return (
    <section
      dir={userLanguage === "fa" ? "rtl" : "ltr"}
      id="home"
      className="bg-gray-20 mt-14 flex h-full flex-col items-center justify-center bg-white bg-homeBg bg-cover bg-bottom pt-20 pb-4 xs:mt-5 xs:pt-0"
    >
      <div className="m-auto flex w-4/5 flex-col items-center justify-around rounded-xl bg-gray-1 bg-opacity-90 p-5 md:h-4/5">
        <motion.div
          className="z-10 mb-4 flex basis-1/3 flex-col-reverse items-center justify-evenly gap-4 md:flex md:flex-row md:gap-20"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        >
          <motion.div
            className="ml-4 flex h-full flex-col items-center justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 2 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex gap-4 text-2xl">
              <a href="https://github.com/sepideh-sharifani" target="_blank">
                <AiOutlineGithub className="rounded-full text-4xl transition delay-150 ease-in-out hover:-translate-y-4 hover:bg-gray-2 hover:bg-opacity-70" />
              </a>
              <a
                href="https://www.linkedin.com/in/sepideh-sharifani/"
                target="_blank"
              >
                <FaLinkedin className="text-4xl transition delay-150 ease-in-out hover:-translate-y-4 hover:bg-gray-2 hover:bg-opacity-70" />
              </a>
            </div>
            <p className="text-center text-xl font-bold text-gray-2">
              <Text tid="Hey" />{" "}
              <span className="text-orange-10">
                <Text tid="Sepideh" />
              </span>
            </p>
            <p className="my-5 h-10 text-center text-xl font-extrabold">
              {userLanguage === "en" ? (
                <Typed
                  strings={[
                    "Passionate Developer😊",
                    "JavaScript/ ReactJS 🔥",
                    "full of energy",
                  ]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              ) : (
                <Typed
                  strings={[
                    " 😊 توسعه دهنده فعال و پر انگیزه ",
                    "JavaScript/ ReactJS 🔥",
                    "پر انرژی",
                  ]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                />
              )}
            </p>
            <p className="text-center text-sm font-bold text-gray-2">
              <Text tid="description" />
            </p>
            <a href={resume}>
              <button className="mt-10 flex h-12 w-40 items-center justify-center rounded-xl bg-orange-10 font-bold transition delay-150 duration-300 hover:bg-gray-2 hover:text-white">
                <Text tid="Resume" />
              </button>
            </a>
          </motion.div>
          <motion.div
            className="w-40 md:w-56"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src={me}
              className="border-spacing-2 rounded-full border border-black p-1"
            />
          </motion.div>
        </motion.div>
      </div>
      <AnchorLink href={`#${SelectedPage.AboutMe}`}>
        <HiOutlineArrowCircleDown
          onClick={() => {
            setSelectedPage(SelectedPage.AboutMe);
          }}
          className="animate-bounce cursor-pointer text-3xl text-gray-2"
        />
      </AnchorLink>
    </section>
  );
};

export default Home;
