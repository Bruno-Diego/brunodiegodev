import { motion } from "framer-motion";
import { styles } from "../styles";
import { GlobeCanvas } from "./canvas";

import { slideIn } from "../utils/motion";

const Hero = () => {
    const handleAcceptClick = () => {
        const cookieSection = document.querySelector(".cookieSec")
        // // // const cookieBox = document.querySelector(".wrapper");
        // const acceptBtn = document.querySelector(".button");
        
        // acceptBtn.onclick = () => {
        //   setting cookie for 1 month, after one month it'll be expired automatically
          document.cookie = "CookieBy=BrunoDS; max-age="+60*60*24*30;
          if(document.cookie){ //if cookie is set
            cookieSection.classList.add("invisible"); //hide cookie box
          }else{ //if cookie not set then alert an error
            alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
          }
        // }
        let checkCookie = document.cookie.indexOf("CookieBy=BrunoDS"); //checking our cookie
        // if cookie is set then hide the cookie box else show it
        checkCookie != -1 ? cookieSection.classList.add("invisible") : cookieSection.classList.remove("invisible");
    }
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
                    <p className={`${styles.heroSubText} mt-2 text-white-100 sm:text-sm ease-in`}>
                        I develop user interfaces and web applications<br className='sm:block hidden' />
                        that will give solutions to help your bussiness grow<br className='sm:block hidden' />
                        and be more present in the digital world
                    </p>
                </div>
            </div>
            <section className="cookieSec fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl z-50">
                <h2 className="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h2>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">We use cookies to ensure that we give you the best experience on our website. <a href="https://commission.europa.eu/cookies-policy_en" className="text-blue-500 hover:underline" target="_blank">Read cookies policies</a>. </p>
                
                <div className="wrapper flex items-center justify-between mt-4 gap-x-4 shrink-0">
                    <button onClick={handleAcceptClick} className="button text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
                        Accept
                    </button>
                </div>
            </section>
            <div className={`flex grow justify-center overflow-hidden h-full absolute inset-x-0 top-2/4`}>
                <motion.div initial="hidden" animate="show" variants={slideIn("up", "", 1, 6)}>
                    <GlobeCanvas />
                </motion.div>
            </div>
            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center gap-5 z-45 px-5 py-5'>
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