import Platform from './PlatForm'
import Countries from './Countries'
import Education from './Education'
import Offer from './Offer'
import Company from '../education/Company'
import Webinar from './Webinar'
import Touch from './Touch'
export default function Abroading()
{
    return(
        <div>
            <Platform/>
            <Countries/>
            <Education/>
            <Offer/>
            <Company/>
            <Webinar/>
            <Touch/>
        </div>
    )
}