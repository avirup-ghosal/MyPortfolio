import logo from "D:/Portfolio/my-portfolio/src/assets/ag.webp"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import { FaBlog } from "react-icons/fa";


const Navbar=()=>{
    return (
        <nav className=" mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-15 h-15" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/avirup-ghosal-7bb038289"><FaLinkedin></FaLinkedin></a>
                <a href="https://github.com/avirup-ghosal"><FaGithub></FaGithub></a>
                <a href="https://hashnode.com/@avirup2023"><FaBlog /></a>
            </div>
        </nav>
    )
}
export default Navbar;