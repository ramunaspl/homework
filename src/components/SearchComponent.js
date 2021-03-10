import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import moviesvg from '../assets/icons/movie.svg';
import searchsvg from '../assets/icons/search.svg';


class Search extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Container className="maincontainer">
                <Row className="searchbar">
                    <Col className="d-flex align-items-center justify-content-center">

                        <img className="movie-svg" src={moviesvg} alt="movie-logo" />
                        <input
                            autoComplete="off"
                            type="text"
                            placeholder="Enter movie name"
                        // value={query}
                        // onChange={handleSubmit}
                        />
                        <button type="submit">
                            <img src={searchsvg} alt="movie-logo" />
                        </button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Search;