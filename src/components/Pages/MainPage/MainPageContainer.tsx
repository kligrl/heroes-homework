import Style from './style.module.css'
import { HeroesListOnMainPage} from '../../HeroesListOnPage/HeroesListOnMainPage'
import { Links } from '../../UI/Links/Links'
import { IHeroObject } from '../../Database/Database.type'
import { useAppSelector } from '../../Redux/store'
import { selectHeroes } from '../../Redux/selectors'

export const MainPageContainer = () => {
    const heroesArray: IHeroObject[] = useAppSelector(selectHeroes)
    
    return (
        <div>
            <Links />
            <div className={Style.main}>
                <HeroesListOnMainPage heroes={heroesArray}/>
            </div>
        </div>
    )
}
