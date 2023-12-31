
export const ToolTip = ({icon, tec,tc,href}) =>{
    return(
        <>
            <div className="flex">
                <a className={`flex bg-neutral-800 px-2 py-1 m-2 md:m-0 md:mr-1 rounded-md border-2  border-neutral-700  hover:bg-neutral-900`} href={`${href}`} target="_blank" >
                    <div className="flex ">
                        <div className= {`flex py-1 pr-1 ${tc} `}>
                            {icon}
                        </div>        
                        <span className="text-neutral-100 py-1   ">{tec}</span>
                    </div>
                </a>     
            </div>
        </>
    )
}
