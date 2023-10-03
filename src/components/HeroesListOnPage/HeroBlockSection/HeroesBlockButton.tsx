import Style from './style.module.css'
import { Link } from 'react-router-dom'

type THeroesBlockBtn = {
    id: number
}

export const HeroesBlockButton = (props: THeroesBlockBtn) => {
    return (
        <div className={Style.btns}>
                    <Link to={'/details/' + props.id} className={Style.btn}>Редактировать героя</Link>
        </div>
    )
}
