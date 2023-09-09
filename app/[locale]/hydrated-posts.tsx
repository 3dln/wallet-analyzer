import getQueryClient from '@/lib/query-client'
import { getPosts } from '@/services/post.service'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Posts } from './posts'

export default async function HydratedPosts() {
    const queryClient = getQueryClient()

    await queryClient.prefetchQuery({ queryKey: ['posts'], queryFn: getPosts })
    // for infinite queries with useInfiniteQuery use
    // await queryClient.prefetchInfiniteQuery({queryKey:['posts'], queryFn:getPosts,...})
    const dehydratedState = dehydrate(queryClient)

    return (
        <HydrationBoundary state={dehydratedState}>
            <Posts />
        </HydrationBoundary>
    )
}