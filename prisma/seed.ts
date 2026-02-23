import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import bcrypt from "bcryptjs";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL no está configurada");
}

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Iniciando seed de Tamaru...\n");

  // ==================== LIMPIAR DATOS EXISTENTES ====================
  console.log("Limpiando datos existentes...");
  await prisma.pago.deleteMany();
  await prisma.imagenReferencia.deleteMany();
  await prisma.movimientoInventario.deleteMany();
  await prisma.cotizacionMaterial.deleteMany();
  await prisma.venta.deleteMany();
  await prisma.cotizacion.deleteMany();
  await prisma.compraLote.deleteMany();
  await prisma.cliente.deleteMany();
  await prisma.material.deleteMany();
  await prisma.proveedor.deleteMany();
  await prisma.usuario.deleteMany();

  // ==================== USUARIO ADMIN ====================
  console.log("Creando usuario admin...");
  const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS ?? "12", 10);
  const passwordHash = await bcrypt.hash("admin123", saltRounds);

  await prisma.usuario.create({
    data: {
      email: "admin@tamaru.com",
      passwordHash,
      nombre: "Administradora Tamaru",
      rol: "ADMIN",
    },
  });

  // ==================== PROVEEDORES ====================
  console.log("Creando proveedores...");
  const munzi = await prisma.proveedor.create({
    data: {
      nombre: "Munzi",
      notas: "Proveedor principal de dijes, balines y piedras",
    },
  });

  const opalo = await prisma.proveedor.create({
    data: {
      nombre: "Opalo",
      notas: "Proveedor de balines, hilos, dijes y accesorios variados",
    },
  });

  const toroGold = await prisma.proveedor.create({
    data: {
      nombre: "Toro Gold",
      notas: "Proveedor especializado en oro laminado",
    },
  });

  const surtiEnsambles = await prisma.proveedor.create({
    data: {
      nombre: "SurtiEnsambles",
      notas: "Proveedor de dijes especializados en rodio y acero",
    },
  });

  // ==================== MATERIALES ====================
  console.log("Creando materiales...");

  // --- DIJES ---
  const dijeCaritaFeliz = await prisma.material.create({
    data: {
      nombre: "Dije Carita Feliz (Plata con circones)",
      categoria: "DIJE",
      materialBase: "PLATA",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeTrebol = await prisma.material.create({
    data: {
      nombre: "Dije Trébol (Plata con circones)",
      categoria: "DIJE",
      materialBase: "PLATA",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeLunaPlata = await prisma.material.create({
    data: {
      nombre: "Dije Luna (Plata con circones)",
      categoria: "DIJE",
      materialBase: "PLATA",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeCruzGrande = await prisma.material.create({
    data: {
      nombre: "Dije Cruz Grande (Rodio)",
      categoria: "DIJE",
      materialBase: "RODIO",
      color: "DORADO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeCruzPequena = await prisma.material.create({
    data: {
      nombre: "Dije Cruz Pequeña (Rodio)",
      categoria: "DIJE",
      materialBase: "RODIO",
      color: "DORADO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeCorazon = await prisma.material.create({
    data: {
      nombre: "Dije Corazón (Rodio)",
      categoria: "DIJE",
      materialBase: "RODIO",
      color: "DORADO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeRedondoPlateado = await prisma.material.create({
    data: {
      nombre: "Dije Redondo Piedras Incrustadas (Rodio Plateado)",
      categoria: "DIJE",
      materialBase: "RODIO",
      color: "PLATEADO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeRedondoDorado = await prisma.material.create({
    data: {
      nombre: "Dije Redondo Piedras Incrustadas (Rodio Dorado)",
      categoria: "DIJE",
      materialBase: "RODIO",
      color: "DORADO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeMariposaPlatead = await prisma.material.create({
    data: {
      nombre: "Dije Mariposa (Rodio Plateado)",
      categoria: "DIJE",
      materialBase: "RODIO",
      color: "PLATEADO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeMariposAzul = await prisma.material.create({
    data: {
      nombre: "Dije Mariposa (Rodio Azul)",
      categoria: "DIJE",
      materialBase: "RODIO",
      color: "AZUL",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeHerraduraCaballo = await prisma.material.create({
    data: {
      nombre: "Dije Herradura y Caballo (Rodio Dorado)",
      categoria: "DIJE",
      materialBase: "RODIO",
      color: "DORADO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeVirgen = await prisma.material.create({
    data: {
      nombre: "Dije Virgen (Rodio)",
      categoria: "DIJE",
      materialBase: "RODIO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeSanBenito = await prisma.material.create({
    data: {
      nombre: "Dije San Benito",
      categoria: "DIJE",
      materialBase: "RODIO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeAvionAcero = await prisma.material.create({
    data: {
      nombre: "Dije Avión (Acero)",
      categoria: "DIJE",
      materialBase: "ACERO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeBalon8mm = await prisma.material.create({
    data: {
      nombre: "Dije Balón Fútbol (Rodio 8mm)",
      categoria: "DIJE",
      materialBase: "RODIO",
      tamano: "8mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  const dijeFlorRoja = await prisma.material.create({
    data: {
      nombre: "Dije Flor Rodio con Piedras Rojas",
      categoria: "DIJE",
      materialBase: "RODIO",
      color: "ROJO",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  // --- BALINES ---
  const balinRodio4mmDoradoDiam = await prisma.material.create({
    data: {
      nombre: "Balín Rodio 4mm Diamantado Dorado",
      categoria: "BALIN",
      materialBase: "RODIO",
      color: "DORADO",
      tamano: "4mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 20,
    },
  });

  const balinRodio4mmPlateadoLiso = await prisma.material.create({
    data: {
      nombre: "Balín Rodio 4mm Liso Plateado",
      categoria: "BALIN",
      materialBase: "RODIO",
      color: "PLATEADO",
      tamano: "4mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 20,
    },
  });

  const balinRodio4mmDoradoLiso = await prisma.material.create({
    data: {
      nombre: "Balín Rodio 4mm Liso Dorado",
      categoria: "BALIN",
      materialBase: "RODIO",
      color: "DORADO",
      tamano: "4mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 20,
    },
  });

  const balinRodio4mmRosadoLiso = await prisma.material.create({
    data: {
      nombre: "Balín Rodio 4mm Liso Rosado",
      categoria: "BALIN",
      materialBase: "RODIO",
      color: "ROSADO",
      tamano: "4mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 20,
    },
  });

  const balinRodio3mmDiam = await prisma.material.create({
    data: {
      nombre: "Balín Rodio 3mm Diamantado Dorado",
      categoria: "BALIN",
      materialBase: "RODIO",
      color: "DORADO",
      tamano: "3mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 20,
    },
  });

  const balinRodio6mmDiam = await prisma.material.create({
    data: {
      nombre: "Balín Rodio 6mm Diamantado Dorado",
      categoria: "BALIN",
      materialBase: "RODIO",
      color: "DORADO",
      tamano: "6mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 10,
    },
  });

  const balinOroLam4mmLiso = await prisma.material.create({
    data: {
      nombre: "Balín Oro Laminado 4mm Liso",
      categoria: "BALIN",
      materialBase: "ORO_LAMINADO",
      color: "DORADO",
      tamano: "4mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 10,
    },
  });

  const balinOroLamFusco6mm = await prisma.material.create({
    data: {
      nombre: "Balín Fusco 6mm Oro Laminado",
      categoria: "BALIN",
      materialBase: "ORO_LAMINADO",
      color: "DORADO",
      tamano: "6mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 5,
    },
  });

  const balinAcero5mmDiam = await prisma.material.create({
    data: {
      nombre: "Balín Acero Diamantado Rayado #5",
      categoria: "BALIN",
      materialBase: "ACERO",
      color: "DORADO",
      tamano: "5mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 10,
    },
  });

  const balinNeoprenoNegro6mm = await prisma.material.create({
    data: {
      nombre: "Balín Neopreno Liso Negro 6mm",
      categoria: "BALIN",
      materialBase: "NEOPRENO",
      color: "NEGRO",
      tamano: "6mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 10,
    },
  });

  // --- HILOS ---
  const hiloNegro10m = await prisma.material.create({
    data: {
      nombre: "Hilo Negro (10m)",
      categoria: "HILO",
      materialBase: "HILO_CHINO",
      color: "NEGRO",
      unidadMedida: "METRO",
      stockMinimo: 5,
    },
  });

  const hiloRojo10m = await prisma.material.create({
    data: {
      nombre: "Hilo Rojo (10m)",
      categoria: "HILO",
      materialBase: "HILO_CHINO",
      color: "ROJO",
      unidadMedida: "METRO",
      stockMinimo: 5,
    },
  });

  const hiloRosado10m = await prisma.material.create({
    data: {
      nombre: "Hilo Rosado (10m)",
      categoria: "HILO",
      materialBase: "HILO_CHINO",
      color: "ROSADO",
      unidadMedida: "METRO",
      stockMinimo: 5,
    },
  });

  const hiloChinoNegroRollo = await prisma.material.create({
    data: {
      nombre: "Rollo Hilo Chino Delgado Negro (0.8mm, 132m)",
      categoria: "HILO",
      materialBase: "HILO_CHINO",
      color: "NEGRO",
      unidadMedida: "ROLLO",
      stockMinimo: 1,
    },
  });

  // --- PIEDRAS ---
  const obsidiana8mm = await prisma.material.create({
    data: {
      nombre: "Piedra Obsidiana Turmalina 8mm",
      categoria: "PIEDRA",
      materialBase: "OBSIDIANA",
      color: "NEGRO",
      tamano: "8mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 10,
    },
  });

  const piedra7Chakras6mm = await prisma.material.create({
    data: {
      nombre: "Tira Piedras Naturales 7 Chakras (6mm, 49 piedras)",
      categoria: "TIRA",
      materialBase: "OTRO",
      tamano: "6mm",
      unidadMedida: "TIRA",
      stockMinimo: 1,
    },
  });

  // --- OTROS ---
  const separadorPlata = await prisma.material.create({
    data: {
      nombre: "Separador Manilla Plata (1 gramo = 7 unidades)",
      categoria: "SEPARADOR",
      materialBase: "PLATA",
      unidadMedida: "GRAMO",
      stockMinimo: 2,
    },
  });

  const argollasDoradas = await prisma.material.create({
    data: {
      nombre: "Argollas Doradas",
      categoria: "ARGOLLA",
      materialBase: "OTRO",
      color: "DORADO",
      unidadMedida: "UNIDAD",
      stockMinimo: 4,
    },
  });

  const cajaDorada = await prisma.material.create({
    data: {
      nombre: "Caja para manilla",
      categoria: "CAJA",
      materialBase: "OTRO",
      unidadMedida: "UNIDAD",
      stockMinimo: 2,
    },
  });

  const rondel5mmVerde = await prisma.material.create({
    data: {
      nombre: "Rondel Verde Oro Laminado #5",
      categoria: "RONDEL",
      materialBase: "ORO_LAMINADO",
      color: "VERDE",
      tamano: "5mm",
      unidadMedida: "UNIDAD",
      stockMinimo: 1,
    },
  });

  // ==================== COMPRA LOTES ====================
  console.log("Creando lotes de compra...");

  // Helper para crear lote + movimiento + actualizar stock
  async function crearLoteConStock(
    materialId: string,
    proveedorId: string,
    cantidad: number,
    costoUnitario: number,
    fecha: Date
  ) {
    const costoTotal = cantidad * costoUnitario;

    const lote = await prisma.compraLote.create({
      data: {
        materialId,
        proveedorId,
        cantidadInicial: cantidad,
        cantidadDisponible: cantidad,
        costoUnitario,
        costoTotal,
        fecha,
      },
    });

    await prisma.movimientoInventario.create({
      data: {
        materialId,
        tipo: "ENTRADA",
        cantidad,
        motivo: "Compra de lote inicial",
        compraLoteId: lote.id,
        fecha,
      },
    });

    await prisma.material.update({
      where: { id: materialId },
      data: {
        stockActual: { increment: cantidad },
        disponible: true,
      },
    });

    return lote;
  }

  const fechaBase = new Date("2025-01-15");

  // Dijes — Munzi
  await crearLoteConStock(dijeCaritaFeliz.id, munzi.id, 1, 20000, fechaBase);
  await crearLoteConStock(dijeTrebol.id, munzi.id, 1, 20000, fechaBase);
  await crearLoteConStock(dijeLunaPlata.id, munzi.id, 1, 18000, fechaBase);
  await crearLoteConStock(dijeCruzGrande.id, munzi.id, 1, 11000, fechaBase);
  await crearLoteConStock(dijeCruzPequena.id, munzi.id, 2, 5000, fechaBase);
  await crearLoteConStock(dijeCorazon.id, munzi.id, 1, 10000, fechaBase);
  await crearLoteConStock(dijeRedondoPlateado.id, munzi.id, 1, 7600, fechaBase);
  await crearLoteConStock(dijeRedondoDorado.id, munzi.id, 1, 7600, fechaBase);

  // Balines — Munzi
  await crearLoteConStock(balinRodio4mmDoradoDiam.id, munzi.id, 20, 250, fechaBase);
  await crearLoteConStock(balinRodio3mmDiam.id, munzi.id, 24, 183, new Date("2025-02-01"));

  // Balines — Opalo
  await crearLoteConStock(balinRodio4mmPlateadoLiso.id, opalo.id, 48, 120, fechaBase);
  await crearLoteConStock(balinRodio4mmDoradoLiso.id, opalo.id, 48, 120, fechaBase);
  await crearLoteConStock(balinRodio4mmRosadoLiso.id, opalo.id, 48, 120, fechaBase);
  await crearLoteConStock(balinRodio6mmDiam.id, opalo.id, 12, 350, fechaBase);
  await crearLoteConStock(balinRodio4mmDoradoDiam.id, opalo.id, 100, 190, new Date("2025-03-01"));
  await crearLoteConStock(balinRodio3mmDiam.id, opalo.id, 50, 160, new Date("2025-03-15"));

  // Balines Oro Laminado — Toro Gold
  await crearLoteConStock(balinOroLam4mmLiso.id, toroGold.id, 67, 2800, new Date("2025-02-20"));
  await crearLoteConStock(balinOroLamFusco6mm.id, toroGold.id, 30, 5100, new Date("2025-02-20"));

  // Balines Acero y Neopreno — Opalo
  await crearLoteConStock(balinAcero5mmDiam.id, opalo.id, 50, 700, new Date("2025-03-01"));
  await crearLoteConStock(balinNeoprenoNegro6mm.id, opalo.id, 100, 150, new Date("2025-04-01"));

  // Dijes — Opalo
  await crearLoteConStock(dijeMariposaPlatead.id, opalo.id, 1, 5600, fechaBase);
  await crearLoteConStock(dijeMariposAzul.id, opalo.id, 1, 5600, fechaBase);
  await crearLoteConStock(dijeFlorRoja.id, opalo.id, 1, 8000, new Date("2025-02-15"));

  // Dijes — SurtiEnsambles
  await crearLoteConStock(dijeHerraduraCaballo.id, surtiEnsambles.id, 1, 7000, fechaBase);
  await crearLoteConStock(dijeAvionAcero.id, surtiEnsambles.id, 1, 4500, new Date("2025-03-10"));
  await crearLoteConStock(dijeBalon8mm.id, surtiEnsambles.id, 1, 11000, new Date("2025-03-10"));

  // Otros dijes
  await crearLoteConStock(dijeVirgen.id, opalo.id, 1, 6500, new Date("2025-04-01"));
  await crearLoteConStock(dijeSanBenito.id, opalo.id, 1, 3500, new Date("2025-04-01"));

  // Hilos — Munzi
  await crearLoteConStock(hiloNegro10m.id, munzi.id, 10, 500, fechaBase);
  await crearLoteConStock(hiloRojo10m.id, munzi.id, 10, 500, fechaBase);

  // Hilos — Opalo
  await crearLoteConStock(hiloRosado10m.id, opalo.id, 10, 180, new Date("2025-03-01"));
  await crearLoteConStock(hiloChinoNegroRollo.id, opalo.id, 1, 13000, new Date("2025-02-01"));

  // Piedras — Munzi
  await crearLoteConStock(obsidiana8mm.id, munzi.id, 35, 1143, fechaBase);

  // Piedras — Opalo
  await crearLoteConStock(piedra7Chakras6mm.id, opalo.id, 1, 32000, new Date("2025-03-01"));

  // Otros — Munzi y Opalo
  await crearLoteConStock(separadorPlata.id, munzi.id, 7, 2036, fechaBase);
  await crearLoteConStock(argollasDoradas.id, opalo.id, 4, 500, new Date("2025-02-15"));
  await crearLoteConStock(cajaDorada.id, opalo.id, 6, 2700, new Date("2025-03-01"));
  await crearLoteConStock(rondel5mmVerde.id, toroGold.id, 3, 8333, new Date("2025-04-01"));

  // ==================== CLIENTES ====================
  console.log("Creando clientes de ejemplo...");

  const clienteKaren = await prisma.cliente.create({
    data: {
      nombre: "Karen",
      telefono: "3001234567",
      canal: "DIRECTO",
      notas: "Cliente frecuente, prefiere diseños con mariposas",
    },
  });

  await prisma.cliente.create({
    data: {
      nombre: "Camila",
      telefono: "3009876543",
      canal: "DIRECTO",
      notas: "Cliente recurrente, le gustan diseños en plata",
    },
  });

  const clienteMarketplace = await prisma.cliente.create({
    data: {
      nombre: "Cliente Marketplace",
      telefono: "3005551234",
      canal: "MARKETPLACE",
      notas: "Ventas por marketplace",
    },
  });

  // ==================== COTIZACIONES DE EJEMPLO ====================
  console.log("Creando cotizaciones de ejemplo...");

  // Cotización 1: Mariposa con Balines (basada en venta real de Karen)
  await prisma.cotizacion.create({
    data: {
      clienteId: clienteKaren.id,
      nombreDiseno: "Mariposa con Balines",
      estado: "BORRADOR",
      costoMateriales: 11800,
      manoDeObra: 10200,
      manoDeObraSugerida: 8000,
      precioVenta: 22000,
      gananciaEstimada: 10200,
      materiales: {
        create: [
          {
            materialId: dijeMariposaPlatead.id,
            cantidadRequerida: 1,
            costoUnitAlMomento: 5600,
          },
          {
            materialId: balinRodio4mmDoradoLiso.id,
            cantidadRequerida: 12,
            costoUnitAlMomento: 120,
          },
          {
            materialId: balinRodio4mmRosadoLiso.id,
            cantidadRequerida: 12,
            costoUnitAlMomento: 120,
          },
          {
            materialId: balinRodio4mmPlateadoLiso.id,
            cantidadRequerida: 14,
            costoUnitAlMomento: 120,
          },
        ],
      },
    },
  });

  // Cotización 2: Negra Balines Hombre (basada en venta recurrente Marketplace)
  await prisma.cotizacion.create({
    data: {
      clienteId: clienteMarketplace.id,
      nombreDiseno: "Negra Balines Hombre",
      estado: "BORRADOR",
      costoMateriales: 5250,
      manoDeObra: 14750,
      manoDeObraSugerida: 7000,
      precioVenta: 20000,
      gananciaEstimada: 14750,
      materiales: {
        create: [
          {
            materialId: balinRodio4mmDoradoDiam.id,
            cantidadRequerida: 23,
            costoUnitAlMomento: 190,
          },
          {
            materialId: hiloNegro10m.id,
            cantidadRequerida: 2.5,
            costoUnitAlMomento: 500,
          },
        ],
      },
    },
  });

  console.log("\n✅ Seed completado exitosamente!");
  console.log("   - 1 usuario admin (admin@tamaru.com / admin123)");
  console.log("   - 4 proveedores");
  console.log("   - 30+ materiales con lotes de compra");
  console.log("   - 3 clientes");
  console.log("   - 2 cotizaciones de ejemplo");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error("❌ Error en seed:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
