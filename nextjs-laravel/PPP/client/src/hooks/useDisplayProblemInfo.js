import  { useState } from 'react'

const useDisplayProblemInfo = () => {
  console.log("ffffffffffffffff")
    const [isOpenHint, setIsOpenHint] = useState(false)
    const [isOpenAnswer, setIsOpenAnswer] = useState(false)

    return { isOpenAnswer, setIsOpenAnswer, isOpenHint, setIsOpenHint }
}

export default useDisplayProblemInfo
