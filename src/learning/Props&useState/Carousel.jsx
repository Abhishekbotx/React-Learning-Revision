import { useState, useRef, useEffect } from 'react';
 
// Data
import data from './data.json';

const Carousel = () => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const carouselchild = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      // console.log(carousel)
      // console.log(carousel.current)
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&//not so important to check init
      (carouselchild.current.offsetWidth+20) * currentIndex <= maxScrollWidth.current
    ) {
      // console.log(carousel)
      // console.log(carousel.current)
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === 'prev') {
      return currentIndex <= 0;
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        (carouselchild.current.offsetWidth+20) * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = (carouselchild.current.offsetWidth+20 ) * currentIndex;

      

      // console.log('currentcourseloffsetwidth:',carousel.current.offsetWidth)
      console.log('currentcourselchild:',carouselchild.current.offsetWidth)
      // console.log('scrollLeft:',carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex)
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
      console.log('max:',maxScrollWidth)
      console.log('scrollwidth:',carousel.current.scrollWidth)
  }, []);

  

  return (
    <div className="carousel py-12 mx-auto">
      <h2 className="text-4xl leading-8 font-semibold text-center mb-12 text-slate-700">
        Carousel
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-slate-600 text-white w-10 bg-red-300 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-slate-600 text-white w-10 h-full text-center bg-red-300 opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative text-white flex gap-4  overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                ref={carouselchild}
                className="carousel-item text-center rounded-lg overflow-hidden shrink-0  relative  w-72 h-64 snap-start"
              >
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-blue-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

/*
Logic:
1.first we will create 2 hooks of useRef(0) and useRef(null) 
  as initialising 0 for the maxscrollwidth and 'null' for the carousel reference
  --we use null when the element is not rendered initially and when rendered 
  it will be assigned then

2.then coming to the useEffect there are two    
  The first: It runs when the the currentIndex is changed
  •Then we will check if the corausel ref itself is not null na,
  •Then we will check the current property containing value of the ref,
   or reference to Dom(or other value) is not null na  
  • Then it will return carousel.current.scrollLeft this tels the element is  
    scrolled howmuch pixels from the leftmostpoint here we are doing 
    by multiplying the carousel.current.offsetWidth*currentIndex 
    means the current view width of the carousel container * the index 

    🍁offsetWidth--> It represents the width of the element as it's rendered
      on the screen, including any padding and border width,
      but not any horizontal scrolling or overflowed content.

    🍁scrollWidth: This property returns the entire width of 
      an element's content, even if it's not all visible within
      the element's viewport due to overflow

  The second useEffect:It will run only Once to calculate the 
    maxScrollWidth and in this the maxscroll width will be equal to the    
    scrollwidth of the carousel - offseWidth of carousel 
    🌟Imp:and if will not substarct the offsetwidth woh end pe jane ke baad bhi 
    ekbaar jayega kyuki woh jana chahega carousel ke scroll-width tk


*/