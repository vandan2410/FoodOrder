
import CategoryCard from './CategoryCard'
const Category = () =>{
    const Category = [{image:"./img/868525.jpg",title:'Sandwich'},
    {image:"./img/Chinese.jpg",title:'Chinese'},
    {image:"./img/SouthIndian.jpg",title:'South Indian'},
    {image:"./img/Shake.jpg",title:'Shake'},
    {image:"./img/Street.jpg",title:'Street Food'}]
    return (
        <div className="h-full w-full  bg-[#ECEAEA]" >
            <div className=' menu-bar text-[#F85A02] font-bold h-[] w-full  flex justify-center items-center text-[30px] pt-[120px] ' >
                <div className=' bg-white w-[200px] h-[50px] rounded-[20px] flex justify-center items-center ' >
                    Category
                </div>
            </div>
            <div className=' h-[88%] w-full flex flex-wrap justify-center items-center ' >
                <CategoryCard image={Category[0].image} title={Category[0].title} ></CategoryCard>
                <CategoryCard image={Category[1].image} title={Category[1].title} ></CategoryCard>
                <CategoryCard image={Category[2].image} title={Category[2].title} ></CategoryCard>
                <CategoryCard image={Category[3].image} title={Category[3].title} ></CategoryCard>
                <CategoryCard image={Category[4].image} title={Category[4].title} ></CategoryCard>
            </div>

        </div>
    )
}
export default Category