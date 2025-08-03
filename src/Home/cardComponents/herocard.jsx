export default function HeroCard({scale}){
    return (
        <div className={`h-[400px] w-[600px] scale-[${scale}] bg-white rounded-md`}>
            <img className="w-full h-full object-contain transition-transform duration-500" src="img1.png"/>
        </div>
    )
}