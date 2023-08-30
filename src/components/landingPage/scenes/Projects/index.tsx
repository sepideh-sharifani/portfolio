import { SelectedPage, ProjectType } from "@/shared/types";
import { motion } from "framer-motion";
import ProjectsData from "@/components/landingPage/scenes/Projects/ProjectData";
import Project from "./Project";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LanguageContext, Text } from "@/container/Language";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Projects = ({ setSelectedPage }: Props) => {
  const { userLanguage } = useContext(LanguageContext);
  return (
    <section
      dir={userLanguage === "fa" ? "rtl" : "ltr"}
      id="projects"
      className="bg-white"
    >
      <motion.div
        className="pt-20"
        onViewportEnter={() => {
          setSelectedPage(SelectedPage.Projects);
        }}
      >
        <fieldset className="block border-t-2 border-black text-center">
          <legend className="relative m-auto px-2 text-4xl font-extrabold md:text-6xl">
            {userLanguage === "fa" ? (
              <>
                <Text tid="projects" />{" "}
                <span className="text-gray-2">
                  <Text tid="my" />
                </span>
              </>
            ) : (
              <>
                <Text tid="my" />{" "}
                <span className="text-gray-2">
                  <Text tid="projects" />
                </span>
              </>
            )}
          </legend>
        </fieldset>
        <div className="m-auto mt-10 grid gap-6 p-10 sm:grid-cols-2 md:grid-cols-3">
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
      <Link to="/projects">
        <button className="m-auto mt-20 flex h-10 w-44 items-center justify-center rounded-md bg-orange-10 font-bold transition delay-150 duration-300 hover:bg-gray-2 hover:text-white">
          <Text tid="view all projects" />
        </button>
      </Link>
    </section>
  );
};

export default Projects;
