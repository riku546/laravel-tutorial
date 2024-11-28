import React from 'react'
import styles from '@/styles/components/ProductCardInCart.module.css'
import DeleteIcon from '@mui/icons-material/Delete'

const ProductCardInCart = ({ productId, buyQuantity }) => {
    return (
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
                <div>
                    <p>{buyQuantity}</p>
                    <div>
                        <DeleteIcon/>
                        <p>削除</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardInCart
