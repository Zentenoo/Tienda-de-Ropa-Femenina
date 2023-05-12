import { Route,Routes } from "react-router-dom"
import { EmpleadoPage } from "../pages"
import { CreateEmpleado } from "../pages"
import { EditarEmpleado } from "../../empleado/pages/EditarEmpleado"



export const EmpleadoRoutes = () => {
  return (
    <>
          <Routes>
            <Route path="/*" element={<EmpleadoPage/>}></Route>
            <Route path="/create" element={<CreateEmpleado/>}></Route>
            <Route path="/:id" element={<EditarEmpleado/>}></Route>
          </Routes>
    </>
  )
}