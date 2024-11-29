'use client'

import React, { useEffect, useState } from 'react'
import styles from '@/styles/components/ProductCardInCart.module.css'
import DeleteIcon from '@mui/icons-material/Delete'
import Link from 'next/link'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import {
    decreaseProductInCart,
    getProductNum,
    increaseProductInCart,
} from '@/lib/cartFunc'

const ChangeBuyQuantity = ({ productId }) => {
    const [buyQuantity, setBuyQuantity] = useState(getProductNum(productId))

    //セッションとステートの両方のbuyQuantityを１減らす
    const decreaseFunc = productId => {
        decreaseProductInCart(productId)
        const updatedProductNumInCart = getProductNum(productId)
        setBuyQuantity(updatedProductNumInCart)
    }

    //セッションとステートの両方のbuyQuantityを１増やす
    const increaseFunc = productId => {
        increaseProductInCart(productId)
        const updatedProductNumInCart = getProductNum(productId)
        setBuyQuantity(updatedProductNumInCart)
    }

    return (
        <div style={{ display: 'flex', gap: '7px' }}>
            <div onClick={() => decreaseFunc(productId)}>
                <RemoveCircleIcon />
            </div>
            <p>{buyQuantity}</p>
            <div onClick={() => increaseFunc(productId)}>
                <AddCircleIcon />
            </div>
        </div>
    )
}

export const ProductCardInCart = ({ productId }) => {
    return (
        <div className={styles.mainArea}>
            <Link
                href={{
                    pathname: '/productPage',
                    query: { productId: productId },
                }}>
                <img
                    src={`/productImg/${productId}.jpg`}
                    alt=""
                    className={styles.productImg}
                />
            </Link>
            <div className={styles.productInfo}>
                <div className={styles.nameAndPrice}>
                    <p className={styles.productName}>water</p>
                    <p className={styles.productPrice}>¥100</p>
                </div>
                <div className={styles.userOperationArea}>
                    <ChangeBuyQuantity productId={productId} />
                    <div className={styles.deleteArea}>
                        <DeleteIcon />
                        <p>削除</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
