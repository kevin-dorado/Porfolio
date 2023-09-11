import { Link,useLocation } from "react-router-dom"

const Nav = () => {
    const location = useLocation();
    return(
        <>
            <nav className="lg:sticky mb-5 mt-4">
                <div className="flex justify-between">
                    <div className=" flex">
                        <div>
                        <Link to="/"  className={`mr-2 ${location.pathname === "/" ? "text-neutral-100 border-b border-neutral-400 border-opacity-50 " : "text-neutral-400 hover:text-neutral-100"}`} > <span>About Me</span></Link>
                        <Link to="/porfolio" className={`mr-2 ${location.pathname === "/porfolio" ? "text-neutral-100 border-b border-neutral-400 border-opacity-50 " : "text-neutral-400 hover:text-neutral-100"}`} > <span>Portfolio</span></Link>
                        <Link to="/contact-me"  className={`mr-2 ${location.pathname === "/contact-me" ? "text-neutral-100 border-b border-neutral-400 border-opacity-50 " : "text-neutral-400 hover:text-neutral-100"}`} > <span>Contact Me</span></Link>
                        </div>
                    </div>
                    <div className="flex"> 
                        <img src="/klogofondo.png" alt="" className="w-16" />  
                    </div>
                </div>  
            </nav>
        </>
    )



}

export default Nav 