const CategoryCard = (props) =>{
    
    return (
        <div className=" border h-[300px] w-[350px] flex flex-col  m-[50px] bg-white rounded-[20px]" >
            <div className="h-[70%] w-full  " >
                <img className=" h-full w-full opacity-70 rounded-[20px] bg-contain " src={props.image} alt=""/>
            </div>
            <div className=" h-[30%] w-full flex flex-col items-center justify-around pb-[10px]  text-[20px]" >
                
                <div className="bg-[#F85A02] h-[40px] w-[150px] flex justify-center items-center rounded-[20px] text-white">
                    {props.title}
                </div>
            </div>
        </div>
    )
}
export default CategoryCard