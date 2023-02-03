import { useEffect, useState } from "react";
import { Grid, Paper, Box, Typography, TextField, Button } from "@mui/material";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import AuthSnackbar from "../components/AuthSnackbar";

interface iSnackbar {
  severity: "success" | "info" | "warning" | "error";
  message: string;
}

const Register = () => {
  const paperStyle = { padding: "30px 20px", width: 300, margin: "20px auto" };
  const headerStyle = { margin: 0 };
  const [formDetails, setFormDetails] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [snackbarDetails, setSnackbarDetails] = useState<iSnackbar>({
    severity: "success",
    message: "All goods mate!",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const onSubmit = async () => {
      try {
        const link = `${process.env.REACT_APP_API_LINK}/auth/register`;
        const resp = await fetch(link, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDetails),
        });
        const data = await resp.json();
        Cookies.set("name", data.user.name);
        Cookies.set("token", data.token);
        navigate("/dashboard");
        setOpenSnackbar(true);
      } catch (err) {
        console.log(err);
        if (typeof err === "string") {
          setSnackbarDetails({
            ...snackbarDetails,
            severity: "error",
            message: err,
          });
        } else if (err instanceof Error) {
          setSnackbarDetails({
            ...snackbarDetails,
            severity: "error",
            message: err.message,
          });
        }
        setOpenSnackbar(true);
      }
    };

    submitted && onSubmit();
  }, [submitted]);

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid alignItems="center">
          <h2 style={headerStyle}>Register</h2>
          <Typography variant="caption" gutterBottom>
            Create an account!
          </Typography>
        </Grid>
        <Box component="form" className="flex flex-col">
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your name"
            sx={{ my: 2 }}
            onChange={(e) =>
              setFormDetails({ ...formDetails, name: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="Enter your email"
            sx={{ my: 2 }}
            onChange={(e) =>
              setFormDetails({ ...formDetails, email: e.target.value })
            }
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            placeholder="Enter your password"
            sx={{ my: 2 }}
            onChange={(e) =>
              setFormDetails({ ...formDetails, password: e.target.value })
            }
          />
          {/* <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" sx={{ my: 2 }} onChange={(e) => setFormDetails({ ...formDetails, name: e.target.value })} /> */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => setSubmitted(true)}
          >
            Sign up
          </Button>
        </Box>
        <div className="flex-grow border-t border-gray-400 mt-3 flex justify-center items-center "></div>
        <div
          className="pt-5 cursor-pointer w-full flex justify-center"
          onClick={() => navigate("/login")}
        >
          <Button>login instead</Button>
        </div>
      </Paper>
      <AuthSnackbar
        severity={snackbarDetails.severity}
        message={snackbarDetails.message}
        myVar={openSnackbar}
        setMyVar={setOpenSnackbar}
      />
    </Grid>
  );
};

export default Register;
