import React from 'react'
import styles from '@/styles/components/ProductCardInCart.module.css'
import DeleteIcon from '@mui/icons-material/Delete'
import Link from 'next/link'

const changeQuantity = <></>

const ProductCardInCart = ({ productId, buyQuantity }) => {
    return (
        <Link
            href={{
                pathname: '/productPage',
                query: { productId: productId },
            }}>
            <div className={styles.mainArea}>
                <img
                    src={`/productImg/${productId}.jpg`}
                    alt=""
                    className={styles.productImg}
                />
                <div className={styles.productInfo}>
                    <div className={styles.nameAndPrice}>
                        <p className={styles.productName}>water</p>
                        <p className={styles.productPrice}>¥100</p>
                    </div>
                    <div className={styles.userOperationArea}>
                        <p>{buyQuantity}</p>
                        <div className={styles.deleteArea}>
                            <DeleteIcon />
                            <p>削除</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCardInCart
