import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';
import { MdGridView, MdLogin, MdDevices, MdSettings, MdAccountCircle } from 'react-icons/md';
import { GoGraph } from "react-icons/go";

const NavigationStyle = {
    link: { display: 'flex', alignItems: 'center', paddingLeft: 15 },
    icon: { marginRight: 35 },
    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e5e5e5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }
};

const SideNavigation = () => {
    const [userLoged, setUserLoged] = useState("")

    useEffect(() => {
        const user = localStorage.getItem('userToken') || ""
        setUserLoged(user)
    }, [])

    return (
        <div style={{ width: 240, height: '100vh', position: 'fixed' }} >
            <Sidenav expanded={true} style={{ height: '100vh', position: 'relative' }} appearance='default' >
                <Sidenav.Header>
                    <div style={{ padding: 18, fontWeight: 'bold' }}>
                        Dashboard
                    </div>
                </Sidenav.Header>
                <Sidenav.Body>
                    <Nav>
                        <Nav.Item as={Link} to="/" eventKey="1" style={NavigationStyle.link} >
                            <MdGridView size={24} style={NavigationStyle.icon} />
                            <p>Overview</p>
                        </Nav.Item>
                        <Nav.Item as={Link} to="/devices" eventKey="3" style={NavigationStyle.link} >
                            <MdDevices size={24} style={NavigationStyle.icon} />
                            Devices
                        </Nav.Item>
                        <Nav.Item as={Link} to="/graphs" eventKey="4" style={NavigationStyle.link} >
                            <GoGraph size={24} style={NavigationStyle.icon} />
                            Graficos
                        </Nav.Item>
                    </Nav>
                    <Nav style={NavigationStyle.footer}>
                        {
                            (userLoged !== "") ? (
                                <>
                                    <Nav.Item as={Link} to="/settings" eventKey="4" style={NavigationStyle.link} >
                                        <MdSettings size={24} style={NavigationStyle.icon} />
                                        <p>Settings</p>
                                    </Nav.Item>
                                    <Nav.Item as={Link} to="/profile" eventKey="5" style={NavigationStyle.link} >
                                        <MdAccountCircle size={24} style={NavigationStyle.icon} />
                                        <p>Profile</p>
                                    </Nav.Item>
                                </>
                            ) : (
                                <Nav.Item as={Link} to="/login" eventKey="2" style={NavigationStyle.link} >
                                    <MdLogin size={24} style={NavigationStyle.icon} />
                                    Login
                                </Nav.Item>
                            )
                        }

                    </Nav>
                </Sidenav.Body>
            </Sidenav>
        </div>
    );
};

export default SideNavigation;