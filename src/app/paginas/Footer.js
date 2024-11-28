
import Image from "next/image"
import visa from "../paginas/Imagem/visa.png"
import alelo from "../paginas/Imagem/alelo.png"
import mastercard from "../paginas/Imagem/mastercard.png"
import "../Styles/Footer.css"


export default function Footer () {
    return(
    <div className="Footer">
    <p > Aceitamos os cartões .</p>
    <Image src={visa} className="VisaFooter"/>
    <Image src={mastercard} className="MastercardFooter"/>
    <Image src={alelo} className="AleloFooter"/>
    <p clas>Copyright © </p>
    </div>
    )
}