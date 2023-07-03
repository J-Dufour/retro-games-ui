import { useState } from "react"

function OrderSummary({ items, note, onConfirm }) {
    var subtotal = 0;

    for(let i = 0; i < items.length; i++){
            subtotal+=items[i].price;
    }

    var hst = Number(subtotal*0.15).toFixed(2);
    var total = Number(subtotal*1.15).toFixed(2);

    return (<>
        <div className="h4 text-center"><strong>Order Summary</strong></div>
        <div id="receipt" className="container pt-4">
            {items.map((i) => (
            <div key={i.id} className="row justify-content-between my-2">
                <div className="col-6">
                    {i.name + ":"}
                </div>
                <div className="col-3 text-end">{i.price}</div>
            </div>
            ))}
            <div className="row justify-content-between border-top my-2">
                <div className="col-2">
                    Subtotal:
                </div>
                <div className="col-3 text-end">{subtotal}</div>
            </div>
            <div className="row justify-content-between my-2">
                <div className="col-2">
                    HST:
                </div>
                <div className="col-3 text-end">{hst}</div>
            </div>
            <div className="row justify-content-between border-top my-2">
                <div className="col-2">
                    Total:
                </div>
                <div className="col-3 text-end">{total}</div>
            </div>

        </div>
        <div id="Note" className="text-center py-5">
            <p><strong>{note}</strong></p>
        </div>
        <div className="text-center">
            <button type="button" className="btn btn-primary" onClick={onConfirm}>Confirm Order</button>
        </div>
    </>)
}

export default OrderSummary;