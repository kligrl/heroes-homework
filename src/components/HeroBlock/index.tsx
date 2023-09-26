import HeroBlockSection from "../HeroBlockSection"

function HeroBlock(arr: Array<any>) {
    const properArr = Object.values(arr)
    
    return (
        <div>
            {properArr.map(prop =>
                <HeroBlockSection name={prop.name} hp={prop.hp} city={prop.city} key={prop.id}/>
            )}
        </div>
    )
}

export default HeroBlock
