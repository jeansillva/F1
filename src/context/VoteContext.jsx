import React, { createContext, useState, useContext } from 'react';

const VoteContext = createContext();

export const VoteProvider = ({ children }) => {
  const [favoriteTeam, setFavoriteTeam] = useState('Sem Votos');

  return (
    <VoteContext.Provider value={{ favoriteTeam, setFavoriteTeam }}>
      {children}
    </VoteContext.Provider>
  );
};

export const useVote = () => useContext(VoteContext);