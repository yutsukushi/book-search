import React from "react";
import "./style.css";

function Form({q, handleInputChange, handleFormSubmit}) {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Book Search</h5>
            
                <div class="input-group mb-3">
                    <input type="text" class="form-control"
                     placeholder="Search for books" 
                     value={q}
                     onChange={handleInputChange}
                     aria-label="Search for books" aria-describedby="basic-addon2"/>
                    <div class="input-group-append">
                    <button type="submit" onClick={handleFormSubmit} className="btn btn-success">
                        Search
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form;