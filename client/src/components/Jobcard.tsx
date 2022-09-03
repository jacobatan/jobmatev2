import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Cookies from 'js-cookie';

interface iJobcard {
  id: string;
  company: string;
  position: string;
  status: string;
  deleteJob: (id: string) => Promise<void>;
}

export default function Jobcard({ deleteJob, id, company, position, status }: iJobcard) {
  const auth = Cookies.get();
  const bearer = 'Bearer ' + auth.token;

  const DeleteJob = async () => {
    try {
      const link = `${process.env.REACT_APP_LOCAL_LINK}/jobs/${id}`
      const resp = await fetch(link, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
          'Authorization': bearer,
          'Content-Type': 'application/json'
        },
      })
      const data = await resp.json();
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {company}
        </Typography>
        <Typography variant="h5" component="div">
          {position}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => console.log(id)}>edit</Button>
        <Button size="small" onClick={() => deleteJob(id)}>delete</Button>
      </CardActions>
    </Card>
  );
}
