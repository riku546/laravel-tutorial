'use client'

import { checkUserLogined } from '@/lib/checkUserLogined'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const useNav = () => {
    const [userNameOrLogin, setuserNameOrLogin] = useState()

    useEffect(() => {
        const process = async () => {
            //ログインしているかを確認
            const { isAuth, data } = await checkUserLogined()
            //ログインしていた場合はユーザー名をセット
            //していない場合はログイン画面に遷移できるようにする
            setuserNameOrLogin(
                isAuth ? data.name : <Link href="/login">ログイン</Link>,
            )
        }

        process()
    }, [])

    return { userNameOrLogin }
}

export default useNav
