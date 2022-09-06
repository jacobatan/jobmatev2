
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useNavigate } from 'react-router-dom';
import DBModal from './DBModal';

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [jobs, setJobs] = React.useState<any[]>([])
  const [open, setOpen] = React.useState(false);

  let navigate = useNavigate();


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "white" }}>
      <DBModal myVar={open} setMyVar={setOpen} setJobs={setJobs} />
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#2766ec" }}>
          Jobmate
        </Typography>
        {auth && (
          <div>
            <IconButton
              size="large"
              onClick={() => setOpen(true)}
              sx={{ color: "#2766ec" }}
            >
              <AddTaskIcon onClick={() => setOpen(true)} />
            </IconButton>
            <IconButton
              size="large"
              onClick={handleMenu}
              sx={{ color: "#2766ec" }}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => navigate("/dashboard")}>Dashboard</MenuItem>
              <MenuItem onClick={handleClose}>TODO: Log out</MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
    // </Box>
  );
}
