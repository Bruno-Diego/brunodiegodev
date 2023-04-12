import { motion } from "framer-motion";
import { styles } from "../styles";
import { GlobeCanvas } from "./canvas";

import { slideIn } from "../utils/motion";

const Hero = () => {
    return (
        <section className={`relative flex flex-column w-full h-screen mx-auto`}>
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
                        I develop user interfaces<br className='sm:block hidden' />
                        and web applications
                    </p>
                </div>
            </div>
            <div className={`flex grow justify-center overflow-hidden h-2/4 absolute inset-x-0 bottom-0`}>
                <motion.div initial="hidden" animate="show" variants={slideIn("up", "", 3, 6)}>
                    <GlobeCanvas />
                </motion.div>
            </div>
        </section >
    )
}

export default Hero;