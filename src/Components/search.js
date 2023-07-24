import { useState } from "react";
import FilterTag from "./filterTag";

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
                    <div className="row pt-4">
                        <div className="col-3">
                            <div className="h4">Product Type</div>
                            {
                                filters.map(
                                    (filter) => {
                                        if(filter.cat === "type"){
                                        return (<section key={filter.id}><input type="checkbox" checked={filter.active} onChange={() => {handleCheck(filter.id, filter.active)}}/>
                                        <span className="px-3">{filter.name}</span></section>);
                                        } else {
                                            return null;
                                        }
                                    }
                                )
                            }
                        </div>
                        <div className="col-3">
                            <div className="h4">Brand</div>
                            {
                                filters.map(
                                    (filter) => {
                                        if(filter.cat === "brand"){
                                        return (<section key={filter.id}><input type="checkbox" checked={filter.active} onChange={() => {handleCheck(filter.id, filter.active)}}/>
                                        <span className="px-3">{filter.name}</span></section>);
                                        } else {
                                            return null;
                                        }
                                    }
                                )
                            }
                        </div>
                        <div className="col-3">
                            <div className="h4">Price</div>
                            {
                                filters.map(
                                    (filter) => {
                                        if(filter.cat === "price"){
                                        return (<section key={filter.id}><input type="checkbox" checked={filter.active} onChange={() => {handleCheck(filter.id, filter.active)}}/>
                                        <span className="px-3">{filter.name}</span></section>);
                                        } else {
                                            return null;
                                        }
                                    }
                                )
                            }
                        </div>
                        <div className="col-3">
                            <div className="h4">Release Year</div>
                            {
                                filters.map(
                                    (filter) => {
                                        if(filter.cat === "age"){
                                        return (<section key={filter.id}><input type="checkbox" checked={filter.active} onChange={() => {handleCheck(filter.id, filter.active)}}/>
                                        <span className="px-3">{filter.name}</span></section>);
                                        } else {
                                            return null;
                                        }
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex mt-3">
                {filters.map(
                    (filter) => {
                        if(filter.active) {
                            return (<FilterTag key={filter.id} name={filter.name} onDelete={() => {handleCheck(filter.id, true)}}/>);
                        } else {
                            return null;
                        }
                    }
                )}
                
                <div className="ms-auto border rounded bg-light p-2">
                    <a onClick={toggleFilters} className="text-decoration-none ms-auto" data-bs-toggle="collapse" href="#filters" role="button">{!showFilters ? (<span>Refine Search</span>) : (<span>See Less</span>)}</a>
                </div>
            </div>
        </div>
    )
}

export default Search;