import { Component } from '@angular/core';
import { CheckboxControlValueAccessor, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aside',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {

  total:number=1500;
  huesped:number=1;
  noche:number=1;
  mascota:number=250;
  isChecked:boolean=false;
    
  restaHuesped():void{
    this.huesped=this.huesped-1;
    this.total=this.total-500;
    }
    
  sumaHuesped():void{
    this.huesped=this.huesped+1;
    this.total=this.total+500;
  }

  restaNoche(): void {
    this.noche = this.noche - 1;
    this.total = this.total - 1000;
  }
  
  sumaNoche(): void {
    this.noche = this.noche + 1;
    this.total = this.total + 1000;
  }

  extraMascota(){
    let checkbox=document.getElementById("checkbox-1")as HTMLInputElement;
      if(checkbox.checked){
        this.total+=250;
      }else{
        this.total-=250;
      }
  }

    extraCalef(){
      let checkbox=document.getElementById("checkbox-2")as HTMLInputElement;
        if(checkbox.checked){
          this.total+=500;
        }else{
          this.total-=500;
        }
    }

    extraMont(){
      let checkbox=document.getElementById("checkbox-3")as HTMLInputElement;
        if(checkbox.checked){
          this.total+=150;
        }else{
          this.total-=150;
        }
    }

    extraSend(){
      let checkbox=document.getElementById("checkbox-4")as HTMLInputElement;
        if(checkbox.checked){
          this.total+=200;
        }else{
          this.total-=200;
        }
    }
  
    extraCasc_1(){
      if (this.isChecked==true){
        (this.total+=50);
      } else {
        (this.total-=50);
      }
     }
  
  /*
  get totalFinal():number{
    console.log(this.isChecked)
    let total=this.total;
    if(this.isChecked==true){
      console.log(this.isChecked)
      total+=50;
    }
    return total
  }
  */

  reservar(){
    alert("¡¡Felicidades, has completado la reservación!!");
  }
}