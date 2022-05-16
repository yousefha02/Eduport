import Academia from "./Academia";
import Happiness from "./Happiness";
import Acess from "./Acess";
import Questions from "./Questions";
import React from "react";
function TutorPage()
{
    return(
        <div>
            <Academia/>
            <Happiness/>
            <Acess/>
            <Questions/>
        </div>
    )
}

export default React.memo(TutorPage)