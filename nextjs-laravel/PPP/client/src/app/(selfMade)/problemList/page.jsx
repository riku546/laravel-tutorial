'use client'

import ProblemList from '@/components/selfMadeComponents/ProblemList'
import useProblemList from '@/hooks/useProblemList'
import { useRouter } from 'next/navigation'

import React from 'react'

const page = () => {
    const { allProblems, redirectProblemPage } = useProblemList()

    return (
        <ProblemList
            problemInfos={allProblems}
            redirectProblemPage={redirectProblemPage}
        />
    )
}

export default page
