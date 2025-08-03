import { useEffect, useRef, useState } from "react";
import { FaBars, FaClosedCaptioning, FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Headerpage(){
  const [menu , setMenu] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  
  const categories = [
    { name: "Insights", icon: <svg className="bg-gradient-to-r from-green-500 to-white bg-clip-text text-transparent" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"/></svg> },
    { name: "Innovations", icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg> },
    { name: "Applications", icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z"/></svg> },
    { name: "Ethics", icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M80-120v-80h360v-447q-26-9-45-28t-28-45H240l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280h-80v-80h247q12-35 43-57.5t70-22.5q39 0 70 22.5t43 57.5h247v80h-80l120 280q0 50-41 85t-99 35q-58 0-99-35t-41-85l120-280H593q-9 26-28 45t-45 28v447h360v80H80Zm585-320h150l-75-174-75 174Zm-520 0h150l-75-174-75 174Zm335-280q17 0 28.5-11.5T520-760q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760q0 17 11.5 28.5T480-720Z"/></svg> },
    { name: "Agents", icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-120v-200q0-33 23.5-56.5T240-400h480q33 0 56.5 23.5T800-320v200H160Zm200-320q-83 0-141.5-58.5T160-640q0-83 58.5-141.5T360-840h240q83 0 141.5 58.5T800-640q0 83-58.5 141.5T600-440H360ZM240-200h480v-120H240v120Zm120-320h240q50 0 85-35t35-85q0-50-35-85t-85-35H360q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0-80q17 0 28.5-11.5T400-640q0-17-11.5-28.5T360-680q-17 0-28.5 11.5T320-640q0 17 11.5 28.5T360-600Zm240 0q17 0 28.5-11.5T640-640q0-17-11.5-28.5T600-680q-17 0-28.5 11.5T560-640q0 17 11.5 28.5T600-600ZM480-200Zm0-440Z"/></svg> }
  ];
  const categories1 = [
    { name: "About", icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg> },
    { name: "Contact", icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg> },
    { name: "Privacy Policy", icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m438-338 226-226-57-57-169 169-84-84-57 57 141 141Zm42 258q-139-35-229.5-159.5T160-516v-244l320-120 320 120v244q0 152-90.5 276.5T480-80Zm0-84q104-33 172-132t68-220v-189l-240-90-240 90v189q0 121 68 220t172 132Zm0-316Z"/></svg> },
    { name: "Terms of Service", icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/></svg> },
  ]

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menu && width < 1030) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu , width]);

  return(
    <>
      <div className="bg-transparent h-[70px] w-full border-b border-white/60 flex justify-center items-center">
        <div className="flex flex-row w-[1309px] justify-between">
          <div className="flex items-center pl-[6px]">
              <img className="w-[30px] mx-1" src="svg/logo.svg"/>
              <div className="font-bold text-transparent text-[20px] default-gradient-text">AUTOAI</div>
          </div>
          <div onClick={() => setMenu(!menu)} className="hidden text-[20px] cursor-pointer max-nav-lg:flex items-center pr-[10px] text-white">
            {
              menu ? (<FaTimes/>) : (<FaBars/>)
            }
          </div>
          <div className="flex flex-row items-center gap-10 max-nav-lg:hidden">
              {['Insights','Innovations','Applications','Ethics','Agents'].map((item)=>(
                  <div key={item} className="gradient-hover-text">
                      {item}
                  </div>
              ))}
          </div>
          <div className="flex flex-row items-center gap-3 pr-1 max-nav-lg:hidden">
              <div className="h-[35px] w-[70px] p-[2px] flex justify-center items-center rounded-md hover:opacity-80 default-gradient">
                  <Link to={"/login"} className="h-[33px] w-[70px] flex justify-center items-center hover: rounded-md cursor-pointer text-white text-[14px] bg-black">
                      Log In
                  </Link>
              </div>
              <Link to={"/signin"} className="h-[35px] w-[70px] rounded-md flex justify-center items-center text-white text-[14px] hover:opacity-80 cursor-pointer default-gradient">
                  Sign In
              </Link>
          </div>
        </div>
        
        <div className={`
          fixed left-0 bottom-0 w-full h-[790px] bg-black z-40
          transform ${menu ? "translate-y-0" : "translate-y-full"}
          transition-transform duration-300 ease-in-out
          flex-col px-5 gap-6 
          max-nav-lg:flex hidden
        `}
         style={{ pointerEvents: menu ? "auto" : "none" }}
        >
          <div className="flex flex-col pt-3 gap-5">
            <div className="text-[16px] font-medium text-white">Features</div>
            {categories.map(({name , icon}) => (
              <div key={name} className="flex flex-row gap-3">
                <div className="flex text-[20px] items-center">
                  {icon}
                </div>
                <div key={name} style={{fontSize: '16px'}} className="flex items-center text-white">
                  {name}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col pt-3 gap-5">
            <div className="text-[16px] font-medium text-white">Information & Legal</div>
            {categories1.map(({name , icon}) => (
              <div key={name} className="flex flex-row gap-3">
                <div className="flex text-[20px] text-white items-center">
                  {icon}
                </div>
                <div key={name} style={{fontSize: '16px'}} className="flex text-white items-center">
                  {name}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 mt-6 max-[320px]:flex-col">
            <div className="h-[35px] w-[70px] max-[320px]:w-full rounded-md flex justify-center items-center text-white text-[14px] hover:opacity-80 cursor-pointer default-gradient">
              Log In
            </div>
            <div className="h-[35px] w-[70px] max-[320px]:w-full rounded-md flex justify-center items-center text-white text-[14px] hover:opacity-80 cursor-pointer default-gradient">
              Sign In
            </div>
          </div>
        </div>
      </div>
    </>
  )
}