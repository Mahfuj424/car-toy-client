/* eslint-disable no-unused-vars */

import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditToy = () => {

     const { id } = useParams();
    const updateToy = useLoaderData();
     console.log(updateToy);

     const [toys, setToys]=useState([])
     
     const updateToyData =updateToy && updateToy.find(data=> data._id == id)
    const { _id, image, name, sellerEmail, sellerName, subcategory, price, rating, quantity, description } = updateToyData;
    console.log(_id);


    const handleUpdateToy = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        console.log(image, name, sellerEmail, sellerName, subcategory, price, rating, quantity, description);
        const updatedToy = { image, name, sellerEmail, sellerName, subcategory, price, rating, quantity, description }

        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className='container'>
            <form onSubmit={handleUpdateToy} className='bg-blue-300 my-10 p-5 rounded-xl shadow-md'>
                <div className="flex w-full gap-5 mx-auto ">
                    <div className='w-1/2'>
                        <div className="mb-4 ">
                            <label htmlFor="image" className="block mb-2">Image:</label>
                            <input type="text" readOnly name="image" id="image" defaultValue={image} className="border rounded py-2 px-3 w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name:</label>
                            <input type="text" readOnly name="name" id="name" defaultValue={name} className="border rounded py-2 px-3 w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="sellerName" className="block mb-2">Seller Name:</label>
                            <input type="text" name="sellerName" id="sellerName" readOnly defaultValue={sellerName} className="border rounded py-2 px-3 w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="sellerEmail" className="block mb-2">Seller Email:</label>
                            <input type="email" name="sellerEmail" id="sellerEmail" readOnly defaultValue={sellerEmail} className="border rounded py-2 px-3 w-full" />
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <div className="mb-4">
                            <label htmlFor="subcategory" className="block mb-2">Subcategory:</label>
                            <select name="subcategory" disabled id="subcategory" className="border rounded py-2 px-3 w-full">
                                <option value="Police car">Police Car</option>
                                <option value="Racing car">Racing Car</option>
                                <option value="Trak">Trak</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block mb-2">Price:</label>
                            <input type="number" name="price" id="price" defaultValue={price} className="border rounded py-2 px-3 w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rating" className="block mb-2">Rating:</label>
                            <input type="number" readOnly name="rating" defaultValue={rating} id="rating" min="0" max="5" step="0.1" className="border rounded py-2 px-3 w-full" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="quantity" className="block mb-2">Available Quantity:</label>
                            <input type="number" name="quantity" id="quantity" defaultValue={quantity} className="border rounded py-2 px-3 w-full" />
                        </div>


                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2">Description:</label>
                    <textarea name="description" id="description" defaultValue={description} rows="4" cols="50" className="border rounded py-2 px-3 w-full"></textarea>
                </div>
                <div className="mb-4 text-center">
                    <button type="submit" className="button">Update</button>
                </div>
            </form>
        </div>
    );
};

export default EditToy;