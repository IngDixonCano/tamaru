import type { CategoriaMaterial, MaterialBase, UnidadMedida } from "./enums";

export interface Material {
  id: string;
  nombre: string;
  categoria: CategoriaMaterial;
  materialBase: MaterialBase;
  color: string | null;
  tamano: string | null;
  unidadMedida: UnidadMedida;
  stockActual: number;
  stockMinimo: number;
  disponible: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateMaterialInput {
  nombre: string;
  categoria: CategoriaMaterial;
  materialBase: MaterialBase;
  color?: string;
  tamano?: string;
  unidadMedida: UnidadMedida;
  stockMinimo?: number;
}

export interface UpdateMaterialInput {
  nombre?: string;
  categoria?: CategoriaMaterial;
  materialBase?: MaterialBase;
  color?: string | null;
  tamano?: string | null;
  unidadMedida?: UnidadMedida;
  stockMinimo?: number;
  disponible?: boolean;
}
