import { getLatestNews } from "@/lib/news";
import NewsList from "@/components/news-list";

export default function LatestPage() {
  const latest = getLatestNews()
  return (
    <>
      <h2>Latest News</h2>
      <NewsList data={latest} />
    </>
  )
}
