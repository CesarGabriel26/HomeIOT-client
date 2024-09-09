// src/pages/Login.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { register } from '../../utils/ApiHandler/User';

function Singin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Criando o objeto de usuário
      const newUser = {
        username: name,
        email: email,
        password: password,
        pfp: photo,
      }

      const userRetornado = await register(newUser)
      navigate('/login', { state: { user: userRetornado['user'] } });
    } catch (error) {
      setErrorMessage(`Validation Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // const handlePhotoChange = (e) => {
  //   setPhoto(URL.createObjectURL(e.target.files[0]));
  // };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 vw-100 ">
      <Row className="w-100 d-flex justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <div className="p-4 border rounded shadow">
            <h2 className="text-center mb-4">Login to HomeIOT</h2>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            {photo && (
              <div className='d-flex justify-content-center align-items-center' >
                <Image src={photo} roundedCircle className="mt-2" width={100} height={100} style={{ objectFit: 'cover' }} />
              </div>
            )}
            <Form onSubmit={handleSignIn}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control
                  type="text"
                  // accept="image/*"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </Form.Group>

              {/* <Form.Group className="mb-3" controlId="formBasicPhoto">
                <Form.Label>Profile Photo</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoChange}
                />
              </Form.Group> */}

              <Button variant="primary" type="submit" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Singin;
