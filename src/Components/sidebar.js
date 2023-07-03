function Sidebar({ data, onExit }) {
    return (<>
        <div className="container bg-light border opacity-100 text-black text-top py-4 px-4 rounded">
            <div className="row">
                <div className="col-6">
                <p>{data.name}</p>
                </div>
                <div className="col-6 text-end">
                    <a onClick={onExit} > close</a>
                </div>
            </div>
            
            <div className="row ">
                <div className="col-8 h-100">
                    <img className="img-fluid h-50" src={data.img}></img>
                </div>
                <div className="col-4 container max-height">
                    <p>{data.price}</p>
                    <button type="button" className="btn btn-primary text-white"><small>Order Now</small></button>
                </div>
            </div>
            <p>{data.description}</p>
        </div>
    </>)
}

export default Sidebar;