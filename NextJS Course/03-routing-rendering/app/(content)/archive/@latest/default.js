import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default async function LatestPage() {
  const latest = await getLatestNews()
  return (
    <>
      <h2>Latest News</h2>
      <NewsList data={latest} />
    </>
  )
}
