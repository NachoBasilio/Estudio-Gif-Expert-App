import PropTypes from 'prop-types';

export default function GifGrids({category}) {
    const gifs = [1,2,3,4]
  return (
    <>
        <h3>{category}</h3>

        {
            gifs.map(gif =>
                <div key={gif}>{gif}</div>
            )
        }
    </>
  )
}

GifGrids.propTypes = {
    category: PropTypes.string.isRequired
}

