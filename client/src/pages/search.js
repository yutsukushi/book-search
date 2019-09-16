import React, { Component }from "react";
// import API from "../utils/api";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form";
import Jumbotron from "../components/Jumbotron";
import SearchResults from "../components/SearchResults";
// import "./index.css";

class Search extends Component {

    state = {
        books: [],
        results: [],
        q: ""
    }

    // componentDidMount() {

    // }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }
    handleFormSubmit = event => {
        event.preventDefault();
        this.getBook();
    }
    getBook = () => {
        console.log("get book fucntion");
        console.log("book name: " +this.state.q);
    }
    render() {
        return(
            <Container>
                {/* <Jumbotron /> */}
                <Row>
                    <Col size="md-12">
                    <Jumbotron />
                    </Col>
                    <Col size="md-12">
                        <Form handleInputChange ={this.handleInputChange}
                            handleFormSubmit={this.handleFormSubmit}
                            q={this.state.q}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-12">
                        {this.state.books.length ? (
                            <div>
                                <h2>All Book Results</h2>
                            </div>
                        ): (
                            <h2>No books found</h2>
                        )}
                        <SearchResults results={this.state.results} />
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Search;