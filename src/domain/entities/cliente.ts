import type { CanalCliente } from "./enums";

export interface Cliente {
  id: string;
  nombre: string;
  telefono: string;
  email: string | null;
  canal: CanalCliente;
  notas: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateClienteInput {
  nombre: string;
  telefono: string;
  email?: string;
  canal: CanalCliente;
  notas?: string;
}

export interface UpdateClienteInput {
  nombre?: string;
  telefono?: string;
  email?: string | null;
  canal?: CanalCliente;
  notas?: string | null;
}
