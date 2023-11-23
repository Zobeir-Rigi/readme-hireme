import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Home} from "./pages/Home";
import {CreateGraduate} from "./pages/CreateGraduate";
import {Graduates} from "./pages/Graduates";
import {Graduate} from "./pages/Graduate"

export const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graduates" element={<Graduates />} />
        <Route path='/graduate' element={<Graduate />} />
        <Route path='/createGraduate' element={<CreateGraduate />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
