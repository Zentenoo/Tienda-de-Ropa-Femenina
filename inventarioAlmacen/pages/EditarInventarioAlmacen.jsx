import axios from 'axios'
import { getAlmacen } from "../../almacen/helpers/getAlmacen"
import { getPrendas } from "../../prenda/helpers/getPrenda"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from 'react-router-dom'

export const EditarInventarioAlmacen = () => {

    const params = useParams()
    const [almacenes, setAlmacen] = useState([]);
    const [prendas, setPrenda] = useState([]);
    const getListAlmacen = async () => {
        const data = await getAlmacen();
        setAlmacen(data);
    };
    const getListPrenda = async () => {
        const data = await getPrendas();
        setPrenda(data);
    };
    useEffect(
        () => {
            getListAlmacen();
            getListPrenda();
        }, []
    );

    const onSubmit = () => {
        axios.patch(`http://localhost:5005/inventarioAlmacen/${params.id}`, {
            "Almacen": document.getElementById("strAlmacen").value,
            "Prenda": document.getElementById("strPrenda").value,
            "cantidad": document.getElementById("intCantidad").value
        })


    }
    return (
        <>
            <div class="container mt-10">
                <section class="d-flex justify-content-center ">
                    <div class="card col-sm-6 p-3">
                        <div class="mb-3">
                            <h4>Editar Prendas en Almacen</h4>
                        </div>
                        <div class="mb-2">
                            <form onSubmit={onSubmit} action="">
                                <div class="d-flex justify-content-evenly">
                                    <div class="mb-3">
                                        <label htmlFor="strPrenda" class="mx-1auto">Prenda </label>
                                        <select id="strPrenda" className='form-select-sm'>
                                            {prendas.map(prenda =>
                                                <option key={prenda.id} value={prenda.id}> {prenda.estilo} </option>
                                            )}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="intCantidad" class="form-label">Cantidad</label>
                                        <input class="form-control" type="text" id="intCantidad" name="intCantidad" />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="strAlmacen" class="form-label">Almacen</label>
                                        <select id="strAlmacen" className='form-select-sm'>
                                            {almacenes.map(almacen =>
                                                <option key={almacen.id} value={almacen.id}> {almacen.nombre} </option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Link className="btn btn-primary" onClick={onSubmit} to="/inventarioAlmacen">Editar</Link>
                                </div>
                            </form>
                        </div>

                    </div>

                </section>
            </div>


        </>
    )
};
