
const MenuCard = () =>{
    return (
        <div className=" border h-[350px] w-[350px] flex flex-col  m-[50px] bg-white rounded-[20px]" >
            <div className="h-[60%] w-full  " >
                <img className=" h-full w-full opacity-70 rounded-[20px] bg-contain " src="./img/868525.jpg" alt=""/>
            </div>
            <div className=" h-[40%] w-full flex flex-col items-center justify-around pb-[10px] " >
                <h1 className="text-[23px] font-bold ">Product Title</h1>
                <p className="text-[20px] font-bold " >Price:  $9.50</p>
                <div className="bg-[#F85A02] h-[40px] w-[150px] flex justify-center items-center rounded-[20px] text-white">
                    Order Now
                </div>
            </div>
        </div>
    )
}
export default MenuCard