import { useHistory } from "react-router-dom/cjs/react-router-dom";
function Sell(){
    const history = useHistory();
    const toAboutPage = () => {
        history.push("/About");
    }
    const toAppraisalPage = () => {
        history.push("/Appraisal");
    }

    const toPackingPage = () => {
        history.push("/PackingInstructions");
    }

    return (
        <>
        <div className="h1 text-center text-primary"><strong>Looking to sell an item?</strong></div>
        <div className="h5 text-center">Follow these simple steps to sell your retro gear!</div>
        <div className="container">
            <div className="row p-0 text-center mt-5">
                <div className="col-4 border-end pb-5">
                    <div className="h4">
                        <strong>Get it Appraised</strong>
                    </div>
                    <img className="img-fluid w-75 pt-2" src="images\\misc\\placeholder.png"></img>
                    <p className=" pt-5">Talk to one of our dedicated appraisal staff to get an estimate for the value of your item!</p>
                    <button onClick={toAppraisalPage} type="button" className="btn btn-primary text-light">Get Appraisal</button>
                </div>
                <div className="col-4 border-end border-start pb-5">
                    <div className="h4">
                        <strong>Pack it Up</strong>
                    </div>
                    <img className="img-fluid w-75 pt-2" src="images\\misc\\placeholder.png"></img>
                    <p className=" pt-5">Once you receive our proprietary box, follow our instructions to pack your item up safely.</p>
                    <button onClick={toPackingPage} type="button" className="btn btn-primary text-light">Get Packing Instructions</button>
                </div>
                <div className="col-4 border-start pb-5">
                    <div className="h4">
                        <strong>Ship It</strong>
                    </div>
                    <img className="img-fluid w-75 pt-2" src="images\\misc\\placeholder.png"></img>
                    <p className=" pt-5">Send us your item, and we'll send you our payment as soon as it arrives!</p>
                    <button onClick={toAboutPage} type="button" className="btn btn-primary text-light">Get Shipping Address</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Sell;