import { useState } from 'react'
import { Grid, Paper, Box, Typography, TextField, Button } from '@mui/material'
import { Link, Navigate } from "react-router-dom"
import Cookies from 'js-cookie'

const Login = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }

  const [formDetails, setFormDetails] = useState({ email: "", password: "" })


  const onSubmit = async () => {
    try {
      const link = `${process.env.REACT_APP_LOCAL_LINK}/auth/login`
      const resp = await fetch(link, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDetails),
      })
      const data = await resp.json();
      Cookies.set("name", data.user.name)
      Cookies.set("token", data.token)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid alignItems="center">
          <Typography variant="h3"> login</Typography>
          <Typography variant='caption' gutterBottom>Login to your account!</Typography>
        </Grid>
        <Box component="form">
          <TextField fullWidth label='Email' type="email" placeholder="Enter your email" sx={{ my: 2 }} onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })} />
          <TextField fullWidth label='Password' type="password" placeholder="Enter your password" sx={{ my: 2 }} onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })} />
          {/* <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" sx={{ my: 2 }} onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })} /> */}
          <Button variant='contained' color='primary' onClick={onSubmit}>Login</Button>
        </Box>
      </Paper >
    </Grid >
  )
}

export default Login;
