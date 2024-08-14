'use client'

import axios from '@/lib/axios'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const useProblem = () => {
    const [problemInfo, setProblemInfo] = useState()
    const searchParm = useSearchParams()
    useEffect(() => {
        //URLに含まれるproblemパラメーターを取得
        const problemId = searchParm.get('problemId')

        //問題詳細ページに表示する問題の情報を取得
        const fetchProblemInfo = async problemId => {
            try {
                const problemInfo = await axios.get('api/problem', {
                    params: problemId,
                })

                console.log(problemInfo)
            } catch (error) {
                console.log(
                    '******************************************************************',
                )
                console.log(error)
            }
        }

        fetchProblemInfo(problemId)
    }, [])

    return {}
}

export default useProblem
