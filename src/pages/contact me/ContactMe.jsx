import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactMe = () =>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qvggggs', 'template_hcw5v2d', form.current, '_-87Hg7VmOwKkNu3Y')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
    return(
        <>
            <section className="mt-16">
                <h1  className="text-neutral-100 text-2xl
                mb-7 font-semibold" > Contact Me 📩 </h1>
                <p className="text-neutral-300">This space is designed so you can communicate with me in an easily and directly. If you are interested in my work as a web designer, or if you have any questions or proposals, don't hesitate to leave me a message !</p>
                <p  className="text-neutral-300 mt-3">find me on <a href="https://www.linkedin.com/in/kevin-dorado-64677a25b/" target="blank" ><strong>LinkedIn</strong></a>, or email me at <strong>kevindorado2811@gmail.com</strong></p>
            </section>  
            <section className="mt-5">   
                <div className="md:w-full text-lg text-neutral-100 bg-neutral-800 border-2  border-neutral-700 rounded-xl p-3 ">
                    <form className="m-2" ref={form} onSubmit={sendEmail}>
                        <div className="flex justify-between">
                            <div className="w-1/2 mr-5 ">
                                <label className="block" htmlFor="">Name</label>
                                <input className="text w-full rounded-md  px-2 text-neutral-800" type="text" name="user_name" />
                            </div>
                            <div className="w-1/2">
                                <label className="block" htmlFor="">Email</label>
                                <input className="w-full rounded-md px-2 text-neutral-800" type="email" name="user_email" />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label  className="block" htmlFor="">Message</label>
                            <textarea  className="resize-none w-full pb-5 rounded-md  px-2 text-neutral-800 " type="text" name="message" />
                        </div>
                        
                        <div className="flex justify-end mt-4">
                            <button className=" p-1 px-8 text-neutral-100 bg-neutral-800 hover:bg-[#111010] border-2  border-neutral-700 rounded-xl " value="Send">
                            Send
                            </button>
                        </div>
                            
                    </form>
                </div>
            </section>

        </>
    )
}