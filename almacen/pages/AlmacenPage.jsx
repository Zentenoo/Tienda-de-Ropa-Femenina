import { AlmacenList } from "../components/AlmacenList";

export const AlmacenPage = () => {
    return (
        <div>
            <AlmacenList></AlmacenList>
            <div className="container">
                <a className="btn btn-primary" href="/almacen/create">Crear Almacen</a>
            </div>
        </div>
    );
};

