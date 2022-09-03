import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface iJobcard {
  company: string;
  position: string;
  status: string;
}

export default function Jobcard({ company, position, status }: iJobcard) {
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
        <Button size="small">edit</Button>
      </CardActions>
    </Card>
  );
}
