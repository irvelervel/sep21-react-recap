// I want to fetch some data from the search component
// I want to have a top component made like a input, a dropdown
// in the bottom part we're going to display some results based on that selection

import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import DropDown from "./DropDown"
import Results from "./Results"

const Search = () => {

    // it's HERE that I need to store the selected option in the dropdown
    // because it's not just useful for the DropDown component, but also
    // for eventually the Results component!

    const [selectedResource, setSelectedResource] = useState('posts')

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    {/* dropdown form element */}
                    <DropDown
                        resources={['posts', 'comments', 'albums', 'users', 'todos']}
                        selectedResource={selectedResource}
                        setSelectedResource={setSelectedResource}
                    />
                    {/* api results */}
                    <Results selectedResource={selectedResource} />
                </Col>
            </Row>
        </Container>
    )
}

export default Search