import React from "react"

const max_items = 9
const max_left = (max_items - 1) / 2

interface PropsPagination {
    limit: number 
    total: number 
    skip: number 
    setSkip: React.FunctionComponent<boolean | number | null>
}

const Pagination = ({ limit, skip, setSkip } : PropsPagination) => {

    const current = skip ? (skip / limit) + 1 : 1
    //const pages = Math.ceil(total / limit)
    const first = Math.max(current - max_left, 1)

    return (
        <ul>
            {Array.from({ length: max_items }).map((_, index) => index + first)
            .map((page) => (
                <li>
                    <button onClick={() => setSkip(page - 1) * limit}>{page}</button>
                </li>
            ))}
        </ul>
    )
}

export default Pagination