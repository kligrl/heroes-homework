import { IHeroObject } from "../Database/Database.type"
import { HeroBlockSection } from "../HeroBlockSection/HeroBlockSection"

export const HeroesListOnDetailsPage: React.FC<{heroes: IHeroObject[]}> = (props) => {
    return (
        <div>
            {props.heroes.map(prop =>
                <HeroBlockSection name={prop.name} hp={prop.hp} city={prop.city} key={prop.id}/>
            )}
        </div>
    )
}
