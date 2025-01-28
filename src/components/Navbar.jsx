import formula1logo from '../assets/images/formula1logo.png'

import styles from './Navbar.module.css'
import MobileMenu from './MobileMenu'

const Navbar = () => {

  return (
    <header>
      <nav className={styles.nav}>
        <img src={formula1logo} alt="Formula 1 Logo" className={styles.nav_logo} />

        
        <MobileMenu/>

        {/* <div className={styles.nav_links}>
          <p>Vote na sua equipe</p>
          <img src={votingIcon} alt="Icone de voto" className={styles.nav_voting}/>
        </div> */}
      </nav>
    </header>
  )
}

export default Navbar