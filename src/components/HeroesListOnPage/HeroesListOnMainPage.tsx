import { IHeroObject } from "../Database/Database.type"
import { HeroBlockSection } from "../HeroBlockSection/HeroBlockSection"

export const HeroesListOnMainPage: React.FC<{heroes: IHeroObject[]}> = (props) => {
    return (
        <div>
            {props.heroes.map(prop =>
                <HeroBlockSection name={prop.name} key={prop.id}/>
            )}
        </div>
    )
}
