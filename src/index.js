import React from 'react'
import { render } from 'react-dom'

/*
💥💥💥 Rules when DECLARING a React component 💥💥💥
  - Name is capitalized
  - Takes an object ("props") as its one argument
  - Must return SOMETHING (null, empty string, elements...)
  - React provides some built-in components that return HTML elements (h1, div, span...)
  - Attribute names with dashes are camelCased (except data- & aria-)
  - The `class` attribute is `className`, `for` attribute is `htmlFor`
  - We can INTERPOLATE 🔥 js expressions 🔥 using curly brackets
  - We interpolate attribute values and content
*/

/*
💥💥💥 Rules when USING a React component 💥💥💥
  - Components are utilized (invoked?) so we may obtain elements
  - Instead of invoking the component with parens, we invoke with < />
  - Instead of passing args with parens, we pass them with attribute-like syntax
  - Don't forget all tags need to close correctly
*/

function App(props) {
  return (
    <div className='container'>
      <h1>Welcome to React, Web {props.cohort}</h1>
      <p>Instructor {props.instructor} is teaching {props.numStudents}</p>
      <p>He is very {props.happiness}</p>
    </div>
  )
}

render(
  <App 
    cohort='37'
    instructor={'casey'}
    numStudents='67'
    happiness='sad' 
  />,
  document.querySelector('#root')
)



// const props = {
//   cohort: '52',
//   instructor: 'casey',
//   numStudents: '67',
//   happiness: 'sad'
// }

//App(props)
