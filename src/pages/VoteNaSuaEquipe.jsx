import React, { useState } from 'react';
import { useVote } from '../context/VoteContext';
import styles from './VoteNaSuaEquipe.module.css';

const teams = [
  { name: 'Mercedes', description: 'Fundada em 1954, possui 8 títulos de construtores consecutivos (2014-2020).' },
  { name: 'Red Bull', description: 'Fundada em 2005, possui 4 títulos de construtores consecutivos (2010-2013).' },
  { name: 'Ferrari', description: 'Fundada em 1929, é a equipe mais vitoriosa da F1 com 16 títulos de construtores.' },
  { name: 'McLaren', description: 'Fundada em 1963, possui 8 títulos de construtores.' },
  { name: 'Alpine', description: 'Fundada em 1955, sob o nome de Renault, venceu 2 títulos de construtores (2005-2006).' },
  { name: 'AlphaTauri', description: 'Fundada em 2006 como Toro Rosso, tem 1 vitória no GP da Itália (2008).' },
  { name: 'Aston Martin', description: 'Fundada em 2009, ainda não tem títulos.' },
  { name: 'Williams', description: 'Fundada em 1977, possui 9 títulos de construtores.' },
  { name: 'Alfa Romeo', description: 'Fundada em 1910, com 2 títulos de construtores.' },
  { name: 'Haas', description: 'Fundada em 2014, ainda não conquistou títulos.' }
];

const VoteNaSuaEquipe = () => {
  const { setFavoriteTeam } = useVote();
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleVote = () => {
    setFavoriteTeam(selectedTeam);
  };

  return (
    <div className={styles.voteContainer}>
      <h1>Vote na sua equipe favorita de F1</h1>
      <div className={styles.teams}>
        {teams.map((team) => (
          <label key={team.name} className={styles.teamOption}>
            <input
              type="radio"
              name="team"
              value={team.name}
              checked={selectedTeam === team.name}
              onChange={(e) => setSelectedTeam(e.target.value)}
            />
            <div>
              <strong className={styles.teamName}>{team.name}</strong>
              <p>{team.description}</p>
            </div>
          </label>
        ))}
      </div>
      <button onClick={handleVote} disabled={!selectedTeam}>Votar</button>
    </div>
  );
};

export default VoteNaSuaEquipe;