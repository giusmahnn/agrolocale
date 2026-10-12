import { getAllPosts } from '@/lib/sanity/queries'
import HomeClient from './HomeClient'
import Chatbot from "@/components/chatbot/Chatbot";

export default async function HomePage() {
  let latestPosts: any[] = []
  try {
    const allPosts = await getAllPosts()
    // Grab the first 3 posts
    latestPosts = allPosts.slice(0, 3)
  } catch (error) {
    console.error("Failed to fetch latest posts for homepage:", error)
  }

  return (
    <>
      <HomeClient posts={latestPosts} />
      <Chatbot />
    </>
  )
}
