import React from 'react'
import styles from './css/Nav.css'
import { checkUserLogined } from '@/lib/checkUserLogined'
import useNav from '@/hooks/useNav'
import Link from 'next/link'

const Nav = () => {
    const { userNameOrLogin } = useNav()

    return (
        <div className={styles.list}>
            <div className="list-text">
                <Link href="/">ホーム</Link>
            </div>
            <div className="list-text">
                <Link href="/practicedProblem">生成履歴</Link>
            </div>
            <div className="list-text">
                <Link href="/problemList">問題一覧</Link>
            </div>
            <p>{userNameOrLogin}</p>
        </div>
    )
}

export default Nav
