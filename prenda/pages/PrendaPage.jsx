import { PrendaList } from "../components/PrendaList"

export const PrendaPage = () => {
  return (
    <>
      
      <PrendaList></PrendaList>
      <div class="container">
        <a class="btn btn-primary" href="/prenda/create">Crear Prenda</a>
      </div>
    </>
  )
}