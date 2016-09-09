const React = require('react')
const { render } = require('react-dom')

class ActionButton extends React.Component {
  render () {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    )
  }
}


module.exports = ActionButton
