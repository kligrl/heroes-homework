import Style from './style.module.css'
import { Links } from "../../UI/Links/Links"
import { HeroesListOnDetailsPage } from '../../HeroesListOnPage/HeroesListOnDetailsPage'
import { IHeroObject } from '../../Database/Database.type'
import { useAppSelector } from '../../Redux/store'
import { selectHeroes } from '../../Redux/selectors'

export const  DetailsPageContainer = () => {
    const heroesArray: IHeroObject[] = useAppSelector(selectHeroes)
    return (
        <div>
            <Links />
            <div className={Style.main}>
                <HeroesListOnDetailsPage heroes={heroesArray}/>
            </div>
        </div>
    )
}
