import Style from './style.module.css'
import InputField from '../UI/Input'
import Button from '../UI/Button'
import { useState } from 'react'
import defaultHeroesArray from '../Database'
import Output from '../Output'

function Input() {
    const [props, setProps] = useState(defaultHeroesArray)
    let numberOfHeroes: number = props.length
    const [name, setName] = useState('')
    const [hp, setHp] = useState('')
    const [city, setCity] = useState('')

  
    const addNewHero = (e: React.MouseEvent<HTMLElement>): void => {
        e.preventDefault()
        const newHero: Object = {
            name,
            hp,
            city,
            id: numberOfHeroes
        }
        setProps([...props, newHero])
        setName('')
        setHp('')
        setCity('')
    }

    return (
        <div className={Style.main}>
            <form className={Style.input}>
                <InputField
                    value={name}
                    onChange={(e: React.ChangeEvent<any>) => setName(e.target.value)}
                    type={'text'}
                    placeholder={'Имя героя'}
                />
                <InputField
                    value={hp}
                    onChange={(e: React.ChangeEvent<any>) => setHp(e.target.value)}
                    type={'number'}
                    placeholder={'hp'}
                />
                <InputField 
                    value={city}
                    onChange={(e: React.ChangeEvent<any>) => setCity(e.target.value)}
                    type={'text'}
                    placeholder={'Город'}
                />
                <Button onClick={addNewHero}>Добавить героя</Button>
            </form>
            <div className={Style.output}>
                <Output {...props}/>
            </div>
        </div>
    )
}

export default Input
