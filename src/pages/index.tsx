import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>financial-ledger</title>
      </Head>
      <header>
        <Link href="/" className="my-2 flex w-64 items-center gap-2 hover:opacity-70">
          <Image src="/icons/icon-512x512.png" width={40} height={40} alt="logo icon" />
          <span className="hidden text-2xl font-extrabold text-neutral-800 md:inline">Financial-Ledger</span>
        </Link>
        <nav aria-label="Breadcrumb" className="flex">
          <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
            <li className="flex items-center">
              <Link href="#" className="flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition hover:text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>

                <span className="ms-1.5 text-xs font-medium"> Home </span>
              </Link>
            </li>

            <li className="relative flex items-center">
              <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

              <Link
                href="#"
                className="flex h-10 items-center bg-white pe-4 ps-8 text-xs font-medium transition hover:text-gray-900"
              >
                Month
              </Link>
            </li>
          </ol>
        </nav>
      </header>
      <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
        <article className="prose lg:prose-xl">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic bread with cheese to their children,
            with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy
            loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing
            up around the country.
          </p>
          <ul>
            <li>hi</li>
            <ul>
              <li>{"Let's see it's able to be nested"}</li>
            </ul>
          </ul>
        </article>
        <a
          href="#"
          className="relative block w-[32rem] overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
        >
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                Building a SaaS product as a software developer
              </h3>

              <p className="mt-1 text-xs font-medium text-gray-600">By John Doe</p>
            </div>

            <div className="hidden size-16 bg-slate-500 sm:block sm:shrink-0"></div>
          </div>

          <div className="mt-4">
            <p className="text-pretty text-sm text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit illum provident a, ipsa maiores
              deleniti consectetur nobis et eaque.
            </p>
          </div>

          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Published</dt>
              <dd className="text-xs text-gray-500">31st June, 2021</dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Reading time</dt>
              <dd className="text-xs text-gray-500">3 minute</dd>
            </div>
          </dl>
        </a>
      </main>
    </>
  );
}
