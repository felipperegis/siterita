
import Image from "next/image"
import boloInicial from "./Imagem/boloinicial.png"
import  "../Styles/MeiodaPagina.css"


export default function MeiodaPagina (){
    return (
        <div className="MeiodaPagina">
            <Image src={boloInicial} className="boloInicial"/>
            
        </div>
    );
}