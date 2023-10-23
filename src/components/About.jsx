import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, about } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full mx-6 ">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          options={{
            max: 45,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px- min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="  grid grid-cols-2 gap-x-4">
        {about.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", "", 0.2, 1)}
            className=" mt-6 px-10 py-6 bg-tertiary rounded-[20px]  text-secondary text-[15px]  loading-[30px]"
          >
            <p
              className={`${styles.sectionSubText} text-white mb-2  text-decoration: underline`}
            >
              {item?.title}
            </p>
            <ul>
              {item.content?.map((a, index) => (
                <li key={index} className="list-disc mb-2">
                  {a}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <div className="mt-20 flex justify-evenly">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
