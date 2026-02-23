export interface CompraLote {
  id: string;
  materialId: string;
  proveedorId: string;
  cantidadInicial: number;
  cantidadDisponible: number;
  costoUnitario: number;
  costoTotal: number;
  fecha: Date;
  createdAt: Date;
}

export interface CreateCompraLoteInput {
  materialId: string;
  proveedorId: string;
  cantidadInicial: number;
  costoUnitario: number;
  fecha: Date;
}
