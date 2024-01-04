import { Button } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';


const NewModal: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const storeUser = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        axios
            .post("http://localhost:8000/posts", { title, content })
            .then((response) => {
                console.log(response.data.success);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <button onClick={openModal}>Create New Thread</button>

            {showModal ? (
                <div style={{position: 'fixed', inset: '0px', backgroundColor: 'rgba(0, 0, 0, 0.7)', transition: 'opacity 0.2s ease 0s'}}></div>
            ) : null}

            {showModal ? (
                <div style={{position: 'fixed', inset: '0px', overflowY: 'auto'}}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'flex-end', minHeight: '100vh', padding: '0px 0px 56px', textAlign: 'center', backgroundColor: 'transparent', fontSize: '14px'}}>
                        <div style={{transform: 'translate(0px, 0px)', backgroundColor: 'rgba(255, 255, 255, 1)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 24px 0px', transition: 'all 0.2s ease 0s'}}>
                            <form id="newform" onSubmit={storeUser} method="post">
                                <div style={{backgroundColor: 'rgba(255, 255, 255, 1)'}}>
                                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderBottom: '1px solid rgba(0, 0, 0, 0.09)', marginBottom: '16px'}}>
                                        <h1 style={{fontWeight: '500', fontSize: '18px'}}>Create new user</h1>
                                        <button type="button" onClick={closeModal}>Close</button>
                                    </div>
                                    <div style={{padding: '16px'}}>
                                        <div>
                                            <label style={{ padding: "10px" }}>
                                                Title:
                                                <input
                                                    type="text"
                                                    value={title}
                                                    onChange={(e) => setTitle(e.target.value)}
                                                    style={{ border: "1px solid black", textAlign: "justify" }}
                                                />
                                            </label>
                                        </div>
                                        <div style={{ padding: "10px" }}>
                                            <label>
                                                {" "}
                                                Content:{" "}
                                                <textarea
                                                    value={content}
                                                    onChange={(e) => setContent(e.target.value)}
                                                    style={{ border: "1px solid black", textAlign: "justify" }}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default NewModal;