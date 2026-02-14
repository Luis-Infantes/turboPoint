import { Pipe, PipeTransform } from '@angular/core';
import { RepairOrder } from '../models/repair-order.model';

@Pipe({
  name: 'filterPriority',
  pure:true
})

//Pipe para filtrar por prioridad
export class FilterPriorityPipe implements PipeTransform {

  transform(orders: RepairOrder[] | undefined, priority: string | undefined): RepairOrder[] {

    if (!orders) return [];

    if (priority === 'None' || priority === undefined) {

      return orders;
    }

    return orders.filter(p => p.priority === priority);


  }

}
