import Link from "next/link"
import Image from "next/image"
import cabecalho from "../Styles/cabecalho.css"
import HomeHeader from "../Styles/Header.css"
import Home from "../paginas/Imagem/icons8-house-24.png"

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})



export default function Header ({ Component, pageProps }) {

 
  return( <>
    <div >
      <nav  >
        <ul className= "cabecalho">
          
          <li> <Link href={'/'}> INICIO   </Link><Image src={Home} className="px-1" />   </li>
          <li> <Link href="/quemsomos">QUEM SOMOS </Link>  </li>
          <li> <Link href={"/ondeestamos"}> ONDE ESTAMOS</Link></li>
          <li> <Link href={"/faleconosco "}> FALE CONOSCO</Link></li>
          <li> <Link href={"/produtos"}>  </Link> PRODUTOS </li>
        </ul>
        
      </nav>
    </div> </>
  );
} 