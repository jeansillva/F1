import React from 'react';
import styles from './Pistas.module.css';

import bahrein from '../assets/images/Pistas/Bahrein.png';
import monaco from '../assets/images/Pistas/Monaco.png';
import silverstone from '../assets/images/Pistas/Silverstone.png';
import spa from '../assets/images/Pistas/Spa.png';
import monza from '../assets/images/Pistas/Monza.png';
import suzuka from '../assets/images/Pistas/Suzuka.png';
import interlagos from '../assets/images/Pistas/Interlagos.png';
import yasMarina from '../assets/images/Pistas/YasMarina.png';
import catalunya from '../assets/images/Pistas/Catalunya.png';
import hungaroring from '../assets/images/Pistas/Hungaroring.png';
import paulRicard from '../assets/images/Pistas/PaulRicard.png';
import jeddah from '../assets/images/Pistas/Jeddah.png';
import miami from '../assets/images/Pistas/Miami.png';
import austin from '../assets/images/Pistas/Austin.png';
import zandvoort from '../assets/images/Pistas/Zandvoort.png';
import redBullRing from '../assets/images/Pistas/RedBullRing.png';


const pistas = [
  { name: 'Austin', imageUrl: austin },
  { name: 'Bahrein', imageUrl: bahrein },
  { name: 'Catalunya', imageUrl: catalunya },
  { name: 'Hungaroring', imageUrl: hungaroring },
  { name: 'Interlagos', imageUrl: interlagos },
  { name: 'Jeddah', imageUrl: jeddah },
  { name: 'Miami', imageUrl: miami },
  { name: 'Mônaco', imageUrl: monaco },
  { name: 'Monza', imageUrl: monza },
  { name: 'Paul Ricard', imageUrl: paulRicard },
  { name: 'Red Bull Ring', imageUrl: redBullRing },
  { name: 'Silverstone', imageUrl: silverstone },
  { name: 'Spa-Francorchamps', imageUrl: spa },
  { name: 'Suzuka', imageUrl: suzuka },
  { name: 'Yas Marina', imageUrl: yasMarina }, 
  { name: 'Zandvoort', imageUrl: zandvoort },
];

const Pistas = () => {
  return (
    <div className={styles.pistasContainer}>
      {pistas.map((pista, index) => (
        <div key={index} className={styles.pistaCard}>
          <img src={pista.imageUrl} alt={pista.name} className={styles.pistaImage} />
          <h3 className={styles.pistaName}>{pista.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default Pistas;