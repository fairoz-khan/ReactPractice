import React, { useState, useEffect } from 'react';
import './App.css';
import { ImageLinks } from './Constants/links'

function App() {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const setPreviousImage = () => {
    activeImageIndex === 0 ? setActiveImageIndex(ImageLinks.length - 1) : setActiveImageIndex(activeImageIndex - 1);
  }

  const setNextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % ImageLinks.length);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setNextImage();
    }, 3000);

    return () => {
      clearTimeout(timeOut);
    }
  }, [activeImageIndex]);

  return (
    <div className="text-center">
      <h1>Hello World!</h1>
      <div className="inline-flex justify-center">
        <button className='m-5' onClick={setPreviousImage}>
          Previous
        </button>
        <img
          src={ImageLinks[activeImageIndex]}
          alt=""
          className='h-[500px] w-[700px]'
        />
        <button className='m-5' onClick={setNextImage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
