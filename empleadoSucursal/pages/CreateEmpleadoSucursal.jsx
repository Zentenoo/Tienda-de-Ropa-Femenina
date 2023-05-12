import axios from 'axios'
import { getEmpleados } from "../../empleado/helpers/getEmpleado"
import { getSucursales } from "../../sucursal/helpers/getSucursal"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from 'react-router-dom'
export const CreateEmpleadoSucursal = () => {
    const [empleados, setEmpleados] = useState([]);
    const [sucursales, setSucursales] = useState([]);
    const getListEmpleados = async () => {
        const data = await getEmpleados();
        setEmpleados(data);
    };
    const getListSucursales = async () => {
        const data = await getSucursales();
        setSucursales(data);
    };
    useEffect(
        () => {
            getListEmpleados();
            getListSucursales();
        }, []
    );

    const onSubmit = () => {
        axios.post("http://localhost:5005/empleadoSucursal", {
            "Empleado": document.getElementById("strEmpleado").value,
            "Sucursal": document.getElementById("strSucursal").value
        })


    }


    return (
        <>
            <div class="container mt-10">
                <section class="d-flex justify-content-center ">
                    <div class="card col-sm-6 p-3">
                        <div class="mb-3">
                            <h4>Asignar Empleado a Sucursal</h4>
                        </div>
                        <div class="mb-2">
                            <form onSubmit={onSubmit} action="">
                                <div class="d-flex justify-content-evenly">
                                    <div class="mb-3">
                                        <label htmlFor="strEmpleado" class="form-label">Empleado: </label>
                                        <select id="strEmpleado" className='form-select-sm'>
                                            {empleados.map(empleado =>
                                                <option key={empleado.id} value={empleado.id}> {empleado.nombre} </option>
                                            )}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="strSucursal" class="mx-1auto">Sucursal: </label>
                                        <select id="strSucursal" className='form-select-sm'>
                                            {sucursales.map(sucursal =>
                                                <option key={sucursal.id} value={sucursal.id}> {sucursal.nombre} </option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <Link className="btn btn-primary" onClick={onSubmit} to="/empleadoSucursal">Agregar</Link>
                                </div>
                            </form>
                        </div>

                    </div>

                </section>
            </div>


        </>
    )
}
