import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import model from "../assets/images/model-1.png";
import mainCar from "../assets/images/primary car.png";
import secondaryCar1 from "../assets/images/secondary car white.png";

const data = [
  {
    icon: icon1,
    label: "Deticated team",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: icon2,
    label: "Liability determination",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: icon3,
    label: "Quality control",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    icon: icon4,
    label: "Proccess management",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const LSection = useRef(null);
  const SSection = useRef(null);
  const FSection = useRef(null);
  const isInViewF = useInView(FSection, { once: false });
  const isInViewS = useInView(SSection, { once: false });
  const isInViewL = useInView(LSection, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInViewF) {
      mainControls.start("visibleF");
    }
    if (isInViewS) {
      mainControls.start("visibleS");
    }
    if (isInViewL) {
      mainControls.start("visibleL");
    }
  }, [isInViewF, isInViewS, isInViewL, mainControls]);

  return (
    <>
      <div
        className={` bg-[#34bb63]  z-0  rounded-full fixed top-1/2 transform -translate-y-1/2 right-0  translate-x-[390px] `}
        style={{ width: `${500 + scrollY * 3}px`, height: `${500 + scrollY * 3}px` }}></div>
      <div className="relative z-10">
        <div className="px-[5rem] h-[calc(100vh-100px)]  flex items-center gap-12">
          <motion.div
            className="min-w-[290px]"
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}>
            <h2 className={`text-[#323233]  leading-[70px] font-semibold font-sans text-[65px] ${scrollY > 350 ? "text-[#F6F7F9]" : ""} transition`}>
              Put your <br /> best fleet <br /> forward
            </h2>
            <div></div>
            <p className={`text-[#626466] ${scrollY > 350 ? "text-[#e1e1e2]" : ""} transition mt-5 font-semibold`}>
              Learn how we can help reduce calms,
              <br /> optimize roccesses and reduce time... <br /> all so you can focus on moving forward.
            </p>
          </motion.div>
          <div className="lg:px-[60px] md:p-[40px] lg:block md:block sm:hidden ">
            <img
              className="max-h-full"
              src={mainCar}
              alt=""
            />
          </div>
        </div>
        <div className="px-[5rem] h-[calc(100vh-144px)] flex justify-between items-center">
          <div>
            <h2 className={`text-[#323233] ${scrollY > 350 ? "text-[#F6F7F9]" : ""} transition leading-[70px] font-semibold font-sans text-[65px] `}>
              A passion <br /> for progress
            </h2>
            <p className={`text-[#626466] mt-7 font-semibold ${scrollY > 350 ? "text-[#e1e1e2]" : ""} transition`}>
              Learn how we can help reduce calms,
              <br /> optimize roccesses and reduce time... <br /> all so you can focus on moving forward.
            </p>
          </div>
          <div className="flex justify-evenly items-center w-4/6">
            <div>
              <img
                src={secondaryCar1}
                alt=""
              />
            </div>
            <div>
              <img
                className="translate-y-6"
                src={secondaryCar1}
                alt=""
              />
              <img
                className="translate-y-[8rem] z-20 relative -translate-x-[8rem]"
                src={secondaryCar1}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="px-[5rem] relative z-10 bg-[#f3f5f8] pt-[105px] pb-[250px]">
          <h2 className="text-[#323233] font-semibold font-sans text-[45px] text-center">Why us?</h2>
          <div
            ref={SSection}
            className="flex items-center   justify-evenly mt-10">
            {data.map((item) => (
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visibleS: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.5, delay: 0.25 }}
                key={item.label}
                className="flex flex-col items-center gap-2 text-center">
                <img
                  src={item.icon}
                  alt=""
                  className="mb-2"
                />
                <h4 className="text-[19px] font-semibold font-sans text-[#323233]">{item.label}</h4>
                <p className="text-center w-3/4 font-sans text-[#262627]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="bg-white relative z-20">
          <div className="flex items-center h-[500px] ">
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visibleL: { opacity: 1 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.8 }}
              className="w-[400px] h-[400px] transform -translate-x-1/2 absolute rounded-full bg-[#34bb63]"></motion.div>
            <div className="w-[18%] "></div>
            <motion.div
              ref={LSection}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visibleL: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.5, once: false }}
              className="w-[35%]  flex justify-center">
              <img
                className="w-3/4 transform -translate-y-[50px]"
                src={model}
                alt=""
              />
            </motion.div>
            <div className=" w-[47%] ps-8 space-y-8">
              <h2 className="text-[#323233] font-semibold font-sans text-5xl pt-10">
                Build for people <br /> by people
              </h2>
              <p className="text-[#262627] w-1/2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero exercitationem laboriosam iure quod voluptates tempora deleniti soluta quisquam.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
