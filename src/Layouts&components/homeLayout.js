import { Outlet } from "react-router-dom";
import Headerpage from "./header";
import Footer from "./footer";

export default function HomepageLayout(){
    return(
        <div className="flex flex-col w-full h-full">
            <div>
                <Headerpage/>
            </div>

            <div>
                <Outlet/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}