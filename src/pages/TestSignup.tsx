import { Avatar, Box, Button, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { SyntheticEvent, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignUp() {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");
    

    const navigate = useNavigate();

    useEffect(() => {
        setErrMsg("");
    }, [username, pwd])

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //     name: data.get("name"),
    //     username: data.get("username"),
    //     password: data.get("password"),
    // });
    axios
            .post("http://localhost:8000/signup", { name, username, password:pwd })
            .then((response) => {
                console.log(response.data.success);
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                if (!error?.response) {
                  setErrMsg("No Server Response");
                    alert("No Server Response");
                } else if(error.response?.status === 400) {
                    setErrMsg("Username Taken");
                    alert("Username Taken");
                } else {}
            });
    // try {
    //     const response = await axios.post(,
    //         JSON.stringify({  }),
    //         {
    //             headers: {"Content-Type" : "application/json"}
    //         })

    //     setSuccess(true);
    // } catch (error) {
    //     if (!error?.response) {
    //         setErrMsg("No Server Response")
    //     } else if (error.response)
    // }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <p className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="off"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  onChange={(e) => setPwd(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}