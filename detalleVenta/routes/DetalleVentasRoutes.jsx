import { Route, Routes } from "react-router-dom";
import { CreateDetalleVenta } from "../pages/CreateDetalleVenta";
import { DetalleVentaPage } from "../pages/DetalleVentaPage";
import { EditarDetalleVenta } from "../pages/EditarDetalleVenta";

export const DetalleVentasRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<DetalleVentaPage/>} ></Route>
                <Route path="/create" element={<CreateDetalleVenta/>}></Route>
                <Route path="/:id" element={<EditarDetalleVenta/>}></Route>
            </Routes>
        </div>
    );
};

