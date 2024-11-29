'use client'

import React, { useState } from 'react'
import styles from '@/styles/pages/cart.module.css'
import Header from '@/components/selfMade/Header'
import { getCartContents } from '@/lib/cartFunc'
import BuyButtonCard from '@/components/selfMade/BuyButtonCard'
import { ProductCardInCart } from '@/components/selfMade/ProductCardInCart'
import useCart from '@/hooks/page/cart'

const page = () => {
    const [cartContents, setCartContent] = useState(getCartContents())
    
    
    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                <h2 style={{ fontSize: '27px' }}>ショッピングカート</h2>
                <div className={styles.cartArea}>
                    <section className={styles.productList}>
                        {cartContents &&
                            Object.entries(cartContents).map(([productId]) => {
                                return (
                                    <ProductCardInCart productId={productId} key={productId} />
                                )
                            })}
                    </section>
                    <BuyButtonCard />
                </div>
            </main>
        </div>
    )
}

export default page
