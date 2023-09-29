export const ContactMe = () =>{
    return(
        <>
            <section className="mt-16">
                <h1  className="text-neutral-100 text-2xl
                mb-7 font-semibold" > Contact Me </h1>
                <div className=" flex justify-center md:w-full text-lg text-neutral-100 bg-neutral-800 border-2  border-neutral-700 rounded-xl p-3 ">
                    <form className="w-3/4" action="">
                        <div className="flex justify-between">
                            <div className="w-1/2 mr-5 ">
                                <label className="block" htmlFor="">Name</label>
                                <input className=" w-full rounded-md border-1 pl-2 text-neutral-800" type="text" />
                            </div>
                            <div className="w-1/2">
                                <label className="block" htmlFor="">Email</label>
                                <input className="w-full  rounded-md border-1 pl-2 text-neutral-800" type="email" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label  className="block" htmlFor="">Message</label>
                            <input  className="w-full pb-10  rounded-md border-1 pl-2 text-neutral-800" type="text" />
                        </div>
                        
                        <div className="flex justify-center mt-6">
                            <button className=" p-1 px-3 text-neutral-100 bg-neutral-800 hover:bg-[#111010] border-2  border-neutral-700 rounded-xl ">
                            Send
                            </button>
                        </div>
                            
                    </form>
                </div>
            </section>

        </>
    )
}