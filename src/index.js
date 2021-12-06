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
  let val = '';

  if (props.name === 'Casey') {
    val = 'Casey is the best!';
  } else {
    val = 'NOOOOOOOOO';
  }

  return (
    <div className='container'>
      {/* 
          const newElem = document.createElement('div');
          newElem.classList.add('container');

          class => reserved word!! sooooo className
      */}
      { props.name === 'Casey' ? 'Casey is the best!' : 'Where is Casey?' }
      { props.name === 'Casey' && 'You are so lucky web50!' }
      {/**
       * if (props.name === 'Casey') {
       *   return 'Casey is the best!'
       * } else {
       *   return 'Where is Casey?'
       * }
       */}
      <h1>Welcome to React, Web {props.cohort}</h1>
      <p>Instructor: {props.name}</p>
      <p>Class size: {props.classSize}</p>
      <img src="blah.jpg" />
    </div>
  )
}

render(
  <App cohort='50' name='Sean' classSize='82' />,
  document.querySelector('#root')
)

// const props = {
//   cohort: '50',
//   name: 'Casey',
//   classSize: '82'
// }

// App(props);

// function myFunction(a) { console.log(a) }
// const props = {
//   1: '1',
//   2: '2',
//   3: '3'
// }
// myFunction(1, 2, 3, 4);