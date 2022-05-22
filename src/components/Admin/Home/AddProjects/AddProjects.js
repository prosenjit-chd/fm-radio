import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../../hooks/useAuth';

const AddProjects = () => {
    const [project, setProject] = useState({});
    const { token } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...project };
        newInfo[field] = value;
        setProject(newInfo);
    }

    const handleSubmitProduct = e => {
        e.preventDefault();
        const newProject = {
            ...project
        }

        const authToken = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }
        newProject["status"] = true;

        axios.post('https://singlespace.herokuapp.com/api/projects', newProject, authToken)
            .then(res => {
                if (res) {
                    swal({
                        title: "Sucessful!",
                        text: "Successfully added!",
                        icon: "success",
                        button: "OK",
                    });
                    e.target.reset();
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '700px' }}>
                <h3 className="text-center fw-bold mb-2">Add Projects</h3>
                <Form onSubmit={handleSubmitProduct}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridModel">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control name="title" onBlur={handleOnBlur} type="text" placeholder="Enter Project Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridMadeBy">
                            <Form.Label>Client Name</Form.Label>
                            <Form.Control name="client" onBlur={handleOnBlur} type="text" placeholder="Client Name" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Technology</Form.Label>
                            <Form.Control name="technology" onBlur={handleOnBlur} type="text" placeholder="Example- React, Node" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>LiveSite</Form.Label>
                            <Form.Control name="livesite" onBlur={handleOnBlur} type="text" placeholder="Example- www.prosenjitapp.com" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <Form.Label>Details Add one by one with Coma</Form.Label>
                            <Form.Control name="description" onBlur={handleOnBlur} placeholder="Write details" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridImg">
                        <Form.Label>Cover Photo URL</Form.Label>
                        <Form.Control name="coverphoto" onBlur={handleOnBlur} placeholder="http://example.jpg" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridPrice">
                            <h4 className='text-bold'>Details Image (Add one by one with Coma)</h4>
                            <Form.Control name="imgsrc" onBlur={handleOnBlur} placeholder="http://ab.jpg,     http://kj.jpg,     http://wr.jpg," />
                        </Form.Group>
                    </Row>

                    <Button id="tutor-submit" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Container>
    );
};

export default AddProjects;