import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (event) => {
    // if (path === '/login') {
    //   handleLogin(login)
    //   window.location.href = 'https://localhost:9443/oauth2/authorize?response_type=code&redirect_uri=http://localhost:8080/oauth2client&client_id=2kJ5YyusrTjBhJMPbnCUu0y5FQwa&scope=openid'
    //   // axios({
    //   //   method: 'get',
    //   //   url: 'http://localhost:8080',
    //   //   // Set the content type header, so that we get the response in JSOn
    //   // }).then((response) => {
    //   //   console.log('response', response);
    //   // }).catch((err) => {
    //   //   // Do somthing
    //   //   console.log(err)
    //   // })
    // } else {
    //   setAnchorElNav(null);
    //   if (path) {
    //     navigate(path);
    //   }
    // }

    event.preventDefault();
    const data = new FormData(event.currentTarget);

  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login In
          </Button>
          <Grid container>
            <Grid item>
              <RouterLink to="/register">
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </RouterLink>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
