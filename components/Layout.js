import Head from 'next/head';
import Header from './Header';
import Search from './search';

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="keywords" content={description} />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Header />
      <Search />
      <main className="mx-5 my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Welcome to DevSpace',
  keywords: 'development,coding,programming',
  description: 'The best info and news in development',
};
