import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import Cardapio from "./pages/Cardapio/Cardapio";
import Menu from "./components/Menu/Menu";
import PaginaPadrao from "./components/PaginaPadrao/PaginaPadrao";
import Sobre from "./pages/Sobre/Sobre";

export default function AppRouter() {
    return (
        <main>
            <BrowserRouter>
            <Menu />
                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path="/cardapio" element={<Cardapio />} />
                        <Route path="/sobre" element={<Sobre />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </main>
    )
}