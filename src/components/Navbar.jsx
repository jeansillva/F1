import { Link } from 'react-router-dom'
import formula1logo from '../assets/icons/formula1logo.png'


import styles from './Navbar.module.css'
import MobileMenu from './MobileMenu'

const Navbar = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/"><img src={formula1logo} alt="Formula 1 Logo" className={styles.nav_logo} /></Link>

        <MobileMenu/>

      </nav>
    </header>
  )
}

export default Navbar