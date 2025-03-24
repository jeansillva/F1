import { useState } from 'react';

// Hook que vai controlar o estado de loading da aplicação
const useLoading = () => {
  const [loading, setLoading] = useState(false);

  return {
    loading, setLoading,
  };
};

export default useLoading;
