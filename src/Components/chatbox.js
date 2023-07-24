import { useState } from "react";

function Chatbox({endChat}) {
    const [chatHistory, SetChatHistory] = useState([{
        id: 0,
        sender: "appraiser",
        content: "Hello there. How can I help?"
    }]);

    const [input, SetInput] = useState("");

    const [chatPhase, SetChatPhase] = useState(0); // determines next response

    const [chatEnded, SetChatEnded] = useState(false);

    const changeInput = (e) => {
        SetInput(e.target.value);
    }

    const send = () => {
        if(input === ""){
            return;
        }
        var newMsg = {
            id: chatHistory.length,
            sender: "client",
            content: input
        };


        //respond
        var resMsg = {
            id: chatHistory.length+1,
            sender: "appraiser"
        };

        if(chatPhase == 0){
            resMsg.content = "According to your description and these photos, this item is in good condition. We can offer around $100 for it.";
        } else if (chatPhase == 1){
            resMsg.content = "If you want to sell it, we can begin the process by sending you a packaging box.";
        } else if (chatPhase == 2){
            resMsg.content = "Thank you for your interest. Since the matter has been taken care of, I'll end the conversation here.";
            SetChatEnded(true);
            endChat();

        }
        SetChatPhase(chatPhase+1);
        SetChatHistory([...chatHistory, newMsg, resMsg]);

    }




    return (
        <>
            <div id="box" className="border border-primary">
                <div id="window" className="bg-white container">
                    {chatHistory.map(
                        (msg) => {
                            var rowClasses = "row";
                            var colClasses = "border rounded m-2";
                            if (msg.sender === "appraiser") {
                                rowClasses += " text-start justify-content-start";
                                colClasses += " border-light bg-light col-5"
                            } else {
                                rowClasses += " text-end text-white justify-content-end";
                                colClasses += " border-primary bg-primary col-auto"
                            }

                            return (
                                <div key={msg.id} className={rowClasses}>
                                    <div className={colClasses}>
                                        <p className="mx-1 my-2">{msg.content}</p>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
                <div id="input" className="container border-primary d-flex w-auto">
                    <input className="flex-grow-1" onChange={changeInput}></input>

                    <div className="px-4">
                        <button type="button" className={chatEnded ? "btn btn-primary text-white disabled" : "btn btn-primary text-white"} onClick={send}>Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chatbox;