import axios from "axios";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPrendas } from "../../prenda/helpers/getPrenda";
import { getVentas } from "../../venta/helpers/getVentas";

export const EditarDetalleVenta = () => {
    const params=useParams()
    const [prendas, setPrendas] = useState([]);
    const [ventas, setVentas] = useState([])
    const getListPrendas = async () => {
        const data = await getPrendas()
        setPrendas(data)
    };
    const getListVentas = async () => {
        const data = await getVentas()
        setVentas(data)
    };
    useState(
        () => {
            getListVentas();
            getListPrendas();
        }, []
    )

    const onSubmit = () => {
        axios.patch(`http://localhost:5005/detalleVenta/${params.id}`, {
            "Venta": document.getElementById("intCantidad").value,
            "Prenda": document.getElementById("intPrecioUnitario").value
        })
    }

    return (
        <div class="container mt-10">
            <section class="d-flex justify-content-center ">
                <div class="card col-sm-6 p-3">
                    <div class="mb-3">
                        <h4>Editar Detalles de Compra</h4>
                    </div>
                    <div class="mb-2">
                        <form onSubmit={onSubmit} action="">
                            <div class="d-flex justify-content-evenly">
                                <div class="mb-3">
                                    <label htmlFor="intCantidad" class="mx-1auto">Cantidad: </label>
                                    <select id="intCantidad" className='form-select-sm'>
                                        {ventas.map(venta =>
                                            <option key={venta.id} value={venta.id}> {venta.cantidad} </option>
                                        )}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="intPrecioUnitario" class="form-label">Precio Unitario: </label>
                                    <select id="intPrecioUnitario" className='form-select-sm'>
                                        {prendas.map(prenda =>
                                            <option key={prenda.id} value={prenda.id}> {prenda.precioUnitario} </option>
                                        )}
                                    </select>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center">
                                <Link className="btn btn-primary" onClick={onSubmit} to="/detalleVenta">Editar</Link>
                            </div>
                        </form>
                    </div>

                </div>

            </section>
        </div>
    );


};