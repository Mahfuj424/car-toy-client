/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../AuthProvider/AuthProvider';


const Register = () => {
    const { registerUser, updateUserProfile, googleUser, setReload } = useContext(AuthContext);
    const navigate = useNavigate();

    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const imgUrl = form.image.value;
        const email = form.email.value;
        const password = form.password.value;


        if (!/(?=.*[0-9])/.test(password)) {
            setError('password must one number');
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('password must one uppercase');
            return
        }
        if (password.length < 6) {
            setError('password must be 6 character')
        }
        if (name, imgUrl, email, password) {
            registerUser(email, password)
                .then(result => {
                    updateUserProfile(name, imgUrl)
                        .then(() => {
                            setReload(Date.now())
                            navigate('/')
                    })
                })
                .catch(err => {
                    console.log(err.message);
                })
        }

    }

    const handleGoogleUser = () => {
        googleUser()
            .then((result) => {
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    
    return (
        <div>
            <div className="hero min-h-screen mt-5">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-center">Please Register</h1>

                    </div>
                    <div className="card  flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">imgURL</span>
                                </label>
                                <input type="text" name='image' placeholder="ImgURl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <p className='text-error'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="button">Register</button>
                            </div>
                            <p>You have already an account? <Link className='btn-link' to='/login'>Please Login</Link></p>
                            <div>
                                <button className=' w-full button' onClick={handleGoogleUser}><span><FcGoogle/></span>Google</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;