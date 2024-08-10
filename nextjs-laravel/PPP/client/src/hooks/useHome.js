'use client'

import axios from '@/lib/axios'
import { checkUserLogined } from '@/lib/checkUserLogined'
import { convertToBr, splitProblemInfo } from '@/lib/splitProblemInfo'
import { requestProblem } from '@/lib/requestProblem'
import { redirect } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const useHome = () => {
    const problemLevels = ['初級', '中級', '上級']
    const [level, setLevel] = useState('初級')
    const [programmingLang, setProgrammingLang] = useState('php')
    const [problemInfos, setProblemInfos] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const verifyLoginAndFetch = async () => {
        //ユーザーがログインしているかを確認
        //ログインしていない場合は、アラートが出る。
        const { isAuth } = await checkUserLogined()

        //ログインしていない場合の処理
        if (!isAuth) {
            alert('ログインしてください')
            return
        }

        //問題の生成中はローディングする
        setIsLoading(true)

        //問題の生成をする
        const problem = await requestProblem(level, programmingLang)

        //問題が生成し終えたから、ローディング終了
        setIsLoading(false)
        console.log(problem)

        console.log(splitProblemInfo(problem.data))
    }

    return {
        problemLevels,
        setLevel,
        setProgrammingLang,
        verifyLoginAndFetch,
        problemInfos,
        isLoading,
    }
}

export default useHome
