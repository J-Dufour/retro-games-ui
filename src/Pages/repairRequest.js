import { useState } from "react";
import InputField from "../Components/inputField";
import OrderSummary from "../Components/orderSummary";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
function RepairRequest() {

    const history = useHistory();

    const [valid, SetValid] = useState(true);

    const [nameField, SetNameField] = useState("");
    const [emailField, SetEmailField] = useState("");
    const [addressField, SetAddressField] = useState("");
    const [deviceField, SetDeviceField] = useState("");

    const toConfirmation = () => {
        //ensure input is valid
        if(nameField === "" || emailField === "" || addressField === "" || deviceField === ""){
            SetValid(false);
        }else{
        history.push("/RepairConfirm", {email: emailField});
        }
    }

    return (
        <>
            <div className="h1 text-center text-primary"><strong>Repair Request Form</strong></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 border-end text-center">
                        <div className="h4"><strong>Form</strong></div>
                        <div className="d-flex flex-row my-1">
                            <InputField name={"Name: "} validRegex={RegExp(".+")} validationMsg={"Must be at least one character long"} SetInput={SetNameField}/>
                        </div>
                        <div className="d-flex flex-row my-1">
                        <InputField name={"Email: "} validRegex={RegExp("@.+\\..+")} validationMsg={"Must be at least one character long and contain an @ character followed by a domain."} SetInput={SetEmailField}/>
                        </div>
                        <div className="d-flex flex-row my-1 pb-4 border-bottom">
                        <InputField name={"Address: "} validRegex={RegExp(".+")} validationMsg={"Must be at least one character long"} SetInput={SetAddressField}/>
                        </div>
                        <div className="d-flex flex-row my-1 pb-4">
                        <InputField name={"Device: "} validRegex={RegExp(".+")} validationMsg={"Must be at least one character long"} SetInput={SetDeviceField}/>
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

                        {!valid && (<p className="text-danger">Please ensure all fields are correctly filled in.</p>)}
                    </div>
                </div>
            </div>

        </>
    )

}

function RepairConfirm() {
    const history = useHistory();

    return (
        <>
            <div className="vh-100 pt-5">
                <div className="h1 text-center text-primary "><strong>Your Repair Request was sent!</strong></div>
                <div className="h5 text-center ">A confirmation will be sent to you shortly at {history.location.state.email} .</div>
            </div>
        </>
    )
}

export { RepairRequest, RepairConfirm };