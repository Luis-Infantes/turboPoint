import { Injectable } from "@angular/core";
import { RepairOrder } from "../models/repair-order.model";


@Injectable({

  providedIn: 'root'

})

//Fuente de datos base para usar como ejemplo
export class SimpledataSource {

  private data: RepairOrder[];


  constructor() {

    this.data = [

      { id: 1, client: "Arturo Gonzalez", vehicle: "Moto", typeRepair: "Ruedas", basePrice: 120, priority: "low" },
      { "id": 2, "client": "Lucía Méndez", "vehicle": "Coche", "typeRepair": "Frenos", "basePrice": 250, "priority": "high" },
      { "id": 3, "client": "Roberto Soler", "vehicle": "Camion", "typeRepair": "Caja de cambios", "basePrice": 1500, "priority": "medium" },
      { "id": 4, "client": "Elena Rodríguez", "vehicle": "Moto", "typeRepair": "Kit de arrastre", "basePrice": 180, "priority": "low" },
      { "id": 5, "client": "Marcos Peña", "vehicle": "Coche", "typeRepair": "Cambio de aceite", "basePrice": 90, "priority": "low" },
      { "id": 6, "client": "Sandra Vázquez", "vehicle": "Camion", "typeRepair": "Sistema hidráulico", "basePrice": 2100, "priority": "high" },
      { "id": 7, "client": "Javier Castro", "vehicle": "Moto", "typeRepair": "Batería", "basePrice": 75, "priority": "medium" },
      { "id": 8, "client": "Marta Benítez", "vehicle": "Coche", "typeRepair": "Correa distribución", "basePrice": 450, "priority": "high" },
      { "id": 9, "client": "Ricardo Durán", "vehicle": "Camion", "typeRepair": "Luces y faros", "basePrice": 120, "priority": "low" },
      { "id": 10, "client": "Marcos Peña", "vehicle": "Moto", "typeRepair": "Filtros y bujías", "basePrice": 110, "priority": "medium" }

    ];

  }

  //Método para obtener todas las reparaciones
  getRepairOrders(): RepairOrder[] { return this.data };

}
