import logo from "../assets/hritikLogo.jpg"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

export default function Navbar(){
    return (
        <>
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 item-center">
            <img className="mx-2 w-14 " src={logo} alt="hritik-name-logo" />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/hritik-singh-024460197/"><FaLinkedin/></a> 
               <a href="https://x.com/HritikZ07"><FaSquareXTwitter/></a>
                <a href="https://github.com/zhritik007"><FaGithub/></a>
            </div>
            

        </nav>
        </>
    )
} 