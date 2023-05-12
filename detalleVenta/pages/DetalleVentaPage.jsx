import { DetalleVentaList } from "../components/DetalleVentaList";

export const DetalleVentaPage = () => {
    return (
        <div>
            <DetalleVentaList></DetalleVentaList>
            <div class="container">
                <a class="btn btn-primary" href="/detalleVenta/create">Crear Detalle Venta</a>
            </div>
        </div>
    );
};