import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone:true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  info(){
    prompt("Ingresa tu número o correo para entrar en contacto");
    alert("¡Gracias!, en breve nos comunicaremos contigo")
  }

}
