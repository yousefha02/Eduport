import Career from "./Career";
import Free from "./Free";
import It from "./It";
import Parts from "./Parts";
import Picks from "./Picks";
import Programs from "./Programs";
import React from "react"

function Coursing()
{
    return(
        <div>
            <Career/>
            <Parts/>
            <Picks/>
            <Programs/>
            <It/>
            <Free/> 
        </div>
    )
}

export default React.memo(Coursing)