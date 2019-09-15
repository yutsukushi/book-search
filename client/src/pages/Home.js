import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Form from "../components/Form"

class Home extends Component {
    state = {
        books: [],
        q: ""
    }
    handleInputChange = event => {
        const {name, value } = event.target;
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
    render(){
        return(
            <Container>
                <Row>
                    <Col size="md-12">
                        <h1>Google Book Search</h1>
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
                                <h2>All Book INfo</h2>
                            </div>
                        ): (
                            <h2>NO book info</h2>
                        )}
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default Home;