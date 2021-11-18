import Form from 'react-bootstrap/Form'

const DropDown = ({ resources, selectedResource, setSelectedResource }) => {
    return (<Form.Group>
        <Form.Label>Choose your resource</Form.Label>
        <Form.Control
            as="select"
            value={selectedResource}
            onChange={e => setSelectedResource(e.target.value)}
        >
            {
                resources.map((r, i) => (
                    <option key={i}>{r}</option>
                ))
            }
        </Form.Control>
    </Form.Group>
    )
}

export default DropDown