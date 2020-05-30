import React, { useEffect, useState } from 'react'
import { Pages } from "./defaultExport"


export default function Edit() {
    const [page, setPage] = useState("")
    useEffect(async () => {
        const res = await fetch("http://localhost:5000/schema", { method: "POST", body: Pages })
        const res2 = await fetch("http://localhost:5000/schema")
        const data = await res2.json()
        setPage(data)

    }, [])
    return (
        <div>
            <pre>
                {page}
            </pre>
        </div>
    )
}
