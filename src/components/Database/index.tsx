interface IHeroObject {
    name: string,
    hp: number,
    city: string,
    id: number
}

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

const defaultHeroesArray: Array<any> = [];

type TFillDeafaultArray = (firstHero: IHeroObject, secondHero: IHeroObject, thirdHero: IHeroObject) => void

const fillDefaultHeroesArray: TFillDeafaultArray = (firstHero, secondHero, thirdHero) => {
    defaultHeroesArray.push(firstHero)
    defaultHeroesArray.push(secondHero)
    defaultHeroesArray.push(thirdHero)
}

fillDefaultHeroesArray(firstHero, secondHero, thirdHero)

export default defaultHeroesArray
