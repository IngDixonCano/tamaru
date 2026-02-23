export interface Pago {
  id: string;
  ventaId: string;
  monto: number;
  fecha: Date;
  metodo: string;
  createdAt: Date;
}

export interface CreatePagoInput {
  ventaId: string;
  monto: number;
  metodo: string;
  fecha?: Date;
}
