# Rho Analytics Dashboard

Un dashboard de analíticas moderno construido con Next.js 15 y Tailwind CSS v4, siguiendo un sistema de diseño oscuro y responsivo.

## 🚀 Características

- **Next.js 15** con App Router
- **Tailwind CSS v4** con sistema de diseño personalizado
- **TypeScript** para type safety completo
- **Recharts** para visualizaciones interactivas
- **Lucide React** para iconografía consistente
- **Diseño responsivo** con sidebar adaptable
- **Tema oscuro** profesional

## 📊 Componentes del Dashboard

### Layout Principal
- **Sidebar fijo** (280px) con navegación principal y métricas
- **Contenido principal** adaptable con padding responsivo
- **Comportamiento móvil** con sidebar colapsible

### Cards de Métricas
1. **Brand Visibility Card**
   - Métrica principal: 89.8% visibility score
   - Indicador de cambio: +1% vs última semana
   - Gráfico de líneas/área con datos temporales
   - Diseño responsivo 2/3 del ancho en desktop

2. **Brand Industry Ranking Card**
   - Lista rankeada de 6 empresas
   - Iconos distintivos por marca
   - Indicadores de cambio (↑/↓) con colores
   - Valores porcentuales actualizados

3. **Topic Visibility Card**
   - Placeholder para métricas adicionales
   - Estructura preparada para expansión

## 🎨 Sistema de Diseño

### Paleta de Colores
```css
/* Colores Primarios */
--background: #0a0a0a      /* Fondo principal */
--surface: #1a1a1a         /* Superficie de cards */
--surface-elevated: #2a2a2a /* Superficie elevada */
--border: #333333          /* Bordes */
--text-primary: #ffffff    /* Texto principal */
--text-secondary: #a0a0a0  /* Texto secundario */
--text-muted: #666666      /* Texto atenuado */

/* Colores de Acento */
--success: #22c55e         /* Verde para positivos */
--danger: #ef4444          /* Rojo para negativos */
--info: #3b82f6           /* Azul para información */
```

### Tipografía
- **Familia principal**: system-ui, -apple-system, sans-serif
- **Pesos**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Escalas**: xs (0.75rem) → 4xl (2.25rem)

### Espaciado
- **xs**: 0.25rem | **sm**: 0.5rem | **md**: 1rem
- **lg**: 1.5rem | **xl**: 2rem | **2xl**: 3rem

## 🛠️ Estructura del Proyecto

```
next-aeo/
├── app/
│   ├── globals.css         # Estilos globales + variables CSS
│   ├── layout.tsx          # Layout principal con sidebar
│   └── page.tsx            # Dashboard principal
├── components/
│   ├── ui/                 # Componentes base reutilizables
│   │   ├── button.tsx      # Botón con variantes
│   │   └── card.tsx        # Sistema de cards
│   └── dashboard/          # Componentes específicos del dashboard
│       ├── sidebar.tsx     # Navegación lateral
│       ├── header.tsx      # Header con filtros
│       ├── visibility-chart.tsx    # Gráfico de visibilidad
│       ├── brand-ranking.tsx       # Lista de ranking
│       └── metric-display.tsx      # Display de métricas
├── lib/
│   └── utils.ts           # Utilidades (cn, formatters)
└── tailwind.config.js     # Configuración de Tailwind
```

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (sidebar overlay)
- **Tablet**: 768px - 1024px (sidebar colapsible)
- **Desktop**: > 1024px (sidebar fijo)

### Adaptaciones Móviles
- Header con filtros en columna
- Grid de cards en una columna
- Sidebar con hamburger menu
- Gráficos escalables

## 🚀 Scripts Disponibles

```bash
# Desarrollo con Turbopack
pnpm dev

# Build para producción
pnpm build

# Servidor de producción
pnpm start

# Linting
pnpm lint
```

## 🎯 Características Técnicas

### Performance
- **Turbopack** habilitado para desarrollo rápido
- **Server Components** donde es apropiado
- **Tree shaking** automático
- **Optimización de bundle** con Next.js 15

### Accesibilidad
- **Contraste mínimo** 4.5:1 para texto
- **Focus visible** con outline personalizado
- **Navegación por teclado** completa
- **Etiquetas semánticas** correctas

### Interactividad
- **Transiciones suaves** (0.2s ease-out)
- **Estados hover** para todos los elementos
- **Animaciones CSS** personalizadas
- **Carga asíncrona** preparada

## 🔧 Configuración

El dashboard está completamente configurado y listo para usar. Los estilos siguen exactamente el design system especificado en `DESIGN.json`.

Para personalizar colores o métricas, edita:
- `app/globals.css` para variables CSS
- `tailwind.config.js` para extensiones de Tailwind
- `components/dashboard/*` para componentes específicos

## 📈 Datos Mock

Los datos actuales son mockeados para demostración. Para datos reales:
1. Crea servicios en `lib/api.ts`
2. Implementa hooks de datos en `hooks/`
3. Agrega estados de carga en componentes
4. Configura React Query para cache de datos

---

**Construido con ❤️ usando Next.js 15 + Tailwind CSS v4**
