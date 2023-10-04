import { IHeroObject, TFillDeafaultArray } from "./Database.type";

const firstHero: IHeroObject = {
    name: 'Dr. Strange',
    hp: 100,
    city: 'NYC',
    id: 0
}

const secondHero: IHeroObject = {
    name: 'Spider-Man',
    hp: 100,
    city: 'NYC',
    id: 1
}

const thirdHero: IHeroObject = {
    name: 'Iron-Man',
    hp: 100,
    city: 'NYC',
    id: 2
}

const defaultHeroesArray: Array<IHeroObject> = [];

const fillDefaultHeroesArray: TFillDeafaultArray = (heroes) => {
    defaultHeroesArray.push(...heroes)
}

fillDefaultHeroesArray([firstHero, secondHero, thirdHero])

export {defaultHeroesArray}
