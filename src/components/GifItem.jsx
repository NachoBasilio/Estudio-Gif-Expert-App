import PropTypes from 'prop-types';

export default function GifItem({img}) {
  return (
    <div className='card'> 
        <p>{img.title}</p>
        <img src={img.url} alt={img.title} />
     
    </div>
  )
}

GifItem.propTypes = {
    img: PropTypes.object.isRequired
}