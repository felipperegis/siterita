import Header from "../paginas/Header"
import Rita from "../paginas/Imagem/rita.jpg"
import Image from "next/image"
import "../Styles/Quemsomos.css"

import { garamond } from "../fonts"

export default function quemsomos () {
  return(
    < >
      <Header/> 
      <div className= {garamond.className}>
        <div className="layoutquemsomos">
        <Image src= {Rita} className="RitaFotoQuemSomos"/>      
        <h1 className="descriçãoprimeiroparagrafo">Sobre Mim

Me chamo Rita de Cassia Straub Cavalheiro e sou apaixonada por gastronomia. Formada na área, especializei-me na criação de doces que encantam não só pelo sabor, mas também pela apresentação impecável.

Meu foco principal é confeccionar delícias como brigadeiros e bolos que transformam qualquer ocasião em um evento especial. Cada doce é feito com ingredientes selecionados e uma dose extra de carinho, garantindo que cada mordida seja uma experiência inesquecível.

Permita-me adoçar seus momentos especiais com minhas criações. Vamos juntos transformar suas comemorações em memórias deliciosas e inesquecíveis.</h1>
      </div>
      <div className="linha"></div>
    </div>  
    </>
  )
} 