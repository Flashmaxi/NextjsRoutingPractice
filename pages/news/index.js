import Link from "next/link";
// our-domain.com/news


import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li><Link href='/news/nextjs-is-great'>News 1</Link></li>
        <li><Link href='/news/reactjs-is-great'>News 2</Link></li>
        <li><Link href='/news/js-is-great'>News 3</Link></li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
