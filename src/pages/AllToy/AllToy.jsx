/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const AllToy = () => {

    const navigate = useNavigate()
    const { user } = useContext(AuthContext)


    const [searchText, setSearchText] = useState('')


    const [reload, setReload] = useState(false)
    const [toys, setToys] = useState([])
    const [sortBy, setSortBy] = useState('')



    useEffect(() => {
        fetch('https://car-toy-server-tau.vercel.app/allToy')
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, []);



    const handleSearch = () => {
        fetch(`https://car-toy-server-tau.vercel.app/searchText?search=${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    };



    const handleToyDetails = (id) => {

        if (!user?.email) {
            Swal.fire(
                'You Are Now LogIn Page',
                'That thing is still around?',
                'success'
            )
        }

    }



    useEffect(() => {
        let apiUrl = `https://car-toy-server-tau.vercel.app/searchText?search=${searchText}`;
        if (sortBy) {
            apiUrl += `?sortBy=${sortBy}`;
        }

        fetch(`https://car-toy-server-tau.vercel.app/allToy`)
            .then(res => res.json())
            .then(data => {
                const parsedData = data.map(toy => ({
                    ...toy,
                    price: parseInt(toy.price),
                }));

                if (sortBy === 'lower') {
                    parsedData.sort((a, b) => a.price - b.price);
                } else if (sortBy === 'higher') {
                    parsedData.sort((a, b) => b.price - a.price);
                }

                setToys(parsedData)
            })
    }, [user, reload, sortBy])


    const handleSortByChange = e => {
        setSortBy(e.target.value)
    }


    return (
        <div className='my-10 container'>
            <div className='flex flex-row-reverse justify-around'>
                <div className='flex justify-end mb-12'>
                    <select value={sortBy} onChange={handleSortByChange}
                        className='border-2 p-2 border-[#F4D160] rounded-xl'
                    >
                        <option value="">Sort By</option>
                        <option value="lower">Lower Price</option>
                        <option value="higher">Higher Price</option>
                    </select>
                </div>
                <div className="form-control flex md:flex-row justify-center mb-5">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="search" className="input input-bordered" />
                    <input onClick={handleSearch} className='button' type="submit" value="Search" />
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table z-index-0 w-full">
                    {/* head */}
                    <thead>
                        <tr className='bg-gray-300 font-bold text-black'>
                            <th>SL</th>
                            <th>Image</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    {
                        toys.map((toy, index) => {
                            const { _id, image, sellerName, name, subcategory, quantity, price } = toy;
                            return <tbody key={toy._id}>
                                {/* row 1 */}
                                <tr className='hover:bg-gray-200'>
                                    <th>{index + 1}</th>
                                    <th className='h-20 w-20'>
                                        <img src={image} alt="" />
                                    </th>
                                    <td>{sellerName}</td>
                                    <td>{name}</td>
                                    <td>{subcategory}</td>
                                    <td>{quantity}</td>
                                    <td>{price}</td>
                                    <Link to={`/toyDetails/${toy._id}`}>
                                        <button onClick={handleToyDetails} className='button2'>Details</button>
                                    </Link>
                                </tr>
                            </tbody>
                        })
                    }

                </table>
            </div>
        </div>
    );
};

export default AllToy;