import React from 'react'

const Delivery = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
        <h3 className="text-orange-500 text-2xl text-center">
           배달앱을 다운 받으시면 
             <span className="font-bold ms-3">배달이 무료</span>    
        </h3> 
        <div className="
                  max-w-[1240px] 
                  mx-auto 
                  grid 
                  md:grid-cols-2">
            <img src="images/delivery.jpg" 
              className="w-[550px] mx-auto my-4" />
        
            <div className="flex flex-col justify-center">
                 <p className="text-[#00df9a] font-bold">GET A APP</p>
                 <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    매 일 다른 레시피 요리 제공
                 </h1>
                 <p className="mt-2 py-2">
                    원대하고, 돋고, 굳세게 오직 갑 같이, 하여도 열매를 것이다. 예가 이상을 대중을 따뜻한 것이다.보라, 뼈 품었기 끓는 되는 이것이다. 보내는 행복스럽고 오아이스도 생생하며, 사랑의 찾아 있을 듣는다. 위하여, 하였으며, 풀이 보라. 힘차게 새 길을 그들에게 같은 튼튼하며, 아름다우냐? 할지니, 너의 일월과 칼이다.
                 </p>
                 <p className="py-2">   
                    아름답고 전인 풀이 놀이 남는 뿐이다. 사랑의 천고에 고동을 하였으며, 자신과 새 생명을 부패뿐이다. 길을 갑 능히 온갖 가치를 영락과 있는가? 과실이 이상을 인류의 가슴에 같이, 위하여 인간에 것이다. 동력은 품었기 청춘의 가장 긴지라 봄바람이다. 사람은 반짝이는 봄날의 따뜻한 얼마나 아름답고 못하다 내는 많이 끓는다. 설산에서 없으면 그들에게 시들어 사랑의 생명을 듣는다.
                 </p>
                 <button className="bg-black 
                                    text-[#00df9a]
                                    w-[200px]
                                    rounded-md
                                    font-medium
                                    my-6 mx-auto md:mx-0 py-3"
                 >Get Download</button>                   
            </div>
        </div>
    </div>
  )
}

export default Delivery