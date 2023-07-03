import { useState } from "react";

function Search({filters, add, remove}) {
    const [showFilters, SetShowFilters] = useState(false);
    

    const toggleFilters = () => {
        SetShowFilters(!showFilters);
    }

   

    const handleCheck = (id, check) => {
        if(check){
            remove(id);
        } else {
            add(id);
        }
    }

    return (
        <div className="container w-100 pb-3 border">
            <div id="filters" className="collapse">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="h4">Price</div>
                            {
                                filters.map(
                                    (filter) => (
                                        <>
                                        {filter.cat === "price" && (<><div><input key={filter.id} type="checkbox" checked={filter.active} onChange={() => {handleCheck(filter.id, filter.active)}}/>
                                        <span>{filter.name}</span></div></>)}
                                        </>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex mt-3">
                
                <div className="border rounded-pill bg-light py-1 px-3">
                    test
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
                <div className="ms-auto border rounded bg-light p-2">
                    <a onClick={toggleFilters} className="text-decoration-none ms-auto" data-bs-toggle="collapse" href="#filters" role="button">{!showFilters ? (<span>Refine Search</span>) : (<span>See Less</span>)}</a>
                </div>
            </div>
        </div>
    )
}

export default Search;