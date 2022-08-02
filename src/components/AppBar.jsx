import React, { useState } from "react"
import { LinkContainer } from "react-router-bootstrap"
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

const AppBar = () => {
  const [collapse, setCollapse] = useState(false)

  return (
    <div>
      <Navbar className='mb-2' color='dark' container dark expand='md' light>
        <LinkContainer to='/'>
          <NavbarBrand>reactstrap</NavbarBrand>
        </LinkContainer>
        <NavbarToggler onClick={() => setCollapse(!collapse)} />
        <Collapse isOpen={collapse} navbar>
          <Nav className='ms-auto' navbar>
            <NavItem>
              <NavLink href='/components/'>Components</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default AppBar
