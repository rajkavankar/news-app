import React from "react"
import { Container } from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./pages/HomePage"
import AppBar from "./components/AppBar"

const App = () => {
  return (
    <div className='bg-light'>
      <Container>
        <HomePage />
      </Container>
    </div>
  )
}

export default App
