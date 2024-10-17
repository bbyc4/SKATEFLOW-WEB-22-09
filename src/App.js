import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'; // Sua página inicial
import SuccessPage from './components/SucessPage/SucessPage';
import Login from './pages/loginp'; // Mantenha o nome do import consistente
import ForgetPage from './pages/forget'; // Corrigido para o nome do componente correto
import Map from './pages/map';
import EventsPage from './components/EventsPage'; // Correto se o arquivo se chama map.js
import Artigo from './components/artigo'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<ForgetPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/artigo" element={<Artigo />} /> {/* Rota para o componente Artigo */}
      </Routes>
    </Router>
  );
}

export default App;
