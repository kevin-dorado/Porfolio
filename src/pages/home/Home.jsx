import { Result } from "postcss"
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJavascript1,DiReact,DiBootstrap,DiJava,DiVisualstudio } from "react-icons/di";
import { ToolTip } from "../../utilities/ToolTip";
import { CardProject } from "../../utilities/CardProject";
const Home= () =>{

return(
<>
    <section className="mt-16">
        <h1  className="text-neutral-100 text-2xl
        mb-7 font-semibold" > Hi I'm Kevin 👋</h1>
        <p className="text-neutral-300 ">I am a 20 year old junior web-developer, who was graduated from the Instituto Tecnológico Superior Arias-Balparda and then, at the Jovenes a Programar web-development bootcamp. I love exploring new technologies and expanding my knowledge in the field of web development.</p>
    </section>
    <section className="mt-16">
        <h2  className="text-neutral-100 text-xl 
        mb-4 font-semibold " >Skills</h2>
        <div className="flex">
            <ToolTip icon={<DiJavascript1 size={25} />} tec={"Javascript"} tc={"text-yellow-300"} href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}/>
            <ToolTip icon={<DiReact size={25} />} tec={"React"} tc={"text-cyan-300"} href={"https://es.react.dev/"}/>
            <ToolTip icon={<BiLogoTailwindCss size={25} />} tec={"Tailwind"} tc={"text-cyan-300"} href={"https://tailwindcss.com/"}/>
            <ToolTip icon={<DiBootstrap size={25} />} tec={"Bootstrap"} tc={"text-purple-500"} href={"https://getbootstrap.com/"}/>
            <ToolTip icon={<DiJava size={25} />} tec={"Java"} tc={"text-white"} href={"https://www.java.com/es/"}/>
            <ToolTip  icon={<DiVisualstudio size={25} />} tec={"Visual Basic"} tc={"text-violet-600"} href={"https://learn.microsoft.com/es-es/dotnet/visual-basic/"}/>
        </div>
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
</>
)

}
export default Home