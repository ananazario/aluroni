import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Cardapio from "./pages/Cardapio/Cardapio";
import Menu from "./components/Menu/Menu";
import PaginaPadrao from "./components/PaginaPadrao/PaginaPadrao";

export default function AppRouter() {
    return (
        <main>
            <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path="/" element={<PaginaPadrao />} />
                    <Route index element={<Inicio />} />
                    <Route path="/cardapio" element={<Cardapio />} />
                </Routes>
            </BrowserRouter>
        </main>
    )
}