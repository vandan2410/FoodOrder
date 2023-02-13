import {useState} from 'react'

const Navbar = () =>{
    let[open,setOpen]=useState(false);
    return(
        <div className="Navbar font-bold md:w-full min-h-[15%]  md:m-0 md:p-0 md:flex  w-full flex flex-col md:flex-row md:justify-center md:items-center" >
            <div className="md:h-full md:w-[20%]  md:flex md:items-center md:m-0 md:p-0 h-[30%] w-full flex items-center  justify-between" >
                <div className="md:h-full md:w-[50%] flex items-center">
                    <img className=" h-[100px] w-[100px] md:m-0 md:p-0 pt-[10px] " src="./img/chef1.png" alt=""/>
                    <a href="/" className="cursor-pointer text-[20px] text-center">Khana <p className=" text-[#F85A02]  " >Khajana</p></a>
                </div>
                <div onClick={()=>setOpen(!open)} className="h-[50px] w-[50px] md:hidden text-4xl flex items-center">
                
                <span ><ion-icon name={open ? 'close' : 'menu'}></ion-icon></span>
                </div>
            </div> 
            
            <div  className={`h-[70%] w-full  flex-col  md:h-full md:w-[80%] md:flex md:flex-row  md:text-[18px]   
                ${open ? 'block' : 'hidden'} md:justify-center md:items-center` }>
                
                <div className="w-full h-[65%] flex flex-col justify-around items-center text-[18px] md:h-full md:w-[75%] md:flex  md:justify-around md:items-center md:flex-row " >
                    <a href="/" className="hover:text-[#F85A02]" >Home</a>
                    <a href="/" className="hover:text-[#F85A02]" >Category</a>
                    <a href="/" className="hover:text-[#F85A02]" >Products</a>
                    <a href="/" className="hover:text-[#F85A02]" >Contact Us</a>
                </div>
                
                <div className=" w-full flex justify-around items-center md:h-full md:w-[25%] md:flex md:flex-col lg:justify-center md:items-center lg:flex-row lg:pr-[10px] h-[35%] md:justify-around " >
                    <div className="flex md:h-[35px] md:w-[90px] rounded-[20px] justify-center items-center bg-[#F85A02] text-white hover:text-[#F85A02] hover:bg-white  lg:bg-white lg:text-black h-[40px] w-[110px] mr-[10px] " >
                        <a  href="/">Sign in</a>
                    </div>
                    <div className="flex md:h-[35px] md:w-[90px] rounded-[20px] justify-center items-center bg-[#F85A02] text-white hover:text-[#F85A02] hover:bg-white lg:h-[40px] lg:w-[110px] h-[40px] w-[110px]" >
                        <a  href="/">Sign up</a>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Navbar