import { Route, Routes } from "react-router-dom";
import { CreateDetalleCompra } from "../pages/CreateDetalleCompra";
import { DetalleCompraPage } from "../pages/DetalleCompraPage";
import { EditDetalleCompra} from "../pages/EditDetalleCompra";

export const DetalleCompraRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<DetalleCompraPage/>}></Route>
                <Route path="/create" element={<CreateDetalleCompra/>}></Route>
                <Route path="/:id" element={<EditDetalleCompra/>}></Route>
            </Routes>
        </div>
    );
};
