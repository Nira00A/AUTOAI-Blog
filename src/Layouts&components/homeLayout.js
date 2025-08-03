import { Outlet , useLocation} from "react-router-dom";
import Headerpage from "./header";
import Footer from "./footer";

export default function HomepageLayout(){
    const user = true
    const { pathname } = useLocation()

    return(
        <div className="flex flex-col w-full h-full">
            <div>
                <div className={pathname === '/' ? `sticky top-0 z-10  backdrop-blur-2xl` : ''}>
                    <Headerpage/>
                </div>

                <div>
                    <div>
                        <Outlet/>
                    </div>
                </div>

                <div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}