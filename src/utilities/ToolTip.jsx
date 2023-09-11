


export const ToolTip = ({icon, tec,tc,href}) =>{

    return(
        <>
        <a className="inline-block bg-neutral-800 px-2 py-1 mr-1 rounded-md border-2  border-neutral-700" href={`${href}`} target="_blank" >
            <div className="flex ">
                <div className= {`flex py-1 pr-1 ${tc} `}>
                {icon}
                </div>
                
                <span className="text-neutral-100 py-1">{tec}</span>
            </div>
        </a>            
        </>

    )


}