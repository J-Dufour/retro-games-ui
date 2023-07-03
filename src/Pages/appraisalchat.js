import Chatbox from "../Components/chatbox"
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function AppraisalChat () {
    const name = "Jeffrey"
    const history = useHistory();
    const toAppraisalPage = () => {
        history.push("/Appraisal");
    }


    return (
        <>
        <div className="container text-center pt-5">
            <div className="row align-items-center">
                <div className="col-6">
                    <div className="h4"><strong>Chatting with {name} </strong></div>
                    <div id="chat-window" className="container">
                        <Chatbox/>
                    </div>
                </div>
                <div className="col-6">
                <button type="button" className="btn btn-primary text-light">Upload Photos</button>
                    <p className="text-secondary"><small>Uploaded Photos: [list]</small></p>
                    <button type="button" className="btn btn-primary text-light" onClick={toAppraisalPage}>End Chat</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default AppraisalChat;