function PackingInstructions() {
    return (<>
        <div className="h1 text-center text-primary"><strong>Packing your item for shipment</strong></div>
        <div className="h5 text-center">To ensure your item's safe arrival, please follow these steps as you pack it.</div>
        <div id="carousel-instructions" className="carousel slide text-center bg-dark py-5 mx-5 rounded" >

            <div className="carousel-inner  py-5">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4 text-start ps-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="white" className="bi bi-1-circle" viewBox="0 0 16 16">
                                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                                </svg>
                                <p className="text-white pt-4">
                                    Use the included bubble wrap and tape to surround your item. Ensure that all sides of the item are protected by an even thickness of bubble wrap.
                                </p>
                            </div>
                            <div className="col-6 text-center">
                                <img src="images\misc\placeholder.png" className="img-fluid w-75"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4 text-start ps-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="white" class="bi bi-2-circle" viewBox="0 0 16 16">
                                    <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
                                </svg>
                                <p className="text-white pt-4">
                                    Move the box seperators to give enough space for your item to fit tightly into the box.
                                </p>
                            </div>
                            <div className="col-6 text-center">
                                <img src="images\misc\placeholder.png" className="img-fluid w-75"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-4 text-start ps-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="white" class="bi bi-3-circle" viewBox="0 0 16 16">
                                    <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Z" />
                                </svg>
                                <p className="text-white pt-4">
                                    Close the box and seal with provided tape.
                                </p>
                            </div>
                            <div className="col-6 text-center">
                                <img src="images\misc\placeholder.png" className="img-fluid w-75"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel-instructions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel-instructions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carousel-instructions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel-instructions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel-instructions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        <p className="text-center"><strong>Having trouble packing your item? Call us for assistance at [phone number]</strong></p>
    </>
    )
}

export default PackingInstructions