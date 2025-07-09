import React from "react";
import CardService from "./cardService";
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules';

import iniciacao from '../assets/imagens/iniciacao.jpg'
import segredo from '../assets/imagens/segredo.jpg'
import desconjuraçao from '../assets/imagens/desconjuraçao.jpg'
import calamidade from '../assets/imagens/calamidade.jpg'
import ilha from '../assets/imagens/ilha.jpg'
import sinais from '../assets/imagens/sinais.jpg'

const tourist_places = [
        {Image: iniciacao, title: "ordem paranormal-Iniciaçao", description: "O começo de tudo."},
        {Image: segredo, title: "O segredo na Floresta", description: "O rpg envolvendo a morte e a vida"},
        {Image: desconjuraçao, title: "A desconjuração", description: "Oque são chamados os escriptas? "},
        {Image: calamidade, title: "Calamidade", description: "Kian? O derrotado."},
        {Image: ilha, title: "O segredo na Ilha", description: "A verdadeira arte é só um refelxo dos sentimentos"},
        {Image: sinais, title: "Sinais do outro lado", description: "Existe algo pior que a dor e a morte?"},
]

const Carousel = () =>{
 
    return (
        <div className="relative z-10 w-full bg-black-800 mt-[-128px]">
            <h1 className="text-3xl font-bold text-center mt-32 text-black drop-shadow-lg">
                Histórias disponíveis.
            </h1>
            <Swiper
                modules={[Autoplay]} // 👈 Habilita o módulo
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                slidesPerView="auto"
                spaceBetween={20}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    }
                }}
            >
                {tourist_places.map((place, index) => (
                    <SwiperSlide key={index}>
                        <CardService
                            img={place.Image}
                            alt={place.description}
                            titulo={place.title}
                            descricao={place.description}
                            link="#"
                            botao="Saiba Mais"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
 
export default Carousel;