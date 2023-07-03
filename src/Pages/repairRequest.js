import OrderSummary from "../Components/orderSummary";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function RepairRequest() {
    const history = useHistory();
    const toConfirmation = () => {
        history.push("/RepairConfirm");
    }
    return (
        <>
            <div className="h1 text-center text-primary"><strong>Repair Request Form</strong></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 border-end text-center">
                        <div className="h4"><strong>Form</strong></div>
                        <div className="d-flex flex-row my-1">
                            <p className="me-3 h4"><strong>Name:</strong></p>
                            <input className="flex-fill"></input>
                        </div>
                        <div className="d-flex flex-row my-1">
                            <p className="me-3 h4"><strong>Email:</strong></p>
                            <input className="flex-fill"></input>
                        </div>
                        <div className="d-flex flex-row my-1 pb-4 border-bottom">
                            <p className="me-3 h4"><strong>Address:</strong></p>
                            <input className="flex-fill"></input>
                        </div>
                        <div className="d-flex flex-row my-1 pb-4">
                            <p className="me-3 h4"><strong>Device:</strong></p>
                            <input className="flex-fill"></input>
                        </div>
                        <div className="my-1 pb-4">
                            <p className="me-3 h4 text-start"><strong>Please describe the issue:</strong></p>
                            <textarea className="w-100"></textarea>
                        </div>
                    </div>
                    <div className="col-4 boreder-end">
                        <OrderSummary items={[{
                            id: 0,
                            name: "Repair",
                            price: 49.99
                        }]} note={"We will send a confirmation email after your order. A proprietary packing box will be sent to the address provided"} onConfirm={toConfirmation} />
                    </div>
                </div>
            </div>

        </>
    )

}

function RepairConfirm() {
    return (
        <>
            <div className="vh-100 pt-5">
                <div className="h1 text-center text-primary "><strong>Your Repair Request was sent!</strong></div>
                <div className="h5 text-center ">A confirmation will be sent to you shortly.</div>
            </div>
        </>
    )
}

export { RepairRequest, RepairConfirm };