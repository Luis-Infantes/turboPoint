import { Directive, DoCheck, Input, KeyValueDiffer, KeyValueDiffers, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { PricingPolicyService } from '../services/pricing-policy.service';

@Directive({
  selector: 'td[appFinalPrice]', // Se aplica solo a etiquetas <td> que usen el atributo [appFinalPrice]
  exportAs: 'finalPrice'         // Lo renombramos como finalPrice
})
export class FinalPriceDirective implements OnInit, OnChanges, DoCheck {

  // Con differ rastreamos cambios internos en las propiedades del servicio
  private differ?: KeyValueDiffer<any, any>;

  constructor(
    private finalPrice: PricingPolicyService, // Implementamos el servicio
    private keyValuesDiffers: KeyValueDiffers // Detecta los cambios relaizados
  ) { }

 
  @Input("appFinalPrice") basePrice?: number; // Precio base que viene del componente
  @Input() priority?: string[] = ["low", "medium", "high"]; // Array de prioridades 
  @Input() client?: string; // Identificador de cliente

  //Variable para guardar el resultado final del precio
  totalFinalPrice?: number;

  ngOnInit() {
    // Inicializamos el "rastreador" (differ) para vigilar el servicio de políticas de precio.
    // Esto sirve para detectar si cambian las reglas globales.
    this.differ = this.keyValuesDiffers.find(this.finalPrice).create();
  }

  //Para guardar los cambios automáticos 
  ngOnChanges(changes: { [prop: string]: SimpleChange }) {
    // Si el precio base cambia, recalculamos el total inmediatamente
    if (changes["basePrice"] != null) {
      this.updateValue();
    }
  }

  //Para detectar todos esos cambios que son manuales
  ngDoCheck() {
    // Comprobamos si ha habido algún cambio interno en el servicio PricingPolicyService
    if (this.differ?.diff(this.finalPrice) != null) {
      // Si el servicio cambió recalculamos el precio
      this.updateValue();
    }
  }

  //Método para actualizar los cambios del precio final
  updateValue() {

    // Llamada al servicio pasando el precio base, la primera prioridad del array y el cliente
    this.totalFinalPrice = this.finalPrice.calculateFinalPrice(
      this.basePrice ?? 0,
      this.priority?.[0] ?? '', 
      this.client ?? ''
    );
  }
}



 




