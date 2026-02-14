
# **TurboPoint — Taller de Reparación (Ejercicio de tabla y cálculo de precios)**


Este proyecto es un pequeño ejercicio creado para practicar el manejo de tablas dinámicas, filtros y el recálculo automático de precios al aplicar recargos y descuentos.  
El objetivo es mostrar cómo se gestionan datos básicos y cómo cambian los valores finales según diferentes condiciones.


---


## Modelo de datos
| Campo | Descripción |
|-------|-------------|
| **Id** | Identificador del registro |
| **Cliente** | Nombre del cliente |
| **Vehículo** | Coche, moto o camión |
| **Tipo de reparación** | Servicio seleccionado |
| **Prioridad** | Low · Medium · High |
| **Precio base** | Coste inicial |
| **Precio total** | Se recalcula automáticamente |

---

## Lógica del cálculo del precio

El precio total se actualiza automáticamente según:

### Recargos (solo para prioridad High)

Existen tres niveles de recargo dependiendo de la urgencia.

### Descuentos
- **20%** para pedidos mayores de **200€**.  
- **20%** para **clientes premium** (marcados en verde).

Los descuentos y recargos pueden combinarse sin problemas.

---

## Interfaz
- Iconos visuales para distinguir prioridades.  
- Tabla dinámica con colores para clientes premium.

---

## Filtros personalizados
El ejercicio incluye dos **pipes personalizadas**:
- Filtro por tipo de vehículo.  
- Filtro por prioridad.

Ambos filtros funcionan a la vez.

---

## Tecnologías utilizadas
Ejercicio realizado con:
- Angular  
- TypeScript  
- HTML / CSS
- Node.js









