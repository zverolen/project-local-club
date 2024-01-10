import PropTypes from 'prop-types'

export default function Signup({ handleDemo, isClicked }) {
  return (
    <section className="signup" >
      <div>
        <h2>Join our next flight!</h2>
        <div>
          <div>
            <h3 className="visually-hidden">Date, Time and Place</h3>
            <p>Sunday, October, 2 11:30 PM</p>
            <p>Harbour National Park, at the Horny Lighthouse</p>
          </div>
          <div>
            
            <form label="Sign up form" action="" hidden={ isClicked }>
            <p className="visually-hidden">Please, enter the information about you to take part in our next flight</p>
              <div>
                <label htmlFor="singup-name">How we can call you</label>
                <input id="singup-name" name="name" type="text" />
              </div>
              <div>
                <label htmlFor="singup-email">Your email</label>
                <input id="singup-email" name="email" type="email" />
              </div>
              <p>We need to know the participants so no one is left behind.</p>
              <button type="button" id="js-signupButton" onClick={ handleDemo }>Count me in</button>
            </form>
            <div aria-live="polite">
              <div hidden={ !isClicked }>
                <p>DEVELOPER NOTE: THIS HIDES THE CTA LINK IN THE FOOTER.</p>
                <p>You are added to the next Night Flight event! We sent you an email with all details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Signup.propTypes = {
  handleDemo: PropTypes.func,
  isClicked: PropTypes.bool
}