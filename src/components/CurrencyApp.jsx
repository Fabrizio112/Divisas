import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CalculateCurrency from "../pages/CalculateCurrency";
import CompareCurrency from "../pages/CompareCurrency";

function CurrencyApp() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/calculate" element={<CalculateCurrency />} />
                <Route path="/compare" element={<CompareCurrency />} />
            </Routes>
        </HashRouter>

    );
}

export default CurrencyApp;