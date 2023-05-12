import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const EditarAlmacen = () => {
    const params=useParams()

    const onSubmit = () => {
        axios.patch(`http://localhost:5005/almacen/${params.id}`, {
            "nombre": document.getElementById("strNombre").value,
            "direccion":document.getElementById("strDireccion").value,
        })
    }

    return (
        <div className="container mt-10">
                <section class="d-flex justify-content-center ">
                    <div class="card col-sm-6 p-3">
                        <div class="mb-3">
                            <h4>Editar Almacen</h4>
                        </div>
                        <div class="mb-2">
                            <form onSubmit={onSubmit} action="">
                                <div class="mb-3">
                                    <label  htmlFor="strNombre" class="form-label">Nombre </label>
                                    <input type="text" id="strNombre" name="strNombre" class="form-control"/>
                                </div>
                                <div class="mb-3">
                                    <label  htmlFor="strDireccion" class="form-label">Direccion </label>
                                    <input type="text" id="strDireccion" name="strDireccion" class="form-control"/>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Link className="btn btn-primary" onClick={onSubmit} to="/almacen">Editar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
    );
};

