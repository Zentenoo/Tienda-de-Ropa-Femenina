import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react"
import { useState } from "react"
import { getTipoEmpleado } from "../../tipoEmpleado/helpers/getTipoEmpleado";
import { getEmpleadoById } from "../helpers/getEmpleadoById";



export const EditarEmpleado = () => {

    const params = useParams()
    const[empleados,setEmpleados]=useState([]);
    const getListEmpleados=async()=>{
        const data=await getEmpleadoById(params.id);
        setEmpleados(data)
        console.log(data)
    }
    
    const [tipoEmpleados, setTipoEmpleados] = useState([]);
    const getListTipoEmpleados = async () => {
        const data = await getTipoEmpleado();
        setTipoEmpleados(data);
    };
    useEffect(
        () => {
            getListTipoEmpleados();
            getListEmpleados();
        }, []
    );
    const onSubmit = () => {
        axios.patch(`http://localhost:5005/empleado/${params.id}`, {
            "nombre": document.getElementById("strNombre").value,
            "Ap_paterno": document.getElementById("strPaterno").value,
            "Ap_materno": document.getElementById("strMaterno").value,
            "ci": document.getElementById("intCi").value,
            "telefono": document.getElementById("intTelefono").value,
            "estado": document.getElementById("strEstado").value,
            "TipoEmpleado": document.getElementById("strTipo").value
        })

    }
      
    return (
        <div className="container mt-10">
                <section class="d-flex justify-content-center ">
                    <div class="card col-sm-6 p-3">
                        <div class="mb-3">
                            <h4>Editar Empleado</h4>
                        </div>
                        <div class="mb-2">
                        
                            <form onSubmit={onSubmit} action="">
                                
                                <div class="mb-3">
                                    
                                    <label  htmlFor="strNombre" class="form-label">Nombre del Empleado: </label>
                                    <input type="text" id="strNombre"  name="strNombre" class="form-control" required/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="strPaterno" class="form-label">Apellido Paterno: </label>
                                    <input type="text" id="strPaterno" name="strPaterno" class="form-control" required/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="strMaterno" class="form-label">Apellido Materno: </label>
                                    <input type="text" id="strMaterno" name="strMaterno" class="form-control" required/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="intCi" class="form-label">Carnet de identidad: </label>
                                    <input type="text" id="intCi" name="intCi" class="form-control" required/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="intTelefono" class="form-label">Telefono: </label>
                                    <input type="text" id="intTelefono" name="intTelefono" class="form-control" required/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor='strEstado' class="form-label">Estado: </label>
                                    <select id='strEstado' name='strEstado' defaultValue="Activo" class="form-select">
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="strTipo" class="form-label">Tipo Empleado</label>
                                    <select id="strTipo" class="form-select">
                                        {tipoEmpleados.map(tipoEmpleado =>
                                            <option  key={tipoEmpleado.id} value={tipoEmpleado.id}> {tipoEmpleado.descripcion} </option>
                                        )}
                                    </select>
                                </div>

                                <div class="d-flex justify-content-center">
                                    <button className="btn btn-primary" type="submit">Editar</button>
                                </div>
                            
                            </form>
                        </div>
                    </div>
                </section>
            </div>

    )
};

