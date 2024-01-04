import { API_URL } from "../config";
import Thread from "../types/Thread";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { SyntheticEvent, useState } from "react";

interface UpdateModalProps {
    thread: Thread;
    open: boolean;
    closeModal: () => void;
}

const UpdateModal: React.FC<UpdateModalProps> = ({ thread, open, closeModal }) => {
    // const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const storeUser = async (event: SyntheticEvent) => {
        event.preventDefault();

        axios
            .patch(`${API_URL}/${thread.ID}`, { title, content }, {withCredentials:true})
            .then((response) => {
                console.log(response.data.success);
            })
            .catch((error) => {
                console.log(error);
            });
        closeModal();
    };

    // const openModal = () => {
    //     setShowModal(true);
    //     // console.log(showModal);
    // };

    // const closeModal = () => {
    //     setShowModal(false);
    // };

    return (
        <div>
            {/* <button onClick={openModal}>Create New </button> */}
            <Modal open={open} onClose={closeModal}>
                <Box
                    sx={{
                        position: "absolute",
                        width: 500,
                        height: 500,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        border: "2px solid #000",
                    }}
                >
                    <Typography variant="h6" component="div" textAlign="center" padding="20px">
                        Input your update
                    </Typography>
                    <div style={{ transform: "translate(10%, 0%)" }}>
                        <div>
                        <TextField
                                margin="normal"
                                id="title"
                                label="Title"
                                name="title"
                                multiline
                                onChange={(e) => setTitle(e.target.value)}
                                style={{width:"80%"}}
                            />
                            {/* <label style={{ padding: "10px" }}>
                                Title:
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    style={{ border: "1px solid black", textAlign: "justify" }}
                                />
                            </label> */}
                        </div>
                        <div style={{ paddingTop: "15px" }}>
                        <TextField
                                margin="normal"
                                id="content"
                                label="Content"
                                name="content"
                                multiline
                                rows="7"
                                onChange={(e) => setContent(e.target.value)}
                                style={{width:"80%"}}
                            />
                            {/* <label>
                                {" "}
                                Content:{" "}
                                <textarea
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    style={{ border: "1px solid black", textAlign: "justify" }}
                                />
                            </label> */}
                        </div>
                        <Button onClick={closeModal}>Cancel</Button>
                        <Button onClick={storeUser} variant="contained" color="primary">
                            Update
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default UpdateModal;
