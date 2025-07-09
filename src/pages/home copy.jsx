import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg from '../assets/imagens/bg.jpg'

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div>
                    <Hero Background = {bg} titulo = "Nova serra Verde" paragrafo="conheça nossa atrações" rota="#" botao="Saiba mais" />
                    <h1 className="text-center">.</h1>
                    <div>
 
                    </div>
                </div>
                    <Footer />
            </div>
 
 
        </>
    )
}
 export default Home