
# **TurboPoint — Repair Shop (Table Exercise and Price Calculation)**

This project is a small exercise created to practice working with dynamic tables, filters, and the automatic recalculation of prices when applying surcharges and discounts. 
The goal is to show how basic data is handled and how final values change depending on different conditions.

---

## Data Model
| Field | Description |
|-------|-------------|
| **Id** | Record identifier |
| **Client** | Customer name |
| **Vehicle** | Car, motorcycle, or truck |
| **Repair type** | Selected service |
| **Priority** | Low · Medium · High |
| **Base price** | Initial cost |
| **Total price** | Automatically recalculated |

---

## Price Calculation Logic

The total price updates automatically according to:

### Surcharges (High priority only)
There are three surcharge levels depending on the urgency.

### Discounts
- **20%** for orders above **€200**.  
- **20%** for **premium clients** (highlighted in green).

Surcharges and discounts can be combined without issues.

---

## Interface
- Visual icons to distinguish priority levels.  
- Dynamic table with color‑coded premium clients.

---

## Custom Filters
This exercise includes two **custom pipes**:
- Filter by vehicle type.  
- Filter by priority.

Both filters can be applied simultaneously.

---

## Technologies Used
This exercise was built using:
- Angular  
- TypeScript  
- HTML / CSS  
- Node.js

---------------------------------------------------------------------------------------------------------------------------


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


