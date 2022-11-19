import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content={'amazona'} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title ? title + ' - amazona' : 'amazona'}</title>
      </Head>
      <div className="flex flex-col min-h-screen  justify-between">
        <header>
          <nav className="h-12 px-4 flex items-center justify-between shadow-md">
            <Link href={'/'} className="font-bold text-lg">
              amazona
            </Link>
            <div>
              <Link href={'/cart'}>
                <span className="p-2">Cart</span>
              </Link>
              <Link href={'/login'}>
                <span className="p-2">Login</span>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          Copyright &copy; 2023 Developer Md Rowshan Sheikh
        </footer>
      </div>
    </>
  );
};

export default Layout;
