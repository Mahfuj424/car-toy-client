/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MyToys = () => {
    const { user } = useContext(AuthContext)


    const [reload, setReload] = useState(false)
    const [toys, setToys] = useState([])





    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //   
                fetch(`https://car-toy-server-tau.vercel.app/toy/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setReload(!reload)
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    useEffect(() => {
        let apiUrl = `https://car-toy-server-tau.vercel.app/myToy/${user?.email}`;
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user, reload])





    return (
        <div className='my-10 container'>
            <div className="overflow-x-auto">
                <table className="table w-full">
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
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {
                        toys.map((toy, index) => {
                            const { _id, image, sellerName, name, subcategory, quantity, price } = toy;
                            return <tbody key={_id}>
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
                                    <td>
                                        <Link to={`/updateToy/${_id}`}>
                                            <p className='cursor-pointer'><BiEdit /> </p>
                                        </Link>
                                    </td>
                                    <td onClick={() => handleDelete(_id)} className='cursor-pointer text-red-500 w-10'><RiDeleteBin6Fill /></td>
                                </tr>
                            </tbody>
                        })
                    }

                </table>
            </div>
        </div>
    );
};

export default MyToys;