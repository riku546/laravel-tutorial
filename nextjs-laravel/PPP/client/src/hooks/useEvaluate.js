'use client'

import axios from '@/lib/axios'
import React, { useEffect } from 'react'

const useEvaluate = () => {
    const allProblems = useEffect(async () => {
        try {
            const backEndUrl = env('NEXT_PUBLIC_BACKEND_URL')
            const allProblems = await axios.get(backEndUrl)
            return allProblems
        } catch (error) {
            console.log('error')
        }
    }, [])
    console.log(allProblems)
    return { allProblems }
}

export default useEvaluate
