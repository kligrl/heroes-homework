import Style from './style.module.css'
import { SingleInputField } from "../UI/Inputs/SingelInputField"
import { HeroBtn } from "../UI/Buttons/HeroBtn"

export const Form: React.FC<{newHeroName: string, setNewHeroName: (name: string) => void, newHeroHp: string, setNewHeroHp: (hp: string) => void, newHeroCity: string, setNewHeroCity: (city: string) => void, addNewHero: (e: React.MouseEvent<HTMLElement>) => void}> = (props) => {
    return (
        <form className={Style.input}>
            <SingleInputField
                value={props.newHeroName}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setNewHeroName(e.target.value)}
                type={'text'}
                placeholder={'Имя героя'}
            />
            <SingleInputField
                value={props.newHeroHp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setNewHeroHp(e.target.value)}
                type={'number'}
                placeholder={'hp'}
            />
            <SingleInputField 
                value={props.newHeroCity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.setNewHeroCity(e.target.value)}
                type={'text'}
                placeholder={'Город'}
            />
            <HeroBtn onClick={props.addNewHero}>Добавить героя</HeroBtn>
        </form>
    )
}
