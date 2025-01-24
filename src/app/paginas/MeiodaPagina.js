
import Image from "next/image"
import boloInicial from "./Imagem/boloinicial.png"
import rita from "./Imagem/rita.jpg"
import  "../Styles/MeiodaPagina.css"


export default function MeiodaPagina (){
    return (
        <>
        <div id="MeiodaPagina">
            <Image src={boloInicial} id="boloInicial"/>
            
        </div>
        <div>
        <Image src={rita} id="RitaMeiodaPagina"/>
        </div>
        </>
    );
}