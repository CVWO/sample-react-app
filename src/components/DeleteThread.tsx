import React from "react";
import Thread from "../types/Thread";
import axios from "axios";
import { API_URL } from "../config";
import { Button } from "@mui/material";

interface DeleteFuncProps {
    thread: Thread;
}

const DeleteFunc: React.FC<DeleteFuncProps> = ({ thread }) => {
    const deleteUser = () => {
        if (window.confirm("Are you sure you want to delete this user??") == true) {
            axios
                .delete(`${API_URL}/${thread.ID}`, {withCredentials: true})
                .then((response) => {
                    console.log(response.data.success);
                })
                .catch((error) => console.log(error.response));
        } else {
            console.log("You canceled!");
        }
    };

    return (
        <Button onClick={deleteUser}>Delete</Button>
    )
}

export default DeleteFunc;
