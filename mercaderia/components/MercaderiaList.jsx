import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react"
import { getMercaderia } from "../helpers/getMercaderia";
import { deleteMercaderia } from "../helpers/deleteMercaderia";

export const MercaderiaList = () => {
    const [mercaderias, setMercaderias] = useState([]);
    const navigate=useNavigate()
    const getListMercaderia = async () => {
        const data = await getMercaderia();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setMercaderias(data);
        } 
    };
    useEffect(
        () => {
            getListMercaderia();
        }, []
    );
    const eliminar = async (id) => {
        deleteMercaderia(id);
        getListMercaderia();
    };
    return (
        <>
            <div className="container">
            <h1>Lista de Compras Mercaderia</h1>
            <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Precio Total</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Observaciones</th>
                            <th scope="col">Fecha Compra</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {mercaderias.map(mercaderia =>
                            <tr>
                                <td>{mercaderia.precioTotal}</td>
                                <td>{mercaderia.cantidad}</td>
                                <td>{mercaderia.observaciones}</td>
                                <td>{mercaderia.fechaCompra}</td>
                                <td>{mercaderia.estado}</td>
                                <td><a onClick={() => navigate(`/mercaderia/${mercaderia.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={() => eliminar(mercaderia.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>                        </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    );
};

