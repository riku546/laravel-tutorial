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
    return (
        <div>
            {/* {allProblems.map(problemInfo => {
                <div>{problemInfo.id}</div>
            })} */}
            {allProblems.map(problemInfo => (
                <div key={problemInfo.id}>{problemInfo.problem}</div>
            ))}
            <p>a</p>
        </div>
    )
}

export default page
