function About() {
    const appraisers = [
        {
            id:0,
            name: "First Last",
            img: "images\\headshots\\person1.jpg"
        },
        {
            id:1,
            name: "First Last",
            img: "images\\headshots\\person2.jpg"
        },
        {
            id:2,
            name: "First Last",
            img: "images\\headshots\\person3.jpg"
        },
        {
            id:3,
            name: "First Last",
            img: "images\\headshots\\person4.jpg"
        }
        
    ]

    const technicians = [
        {
            id:4,
            name: "First Last",
            img: "images\\headshots\\person5.jpg"
        },
        {
            id:5,
            name: "First Last",
            img: "images\\headshots\\person6.jpg"
        },
        {
            id:6,
            name: "First Last",
            img: "images\\headshots\\person7.jpg"
        },
        {
            id:7,
            name: "First Last",
            img: "images\\headshots\\person8.jpg"
        }
    ]

    return (
        <>
            <div className="h1 text-center text-primary"><strong>Business Information</strong></div>
            <div className="container text-center pt-4">
                <div className="row">
                    <div className="col-4">
                        <div className="h4"><strong>Shipping Address</strong></div>
                        <p>content</p>
                    </div>
                    <div className="col-4">
                        <div className="h4"><strong>Hours of Operation</strong></div>
                        <p>content</p>
                    </div>
                    <div className="col-4">
                        <div className="h4"><strong>Contact Information</strong></div>
                        <p>content</p>
                    </div>
                </div>
            </div>
            <div className="display-4 text-center mt-6">Staff</div>
            <div className="container text-center pt-4">
                <div className="row">
                    <div className="col-6 border-end">
                        <div className="h4"><strong>Appraisers</strong></div>
                        <div className="container">
                            <div className="row">
                                {appraisers.map((a) => (
                                    <div key={a.id} className="col-3">
                                        <img className="img-fluid" src={a.img} alt="test"></img>
                                        <p>{a.name}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-6 border-start">
                        <div className="h4"><strong>Technicians</strong></div>
                        <div className="container">
                            <div className="row">
                                {technicians.map((a) => (
                                    <div key={a.id} className="col-3">
                                        <img className="img-fluid" src={a.img} alt="test"></img>
                                        <p>{a.name}</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About