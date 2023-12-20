import { Years } from "./Years"
import { Eggs } from "./Eggs"

export const YearsAndEggs = () => {
    return (
        <>
            <h1 style={{textAlign: 'center', margin: '30px 0'}}>Years and eggs</h1>
            <hr />
            <Years />
            <hr />
            <Eggs />
        </>
    )
}