import PropTypes from 'prop-types';
import getGifs from '../helpers/getGifs';
import { useEffect } from 'react';




export default function GifGrids({category}){
   
    useEffect(() => {
        getGifs(category)
            .then(imgs => console.log(imgs))
    },[])
   
    
    return (
        <>
            <h3>{category}</h3>

        </>
    )
}

GifGrids.propTypes = {
    category: PropTypes.string.isRequired
}

