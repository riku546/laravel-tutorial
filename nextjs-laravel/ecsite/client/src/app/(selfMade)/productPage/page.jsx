'use client'

import Header from '@/components/selfMade/Header'
import ReadStars from '@/components/selfMade/ReadStars'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/pages/productPage.module.css'
import Button from '@mui/material/Button'
import { useSearchParams } from 'next/navigation'
import { addToCart } from '@/lib/cartFunc'
import ProductNumSelect from '@/components/selfMade/ProductNumSelect'
import Link from 'next/link'
import axios from '@/lib/axios'

const page = () => {
    //商品の購入数量
    const [buyQuantity, setBuyQuantity] = useState(1)
    const [productInfo, setProductInfo] = useState({
        name: '',
        description: '',
        price: null,
        stars: null,
    })

    const searchParams = useSearchParams()
    const productId = searchParams.get('productId')

    const fetchProductInfo = async () => {
        try {
            const result = await axios.get(
                `/api/specificProductInfo/${productId}`,
            )

            //result.dataは配列の中にオブジェクトが格納されているが、productInfoのデータ構造はオブジェクトなので
            //result.data配列からオブジェクトを取り出している
            const result_object = result.data[0]

            setProductInfo(result_object)
        } catch (error) {
            window.alert('エラーが発生しました。再読込みしてください')
        }
    }

    useEffect(() => {
        fetchProductInfo()
    }, [])

    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                <img
                    src={`/productImg/${productId}.jpg`}
                    alt=""
                    className={styles.productImg}
                />
                <article className={styles.productInfos}>
                    <h4 className={styles.productName}>{productInfo.name}</h4>
                    <p className={styles.description}>
                        {productInfo.description}
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            gap: '30px',
                            alignItems: 'center',
                        }}>
                        <div>
                            <ReadStars />
                            <p className={styles.price}>
                                ¥ {productInfo.price}
                            </p>
                        </div>

                        <ProductNumSelect
                            buyQuantity={buyQuantity}
                            setBuyQuantity={setBuyQuantity}
                        />

                        <Link href={'/cart'}>
                            <Button
                                variant="contained"
                                // カート(セッション)に商品のidと個数を入れる
                                onClick={() =>
                                    addToCart(productId, buyQuantity)
                                }>
                                カートに入れる
                            </Button>
                        </Link>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default page
