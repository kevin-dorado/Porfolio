import { Result } from "postcss"

import { DiJavascript1 } from "react-icons/di";
import { ToolTip } from "../../utilities/ToolTip";
const Home= () =>{

return(
<>
    <h1  className="text-neutral-100 text-2xl
    mb-10 font-semibold" > Hi I'm Kevin 👋</h1>
    <p className="text-neutral-300 ">I am a 20 year old junior web-developer, who was graduated from the Instituto Tecnológico Superior Arias-Balparda and then, at the Jovenes a Programar web-development bootcamp. I love exploring new technologies and expanding my knowledge in the field of web development.</p>

    <h2  className="text-neutral-100 text-xl 
    mb-4 font-semibold mt-5" >Skills</h2>

    <div className="flex">
        <ToolTip icon={<DiJavascript1 size={25} />} tec={"Javascript"} tc={"text-yellow-300"}/>
        <ToolTip icon={<DiJavascript1 size={25} />} tec={"Javascript"} tc={"text-yellow-300"}/>
    </div>
</>
)

}
export default Home