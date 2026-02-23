# CLAUDE.md — Tamaru Project Guidelines

## 📋 Proyecto
**Tamaru** — Sistema web de cotización e inventario para una microempresa artesanal de manillas personalizadas.
- Owner: IngDixonCano
- Repo: https://github.com/IngDixonCano/tamaru
- Deploy target: Vercel (plan gratuito)
- Idioma del código: inglés
- Idioma de UI/mensajes al usuario: español
- Idioma de commits y documentación técnica: español

## 🧱 Stack Tecnológico
- **Framework:** Next.js 16 (App Router)
- **Lenguaje:** TypeScript (modo estricto)
- **Base de datos:** PostgreSQL (Neon/Supabase)
- **ORM:** Prisma
- **Estilos:** TailwindCSS 4
- **Validación:** Zod
- **Auth:** bcrypt + cookies httpOnly
- **Observabilidad:** Sentry
- **Testing:** Vitest + Testing Library + Playwright

## 🏗️ Arquitectura de Carpetas
```
src/
├── domain/           # Reglas de negocio puras (sin dependencias externas)
│   ├── entities/     # Tipos e interfaces del dominio
│   ├── services/     # Lógica de negocio (cálculos, validaciones)
│   └── errors/       # Errores de dominio personalizados
├── application/      # Casos de uso (orquestación)
│   └── use-cases/    # Un archivo por caso de uso
├── infrastructure/   # Implementaciones concretas
│   ├── db/           # Prisma client, repositories
│   ├── auth/         # Sesión, bcrypt, middleware
│   └── monitoring/   # Sentry config
├── presentation/     # Todo lo visual
│   ├── components/   # Componentes reutilizables
│   ├── hooks/        # Custom hooks
│   └── utils/        # Helpers de UI
└── app/              # App Router de Next.js (rutas y API)
    ├── (public)/     # Rutas públicas (cliente)
    ├── (admin)/      # Rutas protegidas (admin)
    └── api/          # API routes
```

## 📏 Convenciones de Código

### Nomenclatura
- **Archivos:** kebab-case (`cotizacion-service.ts`)
- **Componentes:** PascalCase (`CotizacionCard.tsx`)
- **Funciones/variables:** camelCase (`calcularCostoTotal`)
- **Tipos/Interfaces:** PascalCase con prefijo descriptivo (`CotizacionEstado`)
- **Constantes:** UPPER_SNAKE_CASE (`MAX_MATERIALES_POR_COTIZACION`)
- **Enums Prisma:** UPPER_SNAKE_CASE (`PENDIENTE_STOCK`)

### Imports
- Usar alias `@/` para imports absolutos desde `src/`
- Orden: 1) React/Next, 2) Librerías externas, 3) Domain, 4) Application, 5) Infrastructure, 6) Presentation, 7) Relativos

### Componentes
- Componentes de servidor por defecto; `"use client"` solo cuando sea necesario
- Props tipadas con interface (no type alias) para componentes exportados
- Mobile-first: diseñar primero para móvil, luego responsive

### API Routes
- Validar SIEMPRE con Zod en el servidor
- Nunca confiar en datos del cliente
- Retornar tipos consistentes: `{ data, error, message }`
- Manejar errores con try/catch y logging a Sentry

## 💰 Reglas de Negocio Críticas (NO SIMPLIFICAR)
1. Las cotizaciones **NO reservan stock**
2. El stock se descuenta **ÚNICAMENTE** cuando estado = `VENDIDA`
3. Después de cada venta:
   - Descontar materiales
   - Registrar movimiento de inventario
   - Revalidar TODAS las cotizaciones abiertas
4. Si una cotización queda sin stock suficiente:
   - Estado → `PENDIENTE_STOCK`
   - Calcular faltantes exactos
   - Recalcular precio potencial
   - Guardar `diferenciaPrecio`
   - Notificar a la administradora
   - Informar al cliente
5. **NUNCA recalcular silenciosamente** — todo cambio de precio debe ser explícito

## 🛡️ Seguridad (OWASP)
- SQL Injection: usar Prisma (nunca raw queries sin parametrizar)
- XSS: sanitizar outputs, escapar HTML
- CSRF: validar origin en API routes
- Passwords: bcrypt con salt rounds ≥ 12
- Sesiones: cookies httpOnly + secure en producción
- Rate limiting: en login y endpoints sensibles
- Inputs: validar con Zod en CADA endpoint
- Roles: verificar permisos en CADA ruta protegida
- Logging: registrar intentos fallidos de login

## 🧪 Testing
- Archivos de test junto al código: `archivo.test.ts`
- Tests de dominio: funciones puras, sin mocks de DB
- Tests de integración: con DB de test
- Nombrar tests en español descriptivo: `"debe calcular el costo total correctamente"`
- Mínimo: cubrir todas las reglas de negocio críticas

## 📝 Commits
- Sin co-author
- Formato: `tipo: descripción breve en español`
- Tipos: `feat`, `fix`, `chore`, `refactor`, `test`, `docs`
- Ejemplo: `feat: agregar cálculo de costo por mano de obra`

## ⚠️ Reglas Estrictas
- NO mezclar lógica de negocio en componentes UI
- NO usar `any` — tipado estricto siempre
- NO hacer queries directas a Prisma desde componentes
- NO omitir validación server-side
- NO hardcodear valores de negocio (usar constantes o config)
- NO hacer deploy sin que compile (`npm run build` limpio)
- NO crear archivos de documentación (*.md) a menos que se solicite explícitamente
