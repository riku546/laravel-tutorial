'use client'

import axios from '@/lib/axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const useProblemList = () => {
    const [allProblems, setAllProblems] = useState([])
    const router = useRouter()

    useEffect(() => {
        //laravelのapiを叩いて、すべての問題を取得
        const fetchAllProblems = async () => {
            try {
                const allProblems = await axios.get('/api/allProblems')
                setAllProblems(allProblems.data)
            } catch (error) {
                throw error
            }
        }

        fetchAllProblems()

        return () => {
            setAllProblems([])
        }
    }, [])

    //問題の詳細ページへのリダイレクトする関数
    const redirectProblemPage = problemId => {
        router.push(`/problem?problemId=${problemId}`)
    }

    return { allProblems, redirectProblemPage }
}

export default useProblemList
