import { useLocation , Outlet} from "react-router-dom";
import { CreateDraftHeader } from "../NewArticlePage/creativeDraft";
import AppHeader from "./appHeader";
import AppFooter from "./appFooter";

export default function AppLayout(){
    const {pathname} = useLocation()

    return(
        <div className="flex flex-col w-full h-max bg-neutral-900">
            <div>
                <AppHeader />
            </div>

            <div>
                <div className="min-h-screen">
                    <Outlet />
                </div>
            </div>

            <div className="py-10">
                <AppFooter />
            </div>
        </div>
    )
}