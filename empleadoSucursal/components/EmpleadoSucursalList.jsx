import { getEmpleadoSucursales } from "../helpers/getEmpleadoSucursal"
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react"
import { deleteEmpleadoSucursal } from "../helpers/deleteEmpleadoSucursal";

export const EmpleadoSucursalList =  () => {
    const [empleadoSucursales, setEmpleadoSucursales] = useState([]);
    const navigate=useNavigate()
    const getListEmpleadoSucursales = async()=> {
        const data = await getEmpleadoSucursales();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setEmpleadoSucursales(data);
        }
    };
    useEffect(
        () => {
            getListEmpleadoSucursales();
        }, []
    );
    const eliminar=async(id)=>{
        deleteEmpleadoSucursal(id);
        getListEmpleadoSucursales();
    };
    return(
        <>
            <div class="container">
                <h1>Lista de Empleados en Sucursales</h1>
                <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Empleado</th>
                            <th scope="col">Sucursal</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleadoSucursales.map(empleadoSucursales => 
                            <tr key={empleadoSucursales._id}>
                                <td>{empleadoSucursales.Empleado}</td>
                                <td>{empleadoSucursales.Sucursal}</td>
                                <td><a onClick={() => navigate(`/empleadoSucursal/${empleadoSucursales.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={()=>eliminar(empleadoSucursales.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                            </tr>
                            )}
                        
                    </tbody>
                </table>
            </div>
            
        </>
    )
}

