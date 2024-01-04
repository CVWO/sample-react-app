// import BasicCommentList from "../components/CommentList";
// import BasicThreadList from "../components/BasicThreadList";
import BasicPostList from "../components/Test";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import React, { useState } from "react";

const BasicThreadView: React.FC = () => {
    const [isShowButton, setIsShowButton] = useState(false);

    const hideButton = () => {
        setIsShowButton(false);
    };

    const showButton = () => {
        setIsShowButton(true);
    };

    return (
        <div style={{ width: "25vw", margin: "auto", textAlign: "center" }}>
            <h3>{"Inspirational Quotes"}</h3>
            <h4>{"Thread started by Aiken"}</h4>
            <BasicPostList styled={false} />
            <Link to="/">{`<- Back to threads`}</Link>
            <br />
            <br />

            <Typewriter
                onInit={(typewriter) => {
                    hideButton();
                    typewriter
                        .changeDelay(80)
                        .pauseFor(1500)
                        .typeString("It's a little plain isn't it?")
                        .callFunction(showButton)
                        .start();
                }}
            />
            {isShowButton && (
                <Button variant="contained" color="primary" component={Link} to="/thread/1/styled">
                    {"Yes"}
                </Button>
            )}
        </div>
    );
};

export default BasicThreadView;
