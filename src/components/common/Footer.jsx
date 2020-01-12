import React from 'react';
import { Link } from 'react-router-dom';
import Routes from '../../Routes';

export const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <ul>
                <li><Link to={Routes.ABOUT}>Sobre</Link></li>
                <li><Link to={Routes.HELP}>Ajuda</Link></li>
                <li><Link to={Routes.PRIVACY}>Privacidade</Link></li>
            </ul>
            <h2 className="subtitle">
              <Link to={Routes.TIMELINE}>© {currentYear} Reactgram</Link>
            </h2>
        </footer>
    )

};