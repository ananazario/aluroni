import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Cardapio from "./pages/Cardapio/Cardapio";
import Menu from "./components/Menu/Menu";


export default function AppRouter() {
    return (
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/cardapio" element={<Cardapio />} />
            </Routes>
        </BrowserRouter>
    )
}