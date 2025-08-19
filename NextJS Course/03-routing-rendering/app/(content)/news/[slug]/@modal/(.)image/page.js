"use client"
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter } from "next/navigation";

export default function ImagePage({ params }) {
  const router = useRouter();

  const Data = DUMMY_NEWS;
  const slug = params.slug;
  const news = Data.find(item => item.slug === slug)

  if (!news) notFound();

  return (
    <>
      <div className="modal-backdrop" onClick={router.back}>
        <dialog className="modal" open>
          <div className="fullscreen-image">
            <img src={`/images/news/${news.image}`} alt={news.title} />
          </div>
        </dialog>
      </div>
    </>
  )
}