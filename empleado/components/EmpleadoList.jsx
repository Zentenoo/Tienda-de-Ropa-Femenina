import { getEmpleados } from "../helpers/getEmpleado"
import { useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import { useState } from "react"
import { deleteEmpleado } from "../helpers/deleteEmpleado";

export const EmpleadoList = () => {
    const [empleados, setEmpleados] = useState([]);
    const navigate=useNavigate()
    const getListEmpleados = async () => {
        const data = await getEmpleados();
        if (data == "error") {
            navigate(`../../`);
        }else {
            setEmpleados(data);
        } 
    };
    useEffect(
        () => {
            getListEmpleados();
        }, []
    );
    const eliminar = async (id) => {
        deleteEmpleado(id);
        getListEmpleados();
    };
    return (
        <>
            <div className="container">
            <h1>Lista de Empleados</h1>
            <hr></hr>
                <table class="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido Paterno</th>
                            <th scope="col">Apellido Materno</th>
                            <th scope="col">Carnet Identidad</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Cargo</th>
                            <th scope="col">Estado</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map(empleado =>
                            <tr>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.Ap_paterno}</td>
                                <td>{empleado.Ap_materno}</td>
                                <td>{empleado.ci}</td>
                                <td>{empleado.telefono}</td>
                                <td>{empleado.TipoEmpleado}</td>
                                <td>{empleado.estado}</td>
                                <td><a onClick={() => navigate(`/empleado/${empleado.id}`)} className="btn btn-primary"><i class="bi bi-pencil-square"></i></a></td>
                                <td><button onClick={() => eliminar(empleado.id)} type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>                        </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </>
    )
}

