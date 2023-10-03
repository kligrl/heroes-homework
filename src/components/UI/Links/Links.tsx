import { Link } from 'react-router-dom'
import Style from './style.module.css'

export const Links = () => {
    return (
        <div className={Style.links}>
            <Link className={Style.link} to={'/'}>Список героев</Link>
            <Link className={Style.link} to={'/add-hero'}>Добавить героя</Link>
            <Link className={Style.link} to={'/details'}>Детали</Link>
        </div>
    )
}
