export interface IHeroObject {
    name: string,
    hp: number,
    city: string,
    id: number
}

export type TFillDeafaultArray = (heroes: Array<IHeroObject>) => void
