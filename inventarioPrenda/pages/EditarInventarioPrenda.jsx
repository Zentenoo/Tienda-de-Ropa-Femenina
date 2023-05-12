import { useState } from "react";
import { getPrendas } from "../../prenda/helpers/getPrenda";
import { getSucursales } from "../../sucursal/helpers/getSucursal";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
export const EditarInventarioPrenda = () => {
    const params=useParams()
    const [prendas, setPrendas] = useState([]);
    const [sucursales, setSucursales] = useState([])
    const getListPrendas = async () => {
        const data = await getPrendas()
        setPrendas(data)
    };
    const getListSucursales = async () => {
        const data = await getSucursales()
        setSucursales(data)
    };
    useState(
        () => {
            getListSucursales();
            getListPrendas();
        }, []
    )

    const onSubmit = () => {
        axios.patch(`http://localhost:5005/inventarioPrenda/${params.id}`, {
            "Sucursal": document.getElementById("strNombre").value,
            "Prenda": document.getElementById("strEstilo").value,
            "cantidad":document.getElementById("intCantidad").value
        })
    }

    return (
        <div class="container mt-10">
            <section class="d-flex justify-content-center ">
                <div class="card col-sm-6 p-3">
                    <div class="mb-3">
                        <h4>Editar Inventario Prendas</h4>
                    </div>
                    <div class="mb-2">
                        <form onSubmit={onSubmit} action="">
                            <div class="d-flex justify-content-evenly">
                                <div class="mb-3">
                                    <label htmlFor="strNombre" class="mx-1auto">Sucursal: </label>
                                    <select id="strNombre" className='form-select-sm'>
                                        {sucursales.map(sucursal =>
                                            <option key={sucursal.id} value={sucursal.id}> {sucursal.nombre} </option>
                                        )}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="strEstilo" class="form-label">Estilo: </label>
                                    <select id="strEstilo" className='form-select-sm'>
                                        {prendas.map(prenda =>
                                            <option key={prenda.id} value={prenda.id}> {prenda.estilo} </option>
                                        )}
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label  htmlFor="intCantidad" class="form-label">Cantidad: </label>
                                    <input type="text" id="intCantidad" name="intCantidad" class="form-control"/>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center">
                            <Link className="btn btn-primary" onClick={onSubmit} to="/inventarioPrenda">Editar</Link>
                            </div>
                        </form>
                    </div>

                </div>

            </section>
        </div>
    );
};

