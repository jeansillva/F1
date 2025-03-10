import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Sobre from './sections/Sobre';

import VoteNaSuaEquipe from './pages/VoteNaSuaEquipe';
import Pistas from './pages/Pistas';
import Pilotos from './pages/Pilotos';

const App = () => {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          <Hero />
          <Sobre />
          </>
        }/>

        <Route path="/pistas" element={<Pistas />} />
        <Route path="/pilotos" element={<Pilotos />} />
        {/*<Route path="/equipes" element={<Equipes />} /> */}
        <Route path="/vote-na-sua-equipe" element={<VoteNaSuaEquipe />} />
      </Routes>
    </Router>
  )
}

export default App
