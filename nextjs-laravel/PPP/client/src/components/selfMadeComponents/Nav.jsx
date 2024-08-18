import React from 'react'
import styles from './css/Nav.module.css'
import useNav from '@/hooks/useNav'
import Link from 'next/link'

const Nav = () => {
    const { userNameOrLogin } = useNav()

    return (
        <div className={styles.list}>
            <div>
                <Link href="/">ホーム</Link>
            </div>
            <div>
                <Link href="/practicedProblem">生成履歴</Link>
            </div>
            <div>
                <Link href="/problemList">問題一覧</Link>
            </div>
            <p>{userNameOrLogin}</p>
        </div>
    )
}

export default Nav
