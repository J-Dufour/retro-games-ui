import { useHistory } from "react-router-dom/cjs/react-router-dom";
function Repair() {
    const history = useHistory();
    const toRequestPage = () => {
        history.push("/RepairRequest");
    }
    return (<>
        <div className="h1 text-center text-primary"><strong>Bring your console back to proper working order.</strong></div>
        <div className="display-5 text-center"><strong>Why Choose Us?</strong></div>
        <div className="container pt-5">
            <div className="row text-center justify-content-center gx-5">
                <div className="col-3">
                    <img className="img-fluid w-75" src="images\misc\placeholder.png"></img>
                    <div className="h4"><strong>Speed</strong></div>
                    <p className="text-start">Our technicicans are among the fastest in the field.</p>
                </div>
                <div className="col-3">
                    <img className="img-fluid w-75" src="images\misc\placeholder.png"></img>
                    <div className="h4"><strong>Quality</strong></div>
                    <p className="text-start">With over 60 years of cumulative experience, you can rest assured that your console is in safe hands.</p>
                </div>
                <div className="col-3">
                    <img className="img-fluid w-75" src="images\misc\placeholder.png"></img>
                    <div className="h4"><strong>Ease</strong></div>
                    <p className="text-start">Just fill out a repair request and pack your item, we'll handle the rest.</p>
                </div>
            </div>
        </div>
        <div className="container text-center pb-4">
        <p className="text-secondary">Want to make your console good as new? Start by filling out our request form below.</p>
        <button type="button" className="btn btn-primary text-white" onClick={toRequestPage}>Request Repair</button>
        </div>
    </>)
}

export default Repair;