// ==================== Categoría de Material ====================

export const CategoriaMaterial = {
  DIJE: "DIJE",
  BALIN: "BALIN",
  HILO: "HILO",
  PIEDRA: "PIEDRA",
  TIRA: "TIRA",
  MOSTACILLA: "MOSTACILLA",
  ARGOLLA: "ARGOLLA",
  SEPARADOR: "SEPARADOR",
  BORLA: "BORLA",
  CAJA: "CAJA",
  NEOPRENO: "NEOPRENO",
  RONDEL: "RONDEL",
  LETRA: "LETRA",
  ARANDELA: "ARANDELA",
  OTRO: "OTRO",
} as const;

export type CategoriaMaterial =
  (typeof CategoriaMaterial)[keyof typeof CategoriaMaterial];

// ==================== Material Base ====================

export const MaterialBase = {
  PLATA: "PLATA",
  RODIO: "RODIO",
  COBRE: "COBRE",
  ACERO: "ACERO",
  ORO_LAMINADO: "ORO_LAMINADO",
  NEOPRENO: "NEOPRENO",
  VIDRIO: "VIDRIO",
  OBSIDIANA: "OBSIDIANA",
  MADERA: "MADERA",
  HILO_CHINO: "HILO_CHINO",
  HILO_VIBORA: "HILO_VIBORA",
  OTRO: "OTRO",
} as const;

export type MaterialBase =
  (typeof MaterialBase)[keyof typeof MaterialBase];

// ==================== Unidad de Medida ====================

export const UnidadMedida = {
  UNIDAD: "UNIDAD",
  METRO: "METRO",
  GRAMO: "GRAMO",
  TIRA: "TIRA",
  DOCENA: "DOCENA",
  ROLLO: "ROLLO",
} as const;

export type UnidadMedida =
  (typeof UnidadMedida)[keyof typeof UnidadMedida];

// ==================== Canal del Cliente ====================

export const CanalCliente = {
  MARKETPLACE: "MARKETPLACE",
  DIRECTO: "DIRECTO",
  REFERIDO: "REFERIDO",
  OTRO: "OTRO",
} as const;

export type CanalCliente =
  (typeof CanalCliente)[keyof typeof CanalCliente];

// ==================== Estado de Cotización ====================

export const EstadoCotizacion = {
  BORRADOR: "BORRADOR",
  ENVIADA: "ENVIADA",
  APROBADA: "APROBADA",
  VENDIDA: "VENDIDA",
  PENDIENTE_STOCK: "PENDIENTE_STOCK",
  CANCELADA: "CANCELADA",
} as const;

export type EstadoCotizacion =
  (typeof EstadoCotizacion)[keyof typeof EstadoCotizacion];

// ==================== Tipo de Movimiento ====================

export const TipoMovimiento = {
  ENTRADA: "ENTRADA",
  SALIDA: "SALIDA",
  AJUSTE: "AJUSTE",
} as const;

export type TipoMovimiento =
  (typeof TipoMovimiento)[keyof typeof TipoMovimiento];

// ==================== Estado de Pago ====================

export const EstadoPago = {
  PENDIENTE: "PENDIENTE",
  ABONO: "ABONO",
  PAGADA: "PAGADA",
} as const;

export type EstadoPago =
  (typeof EstadoPago)[keyof typeof EstadoPago];

// ==================== Rol de Usuario ====================

export const RolUsuario = {
  ADMIN: "ADMIN",
} as const;

export type RolUsuario =
  (typeof RolUsuario)[keyof typeof RolUsuario];
