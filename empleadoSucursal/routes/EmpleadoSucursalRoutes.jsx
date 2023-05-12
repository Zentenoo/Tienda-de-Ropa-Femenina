import { Route,Routes } from "react-router-dom"
import { EmpleadoSucursalPage } from "../pages"
import { CreateEmpleadoSucursal } from "../pages"
import { EditarEmpleadoSucursal } from "../../empleadoSucursal/pages/EditarEmpleadoSucursal"


export const EmpleadoSucursalRoutes = () => {
  return (
    <>
          <Routes>
            <Route path="/*" element={<EmpleadoSucursalPage/>}></Route>
            <Route path="/create" element={<CreateEmpleadoSucursal/>}></Route>
            <Route path="/:id" element={<EditarEmpleadoSucursal/>}></Route>
          </Routes>
    </>
  )
}