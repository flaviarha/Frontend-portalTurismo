import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg from '../assets/imagens/bg.jpg'
import Background from "../assets/imagens/bg.jpg"
const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Navbar/>
                <div className="relative h-[1000px] bg-cover bg-center flex items-center justify-center text-white"
                style={{ backgroundImage: `url(${Background})` }}>
                    <Hero Background = {bg} titulo = "O paranormal não vem para a nossa realidade de maneira fácil." paragrafo="conheça ele." rota="/service" botao="aqui!"
                     
                    />
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