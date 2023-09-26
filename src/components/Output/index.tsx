import HeroBlock from "../HeroBlock"

function Output(arr: Array<any>) {
    return (
        <div>
            <HeroBlock {...arr}/>
        </div>
    )
}

export default Output
