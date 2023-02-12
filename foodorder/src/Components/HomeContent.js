

const HomeContent = () =>{
    return(
        <div className=" home min-h-[85%] w-full flex font-bold items-center justify-center " >
            <div className=" h-full w-[50%]  flex flex-col  font-bold text-[18px]">
                <div className="h-[37%] w-full  ">
                    <img className="h-[250px] opacity-40 pl-[40px] " src="./img/cu2.png" alt=""/>
                </div>
                <div className="h-[25%] w-full " >
                    <p className=" text-[50px] font-bold md:pl-[60px] ">"Savor the flavor, </p>
                    <p className=" text-[50px] font-bold text-[#F85A02] md:pl-[60px]">indulge in the experience."</p>
                </div>
                <div className="h-[38%] w-full flex justify-end " >
                <img className="h-[225px] opacity-40 pl-[40px] " src="./img/cu3.png" alt=""/>
                </div>
            </div>
           <div className="md:h-full md:w-[50%] md:flex md:items-center md:justify-center hidden">
                <div className="  h-[70%] w-[45%] " >
                    <img className="h-full w-full rounded-[20px]" src="./img/hero2.webp" alt=""/>
                </div>
            
           </div> 
            
        </div>
        
    )
}


export default HomeContent