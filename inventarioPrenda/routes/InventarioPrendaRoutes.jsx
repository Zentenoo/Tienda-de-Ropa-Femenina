import { Route, Routes } from "react-router-dom";
import { CreateInventarioPrenda } from "../pages/CreateInventarioPrenda";
import { EditarInventarioPrenda } from "../pages/EditarInventarioPrenda";
import { InventarioPrendaPage } from "../pages/InventarioPrendaPage";

export const InventarioPrendaRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<InventarioPrendaPage/>}></Route>
                <Route path="/create" element={<CreateInventarioPrenda/>}></Route>
                <Route path="/:id" element={<EditarInventarioPrenda/>}></Route>
            </Routes>
        </div>
    );
};

