import PropTypes from 'prop-types'

export default function Footer({ isLinkHidden }) {
  return (
    <footer>
      <div>
        <a id="js-ctaLink" href="#signup" hidden={isLinkHidden}>Join Night Flight!</a>
      </div>
      <div>
        <div>
          <h2>Photo Credit</h2>
          <a href="https://unsplash.com/photos/Z00K8iSWpNc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Skyscrapers at night</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/fgy7tXxfqhE?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">The Ferris Wheel and park</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/vAAuJAsm59A?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">The bridge seen from the water</a>  
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/YoEMMc-fnCs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">The night city</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/8H0A2BVdRJM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Tram at night</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/jJF-zlkXTmU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Sydney Opera House and Sydney Harbour from a distance</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/_l0tBaVBx1g?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Sydney Buildings silhouette at the dusk</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/ZsH1wHv2iTU?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Silhouette of Sydney buildings at dusk</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/RK5gtzZawSc?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Sydney Opera House</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/FUh6nK3s0po?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Sydney Harbour Bridge from below</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/einIuvtZen4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Sydney Opera House</a>
          <span aria-hidden="true">|</span>
          <a href="https://unsplash.com/photos/Ev7rewOS5vo?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink">Sydney Opera House adorned with projected ornaments</a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  isLinkHidden: PropTypes.bool
}