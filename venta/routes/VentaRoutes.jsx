import { Route, Routes } from "react-router-dom";
import { CreateVenta } from "../pages/CreateVenta";
import { EditVenta } from "../pages/EditVenta";
import { VentaPage } from "../pages/VentaPage";

export const VentaRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<VentaPage/>} ></Route>
                <Route path="/create" element={<CreateVenta/>} ></Route>
                <Route path="/:id" element={<EditVenta/>} ></Route>
            </Routes>
        </div>
    );
};

