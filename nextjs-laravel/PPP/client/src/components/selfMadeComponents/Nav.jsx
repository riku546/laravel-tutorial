import React from 'react'
import styles from "./Nav"


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
