import React from "react";
import Background from "../assets/imagens/bg.jpg"
const Hero = (props) => {
    return (
        <>
            <div
                className="relative h-[1000px] bg-cover bg-center flex items-center justify-center text-white"
                //style={{ backgroundImage: `url(${Background})` }}
            >
           <div className="relative z-10 text-center ">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                    {props.titulo}
                </h1>
                <p className="text-lg md:text-x2 mb-6 max-w-3xl mx-auto drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {props.paragrafo}
                    </p>
                    <a
                    href="/service"
                    className="bg-red-800 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition duration-300"
                >{props.botao}</a>
                </div>
            </div>
        </>
    )
}

export default Hero;