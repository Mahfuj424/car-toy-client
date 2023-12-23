/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
    const { loginUser, googleUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const pathName = location.state?.from?.pathname || '/';


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    const user = result.user;
                    const loggedUser = {
                        email: user.email
                    }
                    fetch(`https://car-toy-server-tau.vercel.app/jwt`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(loggedUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('car token access', data);
                            localStorage.setItem('car', data.token)
                        })
                    navigate(pathName)
                })
                .catch(error => {
                    console.log(error.message);
                })
        }
    }


    const handleGoogleUser = () => {
        googleUser()
            .then((result) => {
                navigate(pathName)
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div>
            <div className='w-full md:flex'>
                <div className='md:w-[50%] bg-white h-screen'>
                    <div className='md:mt-32'>
                        <h2 className="text-3xl my-10 text-black text-center font-semibold">Please Sign-In Now</h2>
                        <form onSubmit={handleSubmit} className='space-y-6 w-full md:px-0 px-8 md:w-2/4 mx-auto'>

                            <div className='w-full relative flex'>
                                <input type="email" name="email" id="" className='border-black border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' placeholder='Email*' />
                                <h1 className='absolute text-black left-0'><EmailIcon /></h1>
                            </div>
                            <div className='w-full relative flex'>
                                <input type="password" name="password" id="" className='border-black border-b-2 ps-8 pb-3 text-black w-full outline-none' placeholder='Password*' />
                                <h1 className='absolute text-black left-0'><KeyIcon /></h1>
                            </div>
                            
                            <p>Are You New? <Link className='btn-link' to='/register'>Please Sign Up</Link></p>
                            <div className="form-control mt-6">
                                <button className="button">Sign In</button>
                            </div>
                            
                        </form>
                            <div className='flex justify-center mt-3'>
                                <button className='button w-2/4' onClick={handleGoogleUser}><span><FcGoogle/></span>Google</button>
                            </div>
                    </div>
                </div>
                <div className='md:w-[50%] bg-image h-screen'>

                </div>
            </div>
        </div>
    );
};

export default Login;