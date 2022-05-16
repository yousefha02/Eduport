import Institutions from "./Institutions"
import Company from "./Company"
import Courses from "./Courses"
import Findout from "./Findout"
import Study from "./Study"
import Events from "./Events"
import Subscribe from "./Subscribe"
import Cookies from "./Cookies"
import React from "react"

function Educational()
{
    return(
        <div>
        <Institutions/>
        <Company/>
        <Findout/>
        <Courses/>
        <Study/>
        <Events/>
        <Subscribe/>
        <Cookies/>
        </div>
    )
}
export default React.memo(Educational)