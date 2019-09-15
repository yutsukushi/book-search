import React, { Component }from "react";
// import API from "../utils/api"
// import Navbar from "../components/Nav";
// import Jumbotron from "../components/Jumbotron";
// import Form from "../components/Form";
import Grid from "../components/Grid";
// import "./index.css";

class Saved extends Component {

    // page logic here

    render() {
        return (
            // saved cards populates saved page
            <Grid>
                {/* Search results populate here */}
                <ul>
                <div class="card">
                    <li>
                    <div class="card-body">
                        <h5 class="card-title">{this.props.bookTitle}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{this.props.author}</h6>
                        <p class="card-text">{this.props.summary}</p>
                        <button type="submit" class="btn btn-danger">Delete</button>
                    </div>
                    </li>
                </div>
                </ul>
                {/* ends here */}
            </Grid>
        )
    }
}

export default Saved;