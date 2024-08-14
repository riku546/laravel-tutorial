'use client'

import DisplayProblemInfo from '@/components/selfMadeComponents/DisplayProblemInfo'
import useProblem from '@/hooks/useProblem'

import React from 'react'

const page = () => {
    const {} = useProblem()
    return (
        <DisplayProblemInfo
            problemInfos={{
                problem: ["f" , "a"],
                hint: 'php hint',
                answer: 'php answer',
            }}
        />
    )
}

export default page
