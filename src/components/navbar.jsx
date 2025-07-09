import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verifica se há um token (ou usuário) no localStorage
        const user = localStorage.getItem('user');
        setIsAuthenticated(!!user);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        window.location.href = '/'; // redireciona para Home
    };

    const menuLinks = (
        <>
            <a href="/" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Home</a>
            <a href="/about" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sobre</a>
            <a href="/service" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Serviços</a>
            <a href="/contact" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Contato</a>
            {isAuthenticated ? (
                <>
                    <a href="/profile" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Perfil</a>
                    <button onClick={handleLogout} className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Sair</button>
                </>
            ) : (
                <a href="/login" className="text-white hover:text-green-100 transition-colors duration-300 text-lg font-medium">Login</a>
            )}
        </>
    );

    return (
        <nav className="bg-red-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    <a href="/">Ordem paranormal</a>
                </div>

                {/* Menu para telas grandes */}
                <div className="hidden md:flex space-x-6">
                    {menuLinks}
                </div>

                {/* Menu hamburguer para telas pequenas */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Menu hamburguer expandido */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 text-white p-4 space-y-4">
                    {menuLinks}
                </div>
            )}
        </nav>
    );
};
 
export default Navbar;
 