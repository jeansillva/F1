import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './MobileMenu.module.css';
import menuIcon from '../assets/icons/menu.svg';
import votingIcon from '../assets/icons/voting.png';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
              <Link to={`/${link.toLowerCase().replace(/\s+/g, '-')}`} className={styles.menuLink} onClick={closeMenu}>
                {link}
                {index === links.length - 1 && (
                  <img src={votingIcon} alt="Voting Icon" className={styles.votingIcon} />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;