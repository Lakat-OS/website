import { NextPage } from 'next';
import Head from 'next/head';
import styles from '../../styles/about.module.scss';

type NewsItem = {
  /** ISO date, used for sorting and the <time> element. */
  date: string;
  /** How the date is shown. */
  display: string;
  title: string;
  summary: string;
  /** Where "read more" goes. Omit for an item with no detail page. */
  href?: string;
};

// Newest first. Adding an item is one object; give it an `href` only once
// there is a page to point at.
const NEWS: NewsItem[] = [
  {
    date: '2026-08-29',
    display: '29 August 2026',
    title: 'Lakat Token (LKT) deployed on Ethereum mainnet',
    summary:
      'The LKT contract is live on Ethereum mainnet. Tokens are not being distributed yet; the contract address and token details are published so they can be verified independently.',
    href: '/lakat-token',
  },
  {
    date: '2026-08-15',
    display: '15 August 2026',
    title: 'Work on the Rust client has begun',
    summary:
      'Implementation of a Rust client for Lakat has started, following the technical specification. The first crates — primitives, types, the Merkle trie and the store backends — are in place.',
    href: '/news/rust-client',
  },
];

const News: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>News</title>
      </Head>

      <h1>News</h1>

      <div className="mx-3">
        {NEWS.map((item) => (
          <div
            key={item.date + item.title}
            style={{ borderTop: '1px solid #cfc6bd', padding: '18px 0' }}
          >
            <time
              dateTime={item.date}
              style={{ color: '#6c757d', fontSize: '0.9em', letterSpacing: '0.03em' }}
            >
              {item.display}
            </time>
            <h5 style={{ marginTop: '6px', marginBottom: '8px' }}>
              {item.href ? <a href={item.href}>{item.title}</a> : item.title}
            </h5>
            <p style={{ marginBottom: item.href ? '8px' : 0 }}>{item.summary}</p>
            {item.href && (
              <a href={item.href} className={styles.link}>
                Read more &rarr;
              </a>
            )}
          </div>
        ))}
      </div>

      <br />
      <a className="nav-link" href="/">
        <button className="btn btn-primary btn-constant-width mx-2 my-2">Back to Home</button>
      </a>
    </div>
  );
};

export default News;
