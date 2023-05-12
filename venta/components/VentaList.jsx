import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteVenta } from "../helpers/deleteVenta";
import { getVentas } from "../helpers/getVentas";

export const VentaList = () => {
    const [ventas,setVentas]=useState([]);
    const navigate=useNavigate()
    const getListVentas=async()=>{
        const data=await getVentas();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setVentas(data);
        }
    }
    useEffect(
        ()=>{
            getListVentas();
        },[]
    )
    const eliminar=async(id)=>{
        deleteVenta(id);
        getListVentas();
    };
    return (
        <div class="container">
                <h1>Lista de Ventas</h1>
                <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Fecha</th>
                            <th scope="col">PrecioTotal</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                    </thead>
                    <tbody>
                        {ventas.map(venta => 
                            <tr key={venta._id}>
                                <td>{venta.fecha}</td>
                                <td>{venta.precioTotal} Bs.</td>
                                <td>{venta.cantidad}</td>
                                <td>{venta.estado}</td>
                                <td><a onClick={() => navigate(`/venta/${venta.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={()=>eliminar(venta.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                            </tr>
                            )}
                        
                    </tbody>
                </table>
            </div>
    );
};

