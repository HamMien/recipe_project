import React, { useState, useEffect } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { RxDotFilled } from 'react-icons/rx';



const Slide = () => {
    const sliders = [
        {url:'./images/1.jpg'},
        {url:'./images/2.jpg'},
        {url:'./images/3.jpg'},
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const prevSlider = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? sliders.length -1: currentIndex -1;
        setCurrentIndex(newIndex);
    }
    const nextSlider = () => {
        const isLastSlide = currentIndex === sliders.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    const moveSlider = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    useEffect(() => {
        setTimeout(nextSlider, 5000);
        console.log("리랜더링");
    }, [currentIndex]);


  return (
    <div className='max-w-[1540px] 
                    h-[500px]
                    w-full 
                    m-auto 
                    py-4 
                    px-4
                    relative
                    group'>

    <div className='w-full h-full 
                    rounded-2xl bg-center 
                    bg-cover duration-300'
            style={{backgroundImage: `url(${sliders[currentIndex].url})`}}
    >
    </div>
    <div className="hidden 
                    group-hover:block 
                    absolute top-[50%]
                    -translate-x-0
                    translate-y-[50%]
                    left-5 text-2xl rounded-full
                    p-2 bg-orange-700 text-white cursor-pointer"
    >
        <HiChevronLeft onClick={prevSlider} />            
    </div>

    <div className="hidden 
                    group-hover:block 
                    absolute top-[50%]
                    -translate-x-0
                    translate-y-[50%]
                    right-5 text-2xl rounded-full
                    p-2 bg-orange-700 text-white cursor-pointer"
    >
        <HiChevronRight onClick={nextSlider} />          
    </div>
    <div className='flex top-4 justify-center py-2'>
        {
            sliders.map((sliderItem, sliderIndex) => (
                <div
                    key ={sliderIndex}
                    className='text-2xl cursor-pointer'
                    onClick={()=>moveSlider(sliderIndex)}
                ><RxDotFilled /></div>
            ))
        }
    </div>    

</div>
  )
}

export default Slide