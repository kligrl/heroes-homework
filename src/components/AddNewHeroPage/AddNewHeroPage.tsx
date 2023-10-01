import Style from './style.module.css'
import { Links } from '../UI/Links/Links'
import { Form } from '../Form/Form'
import { useContext, useState } from 'react'
import { IHeroObject } from '../Database/Database.type'
import { HeroArrContext } from '../Context/HeroArrContextContainer'

export const AddNewHeroPage = () => {
    const heroesArr = useContext(HeroArrContext)
    let numberOfHeroes: number = heroesArr.heroesArray.length
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
        heroesArr.addHero(newHero)
        setNewHeroName('')
        setNewHeroHp('')
        setNewHeroCity('')
    }

    return (
        <div>
            <Links />
            <div className={Style.main}>
                <Form newHeroName={newHeroName} setNewHeroName={setNewHeroName} newHeroHp={newHeroHp} setNewHeroHp={setNewHeroHp} newHeroCity={newHeroCity} setNewHeroCity={setNewHeroCity} addNewHero={addNewHero}/>
            </div>
        </div>
    )
}
