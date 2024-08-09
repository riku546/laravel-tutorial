'use client'

import axios from '@/lib/axios'
import React, { useEffect, useState } from 'react'

const useProblemList = () => {
    const [allProblems, setAllProblems] = useState([])

    useEffect(() => {
        //laravelのapiを叩いて、すべての問題を取得
        const fetchAllProblems = async () => {
            try {
                const allProblems = await axios.get('/api/allProblems')
                console.log(allProblems.data)
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

    return { allProblems }
}

export default useProblemList