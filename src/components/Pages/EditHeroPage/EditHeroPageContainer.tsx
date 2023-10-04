import Style from './style.module.css'
import { Links } from '../../UI/Links/Links'
import { HeroForm } from '../../Form/HeroForm'
import { useState } from 'react'
import { IHeroObject } from '../../Database/Database.type'
import { useNavigate, useParams } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../Redux/store'
import { selectHeroes } from '../../Redux/selectors'
import { heroSlice } from '../../Redux/heroSlice'

export const EditHeroPageContainer = () => {
    const {id: heroId} = useParams<{id: string}>()
    const heroesArray: IHeroObject[] = useAppSelector(selectHeroes)
    const dispatch = useAppDispatch()
    const indexToFind = heroesArray.findIndex(e => e.id === Number(heroId))
    const [newHeroName, setNewHeroName] = useState(heroesArray[indexToFind].name)
    const [newHeroHp, setNewHeroHp] = useState(String(heroesArray[indexToFind].hp))
    const [newHeroCity, setNewHeroCity] = useState(heroesArray[indexToFind].city)
    const navigate = useNavigate()

    const editHero = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        const newHero: IHeroObject = {
            name: newHeroName,
            hp: Number(newHeroHp),
            city: newHeroCity,
            id: Number(heroId)
        }
        dispatch(heroSlice.actions.editHero(newHero))
        navigate('/details')
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
