import { EmpleadoList } from "../components/EmpleadoList"

export const EmpleadoPage = () => {
  return (
    <>
      <EmpleadoList></EmpleadoList>
      <div className="container">
        <a className="btn btn-primary" href="/empleado/create">Crear Empleado</a>
      </div>
    </>
  )
}