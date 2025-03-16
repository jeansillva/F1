import React, { useState } from 'react';
import { useVote } from '../context/VoteContext';
import styles from './VoteNaSuaEquipe.module.css';

const teams = [
  'Mercedes',
  'Red Bull',
  'Ferrari',
  'McLaren',
  'Alpine',
  'AlphaTauri',
  'Aston Martin',
  'Williams',
  'Alfa Romeo',
  'Haas'
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
          <label key={team} className={styles.teamOption}>
            <input
              type="radio"
              name="team"
              value={team}
              checked={selectedTeam === team}
              onChange={(e) => setSelectedTeam(e.target.value)}
            />
            {team}
          </label>
        ))}
      </div>
      <button onClick={handleVote} disabled={!selectedTeam}>Votar</button>
    </div>
  );
};

export default VoteNaSuaEquipe;