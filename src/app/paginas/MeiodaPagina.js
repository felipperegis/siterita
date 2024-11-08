
import Image from "next/image"
import Brigadeiro from "./Imagem/brigadeiro-.jpg"
import  "../Styles/MeiodaPagina.css"


export default function MeiodaPagina (){
    return (
        <div className="MeiodaPagina">
            <Image src={Brigadeiro} className="Brigadeiro"/>
            <p className="p">Brigadeiro Tradicional da Casa
            Uma explosão de sabor em cada mordida! Feito com leite condensado de alta qualidade,
            cacau puro e um toque de manteiga que proporciona cremosidade irresistível. Finalizado com granulado belga,
            nosso brigadeiro traz o sabor autêntico da confeitaria artesanal, preparado com carinho para derreter na boca e adoçar o seu momento.</p>
       
        </div>
    );
}