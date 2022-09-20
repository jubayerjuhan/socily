import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
<<<<<<< HEAD
interface AlertPrompt {
  type: any;
  title: string;
}

export default function AlertPrompt({ type, title }: AlertPrompt) {
=======

export default function AlertPrompt({ type, title }: any) {
>>>>>>> 1148e39152abdd89b9b3dee19d92480d056df1f7
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={type ? type : "success"}
        sx={{ width: "100%" }}
      >
        {title}
      </Alert>
    </Snackbar>
  );
}
