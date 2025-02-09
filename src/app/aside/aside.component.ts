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
  checkbox:boolean=false;
  mascota:number=250;
  nombre:string="";
    
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

    extraCasc(){
      let checkbox=document.getElementById("checkbox-5")as HTMLInputElement;
        if(checkbox.checked){
          this.total+=50;
        }else{
          this.total-=50;
        }
    }

  reservar(){
    alert("¡¡Felicidades, has completado la reservación!!");
  }
}