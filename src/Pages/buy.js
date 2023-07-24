import { useState } from "react";
import ProductCard from "../Components/productCard";
import Sidebar from "../Components/sidebar";
import Search from "../Components/search";
import OrderSummary from "../Components/orderSummary";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import InputField from "../Components/inputField";
function Results() {
    

    //Filters *currently in use*

    const [allFilters, SetAllFilters] = useState([
            {
                id: 0,
                cat: "price",
                name: "< $100",
                func: (item) => (item.price <= 100),
                active: false
            },
            {
                id: 1,
                cat: "price",
                name: "$100 - $200",
                func: (item) => (item.price >= 100 && item.price <= 200),
                active: false
            },
            {
                id: 2,
                cat: "price",
                name: "$200 - $500",
                func: (item) => (item.price >= 200 && item.price <= 500),
                active: false
            },
            {
                id: 3,
                cat: "price",
                name: "> $500",
                func: (item) => (item.price >= 500),
                active: false
            },
            {
                id: 4,
                cat: "type",
                name: "Console",
                func: (item) => (item.type === "Console"),
                active: false
            },
            {
                id: 5,
                cat: "type",
                name: "Game",
                func: (item) => (item.type === "Game"),
                active: false
            },
            {
                id: 6,
                cat: "type",
                name: "Accessory",
                func: (item) => (item.type === "Accessory"),
                active: false
            },
            {
                id: 7,
                cat: "type",
                name: "Console Bundle",
                func: (item) => (item.type === "Console Bundle"),
                active: false
            },
            {
                id: 8,
                cat: "brand",
                name: "Nintendo",
                func: (item) => (item.brand === "Nintendo"),
                active: false
            },
            {
                id: 9,
                cat: "brand",
                name: "Xbox",
                func: (item) => (item.brand === "Xbox"),
                active: false
            },
            {
                id: 10,
                cat: "brand",
                name: "PlayStation",
                func: (item) => (item.brand === "PlayStation"),
                active: false
            },
            {
                id: 11,
                cat: "brand",
                name: "SEGA",
                func: (item) => (item.brand === "SEGA"),
                active: false
            },
            {
                id: 12,
                cat: "age",
                name: "1970 - 1980",
                func: (item) => (item.year <= 1980),
                active: false
            },
            {
                id: 13,
                cat: "age",
                name: "1980 - 1990",
                func: (item) => (item.year >= 1980 && item.year <= 1990),
                active: false
            },
            {
                id: 14,
                cat: "age",
                name: "1990 - 2000",
                func: (item) => (item.year >= 1990 && item.year <= 2000),
                active: false
            },
            {
                id: 15,
                cat: "age",
                name: "> 2000",
                func: (item) => (item.year > 2000),
                active: false
            }
        ]
    );

    const [results, SetResults] = useState([
        {
            id: 0,
            name: "Super Mario Bros.",
            img: "images\\games\\superMarioBrosCover.jpg",
            year: 1983,
            price: 89.99,
            type: "Game",
            brand: "Nintendo",
            description: "Level up your collection with one of the most influencial video games in history! Revisit the classic mario game that started it all.",
            reviews: [{
                id: 0,
                rating: 4,
                title: "Good game",
                content: "Was one of my favourite games as a kid. Delivery was fast!"
            },
            {
                id: 1,
                rating: 5,
                title: "Awesome",
                content: "Greatest game on earth"
            }]
        },
        {
            id: 1,
            name: "Duck Hunt/Super Mario Bros. NES Bundle",
            img: "images\\bundles\\nintendoBundle.webp",
            year: 1988,
            price: 249.99,
            type: "Console Bundle",
            brand: "Nintendo",
            description: "Get two of the most popular NES games in one with this exciting bundle! Includes two (2) NES controllers.",
            reviews: [{
                id: 0,
                rating:5,
                title: "Best Deal",
                content: "This bundle has two best NES games and comes at such a low price you're wonder if they even made a profit. Definite buy for Nintendo fans."
            }]
        },
        {
            id: 2,
            name: "Gamecube Controller (Purple)",
            img: "images\\accessories\\gamecubeCon.webp",
            year: 2001,
            price: 69.99,
            type: "Accessory",
            brand: "Nintendo",
            description: "A standard controller for the Nintendo Gamecube.",
            reviews: [{
                id: 0,
                rating:3,
                title: "Could be better",
                content: "The controller is pretty average, but the delivery was quite slow. Not gonna lie, a little dissapointed."
            },{
                id: 1,
                rating: 4,
                title: "Not bad",
                content: "I always liked the feel of the gamecube controllers. The one I got was a fine addition to my collection."
            }]
        },
        {
            id: 3,
            name: "Nintendo 64",
            img: "images\\consoles\\n64.jpg",
            year: 1996,
            price: 179.99,
            type: "Console",
            brand: "Nintendo",
            description: "Relive your childhood with Nintendo's first leap into 3D graphics! NOTE: does NOT include Nintendo 64 controllers",
            reviews: [{
                id: 0,
                rating: 3,
                title: "DOES NOT COME WITH CONTROLLERS",
                content: "I bought this wanting to try out an old cartridge I found in the attic. Lo and behold, this console did not come with any controllers. Worked fine when I got one, though."
            }]
        },
        {
            id: 4,
            name: "Sega Genesis Bundle",
            img: "images\\bundles\\segaBundle.webp",
            year: 1989,
            price: 299.99,
            type: "Console Bundle",
            brand: "SEGA",
            description: "This bundle includes a SEGA Genesis console, one (1) controller, and a copy of Sonic The Hedgehog.",
            reviews: [{
                id: 0,
                rating: 4,
                title: "Genesis Does!",
                content: "Great price, great game."
            }]
        },
        {
            id: 5,
            name: "Sonic The Hedgehog 2",
            img: "images\\games\\sonic2.jpg",
            year: 1992,
            price: 59.99,
            type: "Game",
            brand: "SEGA",
            description: "The beloved sequel to the classic \"Sonic The Hedgehog\", now with Tails and Knuckles!",
            reviews: [{
                id: 0,
                rating: 5,
                title: "Better than Sonic 1",
                content: "Yeah, you heard me. This is leagues better than the original! Delivery was very fast."
            }]
        },
        {
            id: 6,
            name: "Atari 2600",
            img: "images\\consoles\\atari2600.jpg",
            year: 1977,
            price: 749.99,
            type: "Console",
            brand: "Atari",
            description: "One of the few remaining original Atari 2600 consoles, which kickstarted the at-home video gaming market. ",
            reviews: []
        },
        {
            id: 7,
            name: "PlayStation 1",
            img: "images\\consoles\\ps1.webp",
            year: 1994,
            price: 149.99,
            type: "Console",
            brand: "PlayStation",
            description: "The first of Sony's hit console line!",
            reviews: [{
                id:0,
                rating: 5,
                title: "Better than expected",
                content: "I never had this console when it first came out. Bought it on a whim with a couple of games, and had a blast!"
            }]
        },
        {
            id: 8,
            name: "Crash Bandicoot",
            img: "images\\games\\crash.png",
            year: 1996,
            price: 29.99,
            type: "Game",
            brand: "PlayStation",
            description: "Get yourself a copy of one of the bestselling PlayStation games.",
            reviews: [{
                id:0,
                rating: 4,
                title: "Very cool",
                content: "It was good in 1996, and it's still good today."
            }]
        },
        {
            id: 9,
            name: "Xbox Elite Force Pack (Limited Edition)",
            img: "images\\bundles\\xbox.jpg",
            year: 2001,
            price: 299.99,
            type: "Console Bundle",
            brand: "Xbox",
            description: "This bundle comes with a special edition Halo-themed Xbox, a controller, and a copy of the original Halo game.",
            reviews: [{
                id:0,
                rating: 5,
                title: "TAKE THAT PLAYSTATION",
                content: "Xbox will forever be the better console. Want proof? look at this awesome bundle."
            }]
        }
    ])

    const [selProduct, SetSelProduct] = useState(results[0]);

    const [enableModal, SetEnableModal] = useState(false);

    const [startOrder, SetStartOrder] = useState(false);


    



    const getFilter = (id) => {
        for(let i = 0; i < allFilters.length; i++){
            if(allFilters[i].id == id){
                return allFilters[i];
            }
        }

        return null;
    }

    const addFilter = (id) => {
        var temp = getFilter(id);
        temp.active = true;
        var newArr = [...allFilters.filter((f) => (f.id != id))]
        newArr.splice(id,0, temp)
        SetAllFilters(newArr);


    }
    const removeFilter = (id) => {
        var temp = getFilter(id);
        temp.active = false;
        var newArr = [...allFilters.filter((f) => (f.id != id))]
        newArr.splice(id,0, temp)
        SetAllFilters(newArr);
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

    const matchesFilters = (product) => {
        var anyFilter = false;
        for(let i = 0; i < allFilters.length; i++) {
            var filter = allFilters[i];
            if(filter.active){
                anyFilter = true;
                if(filter.func(product)){
                    console.log("hey");
                    return true;
                }
            }
        }
        return !anyFilter; // if no filters active, the product passes
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
                        results.map((product) => {
                            if(matchesFilters(product) ){
                                console.log("heyo");
                                return (<div key={product.id} className="col">
                                    <ProductCard data={product} onSeeMore={SeeMore} onOrder={order} />
                                </div>);
                            } else {
                                return null;
                            }
                        })
                    }
                    
                </div>
                {enableModal ? (<>
                    <div className="overlay">
                        <div >
                        <div className="container opacity-100 justify-content-start text-start m-0">
                            <Sidebar data={selProduct} onOrder={order} onExit={SeeLess} />
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
   
    const [valid, SetValid] = useState(true);

    const [nameField, SetNameField] = useState("");
    const [emailField, SetEmailField] = useState("");
    const [addressField, SetAddressField] = useState("");

    const toConfirmation = () => {
        //ensure input is valid
        if(nameField === "" || emailField === "" || addressField === ""){
            SetValid(false);
        }else{
        history.push("/BuyConfirm", {email: emailField});
        }
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
                        <InputField name={"Name: "} validRegex={RegExp(".+")} validationMsg={"Must be at least one character long"} SetInput={SetNameField}/>
                        </div>
                        <div className="d-flex flex-row my-1">
                        <InputField name={"Email: "} validRegex={RegExp("@.+\\..+")} validationMsg={"Must be at least one character long and contain an @ character followed by a domain."} SetInput={SetEmailField}/>
                        </div>
                        <div className="d-flex flex-row my-1 pb-4">
                        <InputField name={"Address: "} validRegex={RegExp(".+")} validationMsg={"Must be at least one character long"} SetInput={SetAddressField}/>
                        </div>
                    </div>
                    <div className="col-4">
                        <OrderSummary items={[selProduct]} note={"We will send a confirmation email after your order. "} onConfirm={toConfirmation} />
                        {!valid && (<p className="text-danger">Please ensure all fields are correctly filled in.</p>)}
                    </div>
                </div>
            </div>
    </>);
}

function BuyConfirmation(){
    const history = useHistory();

    return (
        <div className="vh-100 pt-5">
                <div className="h1 text-center text-primary "><strong>Your requested product(s) were ordered!</strong></div>
                <div className="h5 text-center ">A confirmation will be sent to you shortly at {history.location.state.email}.</div>
            </div>
    )
}



export {Results, BuyConfirmation};