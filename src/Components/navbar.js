import "bootstrap";
function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand bg-primary">
                <div className="container-fluid d-flex justify-content-start ps-5">
                    <a className="nav-link fw-bold fs-5 text-light" href="/"><em>Retro Games, Inc</em></a>
                </div>
                <div className="container-fluid justify-content-end d-flex pe-5">
                    <ul className="nav navbar-nav">
                        <li className="nav-item px-4">
                            <a className="nav-link  text-light" href="About">About</a>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link  text-light" href="Buy">Buy</a>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link  text-light" href="Sell">Sell</a>
                        </li>
                        <li className="nav-item px-4">
                            <a className="nav-link  text-light" href="Repair">Repair</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;