import { getSucursales } from "../helpers/getSucursal"
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react"
import { deleteSucursal } from "../helpers/deleteSucursal";

export const SucursalList =  () => {
    const [sucursales, setSucursales] = useState([]);
    const navigate=useNavigate()
    const getListSucursales = async()=> {
        const data = await getSucursales();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setSucursales(data);
        }
    };
    useEffect(
        () => {
            getListSucursales();
        }, []
    );
    const eliminar=async(id)=>{
        deleteSucursal(id);
        getListSucursales();
    };
    return(
        <>
            <div class="container">
                <h1>Lista de Sucursales</h1>
                <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                    </thead>
                    <tbody>
                        {sucursales.map(sucursal => 
                            <tr key={sucursal._id}>
                                <td>{sucursal.nombre}</td>
                                <td>{sucursal.direccion}</td>
                                <td>{sucursal.telefono}</td>
                                <td>{sucursal.estado}</td>
                                <td><a onClick={() => navigate(`/sucursal/${sucursal.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={()=>eliminar(sucursal.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
            
        </>
    )
}
