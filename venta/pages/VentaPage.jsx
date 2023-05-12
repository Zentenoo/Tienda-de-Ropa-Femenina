import { VentaList } from "../components/VentaList";

export const VentaPage = () => {
    return (
        <div>
            <VentaList></VentaList>
            <div class="container">
                <a class="btn btn-primary" href="/venta/create">Crear Venta</a>
            </div>
        </div>
    );
};

