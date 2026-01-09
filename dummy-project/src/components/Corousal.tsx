import { useEffect, useState } from "react";


const Corousal = () => {
   const images = [
    'https://wallpapercave.com/wp/wp1886666.jpg',
    'https://wallpapercave.com/wp/wp13396568.jpg',
    'https://wallpapercave.com/wp/wp13557041.jpg',
    'https://wallpapercave.com/wp/wp12356580.jpg',
    'https://wallpapercave.com/wp/wp12412610.jpg',
    'https://wallpapercave.com/wp/wp7945992.jpg'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () =>{
    
    if(activeIndex === 0){
      setActiveIndex(images.length - 1)
      return
    }
    setActiveIndex(activeIndex - 1);
  }

  const handleNextClick = () => {

    if(activeIndex === images.length - 1){
      setActiveIndex(0)
      return
    }
   setActiveIndex(activeIndex + 1)
  }

  useEffect(() => {
  const interval = setInterval(() => {
      handleNextClick()
    }, 3000);

    return() =>{
      clearInterval(interval)
    }
  }, [activeIndex]);

  return (
    <div>
      <div className="flex items-center gap-8">

         <div className="border bg-blue-600 px-3 py-1 text-white font-semibold rounded-lg">
            <button onClick={handlePrevClick}>Prev</button>
        </div>
        <div>
            {images.map((image, index) =>{
              // console.log('[INDEX] : ', index);
              return  (
                <img className={`${index === activeIndex ? 'block' : 'hidden'} w-[500px]`} key={index} src={image} alt={`Image ${index}`} />
            )
            })}

        </div>
        <div className="border bg-blue-600 px-3 py-1 text-white font-semibold rounded-lg">
          <button onClick={handleNextClick}>Next</button>
          </div>

      </div>
       

    </div>
  )
}

export default Corousal