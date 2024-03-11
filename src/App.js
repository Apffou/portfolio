import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Bienvenue from './Pages/Bienvenue';
import ParcoursPro from './Pages/ParcoursPro'
import Apropos from './Pages/Apropos';
import Error404 from './Pages/Error404';
import Projet from './Pages/Projet';
import Footer from './ComponentsBase/Footer/Footer';
import Header from './ComponentsBase/Header/Header';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Bienvenue nom="Home" />} />
        <Route path="/ParcoursPro" element={<ParcoursPro nom="Parcours" />} />
        <Route path="/Apropos" element={<Apropos nom="A propos" />} />
        <Route path="/projet/:idprojet" element={<Projet nom="projet" />} />
        <Route path="/*" element={<Error404 nom="Erreur" />} />
      </Routes>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
