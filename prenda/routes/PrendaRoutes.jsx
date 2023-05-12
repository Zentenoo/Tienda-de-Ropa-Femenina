import { Route,Routes } from "react-router-dom"
import { PrendaPage } from "../pages"
import { CreatePrenda } from "../pages"
import { EditarPrenda } from "../../prenda/pages/EditarPrenda"


export const PrendaRoutes = () => {
  return (
    <>
      
          <Routes>
            <Route path="/*" element={<PrendaPage/>}></Route>
            <Route path="/create" element={<CreatePrenda/>}></Route>
            <Route path="/:id" element={<EditarPrenda/>}></Route>
          </Routes>
    </>
  )
}