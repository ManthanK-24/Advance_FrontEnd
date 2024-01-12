import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
    return (
       <div>
        <h1>
            Custom App  
        </h1>
       </div>   
    )
}
// const ReactElement = { // this doesn't works
//     type:'a', // type of tag
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser  = "manthan"
const reactElement2 = React.createElement(
    'a',
    {href:'https://google.com',target: '_blank'},
    'click me to visit google ',
    anotherUser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
    // MyApp()
    // <MyApp/>

    // <ReactElement/>
    // ReactElement

    // anotherElement
     
    // reactElement2
)
