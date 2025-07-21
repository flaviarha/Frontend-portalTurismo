import React from "react";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import bg from '../assets/imagens/bg.jpg';
import Carousel from "../components/Carousel";

const ServicePage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        {/* Seção com imagem de fundo e Hero */}
        <div
          className="relative h-[1000px] bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="w-full">
            <Hero
              Background={bg}
              titulo="Conheça o rpg de mesa"
              paragrafo="Todos as sessões disponíveis em canais de stream."
              botao="Arraste ↓"
            />
          </div>
        </div>

        {/* Carrossel com espaço acima */}
        <div className="mt-10">
          <Carousel />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ServicePage;
