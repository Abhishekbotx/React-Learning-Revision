import axios from "axios";

import React, { useState } from 'react'

const ApiTest = () => {
    const url = "https://fakestoreapi.com/products";




 
 

    const [products, setproducts] = useState([])

    const getProducts = async () => {
        try {
            const api = await axios.get(url)
            console.log(api.data)
            setproducts(api.data)
        } catch (error) {
            throw error
        }
        // console.log(api)
    }


    const addProducts = async () => {
        try {
            const api = await axios.post(url, {
                title: "Tv set",
                price: 30000,
                description: "lorem is a bitch",
                image: "/lorem/api.jpg",
                category: "Home appliances"
            })
            console.log(api.data)
            setproducts([...products,api.data])
        } catch (error) {
            throw error
        }
        // console.log(api)
    }




    return (
        <div className="pt-[5X] pl-[5X] m-4 gap-2 flex flex-col">
            <button
                onClick={getProducts}
                className="rounded px-5 py-2 bg-red-300 w-40"
            >
                Call Product API
            </button>

            <button
                onClick={addProducts}
                className="rounded px-5 py-2 bg-red-300 w-40"
            >
                Add Product API
            </button>
            <hr className="mt-4" />
            <ul>
                {products.length > 0 ? products.map((items) => {
                    return <li key={items.id} className="bg-red-400 rounded h-10 mt-3 px-2 flex items-center  w-2/3 ">{items.id}: {items.title}</li>
                }) : 'Loading ...'}
            </ul>
        </div>
    );

}

export default ApiTest
