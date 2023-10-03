import { IHeroObject } from "../Database/database.type"
import { HeroBlockSection } from "./HeroBlockSection/HeroBlockSection"

export const HeroesListOnDetailsPage: React.FC<{heroes: IHeroObject[]}> = (props) => {
    return (
        <div>
            {props.heroes.map(hero =>
                <HeroBlockSection name={hero.name} hp={hero.hp} city={hero.city} id={hero.id} isEditButtonActive={true} key={hero.id}/>
            )}
        </div>
    )
}
