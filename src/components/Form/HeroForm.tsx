import Style from './style.module.css'
import { SingleInputField } from "../UI/Inputs/SingleInputField"
import { Button } from "../UI/Buttons/Button"

export const HeroForm: React.FC<{newHeroName: string, setNewHeroName: (name: string) => void, newHeroHp: string, setNewHeroHp: (hp: string) => void, newHeroCity: string, setNewHeroCity: (city: string) => void, addNewHero: (e: React.MouseEvent<HTMLElement>) => void}> = (props) => {
    return (
        <form className={Style.input}>
            <SingleInputField
                value={props.newHeroName}
                onChange={props.setNewHeroName}
                type={'text'}
                placeholder={'Имя героя'}
            />
            <SingleInputField
                value={props.newHeroHp}
                onChange={props.setNewHeroHp}
                type={'number'}
                placeholder={'hp'}
            />
            <SingleInputField 
                value={props.newHeroCity}
                onChange={props.setNewHeroCity}
                type={'text'}
                placeholder={'Город'}
            />
            <Button onClick={props.addNewHero}>Добавить героя</Button>
        </form>
    )
}
