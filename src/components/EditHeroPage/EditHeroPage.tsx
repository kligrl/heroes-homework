import Style from './style.module.css'
import { Links } from '../UI/Links/Links'
import { HeroForm } from '../Form/HeroForm'
import { useContext, useState } from 'react'
import { IHeroObject } from '../Database/database.type'
import { HeroArrContext } from '../Context/HeroArrContextContainer'
import { useParams } from 'react-router'

export const EditHeroPage = () => {
    const {id: heroId} = useParams<{id: string}>()
    const heroesArrContext = useContext(HeroArrContext)
    const [newHeroName, setNewHeroName] = useState(heroesArrContext.heroesArray[Number(heroId)].name)
    const [newHeroHp, setNewHeroHp] = useState(String(heroesArrContext.heroesArray[Number(heroId)].hp))
    const [newHeroCity, setNewHeroCity] = useState(heroesArrContext.heroesArray[Number(heroId)].city)

    const editHero = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        const newHero: IHeroObject = {
            name: newHeroName,
            hp: Number(newHeroHp),
            city: newHeroCity,
            id: Number(heroId)
        }
        heroesArrContext.editHero(newHero)
        setNewHeroName(heroesArrContext.heroesArray[Number(heroId)].name)
        setNewHeroHp(String(heroesArrContext.heroesArray[Number(heroId)].hp))
        setNewHeroCity(heroesArrContext.heroesArray[Number(heroId)].city)
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
                    setNewHero={editHero}
                    isItNewHero={false}
                />
            </div>
        </div>
    )
}
