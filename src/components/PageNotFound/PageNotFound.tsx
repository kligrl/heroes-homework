import Style from './style.module.css'
import { Links } from "../UI/Links/Links"

export const PageNotFound = () => {
    return (
        <div>
            <Links />
            <p className={Style.main}>
                Страница не найдена!
            </p>
        </div>
    )
}
