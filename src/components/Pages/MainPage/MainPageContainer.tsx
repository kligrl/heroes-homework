import Style from './style.module.css'
import { useContext } from 'react'
import { HeroesListOnMainPage} from '../../HeroesListOnPage/HeroesListOnMainPage'
import { Links } from '../../UI/Links/Links'
import { HeroArrContext } from '../../Context/HeroArrContextContainer'

export const MainPageContainer = () => {
    const {heroesArray} = useContext(HeroArrContext)
    
    return (
        <div>
            <Links />
            <div className={Style.main}>
                <HeroesListOnMainPage heroes={heroesArray}/>
            </div>
        </div>
    )
}
