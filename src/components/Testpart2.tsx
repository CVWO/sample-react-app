// import Comment from "../types/Comment";
import UpdateModal from "./UpdateThreads";
import Thread from "../types/Thread";
import { API_URL } from "../config";

import React, { useState } from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteFunc from "./DeleteThread";

type Props = {
    thread: Thread;
    styled: boolean;
};
const useStyles = makeStyles(() => ({
    threadTitle: {
        fontSize: 22,
        whiteSpace: "pre-wrap",
        paddingBottom: "1em",
    },
    threadContent: {
        fontSize: 16,
        whiteSpace: "pre-wrap",
        paddingBottom: "1em",
    },
    commentCard: {
        marginBottom: "1em",
    },
    metadata: {
        fontSize: 14,
    },
}));

const ThreadItem: React.FC<Props> = ({ thread, styled }) => {
    const [openCreateModal, setOpenCreateModal] = useState(false);

    const classes = useStyles();

    // const navigate = useNavigate();

    const handleClickEdit = () => {
        setOpenCreateModal(true);
    };

    const deleteUser = () => {
        if (window.confirm("Are you sure you want to delete this user??") == true) {
            axios
                .delete(`${API_URL}/${thread.ID}`)
                .then((response) => {
                    console.log(response.data.success);
                })
                .catch((error) => console.log(error.response));
        } else {
            console.log("You canceled!");
        }
    };

    if (styled) {
        return (
            <Card className={classes.commentCard}>
                <CardContent>
                    <Typography variant="h3" color="textPrimary" className={classes.threadTitle} component="p">
                        {thread.Title}
                    </Typography>
                    <Typography variant="body2" color="textPrimary" className={classes.threadContent} component="p">
                        {thread.Content}
                    </Typography>
                    <Typography color="textSecondary" className={classes.metadata} gutterBottom>
                        {"Posted on " + thread.CreatedAt}
                    </Typography>
                </CardContent>
                <CardActions style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button color="inherit" onClick={handleClickEdit}>
                        Edit
                    </Button>
                    <UpdateModal thread={thread} open={openCreateModal} closeModal={() => setOpenCreateModal(false)} />
                    <DeleteFunc thread={thread} />
                </CardActions>   
            </Card>
        );
    }

    // unstyled
    return (
        <li className={classes.threadContent}>
            {thread.Content}
            <br />
            <em>{"posted by " + thread.Title + " on " + thread.CreatedAt}</em>
        </li>
    );
};

export default ThreadItem;
