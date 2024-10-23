import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    errorMsg1: false,
    errorMsg2: false,
    firstName: '',
    secondName: '',
    display: true,
  }

  handleFirstName = event => {
    if (event.target.value.length === 0) {
      this.setState({errorMsg1: true})
    } else {
      this.setState({errorMsg1: false, firstName: event.target.value})
    }
  }

  handleSecondName = event => {
    if (event.target.value.length === 0) {
      this.setState({errorMsg2: true})
    } else {
      this.setState({errorMsg2: false, secondName: event.target.value})
    }
  }

  onClick = () => {
    const {firstName, secondName} = this.state
    if (firstName.length === 0 && secondName.length === 0) {
      this.setState({errorMsg1: true, errorMsg2: true})
    } else if (firstName.length === 0) {
      this.setState({errorMsg1: true})
    } else if (secondName.length === 0) {
      this.setState({errorMsg2: true})
    } else {
      this.setState({display: false})
    }
  }

  onClick1 = () => {
    this.setState({display: true, firstName: '', secondName: ''})
  }

  render() {
    const {errorMsg1, errorMsg2, secondName, firstName, display} = this.state
    const newValue1 = errorMsg1 ? 'input' : ''
    const newValue2 = errorMsg2 ? 'input' : ''
    return (
      <div className="bg-container">
        <h1>Registration</h1>
        <div className="card-container">
          {display && (
            <>
              <div>
                <label htmlFor="first" className="label">
                  FIRST NAME
                </label>
                <br />
                <input
                  type="text"
                  id="first"
                  placeholder="First name"
                  onBlur={this.handleFirstName}
                  onChange={this.handleFirstName}
                  className={newValue1}
                  value={firstName}
                />
                {errorMsg1 && <p className="error">Required</p>}
              </div>
              <div className="div">
                <label htmlFor="second" className="label">
                  LAST NAME
                </label>
                <br />
                <input
                  type="text"
                  id="second"
                  placeholder="Last name"
                  className={newValue2}
                  onBlur={this.handleSecondName}
                  onChange={this.handleSecondName}
                  value={secondName}
                />
                {errorMsg2 && <p className="error">Required</p>}
              </div>
              <button type="button" className="button" onClick={this.onClick}>
                Submit
              </button>
            </>
          )}
          {!display && (
            <>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="img"
              />
              <p>Submitted Successfully</p>
              <button type="button" className="button1" onClick={this.onClick1}>
                Submit another response
              </button>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
