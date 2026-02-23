import type { RolUsuario } from "./enums";

export interface Usuario {
  id: string;
  email: string;
  passwordHash: string;
  nombre: string;
  rol: RolUsuario;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateUsuarioInput {
  email: string;
  password: string;
  nombre: string;
}
