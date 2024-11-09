'use client'

import Header from '@/components/selfMade/Header'
import ReadStars from '@/components/selfMade/ReadStars'
import React, { useState } from 'react'
import styles from '@/styles/pages/productPage.module.css'
import Button from '@mui/material/Button'
import { useSearchParams } from 'next/navigation'
import { addToCart } from '@/lib/cartFunc'

import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { FormControl } from '@mui/material'

const page = () => {
    const searchParams = useSearchParams()
    const productId = searchParams.get('productId')
    //商品の購入数量
    const [buyQuantity, setButQuantity] = useState(1)

    return (
        <div className="container">
            <Header />

            <main className={styles.mainArea}>
                <img
                    src="/view-water-with-plastic-bottle.jpg"
                    alt=""
                    className={styles.productImg}
                />
                <article className={styles.productInfos}>
                    <h4 className={styles.productName}>water</h4>
                    <p className={styles.description}>
                        硬度15の国内でも数少ない柔らかいお水となります。日本人に適していると言われる硬度15㎎/Lの軟水は、口当たりがまろやかで飲みやすい優しいお水。そのままでも、お料理やお酒の水割り、お茶やコーヒーなど様々な用途にお使いいただけます。
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            gap: '30px',
                            alignItems: 'center',
                        }}>
                        <div>
                            <ReadStars />
                            <p className={styles.price}>¥ 100</p>
                        </div>

                        {/* 商品の個数のselect */}
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                value={buyQuantity}
                                onChange={e => setButQuantity(e.target.value)}
                                displayEmpty>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>

                        <Button
                            variant="contained"
                            // カート(セッション)に商品のidと個数を入れる
                            onClick={() => addToCart(productId, buyQuantity)}>
                            カートに入れる
                        </Button>
                    </div>
                </article>
            </main>
        </div>
    )
}

export default page
