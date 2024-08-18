'use client'

import Nav from '@/components/selfMadeComponents/Nav'
import ProblemList from '@/components/selfMadeComponents/ProblemList'
import usePracticed from '@/hooks/usePracticed'
import React from 'react'
import '@/app/pageLayout.css'
import HamburgerMenu from '@/components/selfMadeComponents/HamburgerMenu'

const page = () => {
    const { practicedProblems } = usePracticed()

    return (
        <div className="container">
            <nav className="nav">
                <Nav />
            </nav>

            {/* スマホのときに表示される */}
            <div className="hamburger-menu">
                <HamburgerMenu />
            </div>

            <main className="main-area">
                {/* 生成した問題がない場合は"なし"と表示される */}
                {practicedProblems.length === 0 ? (
                    <div>なし</div>
                ) : (
                    <ProblemList problemInfos={practicedProblems} />
                )}
            </main>
        </div>
    )
}

export default page
