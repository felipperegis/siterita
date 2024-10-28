import Link from "next/link"
import cabecalho from "../Styles/cabecalho.css"




export default function Header () {

 
  return( <>
    <div >
      <nav >
        <ul className= "cabecalho">
          
          <li> <Link href={'/'}> INICIO </Link>   </li>
          <li> <Link href="/quemsomos">QUEM SOMOS </Link>  </li>
          <li> <Link href="/layout"> ONDE ESTAMOS</Link></li>
          <li> FALE CONOSCO</li>
          <li> PRODUTOS </li>
        </ul>
        
      </nav>
    </div> </>
  );
} 