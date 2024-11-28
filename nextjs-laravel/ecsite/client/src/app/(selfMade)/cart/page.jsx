'use client'

import React, { useState } from 'react'
import styles from '@/styles/pages/cart.module.css'
import Header from '@/components/selfMade/Header'
import { getCartInfo } from '@/lib/cartFunc'

const page = () => {
    const [cartContents, setCartContent] = useState(getCartInfo())

    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                <h2 style={{ fontSize: '27px' }}>ショッピングカート</h2>
                <section>
                    {cartContents &&
                        Object.entries(cartContents).map(
                            ([productId, value]) => {
                                return (
                                    <div style={{ display: 'flex' }}>
                                        <img
                                            src={`/productImg/${productId}.jpg`}
                                            alt=""
                                            
                                        />
                                        <p>{value}</p>
                                    </div>
                                )
                            },
                        )}
                </section>
            </main>
        </div>
    )
}

export default page
