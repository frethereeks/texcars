import React from 'react'
import { ASSETS } from '../assets'
import { InputNumber } from 'antd'
import { RiDeleteBin5Line, RiHeart3Line } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { changeCartQuantity, removeFromCart } from '../features/reducers/cartSlice'

export default function Cart() {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({id}))
  }

  const handleQuantityChange = (quantity, id) => {
    dispatch(changeCartQuantity({quantity, id}))
  }

  return (
    <main className='space-y-10'>
      <section className="relative px-4 h-[40vh] bg-primary">
        <img src={ASSETS['lamborgini_ash_car']} alt="Contact Us" className="opacity-40 absolute top-0 left-0 h-full w-full object-cover object-center" />
      </section>
      <section className="py-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-4">
          <aside className="md:col-span-2 divide-y divide-slate-100">
            <div className="flex justify-between items-center py-3 px-4 md:px-6">
              <h3 className="text-lg md:text-xl font-semibold">Shopping Cart</h3>
              <p className="text-text text-xs font-medium">{cart.length} items</p>
            </div>
            {
              cart?.map(el => (
                <figure key={el.id} className="py-4 px-2 md:px-4 flex gap-2 text-text">
                  <div className="w-12 sm:w-14 md:w-16 rounded-sm overflow-hidden bg-primary"></div>
                  <div className="relative py-2 flex-1">
                    <h3 className="text-primary/80 text-sm md:text-base font-medium">{el.name}</h3>
                    <p className="text-text text-xs font-medium">&#8358;{el.price.toLocaleString()}</p>
                  </div>
                  <div className="relative space-y-1 flex-1">
                    <InputNumber onChange={(val) => handleQuantityChange(val, el.id)} min={1} value={el.quantity} className='max-w-10 md:max-w-12' />
                    <button onClick={() => handleRemoveFromCart(el.id)} className="mt-2 text-text text-xs font-medium leading-2 flex items-center gap-2">
                      <RiDeleteBin5Line /> Remove
                    </button>
                    <p className="text-text text-xs font-medium leading-2 flex items-center gap-2">
                      <RiHeart3Line /> Save for later
                    </p>
                  </div>
                  <p className="text-primary/80 text-sm text-right font-semibold flex-1">&#8358;{(el.quantity * el.price).toLocaleString()}  </p>
                </figure>
              ))
            }
          </aside>
        </div>
      </section>
    </main>
  )
}
