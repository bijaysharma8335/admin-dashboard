import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ecommerce from "./pages/Ecommerce";

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ecommerce/>}/>
        </Routes>
        </BrowserRouter>
    );
};

export default App;
