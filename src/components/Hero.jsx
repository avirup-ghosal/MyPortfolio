import { HERO_CONTENT } from "../constants"
import code from "../assets/code.gif"
import {motion} from 'framer-motion'

const container=(delay)=>({
    hidden:{x: -100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})

const Hero=()=>{
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-16 text-6xl font thin tracking-tight lg:mt-16 lg:text-6xl">Avirup Ghosal</motion.h1>
                    <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-3xl tracking-tight">Full Stack Developer</motion.span>
                <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
                  {HERO_CONTENT}
                  <a
                    href="/Avirup_Resume2.pdf"
                    download
                    className="inline-block px-4 py-2 mx-4 bg-violet-500 text-white rounded hover:bg-violet-700 transition"
                  >
                    Download Resume
                </a>
                </motion.p>
                </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img initial={{x:100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:1,delay:1.2}} src={code} alt="Avirup Ghosal" />
                </div>
                </div>
            </div>
        </div>
    )
}
export default Hero