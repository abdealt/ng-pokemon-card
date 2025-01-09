import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  count : number = 0;
  search : string = '';


  monster1: Monster;

  constructor(){
    this.monster1 = new Monster();
    this.monster1.name = 'Pikachu';
    this.monster1.hp = 60;
    this.monster1.figureCaption = 'N°025 Pikachu';
    this.monster1.attackName = 'Thunderbolt';
    this.monster1.attackStrength = 90;
    this.monster1.attackDescription = 'The monster releases a powerful electric shock that hits the enemy';
  }

  inceaseCount(){
    this.count++;
  }
}
