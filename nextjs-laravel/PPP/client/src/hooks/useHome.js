'use client'

import axios from '@/lib/axios'
import { checkUserLogined } from '@/lib/checkUserLogined'
import { requestProblem } from '@/lib/requestProblem'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const useHome = () => {
    const problemLevels = ['初級', '中級', '上級']
    const [level, setLevel] = useState('初級')
    const [programmingLang, setProgrammingLang] = useState('php')
    const [problemInfo, setProblemInfo] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const verifyLoginAndFetch = async () => {
        //ユーザーがログインしているかを確認
        //ログインしていない場合は、アラートが出る。
        const { isAuth } = await checkUserLogined()
        isAuth ? '' : alert('ログインしてください')

        //問題の生成中はローディングする
        setIsLoading(true)

        //問題の生成をする
        const problem = await requestProblem(level, programmingLang)

        //問題が生成し終えたから、ローディング終了
        setIsLoading(false)

        setProblemInfo(problem)
    }

    return {
        problemLevels,
        setLevel,
        setProgrammingLang,
        verifyLoginAndFetch,
        problemInfo,
        isLoading,
    }
}

export default useHome
