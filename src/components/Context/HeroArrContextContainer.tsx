import { createContext, useState } from "react"
import { defaultHeroesArray } from "../Database/Database"
import { IHeroObject } from "../Database/Database.type"

export const HeroArrContext = createContext<{
    heroesArray: IHeroObject[],
    addHero: (newHero: IHeroObject) => void
}>({
    heroesArray: [],
    addHero: () => {}
})

export const HeroArrContextContainer: React.FC<{children: React.ReactNode}> = (props) => {
    const [heroesArray, setHeroesArray] = useState(defaultHeroesArray)
    const addHero = (newHero: IHeroObject) => {
        setHeroesArray([...heroesArray, newHero])
    }

    return (
        <HeroArrContext.Provider value={{heroesArray, addHero}}>
            {props.children}
        </HeroArrContext.Provider>
    )
}
