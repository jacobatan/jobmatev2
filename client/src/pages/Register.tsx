import { useState } from 'react'
import { Grid, Paper, Box, Typography, TextField, Button } from '@mui/material'

const Register = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
  const headerStyle = { margin: 0 }
  const [formDetails, setFormDetails] = useState({ name: "", email: "", password: "" })
  const onSubmit = async () => {
    console.log(formDetails);
    try {
      const link = `${process.env.REACT_APP_LOCAL_LINK}/auth/register`
      // const link = 'https://jobmate-api.onrender.com/api/v1/auth/register';
      const resp = await fetch(link, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDetails),
      })
      const data = await resp.json();
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid alignItems="center">
          <h2 style={headerStyle}>Register</h2>
          <Typography variant='caption' gutterBottom>Create an account!</Typography>
        </Grid>
        <Box component="form">
          <TextField fullWidth label='Name' placeholder="Enter your name" sx={{ my: 2 }} onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })} />
          <TextField fullWidth label='Email' type="email" placeholder="Enter your email" sx={{ my: 2 }} onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })} />
          <TextField fullWidth label='Password' type="password" placeholder="Enter your password" sx={{ my: 2 }} onChange={(e) => setFormDetails({ ...formDetails, password: e.target.value })} />
          {/* <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" sx={{ my: 2 }} onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })} /> */}
          <Button variant='contained' color='primary' onClick={onSubmit}>Sign up</Button>
        </Box>
      </Paper>
    </Grid>
  )
}

export default Register;
