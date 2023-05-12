import { getDetalleCompra } from "../helpers/getDetalleCompra";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteDetalleCompra } from "../helpers/deleteDetalleCompra";

export const DetalleCompraList = () => {
    const [detalleCompras,setDetalleCompras]=useState([])
    const navigate=useNavigate()
    const getListDetalleCompras = async()=>{
        const data = await getDetalleCompra();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setDetalleCompras(data);
        }
    };
    useEffect(
        ()=>{
            getListDetalleCompras()
        },[]
    )
    const eliminar=async(id)=>{
        deleteDetalleCompra(id);
        getListDetalleCompras();
    };
    return (
        <div className="container">
            <h1>Lista de Detalles de Compra</h1>
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
                        {detalleCompras.map(detalleCompra =>
                            <tr key={detalleCompra._id}>
                                <td>{detalleCompra.Mercaderia}</td>
                                <td>{detalleCompra.Prenda}</td>
                                <td><a onClick={() => navigate(`/detalleCompra/${detalleCompra.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={()=>eliminar(detalleCompra.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                            </tr>
                            )}

                    </tbody>
                </table>
        </div>
    );
};

