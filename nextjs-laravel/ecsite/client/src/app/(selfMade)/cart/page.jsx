import React from 'react'
import styles from '@/styles/pages/cart.module.css'
import Header from '@/components/selfMade/Header'

const page = () => {
    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                <h2 style={{ fontSize: '27px' }}>ショッピングカート</h2>
                <section>
                    <div></div>
                    
                </section>
            </main>
        </div>
    )
}

export default page
