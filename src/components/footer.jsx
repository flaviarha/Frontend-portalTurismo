import React from "react"
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
        <footer className= "w-full bg-gradient-to-r from-red-800 to bg-red-900 text-white py-2 px-3 shadow-lg mt-auto ">
            <div className = "w-full mx-auto flex flex-col justify-between items-center">
                <div className= "text-center md mb-4 md:mb-0"/>
                    <p className = "text-sm text-white"> Nova Serra Verde. Todos os direitos reservados</p>
                

                    <div className="flex space-x-6">
                    <a href = "#" className="hover:text-red-600"><CiInstagram /></a>
                    <a href="#"className="hover:text-blue-500"><CiFacebook /></a>
                    <a href="#"className="hover:text-blue-500"><FaWhatsapp /></a>
                    </div>
                    
                  </div>

        </footer>
        </>
    )
}
export default Footer