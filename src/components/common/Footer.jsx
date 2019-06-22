import React from 'react';

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <ul>
                <li><a href="/">Sobre</a></li>
                <li><a href="/">Suporte</a></li>
                <li><a href="/">Privacidade</a></li>
                <li><a href="/">Termos</a></li>
                <li><a href="/">Politica de Privacidade</a></li>
            </ul>
            <h2 className="subtitle">© {currentYear} Reactgram</h2>
        </footer>
    )

};