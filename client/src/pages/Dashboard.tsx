import { useEffect, useState } from 'react'
import { Grid, Paper, Box, Typography, TextField, Button, MenuItem } from '@mui/material'
import { Link, Navigate } from "react-router-dom"
import Cookies from 'js-cookie'
import Jobcard from '../components/Jobcard';

const statuses = [
  {
    value: 'interview',
  },
  {
    value: 'declined',
  },
  {
    value: 'pending',
  },
];

const Dashboard = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }

  const [jobDetails, setJobDetails] = useState({ company: "", position: "", status: "pending" })
  const [jobs, setJobs] = useState<any[]>([])

  const auth = Cookies.get();
  const bearer = 'Bearer ' + auth.token;

  useEffect(() => {
    const GetAllJobs = async () => {
      try {
        const link = `${process.env.REACT_APP_LOCAL_LINK}/jobs`
        const resp = await fetch(link, {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
          },
        })
        const data = await resp.json();
        setJobs(data.jobs)
      } catch (e) {
        console.log(e)
      }
    }
    GetAllJobs()
  }, [])

  const onSubmit = async () => {
    try {
      const link = `${process.env.REACT_APP_LOCAL_LINK}/jobs`
      const resp = await fetch(link, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobDetails),
      })
      const data = await resp.json();
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid alignItems="center">
            <Typography variant="h3">create a job</Typography>
            <Typography variant='caption' gutterBottom>creat a job</Typography>
          </Grid>
          <Box component="form">
            <TextField fullWidth label='Company' type="text" placeholder="Enter your company" sx={{ my: 2 }} onChange={(e) => setJobDetails({ ...jobDetails, company: e.target.value })} />
            <TextField fullWidth label='Position' type="text" placeholder="Enter your position" sx={{ my: 2 }} onChange={(e) => setJobDetails({ ...jobDetails, position: e.target.value })} />
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Select"
              onChange={(e) => setJobDetails({ ...jobDetails, status: e.target.value })}
              helperText="Please select the status of your job"
            >
              {statuses.map((status) => (
                <MenuItem key={status.value} value={status.value}>
                  {status.value}
                </MenuItem>
              ))}
            </TextField>
            <Button variant='contained' color='primary' onClick={onSubmit}>Create!</Button>
          </Box>
        </Paper >
      </Grid >
      {
        jobs?.map((job) => <Jobcard key={job._id} company={job.company} position={job.position} status={job.status} />)
      }
    </>
  )
}

export default Dashboard;
