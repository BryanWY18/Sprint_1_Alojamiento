import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-info',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  user={
    name:"DIEGO",
    experiencia:"2 AÑOS DE EXPERIENCIA",
    ubicacion:"CASA DE CAMPO EN TEPOZTLÁN, MÉXICO",
  }

}
