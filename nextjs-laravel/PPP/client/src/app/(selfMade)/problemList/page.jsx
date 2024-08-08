'use client'

import useEvaluate from '@/hooks/useEvaluate'
import React from 'react'

const page = () => {
    const { allProblems } = useEvaluate()
    return (
        <div>
            {allProblems.map(problemInfo => (
                <div key={problemInfo.id}>{problemInfo.problem}</div>
            ))}
            <p>a</p>
        </div>
    )
}

export default page
