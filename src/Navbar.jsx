import React, { useState } from 'react';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import logo from './logo-no-background.png';
import acc from './account sms.svg';
import Home from './Home';
import AboutUs from './AboutUs';
import Help from './Help';
import Holiday from './Holiday';
import Booking from './Booking';
import Form from './Form'; // Import the Form component
import person from './places/03 Login Signup React Assets/Assets/person.png';
import email from './places/03 Login Signup React Assets/Assets/email.png';
import password from './places/03 Login Signup React Assets/Assets/password.png';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState('Sign Up');
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
        setValidated(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if any required field is empty
        const emptyFields = [];
        if (count !== 'login' && formData.username.trim() === '') {
            emptyFields.push('Username');
        }
        if (formData.email.trim() === '') {
            emptyFields.push('Email');
        }
        if (formData.password.trim() === '') {
            emptyFields.push('Password');
        }
        if (count !== 'login' && formData.confirmPassword.trim() === '') {
            emptyFields.push('Confirm Password');
        }
    
        // If there are empty fields, construct and display the alert message
        if (emptyFields.length > 0) {
            const alertMessage = `${emptyFields.join(', ')} ${
                emptyFields.length > 1 ? 'are' : 'is'
            } empty.`;
            alert(alertMessage);
            return;
        }
    
        // Continue with form submission if all fields are filled
        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password do not match");
        } else {
            console.log(formData);
            handleCloseModal();
        }
    
        setValidated(true);
    };
    
    return (
        <Router>
            <div>
                <div className="container nav-container mt-2">
                    <div className="navbar-brand d-flex justify-content-between align-items-center">
                        <div className="img">
                            <img src={logo} className="logo-png" alt="Logo" />
                        </div>
                        <div className="nav">
                            <div className="navbar-nav ">
                                <div className="dropdown mr-5">
                                    <div className="dropdown mx-3">
                                        <button
                                            type="button"
                                            className="btn dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                        >
                                            Manu
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <div className="nav-item">
                                                    <Link to="/" className="nav-link mx-3">
                                                        Home
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <h5 className="dropdown-header">Services</h5>
                                            </li>
                                            <li>
                                                <div className="nav-item">
                                                    <Link to="/holiday" className="nav-link mx-3">
                                                        Holiday Packages
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="nav-item">
                                                    <Link to="/booking" className="nav-link mx-3">
                                                        Booking System
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <h5 className="dropdown-header">For You</h5>
                                            </li>
                                            <li>
                                                <div className="nav-item">
                                                    <Link to="/help" className="nav-link mx-3">
                                                        Help
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="nav-item">
                                                    <Link to="/about-us" className="nav-link mx-3">
                                                        About Us
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="nav-item mx-3">
                                    <button className="btn p-0" onClick={handleButtonClick}>
                                        <img src={acc} className="acc p-0" alt="" />
                                    </button>
                                    <Modal show={showModal} onHide={handleCloseModal}>
                                        <Modal.Body>
                                            <Form
                                                handleCloseModal={handleCloseModal}
                                                handleSubmit={handleSubmit}
                                                handleChange={handleChange}
                                                formData={formData}
                                                count={count}
                                                setCount={setCount}
                                                validated={validated}
                                            />
                                        </Modal.Body>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heroSec mt-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="/holiday" element={<Holiday />} />
                        <Route path="/booking" element={<Booking />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default Navbar;
