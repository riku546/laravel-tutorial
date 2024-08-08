import React from 'react'
import styles from './css/Nav.css'

const Nav = () => {
    return (
        <ul className={styles.list}>
            <li>ホーム</li>
            <li>履歴</li>
            <li>レビュー</li>
        </ul>
    )
}

export default Nav
