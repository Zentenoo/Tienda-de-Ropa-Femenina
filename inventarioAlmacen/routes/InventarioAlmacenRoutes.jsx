import { Route,Routes } from "react-router-dom"
import { InventarioAlmacenPage } from "../pages"
import { CreateInventarioAlmacen } from "../pages"
import { EditarInventarioAlmacen } from "../../inventarioAlmacen/pages/EditarInventarioAlmacen"


export const InventarioAlmacenRoutes = () => {
  return (
    <>
          <Routes>
            <Route path="/*" element={<InventarioAlmacenPage/>}></Route>
            <Route path="/create" element={<CreateInventarioAlmacen/>}></Route>
            <Route path="/:id" element={<EditarInventarioAlmacen/>}></Route>
          </Routes>
    </>
  )
}