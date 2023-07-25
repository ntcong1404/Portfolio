import { motion } from "framer-motion";
import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  const scrollToRef = useRef();

  const handleOnScroll = () => {
    scrollToRef.current.scrollIntoView();
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div
          ref={scrollToRef}
          className="bg-hero-pattern bg-cover bg-no-repeat bg-center"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <StarsCanvas />
        <div
          onClick={handleOnScroll}
          className="fixed bottom-5 right-5 hover:cursor-pointer "
        >
          <div className="w-[26px] h-[40px] rounded-3xl border-2 border-secondary flex justify-center items-start p-1 hover:border-cyan-300 hover:scale-110">
            <motion.svg
              animate={{ y: [-2, 6, -2] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-4 w-4 "
            >
              <path
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                clipRule="evenodd"
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
