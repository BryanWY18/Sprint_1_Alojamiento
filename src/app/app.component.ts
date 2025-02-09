import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FotosComponent } from './fotos/fotos.component';
import { InfoComponent } from './info/info.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { FooterComponent } from './footer/footer.component';
import { EstanciasComponent } from './estancias/estancias.component';
import { AsideComponent } from './aside/aside.component';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,HeaderComponent,FotosComponent,InfoComponent,PoliticasComponent,FooterComponent,EstanciasComponent,AsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sprint1_Alojamiento';
}
