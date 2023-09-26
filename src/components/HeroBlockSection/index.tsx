import Style from './style.module.css'

type TBlockProps = {
    name: string,
    hp: number,
    city: string
}

function HeroBlockSection(props: TBlockProps) {
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
        </div>
    )
}

export default HeroBlockSection
