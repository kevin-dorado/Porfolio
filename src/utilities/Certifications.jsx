

export const   Certifications = ({title,width,height,src}) =>{

    return(
        <> 
            <div className="mt-5 bg-neutral-800 border-2  border-neutral-700 rounded-xl p-3 ">
                <div className="flex justify-center">
                    <iframe src={src} width={width} height={height} allow=""></iframe>
                </div>
                <div className="flex justify-center">
                    <h3  className="text-neutral-100 text-xl 
                        mb-4 font-semibold mt-6" >{title} </h3>
                </div>
                
            </div>
        </>

    )
}