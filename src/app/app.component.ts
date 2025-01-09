import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { Monster } from './models/monster.model';
import { MonsterType } from './utils/monster.utils';

@Component({
  selector: 'app-root',
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  monsters!: Monster[];
  count : number = 0;
  search : string = '';
  
  selectedMonsterIndex : number = 0;


  constructor(){
    this.monsters = [];

    const monster0 = new Monster();
    monster0.name = 'Pikachu';
    monster0.image = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png';
    monster0.type = MonsterType.ELECTRIC;
    monster0.hp = 120;
    monster0.figureCaption = 'N°025 Pikachu';
    monster0.attackName = 'Eclair';
    monster0.attackStrength = 90;
    monster0.attackDescription = 'This is a very strong attack';

    const monster1 = new Monster();
    monster1.name = 'Florizarre';
    monster1.image = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/003.png';
    monster1.type = MonsterType.PLANT
    monster1.hp = 190;
    monster1.figureCaption = 'N°003 Florizarre';
    monster1.attackName = 'Fouet Lianes';
    monster1.attackStrength = 150;
    monster1.attackDescription = 'This is a very strong attack';

    const monster2 = new Monster();
    monster2.name = 'Tortank';
    monster2.image = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/009.png';
    monster2.type = MonsterType.WATER;
    monster2.hp = 160;
    monster2.figureCaption = 'N°009 Tortank';
    monster2.attackName = 'Hydrocanon';
    monster2.attackStrength = 120;
    monster2.attackDescription = 'This is a very strong attack';

    const monster3 = new Monster();
    monster3.name = 'Dracaufeu';
    monster3.image = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/006.png';
    monster3.type = MonsterType.FIRE;
    monster3.hp = 180;
    monster3.figureCaption = 'N°006 Dracaufeu';
    monster3.attackName = 'Lance-Flamme';
    monster3.attackStrength = 200;
    monster3.attackDescription = 'This is a very strong attack';

    const monster4 = new Monster();
    monster4.name = 'Mewtwo';
    monster4.image = 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/150.png';
    monster4.type = MonsterType.PSYCHIC;
    monster4.hp = 160;
    monster4.figureCaption = 'N°150 Mewtwo';
    monster4.attackName = 'Psyko';
    monster4.attackStrength = 150;
    monster4.attackDescription = 'This is a very strong attack';

    this.monsters.push (monster0, monster1, monster2, monster3, monster4);
  }


  inceaseCount(){
    this.count++;
  }

  toggleMonster(){
    this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % this.monsters.length;
  }
}
