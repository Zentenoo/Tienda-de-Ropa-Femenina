import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const EditarMercaderia = () => {
    const params=useParams()

    const onSubmit = () => {
        axios.patch(`http://localhost:5005/mercaderia/${params.id}`, {
            "precioTotal": document.getElementById("intPrecioTotal").value,
            "cantidad":document.getElementById("intCantidad").value,
            "observaciones": document.getElementById("strObservaciones").value,
            "fechaCompra": document.getElementById("dateFechaCompra").value,
            "estado": document.getElementById("strEstado").value
        })
    }

    return (
        <div className="container mt-10">
                <section class="d-flex justify-content-center ">
                    <div class="card col-sm-6 p-3">
                        <div class="mb-3">
                            <h4>Editar Compra Mercaderia</h4>
                        </div>
                        <div class="mb-2">
                            <form onSubmit={onSubmit} action="">
                                <div class="mb-3">
                                    <label  htmlFor="intPrecioTotal" class="form-label">Precio Total: </label>
                                    <input type="text" id="intPrecioTotal" name="intPrecioTotal" class="form-control"/>
                                </div>
                                <div class="mb-3">
                                    <label  htmlFor="intCantidad" class="form-label">Cantidad: </label>
                                    <input type="text" id="intCantidad" name="intCantidad" class="form-control"/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="strObservaciones" class="form-label">Observaciones: </label>
                                    <input type="text" id="strObservaciones" name="strObservaciones" class="form-control"/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="dateFechaCompra" class="form-label">Fecha Compra: </label>
                                    <input type="date" id="dateFechaCompra" name="dateFechaCompra" class="form-control"/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor='strEstado' class="form-label">Estado: </label>
                                    <select id='strEstado' name='strEstado' defaultValue="Activo" class="form-select">
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Link className="btn btn-primary" onClick={onSubmit} to="/mercaderia">Editar</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
    );
};

