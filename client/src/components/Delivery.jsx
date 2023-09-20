import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-15 px-4'>
        <h3 className="text-orange-500 text-2xl text-center pt-3">
            배달앱을 다운 받으시면 
            <span className="font-bold block pt-2">배달이 무료</span>
        </h3>
        <div className="max-w-[1240px] 
                        max-auto 
                        grid 
                        md:grid-cols-2">
                    <img src="images/delivery.jpg" 
                        className='w-[500px] ma-auto my-4'/>
        
            <div className="flex flex-col justify-center">
                <p className='text-[#00df9a] font-bold'>GET A APP</p>
            
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    매주 다른 레시피 요리 제공
                </h1>
                <p className="mt-2 py-2">
                    불어 아름답고 없는 심장은 평화스러운 보이는 우는 약동하다. 하는 가는 얼마나 용감하고 황금시대의 부패뿐이다. 시들어 것이다.시들어 것이다.시들어 것이다.
                </p>
                <p className="py-2">
                    기관과 생생하며, 구하지 투명하되 풍부하게 붙잡아 미묘한 원대하고, 시들어 것이다.시들어 것이다.시들어 것이다.시들어 것이다.시들어 것이다.시들어 것이다.
                </p>
                <button className="bg-black 
                                    text-[#00df9a]
                                    w-[200px]
                                    rounded-md
                                    font-medium
                                    my-6 mx-auto md:mx-0 py-3
                                    "
                >Got Download</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery