import { useEffect, useState } from 'react'
import { Grid, Paper, Box, Typography, TextField, Button, MenuItem, Modal } from '@mui/material'
import Cookies from 'js-cookie'
import Jobcard from '../components/Jobcard';
import { GetAllJobs, CreateJob } from "../api/Jobapi"

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

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Dashboard = () => {
  const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }

  const [jobDetails, setJobDetails] = useState({ company: "", position: "", status: "pending" })
  const [jobs, setJobs] = useState<any[]>([])
  const [open, setOpen] = useState(false);

  useEffect(() => {
    GetAllJobs({ setMyVar: setJobs })
  }, [])

  const onSubmit = async () => {
    setOpen(false);
    CreateJob({ setMyVar: setJobs, obj: jobDetails });
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Grid>
          <Paper elevation={20} style={paperStyle}>
            <Grid alignItems="center">
              <Typography variant="h3">create a job {Cookies.get().name}</Typography>
              <Typography variant='caption' gutterBottom>create a job</Typography>
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
      </Modal>
      <div className="flex flex-wrap w-5/6 mx-auto">
        {
          jobs?.map((job) => <Jobcard key={job._id} id={job._id} setMyVar={setJobs} company={job.company} position={job.position} status={job.status} />)
        }
      </div>
    </>
  )
}

export default Dashboard;
