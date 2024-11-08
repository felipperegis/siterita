import Link from "next/link"
import cabecalho from "../Styles/cabecalho.css"

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
          
          <li> <Link href={'/'}> INICIO </Link>   </li>
          <li> <Link href="/quemsomos">QUEM SOMOS </Link>  </li>
          <li> <Link href={"/ondeestamos"}> ONDE ESTAMOS</Link></li>
          <li> <Link href={"/faleconosco "}> FALE CONOSCO</Link></li>
          <li> <Link href={"/produtos"}>  </Link> PRODUTOS </li>
        </ul>
        
      </nav>
    </div> </>
  );
} 