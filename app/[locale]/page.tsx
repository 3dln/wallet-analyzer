import { ModeToggle } from '@/components/darkmode-toggle'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import TestComponent from '@/components/TestComponent';
import Link from 'next/link';
import { Posts } from './posts';
import { getPosts } from '@/services/post.service';
import { IPost } from '@/types/post';
import PageTitle from './page-title';
import HydratedPosts from './hydrated-posts';

export default async function Home() {
  const initialData: IPost[] = await getPosts()

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <div className="z-10 items-center justify-between w-full max-w-5xl font-mono text-sm lg:flex">
        <p className="fixed top-0 left-0 flex items-center justify-center w-full pt-8 pb-6 border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Change theme&nbsp;
          <ModeToggle />
        </p>
        <PageTitle />
      </div>

      <div className="relative flex flex-col gap-2 place-items-center ">
        <HydratedPosts />
      </div>

      <div className="grid mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <TestComponent />
      </div>
    </main>
  )
}
