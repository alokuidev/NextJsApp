'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const route = useRouter();

  const routerFun = (pageId) =>{
    route.push(`/${pageId}`);
  }
  return (
    
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul className="list-none flex gap-4">
          <li className="text-blue-500 hover:text-blue-700 transition"><Link href='/login'>Login</Link></li>
          <li className="text-blue-500 hover:text-blue-700 transition"></li>
          <li className="text-blue-500 hover:text-blue-700 transition"></li>
          <li className="text-blue-500 hover:text-blue-700 transition"><Link href='/about'>About</Link></li>
          <li className="text-blue-500 hover:text-blue-700 transition"><Link href='/about/aboutus'>About</Link></li>
          <li className="text-blue-500 hover:text-blue-700 transition"><Link href='/about/aboutstudent'>About Student</Link></li>
        </ul>
        
        <button onClick={() => routerFun("login")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Go to Login Page</button>
        <button onClick={() => routerFun("about")} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Go to About Page</button>
      </main>
  );
}
