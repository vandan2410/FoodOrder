const Navbar = () =>{
    return(
        <div className="Navbar h-[15%] w-full lg:flex font-bold">
            <div className=" h-full w-[25%] flex justify-center items-center text-[24px] font-bold " >
                <img className=" h-[100px] w-[100px] " src="./img/chef1.png" alt=""/>
                <a href="/" className="cursor-pointer">Khana <p className=" text-[#F85A02]  " >Khajana</p></a>
            </div>
            <div className=" h-full w-[50%] lg:flex lg:justify-center lg:items-center text-[18px] ">
                <div className="h-full w-full lg:flex lg:flex-row lg:justify-around lg:items-center sm:flex sm:flex-col sm:m-[20px] " >
                    
                    <a className="hover:text-[#F85A02] sm:mt-[10px] " href="/">Home</a>
                    <a className="hover:text-[#F85A02] sm:mt-[10px] " href="/">About</a>
                    <a className="hover:text-[#F85A02] sm:mt-[10px] " href="/">Products</a>
                    <a className="hover:text-[#F85A02] sm:mt-[10px] " href="/">Contact Us</a>
                </div>
            </div>
            <div className="h-full w-[25%] lg:flex justify-center items-center text-[18px]">
                <div className="lg:flex h-full w-full justify-center items-center ">
                    <a className=" m-[15px] " href="/">Sign in</a>
                    <div className="flex h-[40px] w-[110px] rounded-[20px] justify-center items-center bg-[#F85A02] text-white hover:text-[#F85A02] hover:bg-white" >
                        <a  href="/">Sign up</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar