import Card from '../components/Card'
import Container from '../components/Container'

import styles from './Sobre.module.css'

import f1Car from '../assets/images/F1Car.jpg'
import hamilton from '../assets/images/Hamilton.jpg'
import pit from '../assets/images/PitRedbull.jpg'



const Sobre = () => {
  return (
    <section className={styles.about} id="sobre">

      <Container>
        <h1>Sobre a Fórmula 1</h1>

        <p>Uma competição de automobilismo de alta velocidade, onde os melhores pilotos e equipes do mundo enfrentam desafios em pistas ao redor do globo, combinando velocidade, habilidade e inovação tecnológica.</p>

        <h2>Confira grandes feitos:</h2>
      </Container>
      
      
    
      <Card imageUrl={f1Car}
        altText='CardWallpaper'
        paragraphText='Velocidade máxima: 372,5 km/h'
        removeBorders={['right']}
      />

      <Card imageUrl={hamilton}
        altText='CardWallpaper'
        paragraphText='7 Títulos Mundiais'
        removeBorders={['left']}
      />

      <Card imageUrl={pit}
        altText='CardWallpaper'
        paragraphText='Pit Stop em 1,82s'
        removeBorders={['right']}
      />

    </section>
  )
}


export default Sobre