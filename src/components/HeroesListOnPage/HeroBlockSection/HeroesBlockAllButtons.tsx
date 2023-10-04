import { DeleteHeroButton } from './DeleteHeroButton'
import { HeroesBlockButton } from './HeroesBlockButton'
import Style from './style.module.css'

type THeroesBlockBtn = {
    id: number
}

export const HeroesBlockAllButtons = (props: THeroesBlockBtn) => {
    return (
        <div className={Style.btns}>
            <HeroesBlockButton id={props.id}/>
            <DeleteHeroButton id={props.id}/>
        </div>
    )
}
