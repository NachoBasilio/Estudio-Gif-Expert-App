import PropTypes from 'prop-types';

import GifItem from '../components/GifItem';
import useFetchGifs from '../hooks/useFetchGifs';


export default function GifGrids({category}){

    const {images, isLoading} = useFetchGifs(category)
    

    return (
        <>
            <h3>{category}</h3>

            {isLoading && <h2>Loading...</h2>}
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

