import { SelectedPage, TechType } from "@/shared/types";
import me from "@/assets/me.jpg";
import arrow from "@/assets/arrow.png";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import TechData from "./TechData";
import Abilites from "./Abilities";
import { Text } from "@/container/Language";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <>
      <section id="aboutme" className="bg-white pt-20 pb-0">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
        >
          <fieldset className="border-t-2 border-black text-center">
            <legend className="px-2 text-6xl font-extrabold">
              <Text tid="about" />{" "}
              <span className="text-gray-2">
                <Text tid="me" />
              </span>
            </legend>
          </fieldset>
          <p className="my-5 text-center text-xl font-extrabold text-gray-2">
            <Text tid="introduce" />
          </p>
          <article className="m-auto w-11/12 rounded-xl bg-gray-1 bg-opacity-50 px-10 py-5">
            <div className="mt-5 flex flex-col items-center justify-around md:flex md:flex-row ">
              <div className="flex justify-start self-start">
                <p className="tracking-widest">
                  <Text tid="university" /> <br />
                  <br />
                  <Text tid="Experience" />{" "}
                  <span className="font-extrabold text-gray-2">
                    <Text tid="front" />
                  </span>
                  . <br />
                  <br /> <Text tid="speciality" />{" "}
                  <span className="font-extrabold text-gray-2">
                    {" "}
                    <Text tid="HTML" />
                  </span>
                  <Text tid="logic" />{" "}
                  <span className="font-extrabold text-gray-2">
                    {" "}
                    <Text tid="JAVA" />
                  </span>{" "}
                  <Text tid="features" />
                </p>
              </div>
            </div>
            <h2 className="m-auto mb-5 pt-7 font-extrabold text-gray-2">
              <Text tid="LOOK WHAT I CAN DO" />{" "}
            </h2>
            <div className="m-auto grid grid-cols-1 gap-4 xs:grid-cols-2 sm:grid-cols-3 md:w-3/4">
              {TechData.map((item: TechType, i) => (
                <Abilites key={i} name={item.name} image={item.image} />
              ))}
            </div>
          </article>
        </motion.div>
      </section>
    </>
  );
};

export default AboutMe;
