function ProductCard({data, onSeeMore, onOrder, isSummary}){
    /*
    data should be in the form:
    {
        name: "name",
        img: "url",
        price: "price",

        
    }
    */

    const seeMoreClicked = () => {
        onSeeMore(data);
    }
    return (
        <>
        <div className="container border border-primary border-1">
            <div className="row p-4">
                <div className="col-4 ">
                    <img className="img-fluid" src={data.img} alt="Product Image"></img>
                </div>
                <div className="col-8">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div className="col-6">
                                <p><strong>{data.name}</strong></p>
                            </div>
                            <div className="col-6">
                                <p><strong>{`$${data.price}`}</strong></p>
                            </div>
                        </div>
                        {isSummary ? (<>
                            <p>{data.description}</p>
                        </>) : (
                        <div className="row h-50 justify-content-around ">
                            <div className="col-6">
                                <button type="button" className="btn btn-primary text-white" onClick={seeMoreClicked}><small>See More</small></button>
                            </div>
                            <div className="col-6">
                                <button type="button" className="btn btn-primary text-white" onClick={() => {onOrder(data)}}><small>Order Now</small></button>
                            </div>
                        </div>
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default ProductCard;