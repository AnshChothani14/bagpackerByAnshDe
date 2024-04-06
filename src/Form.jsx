import React from 'react';
import person from './places/03 Login Signup React Assets/Assets/person.png';
import email from './places/03 Login Signup React Assets/Assets/email.png';
import password from './places/03 Login Signup React Assets/Assets/password.png';

const Form = ({ handleCloseModal, handleSubmit, handleChange, formData, count, setCount, validated }) => {
    return (
        <div className="section">
            <div className="header">
                <div className="text">{count}</div>
                <div className="underline"></div>
            </div>
            <form onSubmit={handleSubmit} noValidate validated={validated}>
                {count === 'login' ? null : (
                    <div className="input formInput">
                        <img src={person} alt="" />
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Please provide a username.</div>
                    </div>
                )}

                <div className="input formInput">
                    <img src={email} alt="" />
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <div className="invalid-feedback">Please provide a valid email.</div>
                </div>

                <div className="input formInput">
                    <img src={password} alt="" />
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        // onChange={handleChang}
                        required
                    />
                    <div className="invalid-feedback">Please provide a password.</div>
                </div>

                {count !== 'login' && (
                    <div className="input formInput">
                        <img src={password} alt="" />
                        <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        <div className="invalid-feedback">Please confirm your password.</div>
                    </div>
                )}

                {count === 'login' ? (
                    <div className="forgotpassword">
                        Lost Password? <span>Click here</span>
                    </div>
                ) : null}
                <button type='submit' className='mt-4 loginSubmit'>Submit</button>


                <div className="submit-container">
                    <div className="submit">
                        <button
                            className={
                                count === 'Sign Up'
                                    ? 'btn logBtn bg-success'
                                    : 'btn logBtn'
                            }
                            onClick={() => {
                                setCount('Sign Up');
                            }}
                        >
                            Sign Up
                        </button>
                    </div>
                    <div className="submit">
                        <button
                            className={
                                count === 'login'
                                    ? 'btn logBtn bg-success'
                                    : 'btn logBtn'
                            }
                            onClick={() => {
                                setCount('login');
                            }}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Form;
