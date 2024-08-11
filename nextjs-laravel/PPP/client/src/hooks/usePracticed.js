'use client'

import axios from '@/lib/axios'
import React, { useEffect, useState } from 'react'

const usePracticed = () => {
    const [practicedProblems, setPracticedProblem] = useState(null)

    //ユーザーが解いたとこがある問題を取得
    useEffect(() => {
        const fetchPracticedProblems = async () => {
            try {
                const res = await axios.get('api/personalProblems')
                setPracticedProblem(res)
            } catch (error) {
                console.log(error)
            }
        }

        fetchPracticedProblems()
    }, [])

    return { practicedProblems }
}

export default usePracticed
