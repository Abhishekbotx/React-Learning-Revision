import React from 'react'
import { useCart } from './CartContext'

const AddToCart = () => {
  const { cartState, cartDispatch } = useCart()
  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' }
  ]

  const addProduct=(item)=>{
    cartDispatch({type:'Add_To_Cart',payload:{...item,quantity:1}})
    
  }
  const removeFromCart=(itemId)=>{
    cartDispatch({type:'Remove_From_Cart',payload:itemId})
  }
  const updateQuantity =(itemId,quantity) => {
    if(quantity>0){
      cartDispatch({type:'UPDATE_QUANTITY',payload:{id:itemId,quantity}});
    }
  };
  
  return (
    <div className='py-6 px-12 space-y-4'>
      <h2>Shopping Cart</h2>
      {cartState.cartItems.map((item)=> (
        <li key={item.id}>
          {item.name} - {item.quantity} 
          <button className='px-3 bg-green-400' onClick={()=> updateQuantity(item.id,item.quantity +1 )}>+</button>
          <button className='px-3 bg-blue-400' onClick={()=> updateQuantity(item.id,item.quantity -1 )}>-</button>
          <button className='px-3 bg-red-400' onClick={()=> removeFromCart(item.id)}>Remove</button>
        </li>
      ))}
      <h2>Product List</h2>
      <div>
      <ul>{
      products.map((product)=> (
        <li key={product.id}>
          {product.name} <button className='px-4 py-1 bg-green-400 text-white' onClick={()=>addProduct(product)}> Add To Cart </button>
        </li>
      ))}
        </ul>
      </div>
    </div>
  )
}

export default AddToCart