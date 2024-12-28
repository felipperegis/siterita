
import Header from "./paginas/Header"
import Footer from "./paginas/Footer"
import MeiodaPagina from "./paginas/MeiodaPagina"
import Bolo from "./paginas/Imagem/bolo.png"
import Bolo1 from "./paginas/Imagem/bolo1.png"
import Image from "next/image"
import cabecalho from "./Styles/cabecalho.css"


export default function Index () {
  return (
      
      

      <div>
        <div className="border-solid border-2 border-sky-500 black">

        </div>
        <Header/>
        <MeiodaPagina/>
        <Image className="bolo" src={Bolo}/>
        <Image className="bolo" src={Bolo1}/>
        <Footer/>
        
      </div> 
      
    )
}
