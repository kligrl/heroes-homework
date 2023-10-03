import Style from './style.module.css'
import { Links } from '../UI/Links/Links'
import { HeroForm } from '../Form/HeroForm'
import { useContext, useState } from 'react'
import { IHeroObject } from '../Database/database.type'
import { HeroArrContext } from '../Context/HeroArrContextContainer'

export const AddNewHeroPage = () => {
    const heroesArrContext = useContext(HeroArrContext)
    let numberOfHeroes: number = heroesArrContext.heroesArray.length
    const [newHeroName, setNewHeroName] = useState('')
    const [newHeroHp, setNewHeroHp] = useState('')
    const [newHeroCity, setNewHeroCity] = useState('')

    const addNewHero = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        const newHero: IHeroObject = {
            name: newHeroName,
            hp: Number(newHeroHp),
            city: newHeroCity,
            id: numberOfHeroes
        }
        heroesArrContext.addHero(newHero)
        setNewHeroName('')
        setNewHeroHp('')
        setNewHeroCity('')
    }

    return (
        <div>
            <Links />
            <div className={Style.main}>
                <HeroForm 
                    newHeroName={newHeroName} 
                    setNewHeroName={setNewHeroName} 
                    newHeroHp={newHeroHp} 
                    setNewHeroHp={setNewHeroHp} 
                    newHeroCity={newHeroCity} 
                    setNewHeroCity={setNewHeroCity} 
                    setNewHero={addNewHero}
                    isItNewHero={true}
                />
            </div>
        </div>
    )
}
