import Chatbox from "../Components/chatbox"
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
function AppraisalChat() {
    const name = "Katrina"
    const history = useHistory();
    const toAppraisalPage = () => {
        history.push("/Appraisal");
    }

    const [chatEnded, SetChatEnded] = useState(false);

    const endChat = () => {
        SetChatEnded(true);
    }


    return (
        <>
            <div className="container text-center pt-5">
                <div className="row align-items-center">
                    <div className="col-6">
                        <div className="h4"><strong>{chatEnded ? "Chat ended" : `Chatting with ${name}` }</strong></div>
                        <div id="chat-window" className="container">
                            <Chatbox endChat={endChat} />
                        </div>
                    </div>
                    <div className="col-6">
                        <p>Uploaded Photos: {history.location.state.f.map((str, i) => <span key={i} className="mx-1">"{str}"</span>)}</p>
                        <button type="button" className="btn btn-primary text-light" onClick={toAppraisalPage}>End Chat</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppraisalChat;