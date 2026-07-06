import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          AI System Dynamics
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
