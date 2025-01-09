import { MonsterType } from "../utils/monster.utils";

export class Monster {
    name : string = 'Monster name';
    image : string = 'Image URL';
    type: MonsterType = MonsterType.NULL;
    hp : number = 0;
    figureCaption : string = 'N°000 Monster';

    attackName : string = 'Attcak name';
    attackStrength : number = 0;
    attackDescription : string = 'Attack description';
}