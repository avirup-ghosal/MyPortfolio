import { PROJECTS } from "../constants";
import {motion} from 'framer-motion'
const Projects=()=>{
    return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:0.5}} className="my-20 text-center text-4xl">Projects</motion.h1>
        <div>{PROJECTS.map((project,index)=>(
            <div key={index} className="mb-8 mr-10 flex flex-wrap lg:justify-center">
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:1}} className="w-full mr-10 lg:w-1/4">
                    <img src={project.image} alt={project.title} width={150} height={150}
                    className="mb-6 rounded h-full w-full"
                    />
                </motion.div>
                <motion.div whileInView={{opacity:1,x:0}} initial={{opacity:0,x:100}} transition={{duration:1}} className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech,index)=>(
                    <span key={index} className="my-2 mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">{tech}</span>
                ))}
                </motion.div>
            </div>
        ))}
        </div>
    </div>
)
}

export default Projects;