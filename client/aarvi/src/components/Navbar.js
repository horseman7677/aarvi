import { AppBar, Toolbar } from '@material-ui/core'
import { Link } from "react-router-dom";
import React from 'react'

export default function Navbar() {
  return (
    <>
      <AppBar position='static' >
        <Toolbar >
          <Link to='/'>Home</Link>
          <Link to='/signup'>SignUp</Link>
          <Link to='/signin'>SignIn</Link>
          <Link to='/about'>About</Link>
        </Toolbar>
      </AppBar>
    </>
  )
}
