import Head from 'next/head';
import styles from './layout.module.scss';
import Link from 'next/link';
import { NextPage } from 'next';

import { HomeIcon } from '@heroicons/react/solid';

const Layout: NextPage = ({ children, home, playlists }) => {
  return (
    <div className="m-12">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className="flex justify-between items-center pb-8 border-b-2">
          <Link href="/playlists">
            <div className="flex gap-2 items-center">
              <HomeIcon className="h-16 w-16 text-purple-500" />
              <h1 className="text-5xl text-">funny movies</h1>
            </div>
          </Link>

          <div className="flex gap-2 mt-4">
            <input
              className="border-2 rounded-md border-purple-500 px-2 py-1 text-white"
              placeholder="Email"
            />
            <input
              className="border-2 rounded-md border-purple-500 px-2 py-1 text-white"
              placeholder="Password"
            />

            <button className="rounded-md bg-purple-500 px-2 py-1 text-white">
              Login / Register
            </button>
          </div>
        </div>
      </header>

      <main className="my-8">{children}</main>

      <div>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}

        {!playlists && (
          <div className={styles.backToHome}>
            <Link href="/playlists">
              <a>← Back to list</a>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
