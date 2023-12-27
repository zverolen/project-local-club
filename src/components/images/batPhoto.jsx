import PropTypes from 'prop-types'

export default function BatPhoto({batImage}) {
  return (
    <div>
       <img
        sizes="(max-width: 600px) 23vw, (max-width: 1440px) 13vw, 188px"
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