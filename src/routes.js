import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BasePage from './pages/BasePage';
import Home from './pages/Home';
import Favoritos from './pages/Favoritos';
import Categorias from './pages/Categorias';
import Estante from './pages/Estante';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BasePage />}>
          <Route index element={<Home />} />
          <Route path='/favoritos' element={<Favoritos />} />
          <Route path='/categorias' element={<Categorias />} />
          <Route path='/estante' element={<Estante />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes