import Header from "../paginas/Header"
import Rita from "../paginas/Imagem/rita.jpg"
import Image from "next/image"
import "../Styles/Quemsomos.css"
export default function quemsomos () {
  return(
    < >
      <Header/> 
        <Image src= {Rita} className="RitaFotoQuemSomos"/>      
        <h1>oi</h1>
        
      
    </>
  )
} 