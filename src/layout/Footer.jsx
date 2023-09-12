import {BsLinkedin,BsGithub} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
export const Footer = () =>{
return(
    <>
        <footer className="">    
            <div className="flex justify-around  my-10">
                <div className=" flex justify-start items-center basis-1/3" >
                    <p className="text-neutral-600 text-sm ">Made by: @Kevin Dorado</p>
                </div>
                <div className="flex">  
                    <a href="#">
                        <img src="/klogofondo.png" alt="" className="w-14" />  
                    </a>
                </div>
                <div className="flex justify-end items-center text-neutral-300  basis-1/3">
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
                    <div className="">
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