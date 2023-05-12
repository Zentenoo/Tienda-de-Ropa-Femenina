import {Routes, Route} from "react-router-dom"
import { PrendaRoutes } from "../prenda/routes/PrendaRoutes"
import { SucursalRoutes } from "../sucursal/routes/SucursalRoutes"
import { EmpleadoRoutes } from "../empleado/routes/EmpleadoRoutes"
import { EmpleadoSucursalRoutes } from "../empleadoSucursal/routes/EmpleadoSucursalRoutes"
import { InicioRoutes } from "../inicio/inicioRoutes"
import { MercaderiaRoutes } from "../mercaderia/routes/MercaderiaRoutes"
import { DetalleCompraRoutes } from "../detalleCompra/routes/DetalleCompraRoutes"
import { VentaRoutes } from "../venta/routes/VentaRoutes"
import { DetalleVentasRoutes } from "../detalleVenta/routes/DetalleVentasRoutes"
import { InventarioPrendaRoutes } from "../inventarioPrenda/routes/InventarioPrendaRoutes"
import { AlmacenRoutes } from "../almacen/routes/AlmacenRoutes"
import { InventarioAlmacenRoutes } from "../inventarioAlmacen/routes/InventarioAlmacenRoutes"

export const AppRouter = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Lady Posh</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/prenda">Prenda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/empleado">Empleado</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/sucursal">Sucursal</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/empleadoSucursal">Empleado en Sucursal</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/mercaderia">Mercaderia</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/detalleCompra">Detalle Compra</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/venta">Venta</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/detalleVenta">Detalle Venta</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/inventarioPrenda">Inventario Prenda</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/almacen">Almacen</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/inventarioAlmacen">Inventario Almacen</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/prenda/*" element={<PrendaRoutes/>}></Route>
                <Route path="/sucursal/*" element={<SucursalRoutes/>}></Route>
                <Route path="/empleado/*" element={<EmpleadoRoutes/>}></Route>
                <Route path="/empleadoSucursal/*" element={<EmpleadoSucursalRoutes/>}></Route>
                <Route path="/mercaderia/*" element={<MercaderiaRoutes/>} ></Route>
                <Route path="/detalleCompra/*" element={<DetalleCompraRoutes/>}></Route>
                <Route path="/venta/*" element={<VentaRoutes/>}></Route>
                <Route path="/detalleVenta/*" element={<DetalleVentasRoutes/>}></Route>
                <Route path="/inventarioPrenda/*" element={<InventarioPrendaRoutes/>}></Route>
                <Route path="/almacen/*" element={<AlmacenRoutes/>}></Route>
                <Route path="/inventarioAlmacen/*" element={<InventarioAlmacenRoutes/>}></Route>
                <Route path="/*" element={<InicioRoutes/>}></Route>
            </Routes>
        </>
    )
}