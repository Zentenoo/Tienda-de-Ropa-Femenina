import { DetalleCompraList } from "../components/DetalleCompraList";

export const DetalleCompraPage = () => {
    return (
        <div>
            <DetalleCompraList></DetalleCompraList>
            <div class="container">
                <a class="btn btn-primary" href="/detalleCompra/create">Crear Detalle Compra</a>
            </div>
        </div>
    );
};

