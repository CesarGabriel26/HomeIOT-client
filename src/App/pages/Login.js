// src/pages/Login.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { login } from '../../utils/ApiHandler/User';

function Login() {
  const location = useLocation();
  const user = location.state?.user; // Acessa os dados do usuário
  
  const [email, setEmail] = useState(user?.email || '');
  const [password, setPassword] = useState(user?.password || '');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = await login(email, password);

      if (token && token.token) {
        window.location.href = '/profile';  // Redireciona para o perfil
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100 vw-100 ">
      <Row className="w-100 d-flex justify-content-center align-items-center">
        <Col md={6} lg={4}>
          <div className="p-4 border rounded shadow">
            <h2 className="text-center mb-4">Login to HomeIOT</h2>
            {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
            <Form onSubmit={handleLogin}>
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
              <Form.Group className='mb-3'>
                <Form.Text style={{cursor: 'pointer'}} onClick={() => {
                  window.location.href = '/Singin';
                }} >
                  Não possui uma conta ? <span style={{ color: 'blue' }} >Registre-se</span>
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Button variant="primary" type="submit" disabled={isLoading}>
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
