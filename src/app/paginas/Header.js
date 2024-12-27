import Link from "next/link"
import Image from "next/image"
import "../Styles/cabecalho.css"
import IconeHome from "../paginas/Imagem/IconeHome.svg"
import QuemSomos from "../paginas/Imagem/QuemSomos.svg"
import OndeEstamos from "../paginas/Imagem/OndeEstamos.svg"
import FaleConosco from "../paginas/Imagem/FaleConosco.svg"
import Produtos from "../paginas/Imagem/Produtos.svg"


import { garamond } from "../fonts"





export default function Header ({ Component, pageProps }) {

 
  return( <>
    <div >
      <nav >
        <ul className= "cabecalho" >
        
          <li className= {garamond.className} > <Link href={'/'}  > INICIO   <Image src={IconeHome} className="px-6 inline" /> </Link>  </li>
          <li className= {garamond.className} > <Link href="/quemsomos">QUEM SOMOS <Image src={QuemSomos} className="px-5 inline" /> </Link>  </li>
          <li className= {garamond.className} > <Link href={"/ondeestamos"}> ONDE ESTAMOS <Image src={OndeEstamos} className="px-5 inline" /> </Link></li>
          <li className= {garamond.className} > <Link href={"/faleconosco "}> FALE CONOSCO <Image src={FaleConosco} className="px-5 inline " /> </Link></li>
          <li className= {garamond.className} > <Link href={"/produtos"}>  </Link> PRODUTOS <Image src={Produtos} className="px-5 inline" /></li>
        </ul>
        
      </nav>
    </div> </>
  );
} 