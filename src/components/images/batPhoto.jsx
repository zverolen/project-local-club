import PropTypes from 'prop-types'

export default function BatPhoto({batImage}) {
  return (
    <div>
       <img
        sizes="(max-width: calc(600 / 16 * 1rem)) 23vw, (max-width: calc(1440 / 16 * 1rem)) 13vw, 11.75rem"
        srcSet={`./images/${batImage.imageToken}_74.jpg 74w,
                ./images/${batImage.imageToken}_376.jpg 376w`}
        src={`./images/${batImage.imageToken}_74.jpg`}
        alt={batImage.imageToken}
      />
    </div>
  )
}

BatPhoto.propTypes = {
  batImage: PropTypes.shape({
    id: PropTypes.number,
    imageToken: PropTypes.string
  })
}