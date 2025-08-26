// jsx -  html + js syntax

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// let's define a function like app here itself
function MyApp(){
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

// can run like this too ! as it is a function afterall.. but not very acceptable
/*
createRoot(document.getElementById('root')).render(
  MyApp()
) 
*/

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = " Tsdebug"

//*****Creating element using React*****
// The syntax here is fixed we can't use whateven we wish as we were doing for reactElement in the custom react
const reactElement = React.createElement(
  'a',     // 1st expected parameter - ** A tag **
  {href: 'https://google.com', target: '_blank'}, // 2nd expected parameter - ** An object - it add properties **
  'Click me to visit Google',// 3rd expected parameter - ** Direct text **
  anotherUser 
)

// Can't use loops like if inside an object

// ReactDOM.createRoot(document.getElementById('root')).render(
  
//   /* <> */
//    /* it's simply a function */
//     /* <App />  
//     <MyApp />   */
//     reactElement  // since it's an object and not a function, this is how we run it
//    /* </> */

// )      

ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  reactElement
)

 