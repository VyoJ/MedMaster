import Home from './Routes/Home';
import Products from './Routes/Products';
import Consult from './Routes/Consult';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/Products" element = {<Products/>}/>
        <Route path = "/Consult" element = {<Consult/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
