'use client'

import ProblemList from '@/components/selfMadeComponents/ProblemList'
import usePracticed from '@/hooks/usePracticed'
import React from 'react'

const page = () => {
    const { practicedProblems } = usePracticed()
    return (
        <>
            {practicedProblems && (
                <ProblemList problemInfos={practicedProblems} />
            )}
        </>
    )
}

export default page
