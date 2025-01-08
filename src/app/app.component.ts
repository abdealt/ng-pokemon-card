import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';

@Component({
  selector: 'app-root',
  imports: [PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monster1: Monster;
  monster2: Monster;

  constructor(){
    this.monster1 = new Monster();
    this.monster1.name = 'Pikachu';
    this.monster1.hp = 60;
    this.monster1.figureCaption = 'N°025 Pikachu';
    this.monster1.attackName = 'Thunderbolt';
    this.monster1.attackStrength = 90;
    this.monster1.attackDescription = 'The monster releases a powerful electric shock that hits the enemy';

    this.monster2 = new Monster();
    this.monster2.name = 'Elector';
    this.monster2.hp = 120;
    this.monster2.figureCaption = 'N°025 Elector';
    this.monster2.attackName = 'Thunderbolt Suprem';
    this.monster2.attackStrength = 90;
    this.monster2.attackDescription = 'The monster releases a big big electric shock that hits the enemy';
  }
}
