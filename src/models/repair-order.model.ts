

//Modelo de datos 

export interface RepairOrder {

  id: number;
  client: string;
  vehicle: string;
  typeRepair: string;
  basePrice: number;
  priority: 'low' | 'medium' | 'high';

}
