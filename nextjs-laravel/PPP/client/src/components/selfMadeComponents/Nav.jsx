import React from 'react'
import styles from './css/Nav.css'
import { checkUserLogined } from '@/lib/checkUserLogined'
import useNav from '@/hooks/useNav'

const Nav = () => {
    const { userNameOrLogin } = useNav()

    return (
        <ul className={styles.list}>
            <li>ホーム</li>
            <li>履歴</li>
            <li>レビュー</li>
            {userNameOrLogin}
        </ul>
    )
}

export default Nav
