export enum MonsterType {
    PLANT = 'PLANT',
    FIRE = 'FIRE',
    WATER = 'WATER',
    ELECTRIC = 'ELECTRIC',
    PSYCHIC = 'PSYCHIC',
    NULL = 'NULL'
}

export interface IMonsterProperties{
    imageURL: string;
    color: string;
}

// Dictionary
export const MonsterTypeProperties: { [key: string]: IMonsterProperties} = {
    [MonsterType.PLANT]: {
        imageURL: 'assets/img/type/plant.png',
        color: 'rgba(135, 255, 124)'
    },
    [MonsterType.FIRE]: {
        imageURL: 'assets/img/type/fire.png',
        color: 'rgba(255, 135, 124)'
    },
    [MonsterType.WATER]: {
        imageURL: 'assets/img/type/water.png',
        color: 'rgba(124, 135, 255)'
    },
    [MonsterType.ELECTRIC]: {
        imageURL: 'assets/img/type/electric.png',
        color: 'rgba(255, 255, 124)'
    },
    [MonsterType.PSYCHIC]: {
        imageURL: 'assets/img/type/psy.png',
        color: 'rgba(255, 124, 255)'
    },
    [MonsterType.NULL]: {
        imageURL: 'assets/img/type/null.png',
        color: 'rgba(255, 255, 255)'
    }
}
