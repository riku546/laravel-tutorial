'use client'

import axios from '@/lib/axios'
import React, { useEffect, useState } from 'react'

const useEvaluate = () => {
    const [allProblems, setAllProblems] = useState([])
    const fetchAllProblems = async () => {
        try {
            const allProblems = await axios.get(
                'http://localhost:8000/api/allProblems',
            )
            setAllProblems(allProblems.data)
            console.log(allProblems.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchAllProblems()

        return () => {
            setAllProblems([])
        }
    }, [])

    return { allProblems }
}

export default useEvaluate
