import { Result } from "postcss"
import { Certifications } from "../../utilities/Certifications"
export const Porfolio = () =>{
    return(
        <>
            <section className="mt-16">
                <h1  className="text-neutral-100 text-2xl
                mb-7 font-semibold" > Portfolio 📖</h1>
                <p className="text-neutral-300 ">In this section, you will find my portfolio, where you can see my CV, titles, and certifications that I have obtained throughout my career. Each of these documents is a testament to my dedication, learning, and growth in various areas of specialization.</p>
            </section>
            <section className="mt-16">

                <Certifications title={"Currículum Vitae"} width={"640"} height={"950"} src={"https://drive.google.com/file/d/1pZdw9oxgaUcEdv1NKo-eXFBGgYL_r1fO/preview"}/>

                <Certifications title={"Full Stack Software Developer Assessment"} width={"640"} height={"550"} src={"https://drive.google.com/file/d/1tNn-3NCwEtmhCbJ__WHeJOAxwkrWCE3h/preview"}/>

                
            </section>
        </>
    )
}