import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages'; // Sua página inicial
import SignInPage from './pages/signin'; // Sua página de cadastro
import SuccessPage from './components/SucessPage/SucessPage';
import Login from './pages/loginp'; // Mantenha o nome do import consistente
import ForgetPage from './pages/forget'; // Corrigido para o nome do componente correto


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget" element={<ForgetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
