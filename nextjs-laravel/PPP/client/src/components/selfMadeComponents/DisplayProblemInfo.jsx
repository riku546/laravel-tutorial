import React from 'react'
import Problem from './Problem'
import Hint from './Hint'
import Answer from './Answer'
import useDisplayProblemInfo from '@/hooks/useDisplayProblemInfo'

//画面に生成された問題とヒントと答えを表示するコンポーネント
const DisplayProblemInfo = ({ problemInfos }) => {
    const { isOpenAnswer, setIsOpenAnswer, isOpenHint, setIsOpenHint } =
        useDisplayProblemInfo

    return (
        <div>
            <section>
                <h3>問題</h3>
                <Problem problem={problemInfos.problem} />
            </section>
            <section>
                <h3 onClick={() => setIsOpenHint(prev => !prev)}>ヒント</h3>
                {isOpenHint && <Hint hint={problemInfos.hint} />}
            </section>
            <section>
                <h3 onClick={() => setIsOpenAnswer(prev => !prev)}>答え</h3>
                {isOpenAnswer && <Answer answer={problemInfos.answer} />}
            </section>
        </div>
    )
}

export default DisplayProblemInfo
