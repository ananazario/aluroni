import { useEffect, useState } from "react"

export const useCloseElement = (initialState, element) => {

    const [isClosed, setIsClosed] = useState<boolean>(initialState)

    const clickElement = () => {
        if (element.current !== null) {
            setIsClosed(!isClosed)
        }
    }

    useEffect(() => {
        clickElement()

        if (isClosed) {
            window.addEventListener('click', clickElement)
        }
    
        return () => {
            window.removeEventListener('click', clickElement)
        }

    }, [initialState, element])

    return [isClosed, setIsClosed]
}