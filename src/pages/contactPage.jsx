import React from "react";
import { useState } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import bg from "../assets/imagens/bg.jpg"
 
 
 
const ContactForm = () =>{
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
 
    const handleChange = (e) =>{
        setFormData({
            ...formData,[e.target.name]: e.target.value
        });
    }
 
    const handleSubmit = (e) =>{
        e.preventDefault();
 
        console.log(`Mensagem enviada ${formData.name} , ${formData.email}`)
        console.log(`${formData.message}`)
 
        alert('Mensagem enviada com sucesso')
 
        setFormData({name:'', email:'', message:''})
    }
 
 
 
    return(
        <>
        <div>
            <Navbar/>

        <div
            className="min-h-213 bg-cover bg-center flex items-center justify-center"
            style={{backgroundImage: `url(${bg})`}}
        >
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-2x1 w-full max-w-md sm: max-w-lg text-center">
            <h2 className="font-bold mb-10">Entre em contato</h2>
            <form onSubmit={handleSubmit} clasName="space-y-4">
                <div> {/* campo para entrada de nome */}
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-1"></label>
                    <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 text-sm sm:text-base"
                    placeholder="Digite seu nome"
                    />
                </div>
 
                <div> {/* campo para entrada de email */}
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1"></label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 text-sm sm:text-base"
                    placeholder="Digite seu E-mail"
                    />
                </div>
 
                <div> {/* campo para entrada de mensagem */}
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-1 "></label>
                    <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-sm sm:text-base"
                    placeholder="Digite sua mensagem..."
                    row="5"
                    />
                </div>
 
                <div className="text-center"> {/* botão para enviar a mensagem */}
                    <button
                        type="submit"
                        className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition duration-300 w-full sm:w-full"
                        >
                            Enviar mensagem
                    </button>
                </div>
            </form>
            </div>
               
        </div>
        <Footer/>
        </div>
        </>
    )
}
 
export default ContactForm;