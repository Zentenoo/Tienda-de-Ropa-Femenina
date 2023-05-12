 import { getPrendas } from "../helpers/getPrenda"
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react"
import { deletePrenda } from "../helpers/deletePrenda";

export const PrendaList =  () => {
    const [prendas, setPrendas] = useState([]);
    const navigate=useNavigate()
    const getListPrendas = async()=> {
        const data = await getPrendas();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setPrendas(data);
        }
    };
    useEffect(
        () => {
            getListPrendas();
        }, []
    );
    const eliminar=async(id)=>{
        deletePrenda(id);
        getListPrendas();
    };
    return(
        <>
            <div class="container">
                <h1>Lista de Prendas</h1>
                <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Estilo</th>
                            <th scope="col">Temporada</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Modelo</th>
                            <th scope="col">Color</th>
                            <th scope="col">Talla</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            </tr>
                    </thead>
                    <tbody>
                        {prendas.map(prenda => 
                            <tr key={prenda._id}>
                                <td>{prenda.estilo}</td>
                                <td>{prenda.temporada}</td>
                                <td>{prenda.precioUnitario}</td>
                                <td>{prenda.model}</td>
                                <td>{prenda.Color}</td>
                                <td>{prenda.Talla}</td>
                                <td>{prenda.estado}</td>
                                <td><a onClick={() => navigate(`/prenda/${prenda.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={()=>eliminar(prenda.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                            </tr>
                            )}
                        
                    </tbody>
                </table>
            </div>
            
        </>
    )
}

