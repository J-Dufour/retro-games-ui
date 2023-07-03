import { useState } from "react";
import ProductCard from "../Components/productCard";
import Sidebar from "../Components/sidebar";
import Search from "../Components/search";
import OrderSummary from "../Components/orderSummary";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
function Results() {
    

    //Filters *currently in use*

    const [allFilters, SetAllFilters] = useState([
            {
                id:0,
                cat: "price",
                name: "< $100",
                func: (item) => (item.price < 100),
                active: false
            },
            {
                id:1,
                cat: "price",
                name: "$100 - $200",
                func: (item) => (item.price > 100 && item.price < 200),
                active: true
            }
        ]
    );

    const [results, SetResults] = useState([
        {
            id: 0,
            name: "Product 1",
            img: "images\\misc\\placeholder.png",
            price: 59.99,
            description: "This is product 1."
        },
        {
            id: 1,
            name: "Product 2",
            img: "images\\misc\\placeholder.png",
            price: 49.99,
            description: "This is product 2!"
        },
        {
            id: 2,
            name: "Product 3",
            img: "images\\misc\\placeholder.png",
            price: 89.99,
            description: "This is product 3?"
        },
        {
            id: 3,
            name: "Product 4",
            img: "images\\misc\\placeholder.png",
            price: 429.99,
            description: "This is product 4,"
        }
    ])

    const [selProduct, SetSelProduct] = useState(results[0]);

    const [enableModal, SetEnableModal] = useState(false);

    const [startOrder, SetStartOrder] = useState(false);

    const getFilter = (id) => {
        for(let i = 0; i < allFilters.length; i++){
            if(allFilters[i].id == id){
                return allFilters;
            }
        }

        return null;
    }

    const addFilter = (id) => {
        var temp = getFilter(id);
        temp.active = true;
        SetAllFilters([...allFilters.filter((f) => (f.id != id)), temp]);

    }
    const removeFilter = (id) => {
        var temp = getFilter(id);
        temp.active = false;
        SetAllFilters([...allFilters.filter((f) => (f.id != id)), temp]);
    }

    const SeeMore = (data) => {
        SetEnableModal(true);
        SetSelProduct(data);
    }

    const order = (data) => {
        SetSelProduct(data);
        SetStartOrder(true);
    }

    const SeeLess = () => {
        SetEnableModal(false);
    }

   

    return (<>
        { startOrder ? (
            <> 
                <BuySummary selProduct={selProduct}/>
            </> ) : (<>
            <Search filters={allFilters} add={addFilter} remove={removeFilter} isSummary={false} />
            <div id="results" className="container-fluid pt-4">
                <div className="h1 text-center text-primary"><strong>Results</strong></div>
                <div className=" row row-cols-3 gy-3">
                    {
                        results.map((product) => (
                            <div key={product.id} className="col">
                                <ProductCard data={product} onSeeMore={SeeMore} onOrder={order} />
                            </div>
                        ))
                    }
                </div>
                {enableModal ? (<>
                    <div className="overlay">
                        <div >
                        <div className="container opacity-100 justify-content-start text-start m-0">
                            <Sidebar data={selProduct} onExit={SeeLess} />
                        </div>
                        </div>
                    </div>
                </>) : null}

            </div>

        </>)
                }</>
    );
                
}

function BuySummary({selProduct}){
    const history = useHistory();
    const toConfirmation = () => {
        history.push("/BuyConfirm");
    }
    return (<>
        <div className="h1 text-center text-primary"><strong>Product Order</strong></div>
            <div className="container pb-5">
                <div className="row justify-content-center">
                    <div className="col-5 border-end text-center">
                        <div className="h4"><strong>Product</strong></div>
                        <ProductCard data={selProduct} isSummary={true}/>
                        <div className="h4 mt-3 border-top"><strong>Personal Info</strong></div>
                        <div className="d-flex flex-row my-1">
                            <p className="me-3 h4"><strong>Name:</strong></p>
                            <input  className="flex-fill"></input>
                        </div>
                        <div className="d-flex flex-row my-1">
                            <p className="me-3 h4"><strong>Email:</strong></p>
                            <input className="flex-fill"></input>
                        </div>
                        <div className="d-flex flex-row my-1 pb-4">
                            <p className="me-3 h4"><strong>Address:</strong></p>
                            <input  className="flex-fill"></input>
                        </div>
                    </div>
                    <div className="col-4">
                        <OrderSummary items={[selProduct]} note={"We will send a confirmation email after your order. "} onConfirm={toConfirmation} />
                    </div>
                </div>
            </div>
    </>);
}

function BuyConfirmation(){
    return (
        <div className="vh-100 pt-5">
                <div className="h1 text-center text-primary "><strong>Your requested product(s) were ordered!</strong></div>
                <div className="h5 text-center ">A confirmation will be sent to you shortly.</div>
            </div>
    )
}



export {Results, BuyConfirmation};