import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./pages/Home";
import {CreateGraduate} from "./pages/CreateGraduate";
import {Graduates} from "./pages/Graduates";
import {GraduateDetail} from "./pages/GraduateDetail"

import { UserProvider } from './UserContext';

export const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graduates" element={<Graduates />} />
        <Route path='/GraduateDetail/:fullName' element={<GraduateDetail />} />
        <Route path='/createGraduate' element={<CreateGraduate />} />
      </Routes>
    </UserProvider>
    </BrowserRouter>
    </div>
  );
}

export default App;
