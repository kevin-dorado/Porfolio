import {BsLinkedin,BsGithub} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
export const Footer = () =>{
return(
    <>
        <footer className=" my-10">    
            <div className="flex justify-between">
                <div className="flex">   
                    <img src="/klogofondo.png" alt="" className="w-14" />  
                </div>
                <div className="flex justify-end text-neutral-300 mt-5">
                    <div className="mr-5">
                        <a href="https://www.linkedin.com/in/kevin-dorado-64677a25b/" target="blank">
                            <BsLinkedin/>
                        </a>
                    </div> 
                    <div className="mr-5">
                        <a href="https://github.com/kevin-dorado"  target="blank">
                            <BsGithub/>    
                        </a>  
                    </div>
                    <div className="mr-2">
                        <a href="mailto:kevindorado2811@gmail.com?subject=Correo desde mi sitio web"  target="blank">
                            <SiGmail/>    
                        </a>  
                    </div>
                </div>
            </div>
        </footer>
    </>
)

}