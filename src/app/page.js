import Image from 'next/image'

import Header from "../app/Components/Header"
import Footer from "./Components/Footer";
import MeiodaPagina from "./Components/MeiodaPagina";

export default function Index (){
  return (
      <div>
      <Header />
      <MeiodaPagina/>
      <Footer/>
      </div> )
}
