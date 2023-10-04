import { IHeroObject } from '../../Database/Database.type'
import { heroSlice } from '../../Redux/heroSlice'
import { selectHeroes } from '../../Redux/selectors'
import { useAppDispatch, useAppSelector } from '../../Redux/store'
import Style from './style.module.css'

type THeroesBlockBtn = {
    id: number
}

export const DeleteHeroButton = (props: THeroesBlockBtn) => {
    const heroesArray: IHeroObject[] = useAppSelector(selectHeroes)
    const dispatch = useAppDispatch()
    const indexToFind = heroesArray.findIndex(e => e.id === Number(props.id))


    const deleteHero = () => {
        dispatch(heroSlice.actions.deleteHero(heroesArray[indexToFind]))
    }

    return (
        <button className={Style.btn} onClick={deleteHero}>Удалить героя</button>
    )
}
