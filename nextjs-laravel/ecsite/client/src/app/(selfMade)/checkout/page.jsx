'use client'

// import React, { useCallback, useState, useEffect } from 'react'
// import { loadStripe } from '@stripe/stripe-js'
// import {
//     EmbeddedCheckoutProvider,
//     EmbeddedCheckout,
// } from '@stripe/react-stripe-js'
// import axios from '@/lib/axios'

// const page = () => {
//     const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

//     const fetchClientSecret = async () => {
//         const response = await axios.post('/api/stripePayment', { quantity: 1 })
//         return response.data.clientSecret
//     }

//     const options = { fetchClientSecret }

//     return (
//         <div id="checkout">
//             4242424242424242
//             <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
//                 <EmbeddedCheckout />
//             </EmbeddedCheckoutProvider>
//         </div>
//     )
// }

// export default page

import { loadStripe } from '@stripe/stripe-js'
import React, { useEffect } from 'react'
import { CheckoutProvider } from '@stripe/react-stripe-js'
import { useCheckout } from '@stripe/react-stripe-js'
import { PaymentElement, useCustomCheckout } from '@stripe/react-stripe-js'
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { Elements } from '@stripe/react-stripe-js'

import PayButton from '@/components/selfMade/PayButton'
import axios from '@/lib/axios'

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY, {
    betas: ['custom_checkout_beta_5'],
})

const CheckoutForm = () => {
    const checkout = useCheckout()

    return (
        <form>
            <PaymentElement options={{ layout: 'tabs' }} />
        </form>
    )
}

const page = () => {
    const [clientSecret, setClientSecret] = React.useState(null)
    // React.useEffect(() => {
    //     axios('http://localhost:8000/api/stripePayment', { method: 'POST' })
    //         .then(response => response.json())
    //         .then(json => setClientSecret(json.clientSecret))
    // })

    const fetchClientSecret = async () => {
        const response = await axios.post('/api/stripePayment', {
            quantity: 1,
        })

        console.log(response)
        return response.data.clientSecret
    }

    useEffect(() => {
        const asyncFetch = async () => {
            const clientSecret = await fetchClientSecret()
            console.log(clientSecret)
            setClientSecret(clientSecret)
        }
        asyncFetch()
    }, [])

    return (
        <>
            {clientSecret && (
                <CheckoutProvider stripe={stripe} options={{ clientSecret }}>
                    <CheckoutForm />
                    <PayButton />
                </CheckoutProvider>
            )}
        </>
    )
}

export default page
