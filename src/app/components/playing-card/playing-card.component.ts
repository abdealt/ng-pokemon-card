import { Component } from '@angular/core';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {

  name : string = 'my Monster';
  hp : number = 40;
  figureCaption : string = 'N°001 Monster';
  attackName : string = 'Geo Impact';
  attackStrength : number = 60;
  attackDescription : string = 'The monster hits the ground with its fist and creates a shockwave that hits the enemy';
}
