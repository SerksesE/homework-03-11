import * as React from 'react'

export default function ModelDetails(props) {
  const pizza = props.pizza
  return (
    <div>
      <ul>
        <li>Name: Ivel Z3</li>
        <li>Manufacturer: Ivasim</li>
        <li>Year: 1969</li>
        <li>Origin: Croatia</li>
      </ul>
    </div>
    
    <div>
      <ul>
        {pizza.ingredients.map(ingredients =>
          <li key={ingredients}>{ingredients}</li>)}
      </ul>
    </div>
  )
}