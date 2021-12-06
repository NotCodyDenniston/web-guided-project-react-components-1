/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/

// STEP 1: import React
import React, { useState } from 'react';
// export const useState() {}

function Playground(props) {
  // useState allows us to save 'internal' state (data)
  // it's a function that takes in one parameter, the initial state value
  // it returns an array with 2 things: that state variable itself, and the 'changer' function
  const [count, setCount] = useState(100);

  // NEVER, EVER, EVER, EVER, EVER do this: let count = 0
  // ALWAYS, ALWAYS, ALWAYS use state

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add!</button>
      <button onClick={() => setCount(count - 1)}>Subtract!</button>
    </div>
  )
}

export default Playground;