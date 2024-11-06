import Link from "next/link"
import cabecalho from "../Styles/cabecalho.css"




export default function Header () {

 
  return( <>
    <div >
      <nav >
        <ul className= "cabecalho">
          
          <li> <Link href={'/'}> INICIO </Link>   </li>
          <li> <Link href="/quemsomos">QUEM SOMOS </Link>  </li>
          <li> <Link href={"/ondeestamos"}> ONDE ESTAMOS</Link></li>
          <li> <Link href={"/faleconosco "}> FALE CONOSCO</Link></li>
          <li> PRODUTOS </li>
        </ul>
        
      </nav>
    </div> </>
  );
} 