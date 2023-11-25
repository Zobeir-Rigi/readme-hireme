import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./pages/Home";
import {CreateGraduate} from "./pages/CreateGraduate";
import {Graduates} from "./pages/Graduates";
import {GraduateDetail} from "./pages/GraduateDetail"
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { UserProvider } from './UserContext';

export const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Header />
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graduates" element={<Graduates />} />
        <Route path='/GraduateDetail/:fullName' element={<GraduateDetail />} />
        <Route path='/createGraduate' element={<CreateGraduate />} />
      </Routes>
    </UserProvider>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
