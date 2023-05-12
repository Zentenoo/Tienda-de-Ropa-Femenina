import axios from 'axios'
import { getModelos } from "../../modelo/helpers/getModelo"
import { getColors } from "../../../src/color/helpers/getColor"
import { getTallas } from "../../../src/talla/helpers/getTalla"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from 'react-router-dom'

export const EditarPrenda = () => {

    const params = useParams()
    console.log(params)
    const [modelos, setModelos] = useState([]);
    const [colors, setColors] = useState([]);
    const [tallas, setTallas] = useState([]);
    const getListModelos = async () => {
        const data = await getModelos();
        setModelos(data);
    };
    const getListColors = async () => {
        const data = await getColors();
        setColors(data);
    };
    const getListTallas = async () => {
        const data = await getTallas();
        setTallas(data);
    };
    useEffect(
        () => {
            getListModelos();
            getListColors();
            getListTallas();
        }, []
    );

    const onSubmit = () => {
        axios.patch(`http://localhost:5005/prenda/${params.id}`, {
            "estilo": document.getElementById("strNombre").value,
            "temporada": document.getElementById("strTemporada").value,
            "precioUnitario": document.getElementById("intPrecioUnitario").value,
            "estado":document.getElementById("strEstado").value,
            "model": document.getElementById("strModel").value,
            "Color": document.getElementById("strColor").value,
            "Talla": document.getElementById("strTalla").value
        })


    }
    
    return (
        <>
            <div class="container mt-10">
                <section class="d-flex justify-content-center ">
                    <div class="card col-sm-6 p-3">
                        <div class="mb-3">
                            <h4>Editar Prenda</h4>
                        </div>
                        <div class="mb-2">
                            <form onSubmit={onSubmit} action="">
                                <div class="mb-3">
                                    <label htmlFor="strNombre" class="form-label">Estilo</label>
                                    <input class="form-control" type="text" id="strNombre" name="strNombre" required/>
                                </div>
                                {/* <div class="mb-3">
                                    <label htmlFor="strTemporada" class="form-label">Temporada</label>
                                    <input class="form-control" type="text" id="strTemporada" name="strTemporada" />
                                </div> */}
                                <div className='mb-3'>
                                    <label htmlFor='strTemporada' className='form-label'>Temporada </label>
                                    <select className='form-select' id='strTemporada' name='strTemporada' defaultValue="Verano">
                                        <option value="Verano">Verano</option>
                                        <option value="Invierno">Invierno</option>
                                        <option value="Otoño">Otoño</option>
                                        <option value="Primavera">Primavera</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor="intPrecioUnitario" class="form-label">Precio</label>
                                    <input class="form-control" type="text" id="intPrecioUnitario" name="intPrecioUnitario" required/>
                                </div>
                                <div class="mb-3">
                                    <label htmlFor='strEstado' class="form-label">Estado: </label>
                                    <select id='strEstado' name='strEstado' defaultValue="Activo" class="form-select">
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                                <div class="d-flex justify-content-evenly">
                                    <div class="mb-3">
                                        <label htmlFor="strModel" class="form-label">Modelo: </label>
                                        <select id="strModel" className='form-select-sm'>
                                            {modelos.map(modelo =>
                                                <option key={modelo.id} value={modelo.id}> {modelo.descripcion} </option>
                                            )}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="strColor" class="form-label">Color: </label>
                                        <select id="strColor" className='form-select-sm'>
                                            {colors.map(color =>
                                                <option key={color.id} value={color.id}> {color.descripcion} </option>
                                            )}
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label htmlFor="strTalla" class="mx-1auto">Talla: </label>
                                        <select id="strTalla" className='form-select-sm'>
                                            {tallas.map(talla =>
                                                <option key={talla.id} value={talla.id}> {talla.descripcion} </option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <button className="btn btn-primary" type='submit'>Editar</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </section>
            </div>


        </>
    );
};
