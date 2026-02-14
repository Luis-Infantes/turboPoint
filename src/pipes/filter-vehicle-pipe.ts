import { Pipe, PipeTransform } from '@angular/core';
import { RepairOrder } from '../models/repair-order.model';

@Pipe({
  name: 'filterVehicle',
})

//Pipe para filtrar los vehiculos
export class FilterVehiclePipe implements PipeTransform {

  transform(orders: RepairOrder[] | undefined, vehicle: string | undefined): RepairOrder[] {

    if (!orders) return [];

    if (vehicle === 'None' || vehicle === undefined) {

      return orders;
    }

    return orders.filter(p => p.vehicle === vehicle);


  }
}
