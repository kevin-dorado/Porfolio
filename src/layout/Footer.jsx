import {BsLinkedin,BsGithub} from "react-icons/bs";

export const Footer = () =>{
return(
    <>
        <footer className=" mt-12">    
            <div className="flex justify-center">   
                <img src="/klogofondo.png" alt="" className="w-16" />  
            </div>
            <div className="flex justify-center text-neutral-300 mt-5">
                <div className="mr-2">
                    <a href="">
                        <BsLinkedin/>
                    </a>
                </div> 
                <div>
                    <a href="#">
                        <BsGithub/>    
                    </a>  
                </div>

            </div>
            <div className="text-zinc-600">
                <p>@Kevin Dorado</p>
            </div>
        </footer>
    </>
)

}