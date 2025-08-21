import { getNewsForYear, getAvailableNewsYears, getAvailableNewsMonths, getNewsForYearAndMonth } from "@/lib/news"
import NewsList from "@/components/news-list"
import Link from "next/link";
import { Suspense } from "react";

async function Filter({ year, month }) {
  const availableYears = await getAvailableNewsYears()
  let links = await getAvailableNewsYears();
  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  if (year && !availableYears.includes(year) || month && !getAvailableNewsMonths(year).includes(month)) {
    throw new Error('Invalid filter.');
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(link => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  )
}

async function FilteredNews({ year, month }) {
  let news;
  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  let newsContent = <p>No content for the selected period available</p>

  if (news && news.length > 0) {
    newsContent = <NewsList data={news} />;
  }

  return newsContent
}


export default async function ArchiveFilterYear({ params }) {
  const filter = params.filter;

  const selectedYear = filter?.[0];
  const selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Loading filters...</p>}>
        <Filter year={selectedYear} month={selectedMonth}></Filter>
      </Suspense>
      <Suspense fallback={<p>Loading news...</p>}>
        <FilteredNews year={selectedYear} month={selectedMonth}></FilteredNews>
      </Suspense>
    </>
  )
}
