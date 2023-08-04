import PropTypes from 'prop-types';
import getGifs from '../helpers/getGifs';
import { useEffect, useState } from 'react';




export default function GifGrids({category}){
    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category)
            .then(imgs => setImages(imgs))
    },[])
   
    
    return (
        <>
            <h3>{category}</h3>
            <ol>
                {images.map(img =>
                    (<li key={img.id}>
                        <p>{img.title}</p>
                        <img src={img.url}  />
                    </li>
                    )
                )}
            </ol>
        </>
    )
}

GifGrids.propTypes = {
    category: PropTypes.string.isRequired
}

