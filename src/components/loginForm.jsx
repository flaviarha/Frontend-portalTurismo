import React, {useState} from "react";
import bg from "../assets/imagens/bg.jpg"

const LoginForm = () =>{
    const [email , setEmail] = useState ('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (e) =>{
       e.preventDefault ();
        alert ('Email: ${email} \nSenha: ${senha }')
    }
    return(
        <>
     <div
            className="min-h-213 bg-cover bg-center flex items-center justify-center px-200 py-8"
            style={{backgroundImage: `url(${bg})`}}
        >
        <div className="bg-white p-8 rounded-2x1 shadw-lg w-full max-w-md border border-gray-300">
            <h2 className="text-2x-1 font-semibold text-center mb-6"> Login </h2>
            <form>
                <label>E-mail</label>
                <input
                    id= "email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail (e.target.value)}
                    required
                    className="w-ful border border-gray-300 p-2 rounded-md focus:outline-none
                     focus:ring-2 focus:ring-red-800 text-sm sm:text-base" 
                    placeholder= "Digite seu email"/>
            </form>
            <form>
                
                <div>
                <label> Senha</label>
                <input
                 id="password"
                 type="password"
                 name="password"
                 value={senha}
                 onChange={(e) => setSenha (e.target.value)} 
                 required
                 className="w-ful border border-gray-300 p-2 rounded-md focus:outline-none 
                 focus:ring-2 focus:ring-red-800 text-sm sm:text-base"
                 placeholder="Digite sua senha"

                 />

                </div>
                <button type="submit" className="w-full bg-red-800 text-white py= rounded-b-lg hover:bg-red-700 transition">
                    Entrar</button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600"> Não tem conta?
            <a href="/register" className="text-red-500 hover:underline text-center p-2"> Cadastre-se</a>
            </p>
        </div>
        </div>
        </>

    )
}
export default LoginForm