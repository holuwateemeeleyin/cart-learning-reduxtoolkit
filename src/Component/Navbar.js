import React from 'react'
import { CartIcon } from '../icons'
// We use useSeector to get our data from the store
// Or useSelector can be used to access the entire state of our application
import { useSelector } from 'react-redux';
export default function Navbar() {
    
    // console.log(useSelector((store)=> {
    //     console.log(store);
    // }));
    const {amount} = useSelector((store) => store.cart)

  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux toolkit</h3>
        <div className='nav-container'>
            <CartIcon />
            <div className='amount-container'>
                <p className='total-amount'>{amount}</p>
            </div>
        </div>
      </div>
    </nav>
  )
}
