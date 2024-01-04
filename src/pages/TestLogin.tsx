import {
    Avatar,
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    Link,
    TextField,
    ThemeProvider,
    Typography,
    createTheme,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8000/login",
                { username, password: pwd },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true,
                },
            )
            .then((response) => {
                console.log(response.data);
                navigate("/thread/1/styled");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: 'center',
                    }}
                >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="username"
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                  <Grid container style={{ display:"flex", justifyContent:"center" }}>
                    <Grid item>
                      <Link href="/signup" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Container>
        </ThemeProvider>
    );
  }