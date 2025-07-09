import React, { useEffect, useState } from "react";
 
const AboutHero = () => {
        const [visible, setVisible] = useState(false);
     
        useEffect(() => {
          setVisible(true);
        }, []);
    return(
        <>
      <div
        className={`bg-[#5e14148a] m-8 p-35 rounded-3xl text-white transform transition-all duration-700 ease-out ${
          visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
      >
        <h1 className="text-4xl text-[#fff] font-extrabold mb-10 text-center">
          Minha história
        </h1>
        <div>
          <p className="text-[#fffbfb] text-center mb-100 text-2xl font-bold">
            Entrei no curso para aprender conteúdos novos para complementar meu currículo.Está sendo uma ótima experiência.
          </p>
        </div>
      </div>
    </>
    )
}
 
export default AboutHero;