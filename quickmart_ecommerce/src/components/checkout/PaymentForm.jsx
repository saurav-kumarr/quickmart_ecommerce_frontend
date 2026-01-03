import { PaymentElement, useStripe } from '@stripe/react-stripe-js';
import { useElements } from '@stripe/react-stripe-js';
import React, { useState } from 'react'
import { Form } from 'react-hook-form';
import SkeletonCustom from '../shared/Skeleton';

const PaymentForm = ({clientSecret, totalPrice}) => {
    const stripe = useStripe();
    const element = useElements();
    const [loading, setLoading] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {

    };

    const paymentElementOptions = {
        layout: "tabs",
    }

  return (
    <form onSubmit={handleSubmit} className='max-w-lg mx-auto p-4'>
        <h2 className='text-xl font-semibold mb-4'>Payment Information</h2>
        {loading ? (
            <SkeletonCustom />
        ) : (
            <>
            {clientSecret && <PaymentElement options={paymentElementOptions}/>}
            {errorMessage && (
                <div className='text-red-500 mt-2'>{errorMessage}</div>
            )}
            <button 
                disabled={!stripe || loading}>
                    {!loading ? `Pay $${Number(totalPrice).toFixed(2)}`
                        : "Processing"}
            </button>
            </>
        )}
    </form>
  )
}

export default PaymentForm