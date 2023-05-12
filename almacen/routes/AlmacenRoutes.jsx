import { Route, Routes } from "react-router-dom";
import { CreateAlmacen } from "../pages";
import { AlmacenPage } from "../pages";
import { EditarAlmacen } from "../pages/EditarAlmacen";

export const AlmacenRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<AlmacenPage/>}></Route>
                <Route path="/create" element={<CreateAlmacen/>}></Route>
                <Route path="/:id" element={<EditarAlmacen/>}></Route>
            </Routes>
            
        </div>
    );
};

