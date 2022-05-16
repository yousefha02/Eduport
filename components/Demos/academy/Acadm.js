import Companies from "./Companies";
import Domain from "./domain/Domain";
import Ease from "./Ease";
import Future from "./Future";
import JobSlides from "./JobsSlides";
import People from "./People";
import React from "react"

function Acadm()
{
    return(
        <div>
            <Future/>
            <JobSlides/>
            <Domain/>
            <People/>
            <Ease/>
            <Companies/>
        </div>
    )
}
export default React.memo(Acadm)