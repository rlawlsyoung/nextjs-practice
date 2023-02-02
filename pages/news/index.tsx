import Link from "next/link";

const NewsPage = () => {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/nextjs"> NextJS Is A Great Framework.</Link>
        </li>
        <li>
          <Link href="/news/ramengurakbu">
            Ramen Gurakbu Is A Great Restaurant.
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;
