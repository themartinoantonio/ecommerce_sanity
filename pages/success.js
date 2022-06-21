import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from './context/StateContext'
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { setcartItems, setTotalPrice, setTotalQuantities } = useStateContext(0);
    
    useEffect(() => {
        localStorage.clear();
        setcartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireworks();
    }, [])

  return (
    <div className='succes-wrapper'>
        <div className='success'>
            <p className='icon'>
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your order!</h2>
            <p className='email-msg'>Check your email inbox for the receipt.</p>
            <p className='description'>
                If you have any question, please email
                <a className='email' href='mailto:order@example.com'>
                    order@example.com
                </a>
            </p>
            <Link href="/">
                <button type='button' width="300px" className='btn'>
                    Continue Shoppping
                </button>   
            </Link>
        </div>
    </div>
  )
}

export default Success