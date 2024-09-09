// src/pages/Profile.js
import React, { useEffect, useState } from 'react';
import { getUserInfo } from '../../utils/ApiHandler/User';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtendo as informações do usuário a partir do token
    const userInfo = getUserInfo();
    
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <Container className="profile-container mt-5">
      <Row className="justify-content-md-center">
        <Col md="auto">
          {/* Imagem de perfil */}
          <Image 
            src={user.pfp || '/default-profile.png'} // Mostrar a imagem de perfil ou um padrão
            roundedCircle 
            width={150} 
            height={150} 
            className="mb-4"
            style={{ objectFit: 'cover' }} // Para garantir que a imagem não fique distorcida
          />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className="text-center">
          <h2>{user.username}</h2>
          <p>Email: {user.email}</p>
          {/* Outros dados do usuário que você pode querer exibir */}
          <Button variant="primary" onClick={() => alert('Edit Profile feature coming soon!')}>
            Edit Profile
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
