import { React,useState ,createContext} from "react";
import Advanced from "./Advanced";
import Result from "./Result";
export const showingContext = createContext(null) 
export default function Filter()
{
    const [show,setShow] = useState(false)
    return(
        <div>
            <div className="px-5 sm:px-6 md:px-10 xl:px-24 mx-auto pb-[40px] flex gap-8">
                <showingContext.Provider value={{show,setShow}}>
                    <Result/>
                    <Advanced/>
                </showingContext.Provider>
            </div>
        </div>
    )
}