import Style from './style.module.css'
import { Links } from '../../UI/Links/Links'
import { HeroForm } from '../../Form/HeroForm'
import { useState } from 'react'
import { IHeroObject } from '../../Database/Database.type'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../Redux/store'
import { heroSlice } from '../../Redux/heroSlice'

export const AddNewHeroPageContainer = () => {
    const dispatch = useAppDispatch()
    let numberOfHeroes: number = Math.random()
    const [newHeroName, setNewHeroName] = useState('')
    const [newHeroHp, setNewHeroHp] = useState('')
    const [newHeroCity, setNewHeroCity] = useState('')
    const navigate = useNavigate()

    const addNewHero = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        const newHero: IHeroObject = {
            name: newHeroName,
            hp: Number(newHeroHp),
            city: newHeroCity,
            id: numberOfHeroes
        }
        dispatch(heroSlice.actions.addHero(newHero))
        navigate('/')
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
