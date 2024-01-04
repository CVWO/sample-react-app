import React, { SyntheticEvent, useState } from "react";
import axios from "axios";

function CreateThreadPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (event: SyntheticEvent) => {
        event.preventDefault();

        axios
            .post("http://localhost:8000/posts", { title, content }, {withCredentials: true})
            .then((response) => {
                console.log(response.data.success);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="CreateThreadPage" style={{ padding: "20px", width: "100%", alignContent: "center" }}>
            <h1>Create new thread</h1>
            <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
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
                <input type="submit" value="Create Thread" />
            </form>
        </div>
    );
}

export default CreateThreadPage;
