import { InventarioPrendaList } from "../components/InventarioPrendaList";

export const InventarioPrendaPage = () => {
    return (
        <div>
            <InventarioPrendaList></InventarioPrendaList>
            <div class="container">
                <a class="btn btn-primary" href="/inventarioPrenda/create">Crear Inventario Prenda</a>
            </div>
        </div>
    );
};

