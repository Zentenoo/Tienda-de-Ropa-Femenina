import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteInventarioPrenda } from "../helpers/deleteInventarioPrenda";
import { getInventarioPrenda } from "../helpers/getInventarioPrenda";

export const InventarioPrendaList = () => {
    const [inventarioPrendas,setInventarioPrendas]=useState([])
    const navigate=useNavigate()
    const getListInventarioPrendas = async()=>{
        const data = await getInventarioPrenda();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setInventarioPrendas(data);
        }
    };
    useEffect(
        ()=>{
            getListInventarioPrendas()
        },[]
    )
    const eliminar=async(id)=>{
        deleteInventarioPrenda(id);
        getListInventarioPrendas();
    };
    return (
        <div className="container">
            <h1>Inventario Prenda</h1>
                <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Sucursal</th>
                            <th scope="col">Prenda</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventarioPrendas.map(inventarioPrenda =>
                            <tr key={inventarioPrenda._id}>
                                <td>{inventarioPrenda.Sucursal}</td>
                                <td>{inventarioPrenda.Prenda}</td>
                                <td>{inventarioPrenda.cantidad}</td>
                                <td><a onClick={() => navigate(`/inventarioPrenda/${inventarioPrenda.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={()=>eliminar(inventarioPrenda.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                            </tr>
                            )}

                    </tbody>
                </table>
        </div>
    );
};

