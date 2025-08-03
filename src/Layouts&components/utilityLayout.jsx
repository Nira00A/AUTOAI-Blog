import { Outlet , useLocation} from "react-router-dom";
import UtilityHeader from "./utilityHeader";
import { FaBug } from "react-icons/fa";

export default function UtilityLayout(){
    return(
        <div className="w-full flex flex-col mt-10 gap-5 mx-auto max-w-7xl px-5">
            <div className="w-full flex justify-between">
                <UtilityHeader />
            </div>

            <div className="mt-5">
                <Outlet />
            </div>
        </div>
    )
}