import Link from "next/link"
export default function NewsList({ data }) {
  return (
    <ul className="news-list">
      {data.map(newsItem =>
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}></img>
            <span>{newsItem.title}</span>
          </Link>
        </li>)}
    </ul>
  )
}
