const React = require('react')
const { render } = require('react-dom')
const ActionButton = require('./ActionButton')
const Login = require('../login')

class App extends React.Component {
  handleLogin () {
    Login.loginWithGoogle()
  }

  render () {
    return (
      <ActionButton text="Sign In With Google" handleClick={this.handleLogin} />
    )
  }
}

render(<App />, document.getElementById('application'))
