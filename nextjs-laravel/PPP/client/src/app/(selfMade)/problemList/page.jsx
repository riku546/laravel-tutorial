'use client'

import Nav from '@/components/selfMadeComponents/Nav'
import ProblemList from '@/components/selfMadeComponents/ProblemList'
import useProblemList from '@/hooks/useProblemList'
import '@/app/pageLayout.css'
import React from 'react'

const page = () => {
    const { allProblems, redirectProblemPage } = useProblemList()

    return (
        <div className="container">
            <nav className="nav">
                <Nav />
            </nav>
            <main className="main-area">
                <ProblemList
                    problemInfos={allProblems}
                    redirectProblemPage={redirectProblemPage}
                />
            </main>
        </div>
    )
}

export default page
