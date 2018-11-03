import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'

class App extends Component {
  state = {}

  getComputerNames = () => {
    return Object.keys(this.props.computer)
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  updateSelection = () => {
    this.setState({
      
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <label>
            <select onChange={this.updateSelection}>
              <option value="">-- pick a model --</option>
              <option value={this.getComputerNames()[0]}>{this.getComputerNames()[0]} ({this.props.computer["Ivel Z3"].year})  </option>
              <option value={this.getComputerNames()[1]}>{this.getComputerNames()[1]} ({this.props.computer["Bally Astrocade"].year}) </option>
              <option value={this.getComputerNames()[2]}>{this.getComputerNames()[2]} ({this.props.computer["Sord M200 Smart Home Computer"].year}) </option>
              <option value={this.getComputerNames()[3]}>{this.getComputerNames()[3]} ({this.props.computer["Commodore 64"].year}) </option>
            </select>
            </label>
            <input type="submit" value="Add"/>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    computer: state.computer
  }
}

export default connect(mapStateToProps)(App)
