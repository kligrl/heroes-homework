import Style from './style.module.css'
import { TBlockProps } from './HeroBlockSection.type'
import { HeroesBlockAllButtons } from './HeroesBlockAllButtons'

export const HeroBlockSection = (props: TBlockProps) => {
    return (
        <div className={Style.block}>
            <h1 className={Style.header}>
                {props.name}
            </h1>
            <p className={Style.text}>
                {props.hp}
            </p>
            <p className={Style.text}>
                {props.city}
            </p>
            {props.isEditButtonActive
                ? <HeroesBlockAllButtons id={props.id}/>
                : null
            }
        </div>
    )
}
