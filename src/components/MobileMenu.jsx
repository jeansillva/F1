import React, { useState } from 'react';
import styles from './MobileMenu.module.css';
import menuIcon from '../assets/icons/menu.svg';
import votingIcon from '../assets/icons/voting.png';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = ['Pistas', 'Pilotos', 'Equipes', 'Vote na sua Equipe'];

  return (
    <div>
      <button onClick={toggleMenu} className={styles.menuButton} aria-label="Abrir menu">
        <img src={menuIcon} alt="Menu" />
      </button>

      <div className={`${styles.menuLinks} ${menuOpen ? styles.menuLinks_open : ""}`}>
        <ul>
          {links.map((link, index) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className={styles.menuLink}>
                {link}
                {index === links.length - 1 && (<img src={votingIcon} alt="Voting Icon" className={styles.votingIcon} />)} {/* Código para adicionar o incone apenas ao ultimo elemento */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;