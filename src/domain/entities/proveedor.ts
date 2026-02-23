export interface Proveedor {
  id: string;
  nombre: string;
  contacto: string | null;
  notas: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProveedorInput {
  nombre: string;
  contacto?: string;
  notas?: string;
}

export interface UpdateProveedorInput {
  nombre?: string;
  contacto?: string | null;
  notas?: string | null;
}
