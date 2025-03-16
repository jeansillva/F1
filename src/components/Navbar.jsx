import { Link } from 'react-router-dom';
import formula1logo from '../assets/icons/formula1logo.png';
import votingIcon from '../assets/icons/voting.png';
import { useVote } from '../context/VoteContext';

import styles from './Navbar.module.css';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const { favoriteTeam } = useVote();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Pilotos', path: '/pilotos' },
    { name: 'Pistas', path: '/pistas' },
    { name: 'Vote na sua Equipe', path: '/vote-na-sua-equipe' }
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/"><img src={formula1logo} alt="Formula 1 Logo" className={styles.nav_logo} /></Link>

        <div className={styles.nav_links}>
          {links.map((link, index) => (
            <Link key={link.name} to={link.path} className={styles.nav_link}>
              {link.name}
              {index === links.length - 1 && (
                <img src={votingIcon} alt="Voting Icon" className={styles.votingIcon} />
              )}
            </Link>
          ))}
        </div>

        <div className={styles.favoriteTeam}>
          Sua Equipe Favorita: {favoriteTeam}
        </div>

        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;