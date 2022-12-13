import { useEffect } from "react"
import { useState } from "react"


export const useEffectSkipFirst = (callback, dependencies) => {
    const [isFirst, setIsFirst] = useState(true)

    useEffect(() => {
        if (isFirst) {
            setIsFirst(false)
        } else {
            callback()
        }
    },dependencies)
}