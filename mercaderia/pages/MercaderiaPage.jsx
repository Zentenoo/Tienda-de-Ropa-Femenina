import { MercaderiaList } from "../components/MercaderiaList";

export const MercaderiaPage = () => {
    return (
        <div>
            <MercaderiaList></MercaderiaList>
            <div className="container">
                <a className="btn btn-primary" href="/mercaderia/create">Crear Compra Mercaderia</a>
            </div>
        </div>
    );
};

