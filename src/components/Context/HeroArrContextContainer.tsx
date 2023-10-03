import { createContext, useState } from "react"
import { defaultHeroesArray } from "../Database/database"
import { IHeroObject } from "../Database/database.type"

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
        heroesArray[editHeroEntries.id].name = editHeroEntries.name
        heroesArray[editHeroEntries.id].hp = editHeroEntries.hp
        heroesArray[editHeroEntries.id].city = editHeroEntries.city
    }

    return (
        <HeroArrContext.Provider value={{heroesArray, addHero, editHero}}>
            {props.children}
        </HeroArrContext.Provider>
    )
}
