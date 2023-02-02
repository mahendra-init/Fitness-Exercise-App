import { Link } from "react-router-dom";
import { Stack } from "@mui/material";

import logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='none' px='20px' sx={{ gap: { sm: '122px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}}}>
      <Link to='/'>
          <img src={logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0 20px'}} />
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='center'>
        <Link to='/' style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'}}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar