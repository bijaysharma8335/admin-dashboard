import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ecommerce from "./pages/Ecommerce";
import Footer from "./components/Footer";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Ecommerce />} />
            </Routes>{" "}
            <Footer />
        </BrowserRouter>
    );
};

export default App;
