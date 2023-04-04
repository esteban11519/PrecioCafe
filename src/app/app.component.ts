import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  precioCarga: number;
  kilogramos: number;
  porcentaje: number;
  precio: number;


  pagoKilogramo=0.0;

  arrobasCarga=10;
  kilosArroba=12.5;

  arrobasDestaradas=0.0;
  arrobasPagadas=0.0;
  arrobasSinDesatarar=0.0;

  kilosDestarados=0.0;
  kilosPagados=0.0;
  


  constructor() {
    this.precioCarga=0.0;
    this.kilogramos=0.0;
    this.porcentaje=8.0;
    this.precio=0.0;
  }


  arrobasToKilogramos(arrobas:number) {

    const parteEntera=Math.floor(arrobas);
    const parteDecimal=arrobas-parteEntera;
    const conversionDecimalAKilogramos=(Math.round(parteDecimal*this.kilosArroba*100)*0.01);

    if (parteEntera==0 && conversionDecimalAKilogramos==0){
      return '0 arrobas y '+ '0 kilogramos';  
    }
    else if(parteEntera==0 && conversionDecimalAKilogramos==1)
    {
      return '1 kilogramo';
    }
    else if(parteEntera==0 && conversionDecimalAKilogramos>1)
    {
      return conversionDecimalAKilogramos.toLocaleString('es-CO') + ' kilogramos';
    }
    else if(parteEntera==1 && conversionDecimalAKilogramos==0)
    {
      return '1 arroba';
    }
    else if(parteEntera==1 && conversionDecimalAKilogramos==1)
    {
      return '1 arroba y 1 kilogramo'; 
    }
    else if(parteEntera==1 && conversionDecimalAKilogramos>1)
    {
      return '1 arroba y '+conversionDecimalAKilogramos.toLocaleString('es-CO') + ' kilogramos';
    }
    else if(parteEntera>1 && conversionDecimalAKilogramos==0)
    {
      return parteEntera.toLocaleString('es-CO')+' arrobas';
    }
    else if(parteEntera>1 && conversionDecimalAKilogramos==1)
    {
      return parteEntera.toLocaleString('es-CO')+' arrobas y 1 kilogramo';
    }
    else if(parteEntera>1 && conversionDecimalAKilogramos>1)
    {
      return parteEntera.toLocaleString('es-CO')+' arrobas y '+ conversionDecimalAKilogramos.toLocaleString('es-CO') + ' kilogramos';  
    }
    else if(parteEntera==0)
    {
      return conversionDecimalAKilogramos.toLocaleString('es-CO') + ' kilogramos';
    }
    else if(parteEntera==1)
    {
      return '1 arroba y '+conversionDecimalAKilogramos.toLocaleString('es-CO') + ' kilogramos';
    }

    else{
      return parteEntera.toLocaleString('es-CO')+' arrobas y '+ conversionDecimalAKilogramos.toLocaleString('es-CO') + ' kilogramos';  
    }

  }

  getKilogramos(kilogramos:number) {
    // console.log('getKilogramos');
    if (kilogramos==1)
    {
      return kilogramos.toLocaleString('es-CO') + ' kilogramo';
    }
    else
    {
      return kilogramos.toLocaleString('es-CO') + ' kilogramos';

    }

  }

  buttonCalcular(){
    const inputButtonPrecioCarga = document.getElementById('idPrecioCarga') as HTMLInputElement;
    const inputButtonKilogramos = document.getElementById('idKilogramos') as HTMLInputElement;
    const inputButtonDestare = document.getElementById('idDestare') as HTMLInputElement;

    if (+inputButtonPrecioCarga.value>=0)
    this.precioCarga= +inputButtonPrecioCarga.value;
    else this.precioCarga=0.0;

    if (+inputButtonKilogramos.value>=0)
    this.kilogramos= +inputButtonKilogramos.value;
    else this.kilogramos=0.0;

    if (+inputButtonDestare.value>=0 && +inputButtonDestare.value<=100)
    this.porcentaje= +inputButtonDestare.value;
    else this.porcentaje=0.0;
    
    // console.log("Precio Carga: ",this.precioCarga);
    // console.log("Kilogramos: ",this.kilogramos);
    // console.log("Porcentaje: ",this.porcentaje);

    // Calculos

    this.arrobasSinDesatarar=this.kilogramos/this.kilosArroba;
    this.precio=(1-(+this.porcentaje)*0.01)*(+this.kilogramos)*(+this.precioCarga)/(this.arrobasCarga*this.kilosArroba);

    this.kilosPagados=this.kilogramos*(1-this.porcentaje*0.01);
    this.kilosDestarados=this.kilogramos-this.kilosPagados;

    this.arrobasPagadas=this.kilosPagados/this.kilosArroba;
    this.arrobasDestaradas=this.kilosDestarados/this.kilosArroba;
    
    this.pagoKilogramo=this.precioCarga*0.1/this.kilosArroba;

    // Aproximaciones
    this.precio=Math.round(this.precio/100.0)*100.0;
    this.pagoKilogramo=Math.round(this.pagoKilogramo*100)*0.01;
    // this.arrobasSinDesatarar=Math.round(this.arrobasSinDesatarar*100)*0.01;
  

    this.kilosPagados=Math.round(this.kilosPagados*100)*0.01;
    this.kilosDestarados=Math.round(this.kilosDestarados*100)*0.01;

    // this.arrobasPagadas=Math.round(this.arrobasPagadas*100)*0.01;
    // this.arrobasDestaradas=Math.round(this.arrobasDestaradas*100)*0.01;

    
    
  }

  // buttonNueva(){
  //   this.precio=0.0;
  //   this.arrobasSinDesatarar=0.0;
  //   this.arrobasPagadas=0.0;
  //   this.arrobasDestaradas=0.0;
  //   this.kilogramos=0.0;
  //   this.kilosPagados=0.0;
  //   this.kilosDestarados=0.0;
  //   // this.arrobas=0;
  // }


}

