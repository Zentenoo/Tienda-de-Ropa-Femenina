import { Route, Routes } from "react-router-dom";
import { CreateMercaderia } from "../pages/CreateMercaderia";
import { EditarMercaderia } from "../pages/EditarMercaderia";
import { MercaderiaPage } from "../pages/MercaderiaPage";

export const MercaderiaRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<MercaderiaPage/>}></Route>
                <Route path="/create" element={<CreateMercaderia/>}></Route>
                <Route path="/:id" element={<EditarMercaderia/>}></Route>
            </Routes>
            
        </div>
    );
};

