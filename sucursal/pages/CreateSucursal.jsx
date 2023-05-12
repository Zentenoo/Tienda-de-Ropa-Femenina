import axios from 'axios'
import { Link } from 'react-router-dom'
export const CreateSucursal = () => {
    const onSubmit = () => {
        axios.post("http://localhost:5005/sucursal", {
            "nombre": document.getElementById("strNombre").value,
            "direccion": document.getElementById("strDireccion").value,
            "telefono": document.getElementById("intTelefono").value,
            "estado": document.getElementById("strEstado").value
        })
    }
    return (
        <>
            <div class="container mt-10">
                <section class="d-flex justify-content-center ">
                    <div class="card col-sm-6 p-3">
                        <div class="mb-3">
                            <h4>Nueva Sucursal</h4>
                        </div>
                        <div class="mb-2">
                            <form onSubmit={onSubmit} action="">
                                <div class="mb-3">
                                    <label htmlFor="strNombre" class="form-label">Nombre</label>
                                    <input class="form-control" type="text" id="strNombre" name="strNombre" />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="strDireccion" class="form-label">Direccion</label>
                                    <input class="form-control" type="text" id="strDireccion" name="strDireccion" />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="intTelefono" class="form-label">Telefono</label>
                                    <input class="form-control" type="text" id="intTelefono" name="intTelefono" />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor='strEstado' class="form-label">Estado: </label>
                                    <select id='strEstado' name='strEstado' defaultValue="Activa" class="form-select" disabled>
                                        <option value="Activo">Activa</option>
                                        <option value="Inactivo">Inactiva</option>
                                    </select>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Link className="btn btn-primary" onClick={onSubmit} to="/sucursal">Agregar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
