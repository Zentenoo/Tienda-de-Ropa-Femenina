import { InventarioAlmacenList } from "../components/InventarioAlmacenList"

export const InventarioAlmacenPage = () => {
  return (
    <>
      
      <InventarioAlmacenList></InventarioAlmacenList>
      <div class="container">
        <a class="btn btn-primary" href="/inventarioAlmacen/create">Asignar Prendas a Almacen</a>
      </div>
    </>
  )
}