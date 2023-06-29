import { motion } from "framer-motion";
import { styles } from "../styles";
import { GlobeCanvas } from "./canvas";

import { slideIn } from "../utils/motion";

const Hero = () => {
    return (
        <section className={`relative flex flex-column w-full h-screen mx-auto overflow-hidden`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                    <div className='w-1 sm:h-80 h-40 violet-gradient' />
                </div>

                <div>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        <span className="ease-in">Hi! I'm Bruno</span>

                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100 ease-in`}>
                        I develop user interfaces and web applications<br className='sm:block hidden' />
                        that will give solutions to help your bussiness grow<br className='sm:block hidden' />
                        and be more present in the digital world
                    </p>
                </div>
            </div>
            <div className={`flex grow justify-center overflow-hidden h-full absolute inset-x-0 top-2/4`}>
                <motion.div initial="hidden" animate="show" variants={slideIn("up", "", 1, 6)}>
                    <GlobeCanvas />
                </motion.div>
            </div>
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center gap-5 z-50 px-5 py-5'>
                {/* Make the message stand out */}
                <a href='#about'>
                    <p className='flex flex-row justify-center items-center gap-5 mb-2'>
                        <span className='text-white text-xl uppercase font-bold cursor-pointer ease-in hover:scale-110 duration-300 transition-all hover:rounded-lg hover:outline hover:outline-4 hover:outline-white outline-none'>Explore</span>
                    </p>
                    <div className='w-[35px] h-[64px]  flex justify-center items-start p-2 mx-auto'>
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-white mb-1'
                        />
                    </div>
                </a>
            </div>
        </section >
    )
}

export default Hero;