"use client"

import { getPosts } from "@/services/post.service";
import { IPost } from "@/types/post";
import { useQuery } from "@tanstack/react-query";


export function Posts() {
    const { data } = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts
    })

    return (
        <div>
            {JSON.stringify(data, null, 2)}
        </div>
    )
}