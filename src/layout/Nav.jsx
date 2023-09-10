import { Link } from "react-router-dom"

const Nav = () => {
    return(
        <>
            <nav className="lg:sticky mb-16 mt-4">
                <div className=" flex">
                    <Link to="/"  className="text-neutral-100 mr-2  border-b border-neutral-400 border-opacity-50" href="#"> <span>About Me</span>    </Link>
                    <Link to="/porfolio" className="text-neutral-400 mr-2  hover:text-neutral-100" href="#"> <span>Portfolio</span>    </Link>
                    <Link to="/contact-me" className="text-neutral-400    hover:text-neutral-100" href="#"> <span>Contact Me</span>    </Link>
                </div>
            
            </nav>
        </>
    )



}

export default Nav 