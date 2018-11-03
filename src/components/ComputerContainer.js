import * as React from 'react'
import Computer from './Computer'
import { connect } from 'react-redux'

class ComputerContainer extends React.Component {

  getComputerNames = () => {
    return Object.keys(this.state.data)
  }

  // selectComputer(id) {
  //   console.log('selected pizza:', id)
  // }

  // selectComputer = (id) => {
  //   this.props.dispatch({
  //     type: 'SELECT_COMPUTER',
  //     payload: id
  //   })
  // }

  render() {
    return <Computer computer={this.props.computer} />
  }
}

//Redux
const mapStateToProps = (state) => {
  return {
    computer: state.computer
  }
}

export default connect(mapStateToProps)(ComputerContainer)