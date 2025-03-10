import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Pilotos.module.css';

const Pilotos = () => {
    const [pilotos, setPilotos] = useState([]);
    const [count, setCount] = useState(10);
    
    useEffect(() => {
        axios.get('https://api.openf1.org/v1/drivers')
        .then(response => setPilotos(response.data.slice(0, count)))
        .catch(error => console.error('Falha ao buscar pilotos:', error))
    }, [count]); 

    const loadMorePilots = () => {
        setCount(prevCount => prevCount + 10); 
    };

    return (
        <div className={styles.main}>
            <h1>Pilotos de F1</h1>
            <ul>
                {pilotos.map(piloto => (
                    <li key={piloto.driver_number}>
                        {piloto.full_name} - {piloto.team_name}
                    </li>
                ))}
            </ul>
            <button onClick={loadMorePilots}>Carregar mais</button>
        </div>
    );
};

export default Pilotos;