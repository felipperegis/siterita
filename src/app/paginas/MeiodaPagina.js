
import Image from "next/image"
import boloInicial from "./Imagem/boloinicial.png"
import rita from "./Imagem/rita.jpg"
import  "../Styles/MeiodaPagina.css"
import bolo2 from "./Imagem/bolo2.jpeg"

export default function MeiodaPagina (){
    return (
        <>
        <div className="MeiodaPagina">
            <Image src={boloInicial} className="boloInicial"/>
            
        </div>
        <div className="linha"></div>
        <div className="ContainerRitaMeiodaPagina">
        <Image src={rita} className="RitaMeiodaPagina"/>
        <p>Apaixonada</p>
        </div>
        <div className="linha"></div>
        <div>
            <Image src={bolo2} className="bolo2" />
        </div>
        <div className="linha"></div>
        </>
    );
}