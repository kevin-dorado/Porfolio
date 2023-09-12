export const CardProject = ({img,title,text}) => {
    return(
        <>
                <div className="mt-5 bg-neutral-800 border-2  border-neutral-700 rounded-xl p-3">
                    <div className="">
                        <img src={img} alt="" className="rounded-lg " />   
                    </div>
                    <h3  className="text-neutral-100 text-xl 
                    mb-4 font-semibold mt-6" >{title} </h3>
                    <p className="text-neutral-300 ">{text}</p>
                </div>   
        </>
    )

}