import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";


export default async function News() {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList data={news} />
    </>
  )
}

// Fetch implementation with client side rendering
// "use client"
// import NewsList from "@/components/news-list";

// import { useEffect, useState } from "react";



// export default function News() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState();
//   const [news, setNews] = useState();

//   useEffect(() => {

//     async function fetchNews() {
//       setIsLoading(true);
//       const res = await fetch("http://localhost:8080/news");

//       if (!res) {
//         setError("Failed to fetch news.")
//         setIsLoading(true);
//       }

//       const news = await res.json();
//       setIsLoading(false);
//       setNews(news);
//     }

//     fetchNews();
//   }, [])

//   if (isLoading) return <p>Loading...</p>
//   if (error) return <p>{error}</p>

//   let newsContent;

//   if (news) newsContent = <NewsList data={news} />
//   return (
//     <>
//       <h1>News Page</h1>
//       {newsContent}
//     </>
//   )
// }
