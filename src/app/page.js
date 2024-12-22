'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const routerFun = (pageId) =>{
    route.push(`/${pageId}`);
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Hello Next Js</h1>
        <Link href='/login'>Login</Link><Link href='/about'>About</Link>
        <button onClick={() => routerFun("login")}>Go to Login Page</button>
        <button onClick={() => routerFun("about")}>Go to About Page</button>
      </main>
  
    </div>
  );
}
