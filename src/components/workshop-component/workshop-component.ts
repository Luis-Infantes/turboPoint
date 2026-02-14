import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FinalPriceDirective } from '../../directives/final-price.directive';
import { RepairOrder } from '../../models/repair-order.model';
import { SimpledataSource } from '../../data/dataSource.data';
import { PricingPolicyService } from '../../services/pricing-policy.service';
import { FilterPriorityPipe } from '../../pipes/filter-priority-pipe';
import { FilterVehiclePipe } from '../../pipes/filter-vehicle-pipe';

@Component({
  selector: 'app-workshop-component',
  standalone: true,
  imports: [CommonModule, FormsModule, FinalPriceDirective, FilterPriorityPipe, FilterVehiclePipe],
  templateUrl: './workshop-component.html',
  styleUrl: './workshop-component.css',
})
export class WorkshopComponent {

  //Variable del tipo modelo de datos
  public orders: RepairOrder[];


  //Variables para los filtros de las pipes
  filterPriority: string | undefined;
  filterVehicle: string | undefined;



  // El constructor recibe la fuente de datos y los servicios
  constructor(private dataSource: SimpledataSource, public pricingService: PricingPolicyService) {

 
    //En la variable order le metemos el listado de reparaciones
    this.orders = this.dataSource.getRepairOrders();


  }

  
  //Listamos las reparaciones para mostrar en el html
  getOrders(): RepairOrder[] { return this.orders; }

}
