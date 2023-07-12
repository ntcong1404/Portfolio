import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
  const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    link_demo,
  }) => {
    return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-5 mt-4 rounded-2xl sm:w-[360px] w-full h-[460px]"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-2xl object-cover"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="  green-pink-gradient p-[1px] rounded-[20px] shadow-card  mr-2 w-9 h-9  flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="Github"
                  className="w-1/2 h-1/2 object-cover"
                />
              </div>
              <div
                onClick={() => window.open(link_demo, "_blank")}
                className="  green-pink-gradient p-[1px] rounded-[20px] shadow-card mr-2 w-9 h-9  flex justify-center items-center cursor-pointer"
              >
                <img
                  src={demo}
                  alt="Link demo"
                  className="w-1/2 h-1/2 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <p
                key={tag.name}
                index={index}
                className={`text-14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    );
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Project.</h2>
      </motion.div>
      <div className="w-full flex ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following project showcases my skills, each project is briefly
          decribed with links to code respsitorries and live demos in it.
        </motion.p>
      </div>
      <div className=" mt-20 flex flex-wrap justify-evenly">
        {projects.map((proj, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...proj} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
