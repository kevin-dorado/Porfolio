import { CornerDownRight } from 'lucide-react';

export const CardProject = ({img,title,text,page}) => {
    return(
        <>
                <div className="mt-5 bg-neutral-800 border-2  border-neutral-700 rounded-xl p-3">
                    <div className="">
                        <img src={img} alt="" className="rounded-lg " />   
                    </div>
                    <h3  className="text-neutral-100 text-xl 
                    mb-4 font-semibold mt-6" >{title} </h3>
                    <p className="text-neutral-300 ">{text}</p>

                    <a href={page} target="blank" className='inline-block pt-2 ' >
                        <div className='flex text-neutral-500  hover:text-neutral-100'>
                            <span className='py-1 mr-1'>See the page </span>
                            <div className='py-1 pt-2'>
                                <CornerDownRight size={18}/>
                            </div>

                        </div>
                    </a>
                </div>   
        </>
    )

}