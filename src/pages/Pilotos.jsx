import { useState, useEffect } from 'react';
import useFetch from '../hooks/useFetch.js';
import styles from './Pilotos.module.css';

const Pilotos = () => {
  const { data: allDrivers, loading, error } = useFetch('https://api.openf1.org/v1/drivers');
  const [drivers, setDrivers] = useState([]);
  const [loadedCount, setLoadedCount] = useState(10);

  useEffect(() => {
    if (allDrivers) {
      setDrivers(allDrivers.slice(0, loadedCount));
    }
  }, [allDrivers, loadedCount]);

  const loadMoreDrivers = () => {
    const newCount = loadedCount + 10;
    if (newCount <= 60) {
      setLoadedCount(newCount);
      setDrivers(allDrivers.slice(0, newCount));
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
      <section>
        <div className={styles.container}>
          <h1>Lista de Pilotos:</h1>
          <div className={styles.grid}>
            {drivers.map((driver, index) => (
                <div key={`${driver.driver_number}-${index}`} className={styles.driverCard}>
                  <img src={driver.headshot_url} alt={driver.full_name} />
                  <h2>{driver.full_name}</h2>
                  <p><strong>Time:</strong> {driver.team_name}</p>
                </div>
            ))}
          </div>

          {loadedCount < 60 && (
              <button onClick={loadMoreDrivers}>Carregar mais pilotos</button>
          )}
        </div>
      </section>
  );
};

export default Pilotos;