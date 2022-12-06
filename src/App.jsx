import React from 'react'
import Navbar from './assets/Navbar'
import data from './assets/data'
import Card from "./assets/Card"
function App() {
  let parsedata = data.map( item =>{
    return(
      <Card
      key = {item.id}
      {...item}
      />
    )
  })
  return (
    <div>
      <Navbar/>
      {parsedata}
    </div>
  )
}
export default App        