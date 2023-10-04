import { IHeroObject } from "../Database/Database.type"
import { HeroBlockSection } from "./HeroBlockSection/HeroBlockSection"

export const HeroesListOnMainPage: React.FC<{heroes: IHeroObject[]}> = (props) => {
    return (
        <div>
            {props.heroes.map(hero =>
                <HeroBlockSection name={hero.name} id={hero.id} isEditButtonActive={false} key={hero.id}/>
            )}
        </div>
    )
}
