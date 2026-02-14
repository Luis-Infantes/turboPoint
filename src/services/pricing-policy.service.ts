import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PricingPolicyService {

  //Variable de tipo number para gestionar el recargo por prioridad alta
  private emergencyFeeValue: number = 0;


  //Métodos getter y setter para poder cambiar los valores desde el componente

  public get emergencyFee(): number {

    return this.emergencyFeeValue;

  }

  public set emergencyFee(newValue: number) {

    this.emergencyFeeValue = newValue ?? 0;

  }



  //Variable para gestionar el descuento por pedido grande o cliente habitual
  private loyaltyDiscountValue: number = 0;

  //Métodos getter y setter para poder cambiar los valores desde el componente

  public get loyaltyDiscount(): number {

    return this.loyaltyDiscountValue;

  }

  public set loyaltyDiscount(newValue: number) {

    this.loyaltyDiscountValue = newValue ?? 0;

  }

  //Método para calcular el precio final de cada orden variando segun aplizando los diferentes porcentajes
  calculateFinalPrice(base: number, priority: string, client:string):number {

    let calculatePrice = base;

    if (priority === 'high') {

      calculatePrice = calculatePrice * (1 + (this.emergencyFeeValue / 100));

    }

    if (base >= 200 || client === "Marcos Peña") {

     

      calculatePrice = calculatePrice * (1 - (this.loyaltyDiscountValue / 100));

    } 

    return Math.max(calculatePrice,30);


  }



  
}
