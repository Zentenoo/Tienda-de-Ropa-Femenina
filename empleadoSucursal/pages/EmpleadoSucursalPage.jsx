import { EmpleadoSucursalList } from "../components/EmpleadoSucursalList"

export const EmpleadoSucursalPage = () => {
  return (
    <>
      
      <EmpleadoSucursalList></EmpleadoSucursalList>
      <div class="container">
        <a class="btn btn-primary" href="/empleadoSucursal/create">Asignar Empleado a Sucursal</a>
      </div>
    </>
  )
}