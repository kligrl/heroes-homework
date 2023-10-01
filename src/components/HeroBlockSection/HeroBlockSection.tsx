import Style from './style.module.css'
import { TBlockProps } from './HeroBlockSection.type'
import { Link } from 'react-router-dom'

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
            {/* <div className={Style.btns}>
                <Link to={'/EditHero/'+props.key} className={Style.btn}>Редактировать героя</Link>
            </div> */}
        </div>
    )
}
