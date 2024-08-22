import React from 'react'
import Carousel from './components/Carousel';

const App = () => {
  const images = [
    'https://wallpapercave.com/wp/wp1886666.jpg',
    'https://wallpapercave.com/wp/wp13396568.jpg',
    'https://wallpapercave.com/wp/wp13557041.jpg',
    'https://wallpapercave.com/wp/wp12356580.jpg',
    'https://wallpapercave.com/wp/wp12412610.jpg',
    'https://wallpapercave.com/wp/wp7945992.jpg'
  ];
  return (
    <div className='app h-screen w-full grid place-items-center  bg-blue-400'>
      <Carousel images={images} />
    </div>
  )
}

export default App