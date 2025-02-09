import { Component } from '@angular/core';

@Component({
  selector: 'app-fotos',
  standalone:true,
  imports: [],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent {

  imagen:string="/Casa portada.webp";

  colocarImagen(num:number):void{

       switch(num){
        case 1:this.imagen="/Casa portada.webp";break;
        case 2:this.imagen="/sala.webp";break;
        case 3:this.imagen="/recámara.webp";break;
       }
  }
}
