import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AboutHero from "../components/aboutHero";
import bg from "../assets/imagens/bg.jpg"
 
 
const AboutPage = () => {
    return(
        <>  
        <Navbar/>
        <div
            className="text-white bg-cover bg-center relative"
            style={{backgroundImage: `url(${bg})`}}
        >  
            <div className="flex flex-col blur-sm">
                    </div>
 
                    <div>
                        <AboutHero/>
                    </div>
 
                <Footer/>
            </div>
        </>
    )
}
 
export default AboutPage;