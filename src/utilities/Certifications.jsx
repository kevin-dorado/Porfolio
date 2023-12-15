

export const   Certifications = ({title,width,height,src}) =>{

    return(
        <> 
            <div className="flex  mt-2 bg-neutral-800 border-2  border-neutral-700 rounded-xl">
                <div className="flex flex-initial justify-center items-center">
                    <h3  className="text-neutral-100 text-xl 
                        font-semibold " >{title} </h3>
                </div>
                <div className="flex flex-initial ">
                    <iframe src={src} width={width} height={height} allow=""></iframe>
                </div>
                
                
            </div>
        </>

    )
}