import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from '../context/StateContext';
import { successConfetti } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        // reset
        setTotalPrice(0);
        // reset
        setTotalQuantities(0);
        successConfetti();
    }, []);

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thanks for shopping with us!</h2>
                <p className="email-msg">Please check your email for the receipt.</p>
                <p className="description">
                    If you have any questions, please email
                    <a className="email" href="cwu213@my.bcit.ca">
                        cwu213@my.bcit.ca
                    </a>
                </p>
                <Link href="/">
                    <button type="button" width="280px" className="btn">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success;