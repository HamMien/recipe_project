import React, { useState } from 'react'
import { BsFillHeartFill } from 'react-icons/bs';
import { HiArrowSmRight } from 'react-icons/hi'
import { recipeData } from '../data/data'

const Recipe = () => {
  const [foods, setFoods] = useState(recipeData);

  const category = (cat) => {
     setFoods(
        recipeData.filter((item) => {
            return item.category === cat;
        })
     );
  };

  return (
    <div className="max-w-[1540px] mx-auto my-12">
        <h1 className="text-orange-500 font-bold text-2xl text-center py-3">
            상품 목록
        </h1>

        {/** 카테고리 */}        
        <div className="flex flex-col mt-5 mb-3 lg:flex-row justify-center">
            <button 
                className="m-1 border-orange-700 text-white
                       bg-orange-700 
                       hover:bg-orange-100 
                       hover:text-orange-950
                       hover:border-orange-700"
                onClick={()=>setFoods(recipeData)}       
             >전체보기</button>  
            <button 
                className="m-1 border-orange-700 text-white
                       bg-orange-700 
                       hover:bg-orange-100 
                       hover:text-orange-950
                       hover:border-orange-700"
                onClick={()=>category("한식")}       
             >한식</button>  
             <button 
                className="m-1 border-orange-700 text-white
                       bg-orange-700 
                       hover:bg-orange-100 
                       hover:text-orange-950
                       hover:border-orange-700"
                onClick={()=>category("중식")}         
             >중식</button>  
                         <button 
                className="m-1 border-orange-700 text-white
                       bg-orange-700 
                       hover:bg-orange-100 
                       hover:text-orange-950
                       hover:border-orange-700"
                onClick={()=>category("일식")}        
             >일식</button>  
                         <button 
                className="m-1 border-orange-700 text-white
                       bg-orange-700 
                       hover:bg-orange-100 
                       hover:text-orange-950
                       hover:border-orange-700"
                onClick={()=>category("분식")} 
             >분식</button>                       
        </div>
        <div className="grid 
                        md:grid-cols-2 
                        sm:grid-cols-1 
                        lg:grid-cols-4 
                        gap-6 
                        py-4">
            {foods.map((item) => (
                <div key={item.id} 
                    className="group
                               border-none 
                               hover:scale-105 
                               duration-300
                               transition-all
                               relative
                               overflow-hidden
                ">
                 <img src={item.img} alt={item.name}
                      className="w-full 
                                 h-[250px] 
                                 object-cover 
                                 rounded-lg
                                 transition-all
                                 duration-300
                                 hover:brightness-50" />
                 <a href="#" className="
                                 bg-white
                                 bg-opacity-75
                                 rounded-full
                                 border-orange-700
                                 w-[40px] h-[40px] 
                                 flex justify-center
                                 items-center
                                 text-orange-700
                                 text-xl
                                 absolute
                                 top-4 right-4" 
                 ><BsFillHeartFill /></a>  
                 <div className="
                          absolute                           
                          bg-black
                          text-white 
                          py-5 px-5
                          -top-36
                          left-1/2
                          -translate-x-1/2
                          bg-opacity-0
                          group-hover:bg-opacity-70
                          group-hover:top-16
                          h-7/12
                          w-9/12
                          rounded-lg
                          transition-all duration-500
                          ">
                    <p className="text-center bold">
                      {item.price.toLocaleString()}원
                    </p>
                    <div className="py-2 text-center flex justify-between color-white text-xl">
                       <a href="#">내용보기</a>
                       <a href="#"><HiArrowSmRight /></a>
                    </div>
                    <div className="flex m-auto w-w-11/12 justify-between">
                        <button className="bg-orange-500 hover:bg-orange-700 font-bold py-2 px-4 rounded">
                           장바구니 
                        </button>
                        <button className="bg-orange-500 hover:bg-orange-700 font-bold py-2 px-4 rounded">
                           바로주문
                        </button>                        
                    </div>
                 </div>
                 <div className="flex pt-2 pb-6 px-2">
                    <p className="font-bold">{item.title}</p>
                 </div>
                </div>    
                     
            ))}               
            
        </div>
    </div>
  )
}

export default Recipe