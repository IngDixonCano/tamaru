export interface ImagenReferencia {
  id: string;
  ventaId: string | null;
  url: string;
  descripcion: string | null;
  createdAt: Date;
}

export interface CreateImagenInput {
  ventaId?: string;
  url: string;
  descripcion?: string;
}
