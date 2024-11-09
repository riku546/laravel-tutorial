import LoginLinks from '@/app/LoginLinks'
import React from 'react'
import styles from '@/styles/components/Header.module.css'
import Hamburger from './Hamburger'

const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.amazonIcon}>
<<<<<<< HEAD
                <img src="/social.png" alt="https://www.flaticon.com/free-icons/amazon" width="50px" height="50px" />
=======
                <img
                    src="/social.png"
                    alt="https://www.flaticon.com/free-icons/amazon"
                    width="50px"
                    height="50px"
                />
>>>>>>> origin/main
                <a
                    href="https://www.flaticon.com/free-icons/amazon"
                    title="amazon icons">
                    Amazon icons created by pocike - Flaticon
                </a>
            </div>
            <Hamburger />
        </header>
    )
}

export default Header
