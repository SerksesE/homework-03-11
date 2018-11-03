import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: {
      "Ivel Z3": {
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      "Bally Astrocade": {
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      "Sord M200 Smart Home Computer": {
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      "Commodore 64": {
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    }
  }

  getComputerNames = () => {
    return Object.keys(this.state.data)
  }

  updateSelection = () => {

  }

  render() {
    return (
      <div className="App">
        <form>
            <select onChange={this.updateSelection}>
              <option value="">-- pick a model --</option>
              <option value={this.getComputerNames()[0]}>{this.getComputerNames()[0]} ({this.state.data["Ivel Z3"].year})  </option>
              <option value={this.getComputerNames()[1]}>{this.getComputerNames()[1]} ({this.state.data["Bally Astrocade"].year}) </option>
              <option value={this.getComputerNames()[2]}>{this.getComputerNames()[2]} ({this.state.data["Sord M200 Smart Home Computer"].year}) </option>
              <option value={this.getComputerNames()[3]}>{this.getComputerNames()[3]} ({this.state.data["Commodore 64"].year}) </option>
            </select>
        </form>
      </div>
    );
  }
}

export default App;
