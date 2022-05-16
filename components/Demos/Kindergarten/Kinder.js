import Quality from "./Quality";
import Offer from './Offer'
import Confidence from './Confidence'
import Movements from "./Movements";
import React from "react"

function Kinder()
{
    return(
        <div>
            <Quality/>
            <Confidence/>
            <Offer/>
            <Movements/>
        </div>
    )
}

export default React.memo(Kinder)