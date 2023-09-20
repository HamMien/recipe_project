import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { weeksLecipe } from '../data/data'



const Weeks = () => {
  return (
    <>
    
        {/* <div className="max-w-full"></div> */}
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>한 주 레시피</h1>
        <div className=' lg:flex-max-w-[1520px] m-auto py-2 px-2'>
            <Splide
                options={{
                    perPage: 4,
                    gap: "0.5rem",
                    drag: "free",
                    arrow: false,

                }}
            >
            { weeksLecipe.map((item) => (
                <SplideSlide key={item.id}>
                    <div className='rounded-3xl 
                                    relative 
                                    shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]
                    '>
                        <div className="absolute 
                                        w-full h-full 
                                        bg-black/50 
                                        rounded-xl 
                                        text-white">
                        <p className="px-4 pt-6 font-bold text-2xl">
                            {item.title}
                        </p>
                        <p className='bg-sky-500 hover:bg-sky-700 ...
                                        w-[60px] h-[20px]
                                        text-center
                                        ml-1 mr-1
                                        text-sm'>{item.price}원</p>
                        <button className='bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 
                                            shadow-violet-500/50 ...
                                            ml-1 mr-1 font-bold text-sm
                                            w-[60px] h-[20px]
                                            '>장바구니</button>
                        </div>
                    </div>
                    <img src={item.img} alt={item.title} />
                    {/* </div> */}
                </SplideSlide>
            ))}
            </Splide>
        </div>

    </>
  )
}

export default Weeks