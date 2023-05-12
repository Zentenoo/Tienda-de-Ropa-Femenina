import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getMercaderia } from "../../mercaderia/helpers/getMercaderia";
import { getPrendas } from "../../prenda/helpers/getPrenda";

export const CreateDetalleCompra = () => {
    const [prendas,setPrendas]=useState([]);
    const [comprasMercaderia,setComprasMercaderia]=useState([])
    const getListPrendas=async()=>{
        const data=await getPrendas()
        setPrendas(data)
    };
    const getListComprasMercaderias=async()=>{
        const data=await getMercaderia()
        setComprasMercaderia(data)
    };
    useState(
        ()=>{
            getListComprasMercaderias();
            getListPrendas();
        },[]
    )

    const onSubmit = ()=>{
        axios.post("http://localhost:5005/detalleCompra",{
            "Mercaderia":document.getElementById("intCantidad").value,
            "Prenda": document.getElementById("intPrecioUnitario").value
        })
    }

    return (
        <div class="container mt-10">
                <section class="d-flex justify-content-center ">
                    <div class="card col-sm-6 p-3">
                        <div class="mb-3">
                            <h4>Crear Detalles de Compra</h4>
                        </div>
                        <div class="mb-2">
                            <form onSubmit={onSubmit} action="">
                                <div class="d-flex justify-content-evenly">
                                <div class="mb-3">
                                        <label htmlFor="intCantidad" class="mx-1auto">Cantidad: </label>
                                        <select id="intCantidad" className='form-select-sm'>
                                            {comprasMercaderia.map(comprasMercaderias =>
                                                <option key={comprasMercaderias.id} value={comprasMercaderias.id}> {comprasMercaderias.cantidad} </option>
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
                                    <Link className="btn btn-primary" onClick={onSubmit} to="/detalleCompra">Agregar</Link>
                                </div>
                            </form>
                        </div>

                    </div>

                </section>
            </div>
    );
};

