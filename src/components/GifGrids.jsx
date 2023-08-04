import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import GifItem from '../components/GifItem';
import getGifs from '../helpers/getGifs';





export default function GifGrids({category}){
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs))
    },[])
   
    
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifItem key={img.id} img={img}></GifItem>  
                    ))
                }
            </div>
        </>
    )
}

GifGrids.propTypes = {
    category: PropTypes.string.isRequired
}

