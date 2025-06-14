export default function Headerpage(){
  return(
    <div className="bg-transparent h-[70px] w-full border-b border-white/60 flex items-center">
      <div className="flex flex-row w-full px-[220px] justify-between">
        <div className="flex items-center">
            <img className="w-[30px]" src="svg/logo.svg"/>
            <div className="font-bold text-transparent text-[20px] default-gradient-text">AUTOAI</div>
        </div>
        <div className="flex flex-row items-center gap-10">
            {['Insights','Innovations','Applications','Ethics','Agents'].map((item)=>(
                <div className="gradient-hover-text">
                    {item}
                </div>
            ))}
        </div>
        <div className="flex flex-row items-center gap-3">
            <div className="h-[35px] w-[70px] p-[2px] flex justify-center items-center rounded-md hover:opacity-80 up-hover default-gradient">
                <div className="h-[33px] w-[70px] flex justify-center items-center hover: rounded-md cursor-pointer text-white text-[14px] bg-black">
                    Log In
                </div>
            </div>
            <div className="h-[35px] w-[70px] rounded-md flex justify-center items-center text-white text-[14px] hover:opacity-80 cursor-pointer up-hover default-gradient">
                Sign In
            </div>
        </div>
      </div>
    </div>

  )
}