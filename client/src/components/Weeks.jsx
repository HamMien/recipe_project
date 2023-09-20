import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { weeksLecipe } from '../data/data'
import { BsFillHeartFill } from 'react-icons/bs';



const Weeks = () => {
  return (
    <>
    
        {/* <div className="max-w-[1540px] mx-auto"> */}
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>한 주 레시피</h1>
        <div className='overflow-hidden lg:flex-max-w-[1520px] m-auto py-2 px-2'>
            <Splide
                options={{
                    perPage: 4,
                    gap: "1.5rem",
                    drag: "free",
                    arrow: false,

                }}
            >
            { weeksLecipe.map((item) => {
                const price = item.price.toLocaleString();
                return (
                <SplideSlide key={item.id}>
                    <div className='relative 
                                    bg-indigo-200 
                                    mb-10 
                                    max-w-sm 
                                    rounded 
                                    overflow-hidden
                                    shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
                                    drop-shadow-md
                                    transition
                                    duration-500
                                    ease-in-out
                                    hover:drop-shadow-xl
                                    '
                    >
                            <img className='w-full' src={item.img} alt={item.id} />
                            <div className="px-6 py-5">
                                <p className='px-2 pt-2 font-bold text-xl mb-2 truncate'>
                                    {item.title}
                                </p>
                                <p className="px-2 pb-5">{price}원</p>
                                <div className="flex justify-between align-middle">
                            <button class="bg-gray-600 
                                            hover:bg-gray-900 
                                            text-white 
                                            font-bold
                                            py-2 px-4 border
                                            mr-5 border-gray-900 rounded">
                            레시피 보기
                            </button> 
                            <button class="bg-gray-600 
                                            hover:bg-gray-900 
                                            text-white 
                                            font-bold
                                            py-2 px-4 border border-gray-900 rounded">
                            장바구니
                            </button> 
                            <a href="#"><BsFillHeartFill className="text-2xl text-orange-600" style={{"marginTop":"10px"}} /></a>
                        </div>
                    </div>

                </div>
                </SplideSlide>
                )
                })}
            </Splide>
        </div>

    </>
  )
}

export default Weeks