const Navbar = () =>{
    return(
        <div className="Navbar lg:h-[15%] lg:flex w-full font-bold h-[50%]  ">
            <div className=" lg:h-full lg:w-[25%] lg:justify-center flex  items-center text-[24px] font-bold pl-[20px]w-full h-[30%]" >
                <img className=" h-[100px] w-[100px] " src="./img/chef1.png" alt=""/>
                <a href="/" className="cursor-pointer">Khana <p className=" text-[#F85A02]  " >Khajana</p></a>
                
            </div>
            
            <div className=" lg:h-full lg:w-[50%] lg:flex lg:justify-center lg:items-center w-full h-[50%] text-[18px] ">
                <div className="h-full w-full lg:flex lg:flex-row justify-around items-center flex flex-col mb-[20px] lg:mb-0" >
                    
                    <a className="hover:text-[#F85A02] mt-[10px] lg:mt-0" href="/">Home</a>
                    <a className="hover:text-[#F85A02] mt-[10px] lg:mt-0" href="/">About</a>
                    <a className="hover:text-[#F85A02] mt-[10px] lg:mt-0" href="/">Products</a>
                    <a className="hover:text-[#F85A02] mt-[10px] lg:mt-0" href="/">Contact Us</a>
                </div>
            </div>
            <div className="lg:h-full lg:w-[25%] h-[20%] w-full flex lg:justify-center lg:items-center text-[18px] mt-[10px] lg:mt-0 ">
                <div className="flex h-full w-full lg:justify-center items-center justify-around ">
                    <a className="  flex h-[40px] w-[110px] rounded-[20px] justify-center items-center bg-[#F85A02] text-white hover:text-[#F85A02] hover:bg-white lg:text-[#000000] lg:flex lg:bg-white" href="/">Sign in</a>

                    <div className="flex h-[40px] w-[110px] rounded-[20px] justify-center items-center bg-[#F85A02] text-white hover:text-[#F85A02] hover:bg-white" >
                        <a  href="/">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar