import { Component } from '@angular/core';
import { HeroComponent } from "../../components/hero/hero.component";
import { LinhasComponent } from "../../components/linhas/linhas.component";

@Component({
  selector: 'app-home',
  imports: [HeroComponent, LinhasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
