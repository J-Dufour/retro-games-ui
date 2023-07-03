import { useHistory } from "react-router-dom/cjs/react-router-dom";
function Appraisal() {
    const history = useHistory();
    const toChatPage = () => {
        history.push("/AppraisalChat");
    }
    return(
        <>
         <div className="h1 text-center text-primary"><strong>Item Appraisal</strong></div>
         <div className="h5 text-center">Follow these steps to get your item Appraised!</div>
        <div className="container">
            <div className="row text-center">
                <div className="col-6 px-5">
                    <div className="h4"><strong>1. Take Photos</strong></div>
                    <p>Ensure to take photos from <u>all sides</u>. We accept images in .jpeg, .png and .webp formats.</p>
                    <div className="h4"><strong>2. Talk with an Expert</strong></div>
                    <p>We'll look at your item and ask you a few questions to determine its worth.</p>
                    <div className="h4"><strong>3. Get an Estimate</strong></div>
                    <p>We'll give you an estimate, and send you our proprietary box to pack your item in.</p>
                </div>
                <div className="col-6">
                    <div className="h4"><strong>Ready to Chat?</strong></div>
                    <p>Upload your photos and get an estimate today!</p>
                    <button type="button" className="btn btn-primary text-light">Upload Photos</button>
                    <p className="text-secondary"><small>Uploaded Photos: [list]</small></p>

                    <p className="mt-3 pb-0 mb-0 mt-5"><strong>Hours of Operation: [hours]</strong></p>
                    <p className="pt-0 mt-0 pb-0 mb-1"><strong>Estimated Wait Time: [wait time]</strong></p>
                    <button onClick={toChatPage} type="button" className="btn btn-primary text-light">Chat Now!</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Appraisal;