import axios from "axios";
import { Link, useParams } from "react-router-dom";

export const EditVenta = () => {
    const params=useParams()
    const onSubmit = () => {
        axios.patch(`http://localhost:5005/venta/${params.id}`, {
            "precioTotal": document.getElementById("intPrecioTotal").value,
            "cantidad": document.getElementById("intCantidad").value,
            "fecha": document.getElementById("dateFecha").value,
            "estado": document.getElementById("strEstado").value,
        })


    }
    return (
        <div>
             <div class="container mt-10">
                <section class="d-flex justify-content-center ">
                    <div class="card col-sm-6 p-3">
                        <div class="mb-3">
                            <h4>Editar Venta</h4>
                        </div>
                        <div class="mb-2">
                            <form onSubmit={onSubmit} action="">
                                <div class="mb-3">
                                    <label htmlFor="intPrecioTotal" class="form-label">Precio Total</label>
                                    <input class="form-control" type="text" id="intPrecioTotal" name="intPrecioTotal" />
                                </div>
                                {/* <div class="mb-3">
                                    <label htmlFor="intCantidad" class="form-label">Temporada</label>
                                    <input class="form-control" type="text" id="intCantidad" name="intCantidad" />
                                </div> */}
                                <div className='mb-3'>
                                    <label htmlFor='intCantidad' className='form-label'>Cantidad </label>
                                    <input type="text" className='form-control' id='intCantidad' name='intCantidad'></input>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="dateFecha" class="form-label">Fecha Compra</label>
                                    <input class="form-control" type="date" id="dateFecha" name="dateFecha" />
                                </div>
                                <div class="mb-3">
                                    <label htmlFor='strEstado' class="form-label">Estado: </label>
                                    <select id='strEstado' name='strEstado' defaultValue="Activo" class="form-select">
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Link className="btn btn-primary" onClick={onSubmit} to="/venta">Editar</Link>
                                </div>
                            </form>
                        </div>

                    </div>

                </section>
            </div>
        </div>
    );
};