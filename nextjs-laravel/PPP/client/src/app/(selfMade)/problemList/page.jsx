'use client'

import ProblemList from '@/components/selfMadeComponents/ProblemList'
import useProblemList from '@/hooks/useProblemList'
import React from 'react'

const page = () => {
    const { allProblems } = useProblemList()
    return <ProblemList problemInfos={allProblems} />
}

export default page
