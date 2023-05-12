import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react"
import { getAlmacen } from "../helpers/getAlmacen";
import { deteteAlmacen } from "../helpers/deleteAlmacen";

export const AlmacenList = () => {
    const [almacenes, setAlmacenes] = useState([]);
    const navigate=useNavigate()
    const getListAlmacen = async () => {
        const data = await getAlmacen();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setAlmacenes(data);
        } 
    };
    useEffect(
        () => {
            getListAlmacen();
        }, []
    );
    const eliminar = async (id) => {
        deteteAlmacen(id);
        getListAlmacen();
    };
    return (
        <>
            <div className="container">
            <h1>Lista de Almacenes</h1>
            <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Direccion</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {almacenes.map(almacen =>
                            <tr>
                                <td>{almacen.nombre}</td>
                                <td>{almacen.direccion}</td>
                                <td><a onClick={() => navigate(`/almacen/${almacen.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={() => eliminar(almacen.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>                        </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    );
};

