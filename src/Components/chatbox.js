import { useState } from "react";

function Chatbox() {
    const [chatHistory, SetChatHistory] = useState([{
        id: 0,
        sender: "appraiser",
        content: "Hello there. How can I help?"
    }]);

    const [input, SetInput] = useState("");

    const changeInput = (e) => {
        SetInput(e.target.value);
    }

    const send = () => {
        var newMsg = {
            id: chatHistory.length,
            sender: "Client",
            content: input
        };

        SetChatHistory([...chatHistory, newMsg]);
    }


    return (
        <>
            <div id="box" className="border border-primary">
                <div id="window" className="bg-white container">
                    {chatHistory.map(
                        (msg) => {
                            var rowClasses = "row";
                            var colClasses = "col-5 border rounded m-3";
                            if (msg.sender === "appraiser") {
                                rowClasses += " text-start justify-content-start";
                                colClasses += " border-light bg-light"
                            } else {
                                rowClasses += " text-end text-white justify-content-end";
                                colClasses += " border-primary bg-primary"
                            }

                            return (
                                <div key={msg.id} className={rowClasses}>
                                    <div className={colClasses}>
                                        <p>{msg.content}</p>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
                <div id="input" className="container border-primary d-flex w-auto">
                    <input className="flex-grow-1" onChange={changeInput}></input>

                    <div className="px-4">
                        <button type="button" className="btn btn-primary text-white" onClick={send}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatbox;