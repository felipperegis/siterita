
import Image from "next/image"
import boloInicial from "./Imagem/boloinicial.png"
import rita from "./Imagem/rita.jpg"
import  "../Styles/MeiodaPagina.css"


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
        </>
    );
}