import { createContext, useState } from "react"
import { defaultHeroesArray } from "../Database/Database"
import { IHeroObject } from "../Database/Database.type"

export const HeroArrContext = createContext<{
    heroesArray: IHeroObject[],
    addHero: (newHero: IHeroObject) => void,
    editHero: (editHero: IHeroObject) => void
}>({
    heroesArray: [],
    addHero: () => {},
    editHero: () => {}
})

export const HeroArrContextContainer: React.FC<{children: React.ReactNode}> = (props) => {
    const [heroesArray, setHeroesArray] = useState(defaultHeroesArray)
    const addHero = (newHero: IHeroObject) => {
        setHeroesArray([...heroesArray, newHero])
    }
    const editHero = (editHeroEntries: IHeroObject) => {
        setHeroesArray(heroesArray.map((hero) => hero.id === editHeroEntries.id ? editHeroEntries: hero))
    }

    return (
        <HeroArrContext.Provider value={{heroesArray, addHero, editHero}}>
            {props.children}
        </HeroArrContext.Provider>
    )
}
