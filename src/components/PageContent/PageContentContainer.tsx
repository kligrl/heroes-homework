import Style from './style.module.css'
import { useState } from 'react'
import { defaultHeroesArray } from '../Database/Database'
import { HeroesListOnPage} from '../HeroesListOnPage/HeroesListOnPage'
import { IHeroObject } from '../Database/Database.type'
import { Form } from '../Form/Form'

export const PageContent = () => {
    const [heroesArray, setHeroesArray] = useState(defaultHeroesArray)
    let numberOfHeroes: number = heroesArray.length
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
        setHeroesArray([...heroesArray, newHero])
        setNewHeroName('')
        setNewHeroHp('')
        setNewHeroCity('')
    }

    return (
        <div className={Style.main}>
            <Form newHeroName={newHeroName} setNewHeroName={setNewHeroName} newHeroHp={newHeroHp} setNewHeroHp={setNewHeroHp} newHeroCity={newHeroCity} setNewHeroCity={setNewHeroCity} addNewHero={addNewHero}/>
            <div className={Style.output}>
                <HeroesListOnPage heroes={heroesArray}/>
            </div>
        </div>
    )
}
