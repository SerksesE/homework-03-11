import * as React from 'react'

export default function Computer(props) {
  return (
    <div>
      <select>
        {props(Object.keys(this.props.data)).map(computer =>
        <option value={computer.getComputerNames()[0]}>
        {computer.getComputerNames()[0]}</option>)}
      </select>
    </div>
  )
}