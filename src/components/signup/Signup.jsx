import PropTypes from 'prop-types'

export default function Signup({ handleDemo, isClicked }) {
  return (
    <section className="signup" >
      <div>
        <h2 id="signup">Join our next flight!</h2>
        <div>
          <div>
            <h3 className="visually-hidden">Date, Time and Place</h3>
            <p>Sunday, October 2, 11:30 PM</p>
            <p>Harbour National Park, near the Horny Lighthouse</p>
          </div>
          <div>
            
            <form label="Sign up form" action="" hidden={ isClicked }>
            <p className="visually-hidden">Please, enter the information about yourself to take part in our next flight</p>
              <div>
                <label htmlFor="singup-name">How we can call you</label>
                <input id="singup-name" name="name" autoComplete="username" type="text" />
              </div>
              <div>
                <label htmlFor="singup-email">Your email</label>
                <input id="singup-email" name="email" autoComplete="email" type="email" />
              </div>
              
              <button type="button" id="js-signupButton" onClick={ handleDemo }>Count me in</button>
              <p>We need to know all participants so that no one is left behind.</p>
            </form>
            <div aria-live="polite">
              <div hidden={ !isClicked }>
                <p>DEVELOPER NOTE: THIS HIDES THE CTA LINK IN THE FOOTER.</p>
                <p>You have been added to the next Night Flight event! We have sent you an email with all the details.</p>
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