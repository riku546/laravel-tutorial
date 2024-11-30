'use client'

import Header from '@/components/selfMade/Header'
import ProductCard from '@/components/selfMade/ProductCard'
import styles from '@/styles/pages/topPage.module.css'
import './global.css'
import Link from 'next/link'
import axios from '@/lib/axios'
import { useEffect, useState } from 'react'

const Home = () => {
    const [productsInfo, setProductsInfo] = useState([{}])
    const fetchAllProductsInfo = async () => {
        try {
            const productsInfo = await axios.get('/api/allProductsInfo')
            setProductsInfo(productsInfo.data)
        } catch (error) {
            window.alert('エラーが発生しました。再読込みしてください')
        }
    }

    useEffect(() => {
        fetchAllProductsInfo()
    }, [])

    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                {productsInfo.map(productInfo => (
                    <Link
                        href={{
                            pathname: '/productPage',
                            query: { productId: productInfo.id },
                        }}>
                        <ProductCard
                            key={productInfo.id}
                            name={productInfo.name}
                            productId={productInfo.id}
                        />
                    </Link>
                ))}
            </main>
        </div>
    )
}

export default Home
