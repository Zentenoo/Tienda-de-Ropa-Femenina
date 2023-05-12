import { getInventarioAlmacenes } from "../helpers/getInventarioAlmacen"
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react"
import { deleteInventarioAlmacen } from "../helpers/deteleInventarioAlmacen";

export const InventarioAlmacenList =  () => {
    const [inventarioAlmacenes, setInventarioAlmacenes] = useState([]);
    const navigate=useNavigate()
    const getListInventarioAlmacenes = async()=> {
        const data = await getInventarioAlmacenes();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setInventarioAlmacenes(data);
        }
    };
    useEffect(
        () => {
            getListInventarioAlmacenes();
        }, []
    );
    const eliminar=async(id)=>{
        deleteInventarioAlmacen(id);
        getListInventarioAlmacenes();
    };
    return(
        <>
            <div class="container">
                <h1>Lista de Prendas en Almacen</h1>
                <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Prenda</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Almacen</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventarioAlmacenes.map(inventarioAlmacen => 
                            <tr key={inventarioAlmacen._id}>
                                <td>{inventarioAlmacen.Prenda}</td>
                                <td>{inventarioAlmacen.cantidad}</td>
                                <td>{inventarioAlmacen.Almacen}</td>
                                <td><a onClick={() => navigate(`/inventarioAlmacen/${inventarioAlmacen.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={()=>eliminar(inventarioAlmacen.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                            </tr>
                            )}
                        
                    </tbody>
                </table>
            </div>
            
        </>
    )
}

