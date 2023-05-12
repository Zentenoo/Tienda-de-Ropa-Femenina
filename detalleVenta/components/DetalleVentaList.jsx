import { getDetalleVenta } from "../helpers/getDetalleVenta";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDetalleVenta } from "../helpers/deleteDetalleVenta";
export const DetalleVentaList = () => {
    const [detalleVentas,setDetalleVentas]=useState([])
    const navigate=useNavigate()
    const getListDetalleVentas = async()=>{
        const data = await getDetalleVenta();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setDetalleVentas(data);
        }
    };
    useEffect(
        ()=>{
            getListDetalleVentas()
        },[]
    )
    const eliminar=async(id)=>{
        deleteDetalleVenta(id);
        getListDetalleVentas();
    };
    return (
        <div className="container">
            <h1>Lista de Detalles de Venta</h1>
                <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Precio Unitario</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {detalleVentas.map(detalleVenta =>
                            <tr key={detalleVenta._id}>
                                <td>{detalleVenta.Venta}</td>
                                <td>{detalleVenta.Prenda}</td>
                                <td><a onClick={() => navigate(`/detalleVenta/${detalleVenta.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={()=>eliminar(detalleVenta.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                            </tr>
                            )}

                    </tbody>
                </table>
        </div>
    );
};

