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
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="fixed bottom-5 right-5 inline-block rounded-full bg-danger p-2 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:scale-125 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]"
          onClick={handleOnScroll}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke-width="2.5"
            stroke="currentColor"
            class="h-4 w-4"
          >
            <path
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
