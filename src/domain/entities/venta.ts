import type { EstadoPago } from "./enums";

export interface Venta {
  id: string;
  cotizacionId: string;
  montoFinal: number;
  estadoPago: EstadoPago;
  fechaVenta: Date;
  createdAt: Date;
}

export interface CreateVentaInput {
  cotizacionId: string;
  montoFinal: number;
}
