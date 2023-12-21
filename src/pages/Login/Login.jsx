/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
    const { loginUser, googleUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const pathName = location.state?.from?.pathname || '/'


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
                    <div className='w-[45%] bg-white h-screen'>
                         <div className='md:mt-32'>
                              <h2 className="text-3xl my-10 text-black text-center font-semibold">Please Sign-In Now</h2>
                              <form onSubmit={handleSubmit} className='space-y-6 w-2/4 mx-auto'>
                                   
                                   <div className='w-full relative flex'>
                                        <input type="email" name="email" id="" className='border-black border-b-2 ps-8 pb-3 bg-transparent w-full outline-none' placeholder='Email*' />
                                        <h1 className='absolute text-black left-0'><EmailIcon /></h1>
                                   </div>
                                   <div className='w-full relative flex'>
                                        <input type="password" name="password" id="" className='border-black border-b-2 ps-8 pb-3 text-black w-full outline-none' placeholder='Password*' />
                                        <h1 className='absolute text-black left-0'><KeyIcon /></h1>
                                   </div>
                                   <p className='text-cyan-500'><Link href='/register'>Sign-Up</Link></p>
                                   <button className='button'>Sign In</button>
                              </form>
                         </div>
                    </div>
                    <div className='w-[55%] h-screen bg-image'>
                         <div className='md:ms-16 md:mt-32'>
                              <h1 className='text-6xl font-bold'>Welcome to <br /> our community</h1>
                              <p className='text-lg my-5 me-5'>
                                   Fuse helps developers to build organized and well coded dashboards <br /> full of beautiful and rich  modules. Join us and start building your application today.
                              </p>
                              <div className='flex gap-5 items-center'>
                                   <AvatarGroup total={24}>
                                        <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww" />
                                        <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" />
                                        <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww" />
                                        <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D" />
                                   </AvatarGroup>
                                   <p>More than 17k people joined us, it's your turn</p>
                              </div>
                         </div>
                    </div>
               </div>
        </div>
    );
};

export default Login;