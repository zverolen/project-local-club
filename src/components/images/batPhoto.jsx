import PropTypes from 'prop-types'

export default function BatPhoto() {
  return (
    <div>

    </div>
  )
}

BatPhoto.propTypes = {
  batImage: PropTypes.shape({
    id: PropTypes.number,
    imageToken: PropTypes.string
  })
}