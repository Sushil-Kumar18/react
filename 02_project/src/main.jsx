import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>Custom APP! </h1>
    </div>
  )   // ------> As this block of code being converted into the structure as given below !
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href:'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }
const anotherUser ='Sushilll'

const reactElement = React.createElement(
  'a',
  {
    href: 'https://google.com', target:'_blank'
  },
  'Click me to Enter Magical World !',
  anotherUser
)



/// ------> instead of writing the above code we can write as given below

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp />
    // <App/>
    // reactElement
    // anotherElement
    reactElement

)   
