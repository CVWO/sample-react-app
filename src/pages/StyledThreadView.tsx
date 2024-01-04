// import BasicCommentList from "../components/CommentList";
import BasicPostList from "../components/Test";
import CreateModal from "../components/TestCreate";
import { Box, Button, Card, CardContent, Fade, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";

const StyledThreadView: React.FC = () => {
    const [isShowTips, setIsShowTips] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openCreateModal, setOpenCreateModal] = useState(false);
    // const navigate = useNavigate();

    const showTips = () => {
        setIsShowTips(true);
    };

    const handleMenuOpen = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // const handleClickCreate = () => {
    //     navigate("/create");
    // };

    const handleClickCreate = () => {
        setOpenCreateModal(true);
    };

    return (
        <div style={{ width: "100%", margin: "auto" }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="relative">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                        </Menu>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            ForumHub
                        </Typography>
                        <Button color="inherit" onClick={handleClickCreate}>
                            Create new
                        </Button>
                        {/* <Button color="inherit" onClick={handleClickCreate}>
                            Create
                        </Button> */}
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <div style={{ width: "50vw", alignContent: "center", margin: "auto" }}>
                <CreateModal open={openCreateModal} closeModal={() => setOpenCreateModal(false)} />
                <Typography style={{ padding: "1em 0" }}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .changeDelay(80)
                                .typeString("This is much better, isn't it?")
                                .pauseFor(1000)
                                .callFunction(showTips)
                                .start();
                        }}
                    />
                </Typography>
                <Fade in={isShowTips} timeout={1000}>
                    <Typography style={{ paddingBottom: "1em" }}>
                        {"Try looking at the "}
                        <a href="https://mui.com/">{"Material UI"}</a>
                        {" docs to see what other components you can use!"}
                    </Typography>
                </Fade>
                <Card>
                    <CardContent>
                        <Typography component="p">{"Viewing thread:"}</Typography>
                        <Typography variant="h5" component="h5">
                            {"Inspirational Quotes"}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>
                            {"by Aiken"}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {'"The best way to predict the future is to invent it."'}
                            <br />
                            {"- Alan Kay"}
                        </Typography>
                    </CardContent>
                </Card>

                <BasicPostList styled={true} />

                <Link to="/">
                    <Button variant="contained" color="secondary">
                        {"Back to threads"}
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default StyledThreadView;
