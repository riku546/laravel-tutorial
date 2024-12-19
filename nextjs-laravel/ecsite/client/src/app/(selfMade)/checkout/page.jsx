'use client'

import { loadStripe } from '@stripe/stripe-js'
import {
    EmbeddedCheckoutProvider,
    EmbeddedCheckout,
} from '@stripe/react-stripe-js'
import axios from '@/lib/axios'

const page = () => {
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

    const fetchClientSecret = async () => {
        const response = await axios.post('/api/stripePayment', {
            quantity: 1,
            productName: '水',
            price: 110,
        })
        return response.data.clientSecret
    }

    const options = { fetchClientSecret }

    return (
        <div id="checkout">
            4242424242424242
            <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
                <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
        </div>
    )
}

export default page
