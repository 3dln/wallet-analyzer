"use client"

import { useEffect, useState } from "react";

const TestComponent = () => {
    const [success, setSuccess] = useState(false);

    async function getData() {
        const res = await fetch("/api/test")
        const json = await res.json()
        setSuccess(json.success)
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="font-vazir">
            {success + ""}
        </div>
    );
}

export default TestComponent;