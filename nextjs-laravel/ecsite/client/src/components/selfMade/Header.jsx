import LoginLinks from '@/app/LoginLinks'
import React from 'react'
import styles from '@/styles/components/Header.module.css'

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.amazonIcon}>
                <img src="/social.png" alt="https://www.flaticon.com/free-icons/amazon" width="50px" />
                <a
                    href="https://www.flaticon.com/free-icons/amazon"
                    title="amazon icons">
                    Amazon icons created by pocike - Flaticon
                </a>
            </div>
            <LoginLinks></LoginLinks>
        </header>
    )
}

export default Header
