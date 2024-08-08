'use client'

import useProblemList from '@/hooks/useProblemList'
import React from 'react'

const page = () => {
    const { allProblems } = useProblemList()
    return (
        <div>
            {allProblems.map(problemInfo => (
                <div key={problemInfo.id}>{problemInfo.problem}</div>
            ))}
        </div>
    )
}

export default page
