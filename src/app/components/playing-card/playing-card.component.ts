import { Component, input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  // @Input({
  //   // required: true // Rends l'attribut obligatoire, donc il ne peux y'avoir de carte non définit

  //   // alias: 'my-monster' // Permet de définir un alias pour l'attribut, donc au lieu d'appeler l'attribut monster, on peut appeler my-monster

  //   // transform: (value: Monster) => { // Permet de transformer la valeur de l'attribut avant de l'assigner à la propriété monster
  //   //   value.hp = value.hp * 2;
  //   //   return value;
  //   // }
    
  // }) monster: Monster = new Monster();

  // inputSignal est toute forme d'informations ou de donnée envoyée à un système dans
  //                          le but de le modifier ou de le faire réagir d'une certaine manière.
  monster: InputSignal<Monster> = input(new Monster());
}
