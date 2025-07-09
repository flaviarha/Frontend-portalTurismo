import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg from '../assets/imagens/bg.jpg';
import Carousel from "../components/Carousel";

const ServicePage = (props) => {
   return (
    <>
    <div className="flex flex-col min-h-screen">
    <Navbar/>
    <div>
        <Hero Background = {bg} titulo = "Conheça o rpg de mesa" paragrafo= "Todos as sessões disponiveis em canais de stream. " botao= "Arraste ↓"/>
        <Carousel/>
        <div>
        </div>
    </div>
        <Footer/>
    </div>
    
    </>
   )
}
export default ServicePage;