import Home from "./pages/Home";
import BasicThreadView from "./pages/BasicThreadView";
import StyledThreadView from "./pages/StyledThreadView";
import { Login } from "./pages/Login";
import CreateThreadPage from "./pages/CreatePost";
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue, orange } from "@mui/material/colors";
import TestLogin from "./pages/TestLogin";
import SignUp from "./pages/TestSignup";

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/thread/1" element={<BasicThreadView />} />
                        <Route path="/thread/1/styled" element={<StyledThreadView />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/create" element={<CreateThreadPage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/" element={<TestLogin />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
