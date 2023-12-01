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
                <h2  className="text-neutral-100 text-xl 
                            mb-4 font-semibold mt-6" >Projects</h2>
                <p className="text-neutral-300 ">In this section you will find some of the projects I have done. Here you can see examples of my work, the technologies I use and the objectives I completed, I hope you like them.</p>
                <CardProject img={"/CalPorfolio1.png"} text={"This program allows you to calculate your daily calorie needs, calories to lose fat and calories to gain muscle according to your height, weight, age, gender and activity level. It is made with HTML, JavaScript and Tailwind."} title={"Calories Calculator"} page={"https://calculadora-de-calorias-seven.vercel.app/"}/>
                <CardProject img={"/TwFollowPorfolio.png"} text={"This project is an imitation of the who to follow template from Twitter, made with React and Tailwind. It uses the avatar.io API to generate images of the suggested users. The goal is to practice the use of functional components, hooks and styles with Tailwind."} title={"Twitter Follow"} page={"https://twitter-follow.vercel.app/"}/>
                <CardProject img={"/e.comerce1.png"} text={"This project is an E-commerce page created in Jóvenes A Programar. It was developed using the Bootstrap framework and JavaScript. The page has a static database and utilizes localstorage. The website includes a shopping cart, user profiles, and different product categories."} title={"e.mercado"} page={"https://keviin999-github-1grrqca04-kevindorado2811-gmailcom.vercel.app"}/>
                <CardProject img={"/andreabeautyink.png"} text={" Website created with WIX at the request of a Micro-Blading company, located in the U.S.A. The website has a services section, a gallery of previous works, information about the owner and a FAQ section."} title={"Andrea Beauty Ink."} page={"https://www.andreabeautyink.com/"}/>
            </section>

            {/* <section className="mt-16">

                <Certifications title={"Currículum Vitae"} width={"640"} height={"950"} src={"https://drive.google.com/file/d/1pZdw9oxgaUcEdv1NKo-eXFBGgYL_r1fO/preview"}/>

                <Certifications title={"Full Stack Software Developer Assessment"} width={"640"} height={"550"} src={"https://drive.google.com/file/d/1tNn-3NCwEtmhCbJ__WHeJOAxwkrWCE3h/preview"}/>

            </section> */}
        </>
    )
}