import { Result } from "postcss"
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJavascript1,DiReact,DiBootstrap,DiJava,DiVisualstudio } from "react-icons/di";
import { ToolTip } from "../../utilities/ToolTip";
const Home= () =>{

return(
<>
    <section>
        <h1  className="text-neutral-100 text-2xl
        mb-10 font-semibold" > Hi I'm Kevin 👋</h1>
        <p className="text-neutral-300 ">I am a 20 year old junior web-developer, who was graduated from the Instituto Tecnológico Superior Arias-Balparda and then, at the Jovenes a Programar web-development bootcamp. I love exploring new technologies and expanding my knowledge in the field of web development.</p>
    </section>
    <section>
        <h2  className="text-neutral-100 text-xl 
        mb-4 font-semibold mt-7" >Skills</h2>
        <div className="flex">
            <ToolTip icon={<DiJavascript1 size={25} />} tec={"Javascript"} tc={"text-yellow-300"} href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}/>
            <ToolTip icon={<DiReact size={25} />} tec={"React"} tc={"text-cyan-300"} href={"https://es.react.dev/"}/>
            <ToolTip icon={<BiLogoTailwindCss size={25} />} tec={"Tailwind"} tc={"text-cyan-300"} href={"https://tailwindcss.com/"}/>
            <ToolTip icon={<DiBootstrap size={25} />} tec={"Bootstrap"} tc={"text-purple-500"} href={"https://getbootstrap.com/"}/>
            <ToolTip icon={<DiJava size={25} />} tec={"Java"} tc={"text-white"} href={"https://www.java.com/es/"}/>
            <ToolTip icon={<DiVisualstudio size={25} />} tec={"Visual Basic"} tc={"text-violet-600"} href={"https://learn.microsoft.com/es-es/dotnet/visual-basic/"}/>
        </div>
    </section>
    <section>
        <h2  className="text-neutral-100 text-xl 
            mb-4 font-semibold mt-6" >Projects</h2>
        <p className="text-neutral-300 ">In this section you will find some of the projects I have done. Here you can see examples of my work, the technologies I use and the objectives I completed, I hope you like them.</p>

        <div className="mt-5 bg-slate-500 rounded-xl">
            <img src="/CaloriasPorfolio.png" alt="" className="rounded-lg" />
        </div>
    </section>
</>
)

}
export default Home