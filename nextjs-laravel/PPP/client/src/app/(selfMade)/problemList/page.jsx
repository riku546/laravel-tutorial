'use client'

import axios from '@/lib/axios'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [allProblems, setAllProblems] = useState([])
    useEffect(() => {
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
        fetchAllProblems()
        return () => {
            setAllProblems([])
        }
    }, [])
    // const { allProblems } = useEvaluate
    return <div>a</div>
}

export default page
