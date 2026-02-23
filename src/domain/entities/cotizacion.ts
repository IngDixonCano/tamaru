import type { EstadoCotizacion } from "./enums";

export interface Cotizacion {
  id: string;
  clienteId: string;
  nombreDiseno: string;
  estado: EstadoCotizacion;
  precioVenta: number | null;
  costoMateriales: number | null;
  manoDeObra: number | null;
  manoDeObraSugerida: number | null;
  gananciaEstimada: number | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CotizacionMaterial {
  id: string;
  cotizacionId: string;
  materialId: string;
  cantidadRequerida: number;
  costoUnitAlMomento: number;
}

export interface CreateCotizacionInput {
  clienteId: string;
  nombreDiseno: string;
  materiales: CreateCotizacionMaterialInput[];
  manoDeObra?: number;
  precioVenta?: number;
}

export interface CreateCotizacionMaterialInput {
  materialId: string;
  cantidadRequerida: number;
}

export interface UpdateCotizacionInput {
  nombreDiseno?: string;
  manoDeObra?: number;
  precioVenta?: number;
}
