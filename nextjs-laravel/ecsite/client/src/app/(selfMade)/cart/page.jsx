'use client'

import React, { useState } from 'react'
import styles from '@/styles/pages/cart.module.css'
import Header from '@/components/selfMade/Header'
import { getCartContents } from '@/lib/cartFunc'
import BuyButtonCard from '@/components/selfMade/BuyButtonCard'
import ProductCardInCart from '@/components/selfMade/ProductCardInCart'

const page = () => {
    const [cartContents, setCartContent] = useState(getCartContents())

    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                <h2 style={{ fontSize: '27px' }}>ショッピングカート</h2>
                <div className={styles.cartArea}>
                    <section>
                        {cartContents &&
                            Object.entries(cartContents).map(
                                ([productId, buyQuantity]) => {
                                    return (
                                        <ProductCardInCart
                                            productId={productId}
                                            buyQuantity={buyQuantity}
                                        />
                                    )
                                },
                            )}
                    </section>
                    <BuyButtonCard />
                </div>
            </main>
        </div>
    )
}

export default page
