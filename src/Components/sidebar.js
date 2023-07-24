import ReviewBox from "./reviewbox";

function Sidebar({ data, onExit, onOrder }) {

    const generateCarousel = (reviews) => {
        var out = [];
        if (reviews.length < 1) {
            return (<p>No reviews available for this product.</p>)
        } else {
            out.push(<div key={reviews[0].id} className="carousel-item active">
                <ReviewBox review={reviews[0]} />
            </div>)

            for (let i = 1; i < reviews.length; i++) {
                out.push(<div key={reviews[i].id} className="carousel-item">
                    <ReviewBox review={reviews[i]} />
                </div>)
            }
            return out;
        }

    }

    return (<>
        <div className="container bg-light border opacity-100 text-black text-top py-4 px-4 rounded">
            <div className="row">
                <div className="col-6">
                    <p className="h4"><strong>{data.name}</strong></p>
                </div>
                <div className="col-6 text-end">
                    <a onClick={onExit} > <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg></a>
                </div>
            </div>

            <div className="row ">
                <div className="col-8 h-100">
                    <img className="img-fluid h-50" src={data.img}></img>
                </div>
                <div className="col-4 container max-height">
                    <p>${Number(data.price).toFixed(2)}</p>
                    <button type="button" onClick={() => { onOrder(data) }} className="btn btn-primary text-white"><small>Order Now</small></button>
                </div>
            </div>
            <div className="text-center h4 mt-4">Description</div>
            <p>{data.description}</p>
            <div className="text-center h4 mt-4">Ratings</div>

            <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                <div className="carousel-inner ">
                    {generateCarousel(data.reviews)}
                </div>

                {data.reviews.length > 1 &&(<>
                <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </>)}

            </div>

        </div>
    </>)
}

export default Sidebar;