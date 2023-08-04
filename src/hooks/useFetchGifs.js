import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

export default function useFetchGifs(category) {
    const [isLoading, setIsLoading] = useState(true)
    const [images, setImages] = useState([])
    
    const getImages = async () => {
        const images = await getGifs(category)
        setImages(images)
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    },[])

    
    return {
        images, 
        isLoading
    };
}
