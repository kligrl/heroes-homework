import Style from './style.module.css'
import { Links } from "../../UI/Links/Links"
import { HeroesListOnDetailsPage } from '../../HeroesListOnPage/HeroesListOnDetailsPage'
import { HeroArrContext } from '../../Context/HeroArrContextContainer'
import { useContext } from 'react'

export const  DetailsPageContainer = () => {
    const {heroesArray} = useContext(HeroArrContext)
    return (
        <div>
            <Links />
            <div className={Style.main}>
                <HeroesListOnDetailsPage heroes={heroesArray}/>
            </div>
        </div>
    )
}
