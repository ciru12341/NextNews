import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

export default function ImagePage({ params }) {
  const Data = DUMMY_NEWS;
  const slug = params.slug;
  const news = Data.find(item => item.slug === slug)

  if (!news) notFound();

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  )
}