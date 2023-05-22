import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const useFetchGIfs = (category) => {
  
  const[images, setImages]=useState([]);
  const[isLoading, setIsLoading]=useState([]);

  const getImages = async () => {
    const newImage = await getGifs(category);
    setImages(newImage);
    !setIsLoading();
  }
  
  useEffect(()=>{    
    getImages();
  }, []);

  return {
    images,
    isLoading,

  }
}


