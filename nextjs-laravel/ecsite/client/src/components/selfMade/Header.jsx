import LoginLinks from '@/app/LoginLinks'
import React from 'react'
import styles from '@/styles/components/Header.module.css'
import Hamburger from './Hamburger'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Link from 'next/link'

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.amazonIcon}>
                <img
                    src="/social.png"
                    alt="https://www.flaticon.com/free-icons/amazon"
                    width="50px"
                    height="50px"
                />
                <a
                    href="https://www.flaticon.com/free-icons/amazon"
                    title="amazon icons">
                    Amazon icons created by pocike - Flaticon
                </a>
            </div>
            <div className={styles.iconArea}>
                <ShoppingCartIcon className={styles.cartIcon} />
                <Hamburger  />
            </div>
        </header>
    )
}

export default Header
