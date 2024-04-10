import React,{useState} from 'react'
import {Link,NavLink} from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
const Show = () => {
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

    useEffect(()=>{
        console.log('useEffect started')
        getProducts()


        return ()=>{
            console.log('useEffect ended') //this run while component deletion
        }
    },[])
    //useEffect ke andar /sath useState chl rha getProducts() function ke andar




    return (
        <div className="pt-[5X] pl-[5X] m-4 gap-2 flex flex-col mb-0">
            
            <hr className="mt-4" />
            <ul>
                {products.length > 0 ? products.map((items) => {
                    return <li key={items.id} className="bg-red-400 rounded h-10 mt-3 px-2 flex items-center  w-2/3 mb-3">{items.id}: {items.title}</li>
                }) : <img className='h-10 ml-20 mt-10' src="https://media.tenor.com/wpSo-8CrXqUAAAAi/loading-loading-forever.gif" alt="" />}
            </ul>
        </div>
    );

}

export default Show