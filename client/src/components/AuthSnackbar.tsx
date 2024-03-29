
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface iAuthSnackbar {
  severity: 'success' | 'info' | 'warning' | 'error';
  message: string;
  myVar: boolean
  setMyVar: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

export default function AuthSnackbar({ severity, message, myVar, setMyVar }: iAuthSnackbar) {

  const handleClose = (e?: React.SyntheticEvent | Event, r?: string) => {
    if (r === 'clickaway') {
      return;
    }

    setMyVar(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={myVar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
