function About() {
    const appraisers = [
        {
            id:0,
            name: "Katrina Hebert",
            img: "images\\headshots\\person1.jpg"
        },
        {
            id:1,
            name: "Yannick Carlson",
            img: "images\\headshots\\person2.jpg"
        },
        {
            id:2,
            name: "Cassandra MacMillan",
            img: "images\\headshots\\person3.jpg"
        },
        {
            id:3,
            name: "Arnold Toews",
            img: "images\\headshots\\person4.jpg"
        }
        
    ]

    const technicians = [
        {
            id:4,
            name: "Jo-Anne Gregory",
            img: "images\\headshots\\person5.jpg"
        },
        {
            id:5,
            name: "Derrick Poole",
            img: "images\\headshots\\person6.jpg"
        },
        {
            id:6,
            name: "Bobby Martin",
            img: "images\\headshots\\person7.jpg"
        },
        {
            id:7,
            name: "Austin Dufresne",
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
                        <p>75 Laurier Ave E, Ottawa, ON K1N 6N5</p>
                    </div>
                    <div className="col-4">
                        <div className="h4"><strong>Hours of Operation</strong></div>
                        <div className="row">
                            <div className="col-6">
                        <p><strong>Mon:</strong> 10:00 - 17:30</p>
                        <p><strong>Tue:</strong> 10:00 - 17:30</p>
                        <p><strong>Wed:</strong> 10:00 - 17:30</p>
                        <p><strong>Thu:</strong> 10:00 - 17:30</p>
                        </div>
                        <div className="col-6">
                        <p><strong>Fri:</strong> 12:00 - 17:30</p>
                        <p><strong>Sat:</strong> Closed</p>
                        <p><strong>Sun:</strong> Closed</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="h4"><strong>Contact Information</strong></div>
                        <p><strong>Phone:</strong> (123) 456 7890</p>
                        <p><strong>email:</strong> retrogames@example.com</p>
                        <p><strong>P.O. Box:</strong>75 Laurier Ave E, Ottawa, ON K1N 6N5</p>
                    </div>
                </div>
            </div>
            <div className="h1 text-center text-primary"><strong>Staff</strong></div>
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